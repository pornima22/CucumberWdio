const { $, expect, browser, $$ } = require('@wdio/globals')
const BasePage = require("./BasePage")

class HomePage extends BasePage{

    get homePageTitle(){
        return $('div[class="app_logo"]')
    }

    get filterDropdown(){
        return $('select[class="product_sort_container"]')
    }

    async assertHomepageTitle(){
        await expect(this.homePageTitle).toHaveText("Swag Labs")
    }

    async applyFilter(filteroption){
        await this.filterDropdown.click();
        await this.filterDropdown.selectByVisibleText(filteroption);
    }

    async getAllProductPrices(){
        const priceList = await browser.execute(()=> {
            const elemments = document.querySelectorAll('.inventory_item_price');
            return Array.from(elemments).map(elemment => {
               const priceText = elemment.innerHTML.replace('$', ' ').trim();
               return parseFloat(priceText);
            });
        });
        return priceList;
    }
}
module.exports = new HomePage()


