import { faker } from '@faker-js/faker'

describe('Criar dispositivo', () => {

    it('Criar dispositivo', () => {

        const nomeDispositivo = faker.commerce.productName()

        cy.criarDispositivo(nomeDispositivo)

        .then((resposta) => {

            expect(resposta.status).to.equal(200)
            expect(resposta.body.name).to.equal(nomeDispositivo)
            expect(resposta.body.id).to.not.be.null
            cy.log('Nome gerado: ' + nomeDispositivo)
            cy.log('ID criado: ' + resposta.body.id)

        })

    })

})