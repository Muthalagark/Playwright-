// import { test, expect } from '@playwright/test';

// test('Handle multiple windows / new tab', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Step 1: Open main page
//   await page.goto('https://demo.automationtesting.in/Windows.html');

//   // Step 2: Ensure page is loaded and button visible
//   await page.waitForSelector('a[href="http://www.selenium.dev"]', { timeout: 10000 });

//   // Step 3: Wait for new tab
//   const [newPage] = await Promise.all([
//     context.waitForEvent('page'),
//     page.click('a[href="http://www.selenium.dev"]'), // Opens new tab
//   ]);

//   // Step 4: Wait for new page to load
//   await newPage.waitForLoadState();

//   // Step 5: Validate new tab
//   console.log('New Page URL:', await newPage.url());
//   expect(await newPage.title()).toContain('Selenium');

//   // Optional: Switch back to parent tab
//   await page.bringToFront();
//   console.log('Back to main page title:', await page.title());
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
});