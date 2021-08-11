describe("spice",function() {
    it("jet",function() {
        cy.visit("https://www.spicejet.com/")
        cy.contains("Login / Signup").trigger("mouseover")
    })
})