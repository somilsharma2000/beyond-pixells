import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1100 } })).newPage();
await p.goto('https://somilsharma2000.github.io/gym-os/', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(4000);
const diag = await p.evaluate(() => {
  const scr = document.querySelector('.sc-screen');
  if (!scr) return { error: 'no .sc-screen' };
  const cs = getComputedStyle(scr);
  const side = document.querySelector('.sc-side');
  const main = document.querySelector('.sc-main');
  const nav = document.querySelector('.sc-nav.on');
  const r = (el) => el ? el.getBoundingClientRect().toJSON() : null;
  const vis = (el) => { if(!el) return null; const s=getComputedStyle(el); return {display:s.display, opacity:s.opacity, visibility:s.visibility, color:s.color, bg:s.backgroundColor, text:el.textContent.slice(0,20)}; };
  return {
    screen: { display: cs.display, cols: cs.gridTemplateColumns, w: scr.getBoundingClientRect().width, h: scr.getBoundingClientRect().height, childCount: scr.children.length },
    side: vis(side), sideRect: r(side),
    main: vis(main), mainRect: r(main),
    navOn: vis(nav), navRect: r(nav),
    kpiCount: document.querySelectorAll('.sc-kpi').length,
    stageOpacity: getComputedStyle(document.querySelector('.sc-stage')).opacity
  };
});
console.log(JSON.stringify(diag, null, 2));
await b.close();
