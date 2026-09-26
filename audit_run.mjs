import { chromium } from 'playwright';
const BASE = {
  hub: 'https://somilsharma2000.github.io/beyond-pixells/',
  gym: 'https://somilsharma2000.github.io/gym-os/',
  dent: 'https://somilsharma2000.github.io/dentist-os-site/',
  build: 'https://somilsharma2000.github.io/builder-os-site/',
};
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const results = {};
for (const [name, url] of Object.entries(BASE)) {
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message.slice(0,80)));
  const r = { errors: errs };
  try {
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await p.waitForTimeout(3000);
    // collect all links + buttons + anchors
    const items = await p.evaluate(() => {
      const out = { links: [], deadButtons: [], anchors: [], forms: [] };
      document.querySelectorAll('a').forEach(a => {
        const t = (a.innerText || a.getAttribute('aria-label') || '').trim().slice(0,50);
        out.links.push({ t, href: a.getAttribute('href') || '', cls: (a.className||'').slice(0,40) });
      });
      document.querySelectorAll('button, .btn, [role=button]').forEach(b => {
        if (!b.closest('a') && !b.closest('form')) {
          const hasHandler = b.onclick || b.hasAttribute('data-href') || (b.getAttribute('class')||'').match(/scroll|modal|open|toggle/i);
          const t = (b.innerText || '').trim().slice(0,50);
          if (t && !hasHandler) out.deadButtons.push({ t, cls: (b.className||'').slice(0,50) });
        }
      });
      document.querySelectorAll('form').forEach(f => out.forms.push({
        action: f.action || 'NO-ACTION', method: f.method, fields: [...f.querySelectorAll('input,select,textarea')].map(i => i.name || i.type).slice(0,12)
      }));
      out.anchorTargets = [...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href')).filter(h => h.length > 1);
      return out;
    });
    // check anchors resolve
    const missing = [];
    for (const sel of [...new Set(items.anchorTargets)]) {
      const ok = await p.evaluate(s => !!document.querySelector(s), sel).catch(() => false);
      if (!ok) missing.push(sel);
    }
    // external links reachable?
    const extLinks = items.links.filter(l => /^https?:/.test(l.href) && !l.href.includes('somilsharma2000.github.io') && !l.href.includes('beyondpixells')).map(l => l.href.split('#')[0]);
    const checked = {};
    for (const u of [...new Set(extLinks)].slice(0, 25)) {
      try { const res = await p.evaluate(async url => (await fetch(url, { method: 'GET', mode: 'no-cors' })).status || 'opaque-ok', u); checked[u] = res; }
      catch(e) { checked[u] = 'fetch-fail'; }
    }
    r.links = items.links;
    r.deadButtons = items.deadButtons;
    r.missingAnchors = missing;
    r.forms = items.forms;
    r.external = checked;
  } catch (e) { r.loadFail = e.message.slice(0,100); }
  results[name] = r;
  await p.close();
}
await b.close();
console.log(JSON.stringify(results, null, 1));
