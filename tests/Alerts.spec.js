// import { test, expect } from '@playwright/test';

// test('Handle simple alert in Playwright', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//   // Listen for alert dialog
//   page.on('dialog', async dialog => {
//     console.log('Alert message:', dialog.message());
//     await dialog.accept();  // Clicks 'OK' on alert
//   });

//   // Trigger alert
//   await page.click('text=Click for JS Alert');

//   // Verify result
//   await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
// });
import { test } from '@playwright/test';

test('Locators', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
    page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();  
  });
  await page.click('text=Simple Alert'); //Handling Alert box

    page.once('dialog', async dialog => {
    console.log('Confirm message:', dialog.message());
    await dialog.dismiss();   // Clicks 'Cancel
  });
   await page.click('text=Confirmation Alert');//Handling Confirm Box
    page.once('dialog', async dialog => {
    console.log('Prompt message:', dialog.message());
    await dialog.accept('Muthalagar');   // Enters text and clicks OK
  });
  await page.click('text=Prompt Alert');
})