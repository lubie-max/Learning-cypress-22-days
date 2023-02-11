/// <reference types="Cypress" />

describe('More Aboute Fixtures',()=>{

    it("first test", ()=>{

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]').eq(1).type('Lubna Shaikh')
        cy.get('input[name="email"]').type('ls@mail.com')
        cy.get("input[type='password']").type('12345678')
        cy.get('input[type="checkbox"').check()

    })
})