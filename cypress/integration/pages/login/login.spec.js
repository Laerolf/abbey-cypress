import loginPage from "../../../fixtures/pages/login";
import registerPage from "../../../fixtures/pages/register";
import laerolf from "../../../fixtures/users/laerolf";

context("Abbey: Login", () => {

    beforeEach(() => {
        cy.visit(loginPage.url);
    });

    it("should be able to go to the login page", () => {
        cy.url()
            .should('contain', loginPage.url);
    });

    it("should be able to fail to login", () => {
        cy.get(loginPage.form.fields.usernameField)
            .type("Qiubo");

        cy.get(loginPage.form.fields.passwordField)
            .type("Qiubo");

        cy.get(loginPage.form.login)
            .click();

        cy.hasNotification({type: 'error'});
    });

    it("should be able to login", () => {
        cy.get(loginPage.form.fields.usernameField)
            .type(laerolf.username);

        cy.get(loginPage.form.fields.passwordField)
            .type(laerolf.password);

        cy.get(loginPage.form.login)
            .click();

        cy.hasNotification({type: 'success'});
    });

    it('should be able to go to the register page after clicking register in the login page', () =>{
        cy.get(loginPage.actions.register)
            .click();

        cy.url()
            .should('contain', registerPage.url);
    });
});
