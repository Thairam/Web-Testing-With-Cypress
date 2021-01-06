const faker = require('faker')
import loc from '../../support/locators'

describe('Repositories', () => {

    let fakerRepositoryName = faker.name.jobTitle()

    beforeEach(() => {
        cy.visit('/login')
        cy.gui_login(Cypress.env('username'), Cypress.env('password'))
    })

    afterEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it.only('create a new repository', () => {
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

        cy.get(loc.REPOSITORY_LIST.FIRST_REPOSITORY_FOUNDED)
            .should('be.visible').click()

        cy.get(loc.NAV_BAR.FN_FIND_LI_BY_DESCRIPTION('Issues'))
            .should('be.visible').click()

        cy.get("span:contains('New issue')")
            .should('be.visible').click()

        // cy.get('#issue_title')
        //     .clear().type(issueTitle)

        // cy.get('#issue_body')
        //     .clear().type(faker.lorem.sentence(5))

        // cy.get(".flex-justify-end > button:contains('Submit new issue')").click()

        // cy.get('.gh-header-title > .js-issue-title')
        //     .invoke('text')
        //     .then(text => expect(text.trim()).to.be.equal(issueTitle))
    })
})