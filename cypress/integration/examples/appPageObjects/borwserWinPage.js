let browserWinPage={
    locators:{

    },

    openAlertWindowPage:function() {
        cy.get("[class='card mt-4 top-card']:nth-child(3)").click()
            //cy.contains("Practice Form").click();
    },
    openBrowserPage:function() {
        cy.contains("Browser Windows").click();
    },
    newTab:function() {
        cy.contains("New Tab").then(function(lin) {
            let urlLink= lin.prop("href");
            cy.visit(urlLink);
        })

        // cy.window().then((win) => {
        //     cy.stub(win, 'open').as('windowOpen')
        //   })
        //   cy.contains("New Window Message").click();
          
        
    }
}
module.exports=browserWinPage;