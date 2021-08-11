let formPage={
    locators:{

    },
    openFormPage: function() {
        cy.get("[class='card mt-4 top-card']:nth-child(2)").click()
        cy.contains("Practice Form").click();
    },
    
    studentInformation: function() {
        cy.get("#firstName").type("muthu")
        cy.get("#lastName").type("ganapathy")
        cy.get("#userEmail").type("muthu@gmail.com")
        cy.get("#gender-radio-1").check({force: true});
    },

    studentPersonalInformation: function() {
        cy.get("#userNumber").type("9876543210")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("September")
        cy.get(".react-datepicker__year-select").select("2000")
        cy.get(".react-datepicker__week").contains("5").click()
        // cy.get(".subjects-auto-complete__control").type("computer")
        // cy.get(".css-12jo7m5.subjects-auto-complete__multi-value__label").click()
        cy.get(".subjects-auto-complete__control").type("mca")
        cy.get("#hobbies-checkbox-1").check({force: true})
        cy.get("#uploadPicture").attachFile("new_york.jpg");
        cy.get("#currentAddress").type("dhubai mainroad, dhubai kurukusandhu, dhubai");
        // cy.get(".css-1hwfws3").select("Uttar Pradesh");
        cy.contains("Submit").click()
        cy.wait(4000);
        cy.get("#closeLargeModal").click({force: true});
    }
    

}
module.exports =formPage;
