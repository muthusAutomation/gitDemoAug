/// <reference types="Cypress-iframe" />
let formPage = require("../appPageObjects.js/formPage")
describe("TOOLSQA WEBSITE",function() {
    it("OPENING FORM PAGE",function() {
        cy.visit("https://demoqa.com/");
        formPage.openFormPage();        
    })

    it("STUDENT INFORMATION",function() {
        formPage.studentInformation();
    })
    
    it("STUDENT PERSONAL INFORMATION",function() {
        formPage.studentPersonalInformation();
    })
}) 