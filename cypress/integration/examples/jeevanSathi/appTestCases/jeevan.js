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
        searchPageObj.selectAgeAndHeight();
        cy.pause();
        
    })

    it("GIRLS ETHINICITY PREFERANCE", function () {
        searchPageObj.selectReligionAndCast();
        searchPageObj.selectMotherToungeCountryCity();
        cy.pause();
        
    })

    it("INCOME PREFERANCE", function () {
        searchPageObj.selectIncomeStatus();
        searchPageObj.maritalStatusAndPhoto();
        searchPageObj.lifeStyle();
        
    })
    
})