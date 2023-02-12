/// <reference types="Cypress" />

describe('User page', () => {

  // arrow functions are not supported by hooks so in it() too.

    before( function() {
      // "this" points at the test context object
      cy.fixture('example').then((data) => {
        // "this" is still the test context object
        this.data = data
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('has user',function(){
      cy.visit('https://rahulshettyacademy.com/angularpractice/')
      cy.log(this.data.name)

      cy.get('input[name="name"]').eq(0).type(this.data.name)
      cy.get('input[name="email"]').type(this.data.email)
      cy.get('input[type="password"]').type(this.data.password)
      cy.get('select').select(this.data.gender)
      cy.get('input[type="checkbox"]').check()
      cy.get('input[type="checkbox"]').should('be.checked')

      // checking two way data binding
      cy.get('.ng-untouched').should('have.value',this.data.name)

      // checking minlen  of name
      cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
      

    })
  })