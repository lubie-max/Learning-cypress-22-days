/// <reference types="Cypress" />

describe('Fixture,JSON with custom commands ', () => {

    // arrow functions are not supported by hooks so in it() too. use simple functions
  
      before( function() {
        // "this" points at the test context object
        cy.fixture('example').then((data) => {
          this.data = data
        })
      })
    
      it('Add Products',function(){

      cy.visit('https://rahulshettyacademy.com/angularpractice/shop/')

    //   this is not gonna work. 'products' is an array
    
    this.data.products.map((element)=> {

          cy.addProduct(element)
        cy.log(element)
        
      });
     


      })



})