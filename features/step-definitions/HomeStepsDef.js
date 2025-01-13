const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HomePage = require('../pageobjects/Homepage')

Given(/^I am on the home page$/, async () => {
    await HomePage.assertHomepageTitle()
});

When(/^I apply the filter "([^"]*)"$/, async (filteroption) => {
    await HomePage.applyFilter(filteroption)
});

Then(/^The product should be sorted by price in ascending order$/, async () => {
    const priceValue = await HomePage.getAllProductPrices();

    const sortedPrices = priceValue.sort((a, b) => a-b);
    expect(priceValue).toEqual(sortedPrices);
});
