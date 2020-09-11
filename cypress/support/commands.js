import loc from './locators'

Cypress.Commands.add('gui_login', (username, password) => {
    cy.visit('/login')

    cy.get(loc.LOGIN.IPT_USERNAME)
        .type(username)

    cy.get(loc.LOGIN.IPT_PASSWORD)
        .type(password, { log: false })

    cy.get(loc.LOGIN.BTN_SIGN_IN)
        .click()
})