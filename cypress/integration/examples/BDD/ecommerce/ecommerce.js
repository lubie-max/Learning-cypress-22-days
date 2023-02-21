import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor"
import ShopObjects from "../../../PageObjects/ShopObjects" ;

const shop = new ShopObjects();


before(function () {
  // "this" points at the test context object
  cy.fixture("example").then((data) => {
    this.data = data;
  });
});

//   Given open Ecommerce Page

// Given("I open Ecommerce Page", function () {

//   return "pending";

// });

Given('I open Ecommerce Page' ,function(){
    // cy.visit(Cypress.env('url'))
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop/");

})

// When I add items to cart
When("I add items to cart", function(){
    // cy.visit("https://rahulshettyacademy.com/angularpractice/");

    this.data.products.map((element) => {
        cy.addProduct(element);
        cy.log(element);
      });

    shop.clickCheckOutButton().click();

})

// And Validate the price of items
When("Validate the price of items",()=>{

    
    //  validating the accurate price.
    let sum = 0
    cy.get('tr td:nth-child(4) strong').each((elm , i, list)=>{
      let elmVal = elm.text()
      var price = elmVal.split(" ")
      price = price[1]
      let newPrice = price.trim()
      sum+= Number(newPrice)
      cy.log( price, newPrice,sum)

    })

    cy.get('.text-right > h3').then((val)=>{
      let comVal = Number(val.text().split(" ")[1].trim())
      expect(comVal).to.equal(sum)

    })

    shop.goForCheckOut().click()

})


// Then select a country and purchase items.

Then("select a country and purchase items.",function(){

    shop.getCountry().type("Ind");
    cy.wait(2000)

    cy.selectCountry(this.data.country);

    shop.checkAgreeWithTNC().click({force:true});

    shop.goForPerchase().click();
   
    cy.get(".alert").then((element) => {
      cy.log("Purchased successfully!");
      expect(element.text().includes("Success")).to.be.true;
    });
})
