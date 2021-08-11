let helperMethodsObj=require("../appPageObjects/helperMethods")
let appDataObj = require("../appTestData/testData.json")
let jeevanUserDataObj= require("../appTestData/jeevanUserData")
let loginPage={
    locators:{
        //userName:cy.get("#email"),
        //passWord:cy.get("#password").type('367911hitman47'),
    },
    loginToJeevanSathi:function() {
        cy.visit("https://www.jeevansathi.com/");
        cy.contains("LOGIN").click();
        cy.wait(1000);
        cy.get("#email").click().type("muthuhindustan2016@gmail.com");
        cy.get("#password").type('367911hitman47');
        cy.contains("LOGIN").click();
        // let userName=cy.get("#email");
        // helperMethodsObj.verifyAndEnterInputInElement(userName,"USER NAME",appDataObj.timeouts.mediumWait,jeevanUserDataObj.muthuDataInfo.userNameData)

        
       
    }
}
module.exports=loginPage;