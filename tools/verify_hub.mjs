import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message.slice(0,60)));
await p.goto('https://somilsharma2000.github.io/beyond-pixells/', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(4000);
const d = await p.evaluate(() => {
  const cards = [...document.querySelectorAll('.bento .bcard')];
  const gym = cards[0]; const gr = gym.getBoundingClientRect();
  const go = gym.querySelector('.go').getBoundingClientRect();
  const frame = gym.querySelector('.pframe');
  const ff = frame ? getComputedStyle(frame).fontFamily : null;
  return { frameCount: document.querySelectorAll('.pframe').length,
    gymGoIn: Math.round(go.bottom - gr.bottom),
    frameFont: ff ? ff.split(',')[0] : null,
    interLoaded: [...document.fonts].some(f => f.family.replace(/'/g,'') === 'Inter') };
});
console.log(JSON.stringify(d));
console.log('JS errors:', errs.length ? errs : 'none');
await b.close();
