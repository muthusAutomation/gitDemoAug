let browserWinobj = require("../appPageObjects/borwserWinPage")
describe("ALERT-FRAME-WINDOW",function() {
    it("BROWSER WINDOW",function() {
        cy.visit("https://demoqa.com/");
        browserWinobj.openAlertWindowPage();
        browserWinobj.openBrowserPage();
        browserWinobj.newTab();

    })
})