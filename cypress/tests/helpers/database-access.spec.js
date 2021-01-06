describe('Acessando banco de dados', () => {
    it.only('Obtendo os dados da tabela de um banco de dados Mysql', () => {
        cy.task('queryDb', 'SELECT * FROM categoria').then(res => {
            res.forEach(categoria => cy.log(`Código: ${categoria.codigo} | Nome: ${categoria.nome}`))
        })
    })
})