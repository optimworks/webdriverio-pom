var homepageLocators =
{
    HomePageHeaderPartcreateLinkLocator: '//p[text() = "Create"]',
    clickcreateBoardLinkLocator: '[data-test-id="header-create-board-button"]',
    pickingColorLocator: '[title="green"]',
    enterBoardTitleLocator: '[data-test-id="create-board-title-input"]',
    clickCreateButtonLocator: '//button[text() = "Create"]',
    clickWorkspaceDropdownLocator: '//div[text() = "Workspace"]',
    clickPublicOptionLocator: '//div[text() = "Public"]',
    clickOnconfirmingpublicOptionLocator: '//button[text() = "Yes, make board public"]',
    createBoardTextLocator: '//span[text() = "Create board"]',
    boardTitleTextLocator: '//p[text() = "Board title is required"]',
    confirmingPublicModeTextLocator: '//p[text() = "Public boards are visible to anyone on the internet, and show up in search engines like Google."]',
    publicTextLocator: '//div[text() = "Public"]',
    clickOnProfileLocator: 'span.SETnvPbUKHW-cx',
    clickOnLogoutLinkLocator: '//span[text() = "Log out"]'
};
module.exports = homepageLocators;