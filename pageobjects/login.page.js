var loginLocators = require('../pagelocators/login.page.locators.js');
var EC = require('wdio-wait-for');
class loginpage {
    passURL(baseURL) {
        browser.url(baseURL);
        browser.maximizeWindow();
    }
    verifyUrl() {
        expect(browser).toHaveTitleContaining('Trello');
    }
    clickOnLoginLink(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//a[text() = "Log in"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeEnabled('//a[text() = "Log in"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeClickable('//a[text() = "Log in"]'), { timeout: inmilliseconds });
        $(loginLocators.loginLinkLocator).click();
    }
    loginPageIsDisplayedOrNot() {
        expect(browser).toHaveUrlContaining('login');
    }
    enterEmailId(inmilliseconds, emailid) {
        browser.waitUntil(EC.visibilityOf('[inputmode = email]'), { timeout: inmilliseconds })
        $(loginLocators.enterEmailidLocator).setValue(emailid);
    }
    verifyEmailIdEnteredisDisplayedCorrectlyOrNot() {
        expect($(loginLocators.enterEmailidLocator)).toHaveValue('manideep.bojjapuri@optimworks.com')
    }
    clickOnLogInWithAtlassianButton(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('#login.button'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('#login.button'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeClickable('#login.button'), { timeout: inmilliseconds })
        $(loginLocators.logInWithAtlassianButtonLocator).click();
    }
    atlassianPageIsDisplayedOrNot() {
        expect(browser).toHaveTitle('Log in to continue - Log in with Atlassian account');
    }
    enterPassword(inmilliseconds, pass) {
        browser.waitUntil(EC.visibilityOf('//span[text() = "Sign up for an account"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.visibilityOf('//span[text() = "User Notice"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.visibilityOf('span[role="presentation"]'), { timeout: inmilliseconds })
        $(loginLocators.enterPasswordLocator).setValue(pass);
    }
    verifyPasswordEnteredIsDisplayedCorrectlyOrNot() {
        expect($(loginLocators.enterPasswordLocator)).toHaveValue('optimworks');
    }
    clickOnLoginButton(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('[id="login-submit"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeEnabled('[id="login-submit"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeClickable('[id="login-submit"]'), { timeout: inmilliseconds });
        $(loginLocators.clickLoginButtonLocator).click();
    }
    logintoApplication(baseURL, swait, emailid, lwait, pass) {
        this.passURL(baseURL);
        this.verifyUrl();
        this.clickOnLoginLink(swait);
        this.loginPageIsDisplayedOrNot();
        this.enterEmailId(swait, emailid);
        this.verifyEmailIdEnteredisDisplayedCorrectlyOrNot();
        this.clickOnLogInWithAtlassianButton(swait);
        this.atlassianPageIsDisplayedOrNot();
        this.enterPassword(lwait, pass);
        this.verifyPasswordEnteredIsDisplayedCorrectlyOrNot();
        this.clickOnLoginButton(lwait);
    }
};
module.exports = new loginpage();
