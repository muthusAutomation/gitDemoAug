let searchPage = {
    locators: {

    },
    openSearchPage: function () {
        cy.get("#js-searchTab").click();
    },
    selectAgeAndHeight: function () {
        cy.get("#Min_Age").click({ force: true }).contains("23").click({ force: true });
        cy.get("#Max_Age").click({ force: true }).contains("27").click({ force: true });
        cy.get("#Min_Height").click({ force: true }).contains("(1.40 mts)").click({ force: true });
        cy.get("#Max_Height").click({ force: true }).contains("(1.68 mts)").click({ force: true });
    },

    selectReligionAndCast: function () {
        // cy.get("#partner_religion_arr_chosen").click();
        // cy.get(".chosen-results.clearfix").contains("Hindu").click();

        //cy.get("#partner_caste_arr_chosen").click({ force: true })
        //cy.get("#partner_caste_arr_chosen").type("pillai");

    },

    selectMotherToungeCountryCity: function () {
        cy.get("#partner_mtongue_arr_chosen").type('{selectall}{backspace}tamil');
        cy.pause();
        cy.get(".chosen-drop").contains("Tamil").click();
        cy.get("#partner_country_arrDiv ").click({ force: true }).type("india");
        cy.get(".chosen-drop").contains("India").click();
         cy.get("#partner_city_arr_chosen").type("chennai").find(".chosen-results.clearfix").contains("Chennai/ Madras").click({ force: true });

    },

    selectIncomeStatus: function () {
        cy.get("#rsLIncome").click({ force: true })
        cy.get(".clearfix.list-minlincome").contains("Rs.4 Lakh").click({ force: true })
        cy.get(".clearfix.list-minlincome_dol").contains("$60,001").click({ force: true })

    },

    maritalStatusAndPhoto: function () {
        cy.get("#partner_mstatus_arr_chosen").type('{selectall}{backspace}{selectall}{backspace}');
        cy.get("#partner_mstatus_arr_chosen").contains("Never Married").click();
        cy.contains("Profiles with photo only").click({force:true});
    },

    lifeStyle:function() {
        cy.get("#lifes").click();
        cy.get("#partner_diet_arr_chosen").click().find(".chosen-results.clearfix").contains("Vegetarian").click();
        cy.get("#partner_drink_arr_chosen").click({force:true}).find(".chosen-results.clearfix").contains("No").click();
        cy.get("#partner_smoke_arr_chosen").click({force:true}).find(".chosen-results.clearfix").contains("No").click();
        cy.get('#Submit').click({force: true})
    }

}
module.exports = searchPage;