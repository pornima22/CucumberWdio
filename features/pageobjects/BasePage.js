const { browser } = require('@wdio/globals')

module.exports = class BasePage {

    async visit(url){
        await browser.url(url);
    }

    async waitforSeconds(seconds){
        await browser.pause(seconds * 1000);
    }
}
