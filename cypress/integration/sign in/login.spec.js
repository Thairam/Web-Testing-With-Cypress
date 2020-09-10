const faker = require('faker')
import loc from '../../support/locators'
import message from '../../support/mensagens'

describe('Sign in', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    afterEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('login successfully', () => {
        cy.get(loc.LOGIN.IPT_USERNAME)
            .type(Cypress.env('username'))

        cy.get(loc.LOGIN.IPT_PASSWORD)
            .type(Cypress.env('password'), { log: false })

        cy.get(loc.LOGIN.BTN_SIGN_IN)
            .click()

        cy.url().should('to.be.equal', Cypress.config().baseUrl.concat('/'))
    })

    it('invalid credentials', () => {
        cy.get(loc.LOGIN.IPT_USERNAME)
            .type(faker.name.firstName())

        cy.get(loc.LOGIN.IPT_PASSWORD)
            .type(faker.internet.password(8))

        cy.get(loc.LOGIN.BTN_SIGN_IN)
            .click()

        cy.get(loc.LOGIN.DIV_ERROR_MSG)
            .should('be.visible')
            .invoke('text')
            .then(text => expect(text.trim())
                .to.be.equal(message.LOGIN.INCORRECT_USERNAME_AND_PASSWORD))
    })
})