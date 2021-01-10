describe('Database Acess', () => {
    it.only('Getting table data from a Mysql database', () => {
        cy.task('queryDb', 'SELECT * FROM categorias').then(res => {
            res.forEach(categoria => cy.log(`Código: ${categoria.id} | Nome: ${categoria.nome}`))
        })
    })
})