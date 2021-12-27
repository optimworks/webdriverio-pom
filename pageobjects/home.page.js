var homepageLocators = require('../pagelocators/home.page.locators.js');
var EC = require('wdio-wait-for');
class homepage {
    homePageIsDisplayedOrNot(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//p[text() = "Create"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.visibilityOf('//span[text() = "Templates"]'), { timeout: inmilliseconds })
        expect($(homepageLocators.HomePageHeaderPartcreateLinkLocator)).toHaveText('Create');
    }
    clickonCreateLink(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//span[text() = "Templates"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.visibilityOf('//span[text() = "Boards"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.visibilityOf('//p[text() = "Create"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('//p[text() = "Create"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeClickable('//p[text() = "Create"]'), { timeout: inmilliseconds })
        $(homepageLocators.HomePageHeaderPartcreateLinkLocator).click();
    }
    createLinkPageIsDisplayedOrNot() {
        expect($(homepageLocators.createBoardTextLocator)).toHaveText('Create board');
    }
    clickonCreateBoardLink(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('[data-test-id="header-create-board-button"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('[data-test-id="header-create-board-button"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeClickable('[data-test-id="header-create-board-button"]'), { timeout: inmilliseconds })
        $(homepageLocators.clickcreateBoardLinkLocator).click();
    }
    createBoardLinkPageIsDisplayedOrNot() {
        expect($(homepageLocators.boardTitleTextLocator)).toHaveText('Board title is required');
    }
    clickonthecolor(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//label[text() = "Background"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.visibilityOf('[title="green"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeEnabled('[title="green"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeClickable('[title="green"]'), { timeout: inmilliseconds });
        $(homepageLocators.pickingColorLocator).click();
    }
    enterBoardTitleName(boardTitleName) {
        $(homepageLocators.enterBoardTitleLocator).setValue(boardTitleName);
    }
    boardTitleNameEnteredIsDisplayedCorrectlyOrNot(boardtitlename) {
        expect($(homepageLocators.enterBoardTitleLocator)).toHaveValue(boardtitlename);
    }
    clickOnWorkspaceDropdown(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//label[text() = "Visibility"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.visibilityOf('//div[text() = "Workspace"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('//div[text() = "Workspace"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeClickable('//div[text() = "Workspace"]'), { timeout: inmilliseconds })
        $(homepageLocators.clickWorkspaceDropdownLocator).click();
    }
    workspaceDropdownListIsDisplayedOrNot() {
        expect($(homepageLocators.clickPublicOptionLocator)).toHaveText('Public');
    }
    clickOnPublicMode(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//span[text() = "Only board members can see and edit this board."]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.visibilityOf('//div[text() = "Public"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('//div[text() = "Public"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeClickable('//div[text() = "Public"]'), { timeout: inmilliseconds })
        $(homepageLocators.clickPublicOptionLocator).click();
    }
    publicModePageIsDisplayedOrNot() {
        expect($(homepageLocators.confirmingPublicModeTextLocator))
            .toHaveText('Public boards are visible to anyone on the internet, and show up in search engines like Google.');
    }
    clickOnConfirmingThePublicMode(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//p[text() = "Public boards are visible to anyone on the internet, and show up in search engines like Google."]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.visibilityOf('//button[text() = "Yes, make board public"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('//button[text() = "Yes, make board public"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeClickable('//button[text() = "Yes, make board public"]'), { timeout: inmilliseconds })
        $(homepageLocators.clickOnconfirmingpublicOptionLocator).click();
    }
    publicModeIsDisplayedOnTheWorkspaceDropdownOrNot() {
        expect($(homepageLocators.clickPublicOptionLocator)).toHaveText('Public');
    }
    clickonCreateButton(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//button[text() = "Start with a template"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.visibilityOf('//button[text() = "Create"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('//button[text() = "Create"]'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeClickable('//button[text() = "Create"]'), { timeout: inmilliseconds })
        $(homepageLocators.clickCreateButtonLocator).scrollIntoView();
        $(homepageLocators.clickCreateButtonLocator).click();
    }
    trelloWorkspaceIsDisplayedOrNot() {
        browser.waitUntil(EC.visibilityOf('//span[text() = "Automation"]'), { timeout: 26000 })
        expect(browser).toHaveTitleContaining('| Trello');
    }
    clickOnProfileLink(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('span.SETnvPbUKHW-cx'), { timeout: inmilliseconds })
        browser.waitUntil(EC.elementToBeEnabled('span.SETnvPbUKHW-cx'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeClickable('span.SETnvPbUKHW-cx'), { timeout: inmilliseconds });
        $(homepageLocators.clickOnProfileLocator).click();
    }
    clickOnLogoutLink(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//div[text() = "Account"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.visibilityOf('//span[text() = "Shortcuts"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.visibilityOf('//span[text() = "Log out"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeEnabled('//span[text() = "Log out"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeClickable('//span[text() = "Log out"]'), { timeout: inmilliseconds });
        $(homepageLocators.clickOnLogoutLinkLocator).click();
    }
    clickOnLogoutOfAtlassianButton(inmilliseconds) {
        browser.waitUntil(EC.visibilityOf('//h5[text() = "Log out of your Atlassian account"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeEnabled('//h5[text() = "Log out of your Atlassian account"]'), { timeout: inmilliseconds });
        browser.waitUntil(EC.elementToBeClickable('//h5[text() = "Log out of your Atlassian account"]'), { timeout: inmilliseconds });
        $(homepageLocators.clickOnLogoutLinkLocator).click();
    }
    logoffTheApplication(mwait) {
        this.clickOnProfileLink(mwait);
        this.clickOnLogoutLink(mwait);
        this.clickOnLogoutOfAtlassianButton(mwait);
    }
};
module.exports = new homepage;