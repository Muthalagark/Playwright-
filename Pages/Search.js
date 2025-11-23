export class Search{

    constructor (page) {

        this.page =page;
        this.auditlistbtn = page.locator('//a[@title="Audit List"]');
        this.action = page.locator('//span[normalize-space()="visibility"]');
        this.email = page.locator('//span[@title="Email"]')
        this.emlcreate=page.locator('//div[@class="modal fade show"]//button[@class="btn btn-outline-primary btn-sm w-100 text-start"][normalize-space()="October 27, 2025 at 13:14:51"]')
    }

    async search(){
        await this.auditlistbtn.click();
        await this.action.click();
        await this.email.click();
        await this.emlcreate.click();

    }
}