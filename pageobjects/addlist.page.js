var addListLocators = require('../pagelocators/addlist.page.locators.js')
var ExpectedConditions = require('wdio-wait-for');
class addListpage {
    enterListTitle(type) {
        browser.waitUntil(ExpectedConditions.visibilityOf('[value="Add list"]'), { timeout: 10000 });
        $(addListLocators.enterListTitleLocator).setValue(type);
    }
    clickonAddList() {
        browser.waitUntil(ExpectedConditions.elementToBeEnabled('[value="Add list"]'), { timeout: 8000 });
        $(addListLocators.clickOnAddlistLocator).click();
    }
    listTitleEnteredIsDisplayedCorrectlyOrNot(listtitlename) {
        expect($("//textarea[text() = '" + listtitlename + "']")).toHaveText(listtitlename);
    }
    clickOnAddCard(cardname) {
        browser.waitUntil(ExpectedConditions.visibilityOf('//h2[text() = "' + cardname + '"]/parent::div/following-sibling::div//*[text() = "Add a card"]'), { timeout: 10000 })
        $('//textarea[text() = "' + cardname + '"]/../following-sibling::div//*[text() = "Add a card"]').click();
    }
    enterTitleCard(names) {
        browser.waitUntil(ExpectedConditions.visibilityOf('//div[@class=  "card-composer"]//input'), { timeout: 10000 })
        $(addListLocators.enterATitleForCardLocator).setValue(names);
    }
    clickOnTheAddCard() {
        browser.waitUntil(ExpectedConditions.elementToBeEnabled('//div[@class=  "card-composer"]//input'), { timeout: 10000 })
        $(addListLocators.addACardButtonLocator).click();
    }
    enterTheLists(list1, list2, list3) {
        var lists = [list1, list2, list3];
        for (let index = 0; index < lists.length; index++) {
            this.enterListTitle(lists[index]);
            this.clickonAddList();
            this.listTitleEnteredIsDisplayedCorrectlyOrNot(lists[index]);
        }
    }
    enterAllCardsInTheRespectiveLists(array) {
        this.clickOnAddCard(array[0][0]);
        for (let index = 0; index < array.length - 6; index++) {
            this.enterTitleCard(array[index][1]);
            this.clickOnTheAddCard();
            this.cardIsDisplayedInTheirRespectiveListOrNot(array[index][0], array[index][1]);
        }
        this.clickOnAddCard(array[3][0]);
        for (let index = 3; index < array.length - 3; index++) {
            this.enterTitleCard(array[index][1]);
            this.clickOnTheAddCard();
            this.cardIsDisplayedInTheirRespectiveListOrNot(array[index][0], array[index][1])
        }
        this.clickOnAddCard(array[6][0]);
        for (let index = 6; index < array.length; index++) {
            this.enterTitleCard(array[index][1]);
            this.clickOnTheAddCard();
            this.cardIsDisplayedInTheirRespectiveListOrNot(array[index][0], array[index][1])
        }
    }
    cardIsDisplayedInTheirRespectiveListOrNot(listname, cardname) {
        expect($('//h2[text() = "' + listname + '"]/parent::div/following-sibling::div//*[text() = "' + cardname + '"]')).toHaveText(cardname);
    }
    draggingAndDroppingACard(listname1, cardname1, listname2, cardname2) {
        $('//textarea[text() ="' + listname1 + '"]/../following-sibling::div//*[text() = "' + cardname1 + '"]').dragAndDrop($('//textarea[text() ="' + listname2 + '"]/../following-sibling::div//*[text() = "' + cardname2 + '"]'))
    }
    particularCardShouldBeExistInParticularList(listname, cardname) {
        expect($('//textarea[text() ="' + listname + '"]/../following-sibling::div//*[text() = "' + cardname + '"]')).toHaveText(cardname);
    }
    clickOnShowmenu(inmilliseconds) {
        browser.waitUntil(ExpectedConditions.elementToBeClickable('//span[text() = "Show menu"]'), { timeout: inmilliseconds })
        $(addListLocators.clickshowMenuLinkLocator).click();
    }
    aboutThisCardPageIsDisplayedOrNot() {
        expect($(addListLocators.aboutThisBoardTextLocator)).toHaveText('About this board');
    }
    clickOnBackwardButtonOfAboutThisCard(inmilliseconds) {
        browser.waitUntil(ExpectedConditions.visibilityOf('//h3[text() = "About this board"]'), { timeout: inmilliseconds });
        $(addListLocators.clickBackwardButtonOfAboutThisCardLocator).click();
    }
    showmenuPageIsDisplayedOrNot() {
        expect($(addListLocators.menuTextLocator)).toHaveText('Menu');
    }
    clickOnMore(inmilliseconds) {
        browser.waitUntil(ExpectedConditions.elementToBeEnabled('.js-open-more'), { timeout: inmilliseconds });
        $(addListLocators.clickMoreLinkLocator).click();
    }
    morePageIsDisplayedOrNot() {
        expect($(addListLocators.showQrCodeTextLocator)).toHaveText('Show QR Code');
    }
    clickOnCloseboard(inmilliseconds) {
        browser.waitUntil(ExpectedConditions.elementToBeEnabled('.js-close-board'), { timeout: inmilliseconds })
        $(addListLocators.clickcloseBoardLinkLocator).click();
    }
    closeboardPageIsDisplayedOrNot() {
        expect($(addListLocators.closeBoardTextLocator)).toHaveText('Close board?');
    }
    clickOnCloseButton(inmilliseconds) {
        browser.waitUntil(ExpectedConditions.elementToBeEnabled('[value="Close"]'), { timeout: inmilliseconds })
        $(addListLocators.clickcloseButtonLocator).click();
    }
    closeWindowIsdisplayedOrNot() {
        expect($('//button[text() = "Permanently delete board"]')).toHaveText('Permanently delete board');
    }
    clickOnPermanentlyDeleteBoard(inmilliseconds) {
        browser.waitUntil(ExpectedConditions.visibilityOf('//button[text() = "Permanently delete board"]'), { timeout: inmilliseconds })
        $(addListLocators.clickPermanentlyDeleteBoard).click();
    }
    permanentlyDelteBoardPageWindowIsDisplayedOrNot() {
        expect($(addListLocators.deleteBoardTextLocator)).toHaveText('Delete board?');
    }
    clickOnDelete(inmilliseconds) {
        browser.waitUntil(ExpectedConditions.visibilityOf('//div[text() = "Delete board?"]'), { timeout: inmilliseconds })
        $(addListLocators.clickDeleteButtonLocator).click();
    }
    backToHomePage() {
        expect(browser).toHaveTitle('Boards | Trello');
    }
};
module.exports = new addListpage;