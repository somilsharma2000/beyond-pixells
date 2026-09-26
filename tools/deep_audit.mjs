import { chromium } from 'playwright';
const BASE = "https://somilsharma2000.github.io";
const pages = [
  ["hub", `${BASE}/beyond-pixells/`],
  ["gym-os", `${BASE}/gym-os/`],
  ["dentist-os", `${BASE}/dentist-os-site/`],
  ["builder-os", `${BASE}/builder-os-site/`],
  ["blog", `${BASE}/beyond-pixells/blog/`],
  ["blog-post", `${BASE}/beyond-pixells/blog/gym-os-for-indian-gyms.html`],
];
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
const findings = [];
for (const [name, url] of pages) {
  const pg = await browser.newPage();
  const errs = [], failed = [];
  pg.on('pageerror', e => errs.push(e.message.slice(0,100)));
  pg.on('requestfailed', r => failed.push(r.url().slice(-60)));
  await pg.goto(url, {waitUntil:'networkidle', timeout:45000});
  await pg.waitForTimeout(700);
  const a = await pg.evaluate(() => {
    const t = (sel) => document.querySelector(sel)?.textContent?.trim();
    const ids = [...document.querySelectorAll('[id]')].map(e=>e.id);
    const dup = ids.filter((id,i)=>ids.indexOf(id)!==i);
    const h1 = document.querySelectorAll('h1').length;
    const imgs = [...document.querySelectorAll('img')].map(i=>({src:i.getAttribute('src'), alt:i.getAttribute('alt')}));
    const noAlt = imgs.filter(i=>!i.alt).map(i=>i.src.slice(-40));
    const btns = [...document.querySelectorAll('a')].filter(x=>/wa\.me/.test(x.href)).length;
    const tel = document.body.innerText.match(/\+?91[\s-]?\d{5}[\s-]?\d{5}/g) || [];
    return {
      title: document.title, titleLen: document.title.length,
      meta: t('meta[name="description"]') || document.querySelector('meta[name="description"]')?.content,
      h1, dupIds: dup, noAlt, wa: btns, tel: [...new Set(tel)],
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      viewport: !!document.querySelector('meta[name="viewport"]'),
      htmlLang: document.documentElement.lang,
      langMismatch: document.documentElement.lang !== 'en',
      schemas: document.querySelectorAll('script[type="application/ld+json"]').length,
      noindex: /noindex/.test(document.head.innerHTML),
    };
  });
  // meta description length
  const dLen = a.meta?.length || 0;
  if (dLen > 165 || dLen < 70) findings.push(`${name}: meta description ${dLen} chars (target 70-160)`);
  if (a.titleLen > 62) findings.push(`${name}: title ${a.titleLen} chars (target <=60)`);
  if (a.h1 === 0) findings.push(`${name}: NO h1`);
  if (a.h1 > 1) findings.push(`${name}: ${a.h1} h1s (should be 1)`);
  if (a.dupIds.length) findings.push(`${name}: duplicate ids ${[...new Set(a.dupIds)].join(',')}`);
  if (a.noAlt.length) findings.push(`${name}: images without alt ${a.noAlt.join(', ')}`);
  if (!a.canonical) findings.push(`${name}: no canonical`);
  if (!a.viewport) findings.push(`${name}: no viewport`);
  if (a.langMismatch) findings.push(`${name}: html lang not set`);
  if (errs.length) findings.push(`${name}: JS errors: ${errs.join(' || ')}`);
  if (failed.length) findings.push(`${name}: failed requests: ${failed.join(', ')}`);
  const tels = a.tel.join(' ');
  if (tels && !/77370\s?77479/.test(tels.replace(/[\u00a0]/g,' '))) findings.push(`${name}: unexpected phone format: ${tels}`);
  console.log(`[${name}] h1=${a.h1} schemas=${a.schemas} dup=${a.dupIds.length} noAlt=${a.noAlt.length} titleLen=${a.titleLen} descLen=${dLen} errors=${errs.length} reqfail=${failed.length}`);
  await pg.close();
}
console.log('\n=== FINDINGS ===');
console.log(findings.length ? findings.join('\n') : 'none');
await browser.close();
