/// <reference types="Cypress" />
describe("greenkart",function() {
    it("green",function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(4000)
        cy.get(".product:visible").should("have.length","4")
        cy.get(".products").find(".product").should("have.length","4")
        // cy.get(".products").find(".product").eq(3).contains("ADD TO CART").click()
        //cy.get(".products-wrapper").find(".product").eq(2).find("button").click();
        cy.get(".products-wrapper").find(".product").each((products)=> {
            let brand =products.find(".product-name").text()
            if(brand=="Capsicum"){
                products.find("button").click();
            }
        })
        cy.get('.brand').then(function(lg) {
            cy.log(lg.text())
        })
        cy.get('.brand').should("have.text","GREENKART")
})

})