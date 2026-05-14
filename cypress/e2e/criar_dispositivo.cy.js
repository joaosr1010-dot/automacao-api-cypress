describe ('Criar dispositivo', () =>{

    it ('criar novo dispositivo', () =>{

        cy.request ({
            method: 'Post',
            url:'https://api.restful-api.dev/objects',

            body: {
                name: 'Notebook QA',
                data:{
                    year: 2005,
                    price: 5000,
                }
            }
        })
        .then ((resposta) =>{

            expect (resposta.status).to.equal (200)
            expect (resposta.body.name).to.equal ('Notebook QA')

            cy.log('ID criado: ' + resposta.body.id)
            
        })   
         
    })
})