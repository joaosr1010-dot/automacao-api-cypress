

describe('Buscar dispositivo', () => {

    it('Buscar dispositivo existente', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/6'
        })

            .then((resposta) => {

                expect(resposta.status).to.equal(200)
                expect(resposta.body.id).to.equal('6')
                expect(resposta.body.name).to.equal('Apple AirPods')

            })

    })

    it('Buscar dispositivo inexistente', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/999999',
            failOnStatusCode: false
        })
            .then((resposta) => {

                expect(resposta.status).to.equal(404)
            })


    })

/*         it ('Buscar dispositivo atualizado', () => {
      
              cy.request ({
                  method: 'GET',
                  url: 'https://api.restful-api.dev/objects/ff8081819d82fab6019e69aa275e0782',
              })
              .then ((resposta) =>{
                  expect (resposta.status).to.equal (200)
                  expect (resposta.body.name).to.equal ('Frozen Rubber Salad')
              })
          })*/
 
   it('Buscar dispositivo deletado', () => {
 
        const idDispositivo = 'ff8081819d82fab6019e69aa275e0782'
        const nomeDispositivo = 'Frozen Rubber Salad'
 
        cy.request({
 
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${idDispositivo}`,
            failOnStatusCode: false
        })
 
            .then((resposta) => {
 
                expect(resposta.status).to.equal(404)
                cy.log('ID deletado: ' + idDispositivo)
                cy.log('Nome deletado: ' + nomeDispositivo)
 
            })
 
    })

    it('Listar dispositivos com validação de array', () => {

        cy.buscarDispositivos().then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body).to.be.an('array')
            expect(resposta.body.length).to.be.greaterThan(0)

            resposta.body.forEach((item) => {

                expect(item.id).to.not.be.null
                expect(item.name).to.not.be.null
                cy.log(`ID: ${item.id} | Nome: ${item.name}`)

            })

        })

    })
})
