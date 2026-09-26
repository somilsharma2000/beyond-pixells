import { chromium } from 'playwright';
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});

// --- TEST 1: hub applies content layer ---
const pg = await browser.newPage();
const errs = [];
pg.on('pageerror', e => errs.push(e.message.slice(0,120)));
await pg.goto('http://localhost:8123/', {waitUntil:'networkidle'});
await pg.waitForTimeout(1200);
const hub = await pg.evaluate(() => ({
  h1: document.getElementById('bp-headline')?.textContent.trim(),
  pill: document.getElementById('bp-pill')?.textContent.trim(),
  blogNav: document.querySelector('[data-bp="blognav"]') ? 'present' : 'MISSING',
  mcta: !!document.getElementById('bp-mcta'),
}));
console.log('[hub] h1 =', JSON.stringify(hub.h1));
console.log('[hub] pill =', hub.pill, '| blogNav:', hub.blogNav, '| mobileCTA el:', hub.mcta, '| errors:', errs.length);
const ok1 = /TEST HEADLINE/.test(hub.h1) && hub.blogNav === 'present' && errs.length === 0;
console.log('[hub] content-layer applied:', ok1 ? 'PASS' : 'FAIL');
await pg.close();

// --- TEST 2: admin panel boots + tabs + json preview ---
const ad = await browser.newPage();
const aerrs = [];
ad.on('pageerror', e => aerrs.push(e.message.slice(0,120)));
await ad.goto('http://localhost:8123/admin/', {waitUntil:'networkidle'});
// skip gate
await ad.click('text=Skip');
await ad.waitForTimeout(1500);
// check tabs
const tabs = await ad.evaluate(() => [...document.querySelectorAll('.tabs button')].map(b=>b.dataset.v));
// content tab: fields hydrated?
await ad.click('[data-v="content"]');
await ad.waitForTimeout(300);
const field = await ad.evaluate(() => document.querySelector('[data-f="hero.headline"]')?.value);
const json = await ad.evaluate(() => document.getElementById('jsonPrev')?.textContent.length);
// theme guard test: set bad hue
await ad.click('[data-v="theme"]');
await ad.evaluate(() => { document.querySelector('[data-f="theme.accent"]').value = '#8B5CF6'; document.querySelector('[data-f="theme.accent"]').dispatchEvent(new Event('input',{bubbles:true})); });
await ad.click('text=Run design-law check');
await ad.waitForTimeout(200);
const themeMsg = await ad.evaluate(() => document.getElementById('themeMsg')?.textContent);
// overview: estate rows
const rows = await ad.evaluate(() => document.querySelectorAll('#estateTable tbody tr').length);
console.log('[admin] tabs:', tabs.join(','));
console.log('[admin] hero.headline field:', JSON.stringify(field));
console.log('[admin] json preview bytes:', json, '| estate rows:', rows);
console.log('[admin] guard on violet #8B5CF6:', themeMsg.slice(0,80));
console.log('[admin] errors:', aerrs.length);
const ok2 = tabs.length === 6 && /TEST HEADLINE/.test(field) && /off-law/.test(themeMsg) && aerrs.length === 0;
console.log('[admin]:', ok2 ? 'PASS' : 'FAIL');
await browser.close();
