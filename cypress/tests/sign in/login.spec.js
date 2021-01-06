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
        cy.gui_login(Cypress.env('username'), Cypress.env('password'))
        cy.url().should('to.be.equal', Cypress.config().baseUrl.concat('/'))
    })

    it('invalid credentials', () => {
        cy.gui_login(Cypress.env('username'), faker.internet.password(8))
        cy.gui_verificar_mensagem(loc.LOGIN.DIV_ERROR_MSG, message.LOGIN.INCORRECT_USERNAME_AND_PASSWORD)
    })
})