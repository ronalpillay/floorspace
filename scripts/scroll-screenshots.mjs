import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const step = 800;
let i = 0;

for (let y = 0; y < totalHeight; y += step) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `/tmp/scroll-${String(i).padStart(2,'0')}.png` });
  i++;
}

await browser.close();
console.log(`Saved ${i} screenshots`);
