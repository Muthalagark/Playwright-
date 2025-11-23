const {test,chromium} = require ('@playwright/test')

test('Locator',async()=>{

    const browser = await chromium.launch({headless:false})
    const window= await browser.newContext()
    const page = await window.newPage()
    await page.goto("https://www.facebook.com/")
    const email = await page.getByPlaceholder("Email address or phone number")
    await email.click()
    await email.fill("Sabari")
    await page.waitForTimeout(2000)
    const password = await page.getByTestId("royal-pass")
    await password.click()
    await password.fill("Sabari@123")
    const login = await page.getByRole('button',{name :'Log in'}).click()




})