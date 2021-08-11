describe("file",function() {
    it("file",function() {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("new_york.jpg");
    })
})