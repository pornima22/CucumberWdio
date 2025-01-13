const { $, expect, browser } = require('@wdio/globals')
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginBtn () {
        return $('#login-button');
    }

    get errorMessage(){
        return $('div[class="error-message-container error"]');
    }

    get hamBurgerBtn(){
        return $('div[class="bm-burger-button"]')
    }

    get logoutBtn(){
        return $('a[id="logout_sidebar_link"]')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    async assertErrorMessage(){
        await expect(this.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    }

    async logout(){
        await this.hamBurgerBtn.click();
        await this.logoutBtn.click();
    }

    async assertLoginPage(){
        expect(await this.loginBtn.isDisplayed())
    }
}

module.exports = new LoginPage();
