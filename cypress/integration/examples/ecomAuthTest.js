/// <reference types="Cypress" />


describe('testing auth',()=>{
    it('Auth test',()=>{
        // cy.visit('https://rahulshettyacademy.com/client/')
        cy.LoginAPI().then(()=>{

            cy.visit('https://rahulshettyacademy.com/client/',
            {

              
                onBeforeLoad:(window)=>{
                    window.localStorage.setItem('token', Cypress.env('token'))
                },
                
            })

            cy.log('hi', Cypress.env('token'))

        })

    })
})