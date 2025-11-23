//Dynamic XPath using variables
const productName = "iPhone 15";

const productXpath = `//div[text()='${productName}']`;

await page.locator(productXpath).click();

//✅ 2️⃣ Dynamic XPath using contains()
const username = "Kalai";

await page.locator(`//span[contains(text(),'${username}')]`).click();

//✅ 3️⃣ Dynamic XPath with index
const index = 3;

await page.locator(`(//div[@class='item'])[${index}]`).click();

//✅ 4️⃣ Dynamic XPath with starts-with()
const dynamicText = "Order-";

await page.locator(`//label[starts-with(text(), '${dynamicText}')]`).click();

//✅ 5️⃣ Dynamic attribute XPath
const id = "user123";

await page.locator(`//input[@id='${id}']`).fill("hello");

//✅ 6️⃣ Dynamic XPath inside loops
for (let i = 1; i <= 5; i++) {
    await page.locator(`(//button[@class='edit-btn'])[${i}]`).click();
}

//🎯 Full Example: selecting product using dynamic XPath
async function clickProduct(page, productName) {
    const item = `//div[@class='product-name' and text()='${productName}']`;
    await page.locator(item).click();
}

await clickProduct(page, "Samsung Galaxy");