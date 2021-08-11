/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import "Cypress-iframe"
describe("greenkart", function () {
    it("OPEN URL", function () {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.url().should("include","AutomationPractice")    
    })

    it("RADIO BUTTON",function() {
        cy.get("[value='radio2']").check().should("be.checked")
    })

    it("Suggession Class Example",function() {
        cy.get(".inputs.ui-autocomplete-input").type("ind")
        cy.get(".ui-menu-item-wrapper").each(function(country) {
            if(country.text()=="India"){
                country.click()
            }
        })
        cy.get(".inputs.ui-autocomplete-input").should("have.value","India")
    })

    it("Dropdown Example",function() {
        cy.get("#dropdown-class-example").select("Option2").should("have.value","option2")
    })

    it("Checkbox Example",function() {
        cy.get("#checkBoxOption3").check().should("be.checked").and("have.value","option3")
        cy.get("#checkBoxOption3").uncheck().should("not.be.checked").and("have.value","option3")
        cy.get("input[type='checkbox']").check(["option3","option2"]);
    })

    it("Switch Window Example",function() {
        cy.get("#openwindow").click();
    })

    it("Switch Tab Example",function() {
        cy.get("#opentab").invoke("removeAttr","target").click();
        cy.url().should("not.include","AutomationPractice")
        cy.wait(1000);
        cy.go("back")
        cy.url().should("include","AutomationPractice")
    })

    it("Switch To Alert Example",function() {
        cy.get("#alertbtn").click();
        cy.on("window:alert",function(alrt) {
            expect(alrt).to.equal("Hello , share this practice page and share your knowledge");
        })

        cy.get("#confirmbtn").click();
        cy.on("window:confirm",function(alr) {
            expect(alr).to.equal("Hello , Are you sure you want to confirm?");
            return false
        })

        cy.get("#confirmbtn").click();
        cy.on("window:confirm",function(st){
            expect(st).to.equal("Hello , Are you sure you want to confirm?")
        })
    })

    it("Web Table Example",function() {
        cy.get("tr td:nth-child(2)").each(function(alldata,index) {
            if(alldata.text().includes("Maven")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
                   let coursePrice=price.text();
                   expect(coursePrice).to.be.equal("20")
                })
            }
        })
    })

    it("Element Displayed Example",function() {
        cy.get("#displayed-text").should("be.visible");
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");
    })

    it("Mouse Hover Example",function() {
        cy.get(".mouse-hover-content").invoke("show");
        cy.contains("Top").click();
        cy.url().should("include","top");
        cy.contains("Reload").click();
        cy.url().should("not.include","top");
        cy.contains("Top").click({force:true});
        cy.url().should("include","top");
        cy.contains("Reload").click({force:true});
        cy.url().should("not.include","top");    
    })

    it("iFrame Example",function() {
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find("div[class*='pricing-container']").should("have.length",2);
        
    })
})