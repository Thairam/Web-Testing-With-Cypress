const db = require('../../fixtures/database')

describe('Promises', () => {

    // Olhar console do navegador (F12 / Inspect element)
    const btnPesquisaGoogle = '.FPdoLc > center > .gNO89b'

    it('Promise sem wrap', () => {
        cy.visit('www.google.com')
        cy.get(btnPesquisaGoogle).then(() => console.log('CT001: Primeiro'))
        // simula uma query a um banco de dados que leva um certo tempo para ser processada.
        db.cleanDB().then(res => console.log('CT001: Resultado da promise SEM wrap: ', res))
        cy.get(btnPesquisaGoogle).then(() => console.log('CT001: Segundo\n\n'))
    })

    it('Promise com wrap', () => {
        cy.visit('www.google.com')
        cy.get(btnPesquisaGoogle).then(() => console.log('CT002: Primeiro'))
        // simula uma query a um banco de dados que leva um certo tempo para ser processada.
        cy.wrap(db.cleanDB()).then(res => console.log('CT002: Resultado da promise COM wrap: ', res))
        cy.get(btnPesquisaGoogle).then(() => console.log('CT002: Segundo'))
    })
})