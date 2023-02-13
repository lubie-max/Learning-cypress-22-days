/// <reference types="Cypress" />
// import { should } from "chai"
import ShopObjects from "../PageObjects/ShopObjects"

describe('Fixture,JSON with custom commands ', () => {
  // initializing obj of ShopeObjects class
  const shop = new ShopObjects

    // arrow functions are not supported by hooks so in it() too. use simple functions
  
      before( function() {
        // "this" points at the test context object
        cy.fixture('example').then((data) => {
          this.data = data
        })
      })
    
      it('Add Products',function(){

      cy.visit('https://rahulshettyacademy.com/angularpractice/shop/')

    //   this is not gonna work. 'products' is an array. need to iterate it.
    
    this.data.products.map((element)=> {

          cy.addProduct(element)
        cy.log(element)
        
      });

    // making products purchased

    //click checkout btn

    shop.clickCheckOutButton().click()
    
    shop.goForContinueShopping().click()
    shop.clickCheckOutButton().click()
    shop.goForContinueShopping().click()
    cy.addProduct('Nokia')
    shop.clickCheckOutButton().click()
    shop.goForCheckOut()
    shop.goForPerchase().click()
    shop.getCountry().type('Ind')
    cy.wait(2000)


   
// costum commands.
    cy.selectCountry(this.data.country)
    cy.wait(1000)

    shop.checkAgreeWithTNC().click()

    shop.goForPerchase()
   
    // cy.get('.alert').should('include',"Success! Thank you! Your order will be delivered in next few weeks :-).")
   

    cy.get('.alert').then(()=>{
      cy.log("Perchased successfully!")
      cy.get('.alert').text()
    })
    




     


      })



})