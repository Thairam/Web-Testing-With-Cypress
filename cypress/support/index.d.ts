/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * log in to the Github website
         * @example
         * cy.gui_login('thairam', 'pass123')
         * @param username username
         * @param password user passowrd 
         */
        gui_login(username: string, password: string): Chainable<any>
    }
}