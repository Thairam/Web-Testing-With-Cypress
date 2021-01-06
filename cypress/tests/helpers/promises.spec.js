const db = require('../../fixtures/database')

describe('Promises', () => {

    // Look at browser console (F12 / Inspect element)
    const btnPesquisaGoogle = '.FPdoLc > center > .gNO89b'

    it('Promise without wrap', () => {
        cy.visit('www.google.com')
        cy.get(btnPesquisaGoogle).then(() => console.log('CT001: Primeiro'))
        // Simulates a query to a database that takes a while to process.
        db.cleanDB().then(res => console.log('CT001: Resultado da promise SEM wrap: ', res))
        cy.get(btnPesquisaGoogle).then(() => console.log('CT001: Segundo\n\n'))
    })

    it('Promise with wrap', () => {
        cy.visit('www.google.com')
        cy.get(btnPesquisaGoogle).then(() => console.log('CT002: Primeiro'))
        // Simulates a query to a database that takes a while to process.
        cy.wrap(db.cleanDB()).then(res => console.log('CT002: Resultado da promise COM wrap: ', res))
        cy.get(btnPesquisaGoogle).then(() => console.log('CT002: Segundo'))
    })
})