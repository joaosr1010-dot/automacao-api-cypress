describe('Deletar dispositivo', () => {

  it('Deletar dispositivo criado', () => {

    const idDispositivo = 'ff8081819d82fab6019e74012bca191c'

    // BUSCA O NOME DO PRODUTO
    cy.request({

      method: 'GET',
      url: `https://api.restful-api.dev/objects/${idDispositivo}`

    })
      .then((getResposta) => {

        const nomeDispositivo = getResposta.body.name

        // EXECUTA DELETE
        cy.deletarDispositivo(idDispositivo)

          .then((deleteResposta) => {

            expect(deleteResposta.status).to.equal(200)
            cy.log('ID deletado: ' + idDispositivo)
            cy.log('Nome deletado: ' + nomeDispositivo)

          })

      })

  })

})