describe ('Atualizar dispositivo', () => {

    it ('Atualizar dispositivo existente', () => {

        cy.request({
            method: 'PUT',
            url: 'https://api.restful-api.dev/objects/ff8081819d82fab6019e24251750384c',

            body:{
                name:'Notebook QA Atualizado'
            }
        })
        .then ((resposta) => {

            expect (resposta.status).to.equal (200)
            expect (resposta.body.name).to.equal ('Notebook QA Atualizado')
        })
    })
})