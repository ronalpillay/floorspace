import { chromium } from '@playwright/test';

const url = process.argv[2] || 'http://localhost:3000';
const out = process.argv[3] || '/tmp/floorspace-screenshot.png';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500); // let animations settle
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(`Screenshot saved: ${out}`);
