let alertFramePage={
locators:{

},
openAlertWindowPage:function() {
    cy.get("[class='card mt-4 top-card']:nth-child(3)").click()
        //cy.contains("Practice Form").click();
}
}
module.exports=alertFramePage;