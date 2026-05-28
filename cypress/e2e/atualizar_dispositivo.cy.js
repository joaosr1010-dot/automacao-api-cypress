import { faker } from '@faker-js/faker'

describe('Atualizar dispositivo', () => {

    it('Atualizar dispositivo criado', () => {
        const nomeAtualizado = faker.commerce.productName()
        const idDispositivo = 'ff8081819d82fab6019e69aa275e0782'

        // BUSCA O NOME ANTIGO
        cy.request({
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${idDispositivo}`

         })

        .then((getResposta) => {
            const nomeAntigo = getResposta.body.name

            // EXECUTA O PUT
            cy.atualizarDispositivo(idDispositivo, nomeAtualizado)

            .then((putResposta) => {

                expect(putResposta.status).to.equal(200)
                expect(putResposta.body.name).to.equal(nomeAtualizado)
                cy.log('Nome antigo: ' + nomeAntigo)
                cy.log('Nome atualizado: ' + nomeAtualizado)
                cy.log('ID atualizado: ' + idDispositivo)

            })

        })

    })

})