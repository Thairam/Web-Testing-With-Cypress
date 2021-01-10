const faker = require('faker')
import loc from '../../support/locators'

describe('Repositories', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.gui_login(Cypress.env('username'), Cypress.env('password'))
    })

    afterEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('create a new repository', () => {
        const fakerRepositoryName = faker.name.jobTitle()

        cy.gui_clicar(loc.ASIDE_BAR.BTN_NEW_REPOSITORY)
        cy.gui_preencher_campo(loc.FORM_NEW_REPOSITORY.IPT_REPOSITORY_NAME, fakerRepositoryName)
        cy.gui_preencher_campo(loc.FORM_NEW_REPOSITORY.IPT_DESCRIPTION, faker.lorem.sentence(4))
        cy.gui_clicar(loc.FORM_NEW_REPOSITORY.BTN_CREATE_REPOSITORY)

        const newUrl = Cypress.config().baseUrl
            .concat('/')
            .concat(Cypress.env('username'))
            .concat('/')
            .concat(fakerRepositoryName.split(' ').join('-'))

        cy.url().should('to.be.equal', newUrl)
    })

    it('create an issue', () => {
        cy.visit(`/${Cypress.env('username')}?tab=repositories`)

        const issueTitle = faker.name.title()

        cy.gui_clicar(loc.REPOSITORY_LIST.FIRST_REPOSITORY_FOUNDED)
        cy.gui_clicar(loc.NAV_BAR.FN_FIND_LI_BY_DESCRIPTION('Issues'))
        cy.gui_clicar(loc.ISSUES.BTN_NEW_ISSUE)

        cy.gui_preencher_campo('#issue_title', issueTitle)
        cy.gui_preencher_campo('#issue_body', faker.lorem.sentence(5))

        cy.gui_clicar(loc.ISSUES.BTN_SUBMIT_ISSUE)

        cy.gui_verificar_mensagem(loc.ISSUES.H1_TITLE, issueTitle)
    })
})