const{test,expect} = require ('@playwright/test')
test('Automation',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder('Enter Name').fill('Muthu')
    await page.getByPlaceholder('Enter EMail').fill('1997muthalagar')
    const phone = await page.getByPlaceholder('Enter Phone').fill('8667344278')
    // await expect(inputbox).toHaveValue("Muthu");
    await page.locator('//textarea[@id="textarea"]').fill('Madurai')
    await page.waitForTimeout(2000)
    await page.locator('//input[@id="male"]').check()
    await page.locator('#monday').click()
    const country =await page.locator("#country")
    await country.selectOption('Canada')
    const colors=await page.locator('#colors')
    await colors.selectOption({index:0})
    const animals=await page.locator('#animals')
    await animals.selectOption({value:'lion'})
    // await page.setInputFiles('//input[@type="file"]',"C:/Users/User/Downloads/Screenshot 2025-08-21 185954.png")
    // await page.waitForTimeout(2000)







})
