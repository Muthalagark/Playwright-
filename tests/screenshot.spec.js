import{test} from  '@playwright/test';
test("screenshot",async({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.screenshot({path:"C:/Users/User/Downloads/fullpage.png",fullpage:true});
    await page.screenshot({path:"C:/Users/User/Downloads/Currentpage.png"})
    await page.locator("//span[text()='Login']").screenshot({path:"C:/Users/User/Downloads/elemnt.png"});
  


})
