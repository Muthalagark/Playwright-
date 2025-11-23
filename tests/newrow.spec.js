const { test, expect } = require('@playwright/test');

test('relative', async ({ page }) => {

    await page.goto('https://cosmocode.io/automation-practice-webtable/');

    const cells = page.locator("//table[@id='countries']//tr[2]/td[position()=2 or position()=3 or position()=5]");
    

    // const count = await cells.count();

    // for (let i = 0; i < count; i++) {
    //     const text = await cells.nth(i).textContent();
    //     console.log(text.trim());
    // }
});
