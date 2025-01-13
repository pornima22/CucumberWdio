const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/LoginPage');

Given(/^I am on the login page$/, async () => {
    await LoginPage.visit("https://www.saucedemo.com/")
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see error message$/, async () => {
    await LoginPage.assertErrorMessage();
});

When(/^I logout of the application$/, async () => {
    await LoginPage.logout();
});

Then(/^I should be logged out$/, async () => {
    await LoginPage.assertLoginPage();
});

