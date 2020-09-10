const faker = require('faker')
import loc from '../../support/locators'

describe('Repositories', () => {

    let fakerRepositoryName = faker.name.jobTitle()

    before(() => {
        cy.gui_login()
    })

    after(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    beforeEach(() => {
        cy.visit('/')
    })

    it('create a new repository', () => {
        cy.get(loc.ASIDE_BAR.BTN_NEW_REPOSITORY)
            .should('be.visible').click()

        cy.get(loc.FORM_NEW_REPOSITORY.IPT_REPOSITORY_NAME)
            .should('be.visible').type(fakerRepositoryName)

        cy.get(loc.FORM_NEW_REPOSITORY.IPT_DESCRIPTION)
            .type(faker.lorem.sentence(4))

        cy.get(loc.FORM_NEW_REPOSITORY.BTN_CREATE_REPOSITORY)
            .should('be.visible').click()

        const newUrl = Cypress.config().baseUrl
            .concat('/')
            .concat(Cypress.env('username'))
            .concat('/')
            .concat(fakerRepositoryName.split(' ').join('-'))

        cy.url().should('to.be.equal', newUrl)
    })

    it('delete a repository', () => {
        cy.visit(`/${Cypress.env('username')}?tab=repositories`)

        cy.get(loc.REPOSITORY_LIST.FIRST_REPOSITORY_FOUNDED)
            .should('be.visible').click()

        cy.get(loc.NAV_BAR.FN_FIND_LI_BY_DESCRIPTION('Settings'))
            .should('be.visible').click()

        cy.contains('Delete this repository')
            .click()

        cy.get(loc.FORM_DELETE_REPOSITORY.STRONG_REPOSITORY_NAME)
            .invoke('text')
            .then(repoName => {
                cy.get(loc.FORM_DELETE_REPOSITORY.IPT_REPOSITORY_NAME)
                    .type(repoName)

                cy.get(loc.FORM_DELETE_REPOSITORY.BTN_DELETE_REPOSITORY)
                    .click()

                cy.get('.flash > .container-lg')
                    .invoke('text')
                    .then(message => expect(message.trim())
                        .to.be.equal(`Your repository "${repoName}" was successfully deleted.`))
            })
    })
})