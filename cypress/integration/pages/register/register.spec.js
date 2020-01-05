import registerPage from "../../../fixtures/pages/register";
import loginPage from "../../../fixtures/pages/login";

describe("Abbey: Register", () =>{

    beforeEach(() =>{
        cy.visit(registerPage.url);
    });

    it('should be able to go to the register page', () => {
        cy.url()
            .should('contain',registerPage.url);
    });

    it('should be able to go to the login page after clicking login in the register page', () =>{
        cy.get(registerPage.actions.login)
            .click();

        cy.url()
            .should('contain', loginPage.url);
    });
});
