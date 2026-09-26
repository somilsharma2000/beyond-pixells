import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const errs = [];
p.on('pageerror', e => errs.push(e.message.slice(0,100)));
await p.goto('https://my-gym-os.base44.app/', { waitUntil: 'networkidle', timeout: 45000 }).catch(e => console.log('nav:', e.message.slice(0,60)));
await p.waitForTimeout(6000);
// take a screenshot + extract dominant UI colors and fonts
await p.screenshot({ path: '/tmp/gymos-app.png' });
const info = await p.evaluate(() => {
  const out = { body: getComputedStyle(document.body).backgroundColor, fonts: new Set(), colors: {} };
  document.querySelectorAll('*').forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.fontFamily) out.fonts.add(cs.fontFamily.split(',')[0].replace(/['"]/g,''));
    const keys = ['color','backgroundColor','borderTopColor'];
    keys.forEach(k => {
      const v = cs[k];
      if (v && v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent' && !v.includes('245, 246, 248') && out.colors[k]) {}
      if (v && v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent') {
        const kk = k + ':' + v;
        out.colors[kk] = (out.colors[kk]||0) + 1;
      }
    });
  });
  out.fonts = [...out.fonts].slice(0,5);
  const top = Object.entries(out.colors).sort((a,b)=>b[1]-a[1]).slice(0, 20);
  out.colors = top;
  out.title = document.title;
  return out;
});
console.log(JSON.stringify(info, null, 1));
console.log('JS errors:', errs.length ? errs.slice(0,3) : 'none');
await b.close();
