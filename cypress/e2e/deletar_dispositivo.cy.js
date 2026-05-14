describe('Deletar Dispositivo', () => {

  it('Deletar dispositivo criado', () => {

    cy.request({
      method: 'DELETE',

      url: 'https://api.restful-api.dev/objects/ff8081819d82fab6019e23f1ff87382c'

    })

    .then((resposta) => {

      expect(resposta.status).to.equal(200)

    })

  })

})
