import loc from './locators'

Cypress.Commands.add('gui_login', () => {
    cy.visit('/login')

    cy.get(loc.LOGIN.IPT_USERNAME)
        .type(Cypress.env('username'))

    cy.get(loc.LOGIN.IPT_PASSWORD)
        .type(Cypress.env('password'), { log: false })

    cy.get(loc.LOGIN.BTN_SIGN_IN)
        .click()
})