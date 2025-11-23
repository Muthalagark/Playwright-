import { test,expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //inputbox,Radio button, Check box
    // const inputbox = await page.getByPlaceholder("Enter Name");
    // await inputbox.fill("Muthu");
    // await expect(inputbox).toHaveValue("Muthu");
    // await page.locator("#male").check();
    // await page.locator("#sunday").check();
    //deropdown
    // const country = await page.locator("#country");
    // await country.selectOption("Canada")
    // const colors = await page.locator("#colors")
    // await colors.selectOption({label:"Red"});
    // await country.selectOption({index:2});
    //alert,confirm,prompt
//     page.on('dialog', async dialog => {
//     console.log();
//     await dialog.accept();  
//   });
//   await page.getByText('Simple Alert').click();
//   await page.waitForTimeout(3000);
//   page.on("dialog",async dialog =>{
//     console.log(dialog.message());
//     await dialog.dismiss();
//   });
//   await page.getByText("Confirmation Alert").click();
// Direct Date Picker
    // const dateInput = page.locator('#datepicker');
    // await dateInput.fill('10-29-2025');
    // await page.waitForTimeout(3000);
    // custom Datepicker
   await page.getByText("Copy Text").dblclick();
   await page.waitForTimeout(3000);
     
})