var logintotrello = require('../pageobjects/login.page.js')
var boardcreation = require('../pageobjects/home.page.js')
var addinglistscardsanddeletingboard = require('../pageobjects/addlist.page.js')
var data = require('../tetdata/datafiles.json')
describe('Testcase:1 ----- Creating and Deleting the Board', () => {
    beforeEach(() => {
        logintotrello.logintoApplication(data.TC.Url.baseURL, shortWait, data.TC.loginCredentials.username,
            mediumWait, data.TC.loginCredentials.password);
        boardcreation.homePageIsDisplayedOrNot(veryLongWait);
    }, 3)
    it('testcase-1 : create board', () => {
        boardcreation.clickonCreateLink(mediumWait);
        boardcreation.createLinkPageIsDisplayedOrNot();
        boardcreation.clickonCreateBoardLink(shortWait);
        boardcreation.createBoardLinkPageIsDisplayedOrNot();
        boardcreation.clickonthecolor(shortWait);
        boardcreation.enterBoardTitleName(data.TC_001.boardTitlename.boardtitle);
        boardcreation.boardTitleNameEnteredIsDisplayedCorrectlyOrNot(data.TC_001.boardTitlename.boardtitle);
        boardcreation.clickOnWorkspaceDropdown();
        boardcreation.workspaceDropdownListIsDisplayedOrNot();
        boardcreation.clickOnPublicMode(shortWait);
        boardcreation.publicModePageIsDisplayedOrNot();
        boardcreation.clickOnConfirmingThePublicMode(shortWait);
        boardcreation.publicModeIsDisplayedOnTheWorkspaceDropdownOrNot()
        boardcreation.clickonCreateButton(mediumWait);
        boardcreation.trelloWorkspaceIsDisplayedOrNot();
    }, 3)
    it('testcase-2 : create lists', () => {
        boardcreation.clickonCreateLink(veryLongWait);
        boardcreation.createLinkPageIsDisplayedOrNot();
        boardcreation.clickonCreateBoardLink(shortWait);
        boardcreation.createBoardLinkPageIsDisplayedOrNot();
        boardcreation.clickonthecolor(shortWait);
        boardcreation.enterBoardTitleName(data.TC_001.boardTitlename.boardtitle);
        boardcreation.boardTitleNameEnteredIsDisplayedCorrectlyOrNot(data.TC_001.boardTitlename.boardtitle);
        boardcreation.clickOnWorkspaceDropdown();
        boardcreation.workspaceDropdownListIsDisplayedOrNot();
        boardcreation.clickOnPublicMode(shortWait);
        boardcreation.publicModePageIsDisplayedOrNot();
        boardcreation.clickOnConfirmingThePublicMode(shortWait);
        boardcreation.publicModeIsDisplayedOnTheWorkspaceDropdownOrNot()
        boardcreation.clickonCreateButton(mediumWait);
        boardcreation.trelloWorkspaceIsDisplayedOrNot();
        addinglistscardsanddeletingboard.enterListTitle(data.TC_002.ListNames.listname1);
        addinglistscardsanddeletingboard.clickonAddList();
        addinglistscardsanddeletingboard.listTitleEnteredIsDisplayedCorrectlyOrNot(data.TC_002.ListNames.listname1);
        addinglistscardsanddeletingboard.enterListTitle(data.TC_002.ListNames.listname2);
        addinglistscardsanddeletingboard.clickonAddList();
        addinglistscardsanddeletingboard.listTitleEnteredIsDisplayedCorrectlyOrNot(data.TC_002.ListNames.listname2);
        addinglistscardsanddeletingboard.enterListTitle(data.TC_002.ListNames.listname3);
        addinglistscardsanddeletingboard.clickonAddList();
        addinglistscardsanddeletingboard.listTitleEnteredIsDisplayedCorrectlyOrNot(data.TC_002.ListNames.listname3);
    }, 3)
    it('testcase-3 : create  cards for their respective lists', () => {
        boardcreation.clickonCreateLink(shortWait);
        boardcreation.createLinkPageIsDisplayedOrNot();
        boardcreation.clickonCreateBoardLink(shortWait);
        boardcreation.createBoardLinkPageIsDisplayedOrNot();
        boardcreation.clickonthecolor(shortWait);
        boardcreation.enterBoardTitleName(data.TC_003.boardTitlename.boardtitle);
        boardcreation.boardTitleNameEnteredIsDisplayedCorrectlyOrNot(data.TC_003.boardTitlename.boardtitle);
        boardcreation.clickOnWorkspaceDropdown(veryLongWait);
        boardcreation.workspaceDropdownListIsDisplayedOrNot();
        boardcreation.clickOnPublicMode(shortWait);
        boardcreation.publicModePageIsDisplayedOrNot();
        boardcreation.clickOnConfirmingThePublicMode(shortWait);
        boardcreation.publicModeIsDisplayedOnTheWorkspaceDropdownOrNot()
        boardcreation.clickonCreateButton(mediumWait);
        boardcreation.trelloWorkspaceIsDisplayedOrNot();
        const array = [[data.TC_003.ListNames.listname1, data.TC_003.List1CardNames.cardname1]
            , [data.TC_003.ListNames.listname1, data.TC_003.List1CardNames.cardname2], [data.TC_003.ListNames.listname1, data.TC_003.List1CardNames.cardname3], [data.TC_003.ListNames.listname2, data.TC_003.List2CardNames.cardname1]
            , [data.TC_003.ListNames.listname2, data.TC_003.List2CardNames.cardname2], [data.TC_003.ListNames.listname2, data.TC_003.List2CardNames.cardname3], [data.TC_003.ListNames.listname3, data.TC_003.List3CardNames.cardname1]
            , [data.TC_003.ListNames.listname3, data.TC_003.List3CardNames.cardname2], [data.TC_003.ListNames.listname3, data.TC_003.List3CardNames.cardname3]];
        addinglistscardsanddeletingboard.enterTheLists(data.TC_003.ListNames.listname1, data.TC_003.ListNames.listname2,
            data.TC_003.ListNames.listname3);
        addinglistscardsanddeletingboard.enterAllCardsInTheRespectiveLists(array);
        addinglistscardsanddeletingboard.draggingAndDroppingACard(data.TC_003.ListNames.listname1, data.TC_003.List1CardNames.cardname1, data.TC_003.ListNames.listname2, data.TC_003.List2CardNames.cardname2);
        addinglistscardsanddeletingboard.particularCardShouldBeExistInParticularList(data.TC_003.ListNames.listname2, data.TC_003.List1CardNames.cardname1);
        addinglistscardsanddeletingboard.draggingAndDroppingACard(data.TC_003.ListNames.listname3, data.TC_003.List3CardNames.cardname1, data.TC_003.ListNames.listname2, data.TC_003.List2CardNames.cardname1);
        addinglistscardsanddeletingboard.particularCardShouldBeExistInParticularList(data.TC_003.ListNames.listname2, data.TC_003.List3CardNames.cardname1);
    }, 3)
    it('testcase-4 : deleting the board', () => {
        boardcreation.clickonCreateLink(shortWait);
        boardcreation.createLinkPageIsDisplayedOrNot();
        boardcreation.clickonCreateBoardLink(shortWait);
        boardcreation.createBoardLinkPageIsDisplayedOrNot();
        boardcreation.clickonthecolor(shortWait);
        boardcreation.enterBoardTitleName(data.TC_004.boardTitlename.boardtitle);
        boardcreation.boardTitleNameEnteredIsDisplayedCorrectlyOrNot(data.TC_004.boardTitlename.boardtitle);
        boardcreation.clickOnWorkspaceDropdown();
        boardcreation.workspaceDropdownListIsDisplayedOrNot();
        boardcreation.clickOnPublicMode(shortWait);
        boardcreation.publicModePageIsDisplayedOrNot();
        boardcreation.clickOnConfirmingThePublicMode(shortWait);
        boardcreation.publicModeIsDisplayedOnTheWorkspaceDropdownOrNot()
        boardcreation.clickonCreateButton(mediumWait);
        boardcreation.trelloWorkspaceIsDisplayedOrNot();
        addinglistscardsanddeletingboard.enterTheLists(data.TC_004.ListNames.listname1, data.TC_004.ListNames.listname2,
            data.TC_004.ListNames.listname3);
        const array = [[data.TC_004.ListNames.listname1, data.TC_004.List1CardNames.cardname1]
            , [data.TC_004.ListNames.listname1, data.TC_004.List1CardNames.cardname2], [data.TC_004.ListNames.listname1, data.TC_004.List1CardNames.cardname3], [data.TC_004.ListNames.listname2, data.TC_004.List2CardNames.cardname1]
            , [data.TC_004.ListNames.listname2, data.TC_004.List2CardNames.cardname2], [data.TC_004.ListNames.listname2, data.TC_004.List2CardNames.cardname3], [data.TC_004.ListNames.listname3, data.TC_004.List3CardNames.cardname1]
            , [data.TC_004.ListNames.listname3, data.TC_004.List3CardNames.cardname2], [data.TC_004.ListNames.listname3, data.TC_004.List3CardNames.cardname3]];
        addinglistscardsanddeletingboard.enterAllCardsInTheRespectiveLists(array);
        addinglistscardsanddeletingboard.clickOnShowmenu();
        addinglistscardsanddeletingboard.aboutThisCardPageIsDisplayedOrNot();
        addinglistscardsanddeletingboard.clickOnBackwardButtonOfAboutThisCard(shortWait);
        addinglistscardsanddeletingboard.showmenuPageIsDisplayedOrNot();
        addinglistscardsanddeletingboard.clickOnMore(shortWait);
        addinglistscardsanddeletingboard.morePageIsDisplayedOrNot();
        addinglistscardsanddeletingboard.clickOnCloseboard(shortWait);
        addinglistscardsanddeletingboard.closeboardPageIsDisplayedOrNot();
        addinglistscardsanddeletingboard.clickOnCloseButton(shortWait);
        addinglistscardsanddeletingboard.closeWindowIsdisplayedOrNot();
        addinglistscardsanddeletingboard.clickOnPermanentlyDeleteBoard(shortWait);
        addinglistscardsanddeletingboard.permanentlyDelteBoardPageWindowIsDisplayedOrNot();
        addinglistscardsanddeletingboard.clickOnDelete(shortWait);
        addinglistscardsanddeletingboard.backToHomePage();
    }, 3)
    afterEach(() => {
        boardcreation.logoffTheApplication(veryLongWait);
    })
})