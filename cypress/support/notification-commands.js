import notificationFixture from "../fixtures/notification";

Cypress.Commands.add('hasNotification', (notificationData) => {

    const { type } = notificationData;

    const notification = type === 'error' ?
        cy.get(notificationFixture.errorMessage.element)
        : cy.get(notificationFixture.successMessage.element);

    notification.should('exist');

});
