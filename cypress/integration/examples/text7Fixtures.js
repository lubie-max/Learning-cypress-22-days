/// <reference types="Cypress" />


describe('More Aboute Fixtures',()=>{

    it("first test", ()=>{
        // fixtures are nothing but files which provides Test data for tast cases written in JSON format.


        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        // cy.get('input[name="name"]').eq(1).type(this.regdata.name)
        cy.get('input[name="email"]').type('ls@mail.com')
        cy.get("input[type='password']").type('12345678')
        cy.get('input[type="checkbox"').check()

    })
})