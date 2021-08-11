//  let helperMethods = {  

//     verifyAndClickElement : async function(element, elementInDoubleQuotes, waitTime) {
//         await browser.wait(ExpectedConditions.elementToBeClickable(element), waitTime, elementInDoubleQuotes);
//         await element.click();
//     },function (error) {
//         errorMessage = "Element click is not working";
//         console.log("element click operation has ERROR===>"+error+"<===="); 
//         log.error(error.stack);
//         throw errorMessage;
//     },

//     verifyAndEnterInputInElement:function (element, elementInDoubleQuotes, waitTime, inputValuesToSend) {
//          cy.wait(ExpectedConditions.elementToBeClickable(element), waitTime, elementInDoubleQuotes);
//          element.type(inputValuesToSend);
//     },function (error) {
//         errorMessage = "Element sendKeys is not working";
//         console.log("element sendkeys operation has ERROR===>"+error+"<===="); 
//         log.error(error.stack);
//         throw errorMessage;
//     }

//  }
 
//  module.exports = helperMethods;
 
 