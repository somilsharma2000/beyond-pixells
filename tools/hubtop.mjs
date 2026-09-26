import { chromium } from 'playwright';
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
const pg = await browser.newPage({viewport:{width:1440,height:900}});
await pg.goto('https://somilsharma2000.github.io/beyond-pixells/', {waitUntil:'networkidle'});
await pg.waitForTimeout(2000);
await pg.screenshot({path:'/tmp/hub-top-now.png'});
const info = await pg.evaluate(() => {
  const hero = document.querySelector('.hero, header + *');
  const cs = hero ? getComputedStyle(hero).background : '?';
  const bodyBg = getComputedStyle(document.body).backgroundColor;
  return { bodyBg, hero: hero ? hero.className.slice(0,40) : '?', cs };
});
console.log(info);
await browser.close();
