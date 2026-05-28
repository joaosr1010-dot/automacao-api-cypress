// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('buscarDispositivos', () => {

    return cy.request({

        method: 'GET',

        url: 'https://api.restful-api.dev/objects'

    })

})

Cypress.Commands.add('criarDispositivo', (nomeDispositivo) => {

    return cy.request({

        method: 'POST',

        url: 'https://api.restful-api.dev/objects',

        body: {

            name: nomeDispositivo

        }

    })

})

Cypress.Commands.add('atualizarDispositivo', (idDispositivo, nomeAtualizado) => {

    return cy.request({

        method: 'PUT',

        url: `https://api.restful-api.dev/objects/${idDispositivo}`,

        body: {

            name: nomeAtualizado

        }

    })

})

Cypress.Commands.add('deletarDispositivo', (idDispositivo) => {

    return cy.request({

        method: 'DELETE',

        url: `https://api.restful-api.dev/objects/${idDispositivo}`

    })

})