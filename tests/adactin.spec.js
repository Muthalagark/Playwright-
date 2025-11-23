//Page Object Model


import {test,expect} from "@playwright/test"
import { LoginPage } from "../Pages/Login";
import { Search } from "../Pages/Search";




test("adactin login", async({page})=>{
        await page.setViewportSize({ width: 1500, height: 800 });

        const loginpage = new LoginPage(page);
        const searchhotel = new Search (page);

        await loginpage.navigate()
        await loginpage.login('asahu@accure.ai','500internalservererror');
        await searchhotel.search();

})
