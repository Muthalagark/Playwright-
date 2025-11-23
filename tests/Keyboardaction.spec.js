import { test,expect } from '@playwright/test';
test('Locators', async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.keyboard.type('vijay');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
})