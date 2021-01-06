import loc from './locators'

Cypress.Commands.add('gui_login', (username, password) => {
    cy.get(loc.LOGIN.IPT_USERNAME)
        .type(username)
        .should('have.value', username)

    cy.get(loc.LOGIN.IPT_PASSWORD)
        .type(password, { log: false })
        .should('have.value', password)

    cy.get(loc.LOGIN.BTN_SIGN_IN)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('gui_preencher_campo', (locator, texto) => {
    cy.get(locator)
        .clear({ force: true })
        .type(texto)
        .should('have.value', texto)
})

Cypress.Commands.add('gui_selecionar_opcao', (locator, opcaoTexto, opcaoValor) => {
    cy.get(locator)
        .should('be.visible')
        .select(opcaoValor ? opcaoValor : opcaoTexto)

    cy.get(locator.concat(` option[value='${opcaoValor}']`))
        .eq(0)
        .should('have.text', opcaoTexto)
})

Cypress.Commands.add('gui_clicar', (locator) => {
    cy.get(locator)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('gui_clicar_com_espera_fixa', (locator, tempoMs) => {
    cy.get(locator)
        .should('be.visible')
        .click()

    cy.wait(tempoMs)
})

Cypress.Commands.add('gui_aguardar_renderizar_tabela', (tableLocator, quantidade) => {
    cy.get(tableLocator).should('have.length.at.least', quantidade)
})

Cypress.Commands.add('gui_verificar_mensagem', (locator, mensagem) => {
    cy.get(locator)
        .should('be.visible')
        .invoke('text')
        .then(text => expect(text.trim()).to.be.equal(mensagem))
})