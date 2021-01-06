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

        /**
         * Acessa menu: alteração de senha do usuário
         */
        gui_acessar_menu_alteracao_senha(): Chainable<any>

        /**
         * Preenche um campo do tipo input, com o texto passado por parâmetro e valida o campo.
         * @example
         * cy.gui_preencher_campo('#nmCliente', 'Thairam Michel')
         * @param locator locator do campo que será preenchido
         * @param texto texto que será preenchido
         */
        gui_preencher_campo(locator, texto)

        /**
         * Seleciona em um elemento do tipo select a opção passada por parâmetro de acordo com o texto
         * e valida a seleção de acordo com o valor da opção.
         * @example
         * cy.gui_selecionar_opcao('#selectEstadoCivil', 'Casado', '1')
         * @param locator locator do campo do tipo select ao qual será selecionada a opção
         * @param opcaoTexto texto da opção que será selecionada
         * @param opcaoValor valor (propriedade html value) da opção que será selecionada
         */
        gui_selecionar_opcao(locator, opcaoTexto, opcaoValor)

        /**
         * Clica em um determinado botão/elemento de acordo com o locator passado por parâmetro.
         * @example
         * cy.gui_clicar_botao('#btnSalvar')
         * @param locator locator do botão/elemento que será clicado
         */
        gui_clicar(locator)

        /**
         * Clicar em um determinado botão/elemento e esperar um determinado tempo
         * @description adiciona uma espera para que os elementos sejam renderizados
         * @param locator locator do botão/elemento que será clicado
         * @param espera tempo de espera em milisegundos
         */
        gui_clicar_com_espera_fixa(locator, espera)

        /**
         * Verificar mensagem exibida no toast.
         * @example
         * cy.gui_verificar_mensagem_toast('.toast-message', 'solicitação gravada com sucesso')
         * @param locator locator do toast em que será verificada a mensagem
         * @param mensagem mensagem exibida no toast
         */
        gui_verificar_mensagem(locator, mensagem)

        /**
         * Espera até que a tabela contenha uma determinada quantidade de registros
         * @param tableLocator locator da tabela
         * @param quantidade quantidade de registros (linhas)
         */
        gui_aguardar_renderizar_tabela(tableLocator, quantidade)        
    }
}