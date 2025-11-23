import{test,chromium} from '@playwright/test'

test('Browser Launch',async() => {
 
const browser = await chromium.launch({headless:false})
const window = await browser.newContext()
const tab = await window.newPage()
await tab.goto("https://www.facebook.com/")
const forget = await tab.getByText("Forgotten password?")
await forget.click()
await tab.waitForTimeout(2000)
const email = await tab.getByLabel("Email address or mobile number")
await email.click()
await tab.waitForTimeout(2000)
await email.fill("sabari")
await tab.waitForTimeout(5000)
const career = await tab.getByTitle("Make your next career move to our brilliant company.")
await career.scrollIntoViewIfNeeded()
await career.click()
await tab.waitForTimeout(2000)
const tab1 = await window.newPage()
await tab1.goto("https://www.flipkart.com/")
const dot = await tab1.getByAltText("Dropdown with more help links")
await dot.click()
const notification=await tab1.getByText("Notification Preferences").click()
await tab1.waitForTimeout(5000)
})










// })