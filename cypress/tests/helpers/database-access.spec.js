describe('Database Acess', () => {
    it.only('Getting table data from a Mysql database', () => {
        cy.task('queryDb', 'SELECT * FROM categoria').then(res => {
            res.forEach(categoria => cy.log(`Código: ${categoria.codigo} | Nome: ${categoria.nome}`))
        })
    })
})