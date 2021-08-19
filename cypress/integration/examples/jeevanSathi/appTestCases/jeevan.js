let loginPageObj = require("../appPageObjects/loginPage");
let searchPageObj = require("../appPageObjects/searchPage");

describe("jeevansathi cypress automation", function () {
    it('LOGIN TO JEEVANSATHI WEBSITE', function () {
        loginPageObj.loginToJeevanSathi();
    })

    it("SEARCH PAGE", function () {
        searchPageObj.openSearchPage();
    })

    it("GIRLS AGE AND HEIGHT PREFERANCE", function () {
        searchPageObj.selectAgeAndHeight()
    })

    it("GIRLS ETHINICITY PREFERANCE", function () {
        searchPageObj.selectReligionAndCast();
        searchPageObj.selectMotherToungeCountryCity();
        cy.pause();
        cy.log("second edit");
        cy.log("is done by muthu");
    })

    it("INCOME PREFERANCE", function () {
        searchPageObj.selectIncomeStatus();
        searchPageObj.maritalStatusAndPhoto();
        searchPageObj.lifeStyle();
    })
    
})