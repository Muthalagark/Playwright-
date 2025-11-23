
export class LoginPage {

    constructor(page){

        this.page = page;
        this.username = page.locator('//input[@id="username"]');
        this.password = page.locator('//input[@id="password"]');
        this.button = page.locator('//input[@type="submit"]');
        
    }


    async navigate(){
        
        await this.page.goto('https://signin-staging.incluud.com/realms/MomentumRealm/protocol/openid-connect/auth?response_type=code&client_id=complianceai-client&redirect_uri=https%3A%2F%2Fcai-be-staging.incluud.com%2Fkeyclock%2Fauth%2Fcallback&scope=openid') ;
    }

    async login (email,passwd){
        
        await this.username.fill(email);
        await this.password.fill(passwd);
        await this.button.click();
    }
    

}