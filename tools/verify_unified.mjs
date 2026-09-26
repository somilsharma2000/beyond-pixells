import { chromium } from 'playwright';
const pages = [
  ["hub", "https://somilsharma2000.github.io/beyond-pixells/"],
  ["gym-os", "https://somilsharma2000.github.io/gym-os/"],
  ["dentist-os", "https://somilsharma2000.github.io/dentist-os-site/"],
  ["builder-os", "https://somilsharma2000.github.io/builder-os-site/"],
];
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
for (const [name, url] of pages) {
  const pg = await browser.newPage({viewport:{width:1440,height:900}});
  const errs = [];
  pg.on('pageerror', e => errs.push(String(e)));
  await pg.goto(url, {waitUntil:'networkidle', timeout:45000});
  await pg.waitForTimeout(1200);
  const r = await pg.evaluate(() => {
    const body = getComputedStyle(document.body);
    const card = document.querySelector('.bp-spotlight-card, .pain-card, .card');
    let spot = "n/a";
    if (card && card.matches('.bp-spotlight-card')) {
      spot = getComputedStyle(card, '::before').backgroundImage;
    } else if (card) {
      spot = "no-spotlight-class:" + getComputedStyle(card, '::before').backgroundImage;
    }
    window.scrollTo(0, 900);
    return {
      bg: body.backgroundColor,
      scroll: (window.scrollTo(0,900), new Promise(res => setTimeout(()=>res(window.scrollY),150))),
      spotBg: spot,
      base44: document.body.innerText.includes('base44'),
      grain: !!document.querySelector('.ov-grain, .bp-noise-canvas'),
      motion: !!document.querySelector('script[src*="bp-motion"]') || name==='hub',
    };
  });
  const scrollY = await r.scroll;
  console.log(`[${name}] bg=${r.bg} scrollY=${scrollY} spotlight=${r.spotBg} grain=${r.grain} base44-on-page=${r.base44} errors=${errs.length}`);
  await pg.screenshot({path:`/tmp/verify-${name}.png`});
  await pg.close();
}
await browser.close();
