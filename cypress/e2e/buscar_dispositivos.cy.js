  

describe ('Buscar dispositivo', () => {

 /*   it('Buscar dispositivo existente', () =>{

        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/1'
         })

         .then ((resposta) =>{
         expect (resposta.status).to.equal(200)
         expect (resposta.body.id).to.equal('1')
         expect (resposta.body.name).to.equal('Google Pixel 6 Pro')
        
        })

    })

    it('Buscar dispositivo inexistente', () =>{

        cy.request({
            method:'GET',
            url: 'https://api.restful-api.dev/objects/999999',
             failOnStatusCode: false
         })
         .then((resposta) => {

            expect (resposta.status).to.equal (404)
         })
        
 
      })

    it ('Buscar dispositivo atualizado', () => {

        cy.request ({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/ff8081819d82fab6019e23f1ff87382c',
        })
        .then ((resposta) =>{
            expect (resposta.status).to.equal (200)
            expect (resposta.body.name).to.equal ('Notebook QA Atualizado')
        })
    })*/

    it('Buscar dispositivo deletado',() => {

        cy.request ({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/ff8081819d82fab6019e217b7fff3451',
             failOnStatusCode: false
        }) 
        .then((resposta)=>{
            expect(resposta.status).to.equal (404)
        })
    
        
    }) 
})    

