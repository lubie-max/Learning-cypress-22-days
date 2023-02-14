/// <reference types="Cypress" />
// import { should } from "chai"
import ShopObjects from "../PageObjects/ShopObjects";

describe("Fixture,JSON with custom commands ", () => {
  // initializing obj of ShopeObjects class
  const shop = new ShopObjects();

  // arrow functions are not supported by hooks so in it() too. use simple functions

  before(function () {
    // "this" points at the test context object
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  it("Add Products", function () {

    // Cypress.config().defaultCommandTimeout(8000)

    cy.visit("https://rahulshettyacademy.com/angularpractice/shop/");

    //   this is not gonna work. 'products' is an array. need to iterate it.

    this.data.products.map((element) => {
      cy.addProduct(element);
      cy.log(element);
    });

    
    // making products purchased
    //click checkout btn
    shop.clickCheckOutButton().click();

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

      // cy.log(sum, comVal)
    })


    // cy.pause()


    shop.goForCheckOut().click()


    shop.getCountry().type("Ind");
    cy.wait(2000)

    // // costum command selectCountry(). 
    cy.selectCountry(this.data.country);
    // cy.wait(2000);

    shop.checkAgreeWithTNC().click({force:true});

    shop.goForPerchase().click();
   
    cy.get(".alert").then((element) => {
      cy.log("Purchased successfully!");
      expect(element.text().includes("Success")).to.be.true;
    });


      // sample testing 
    // shop.goForContinueShopping().click();
    // shop.clickCheckOutButton().click();
    // shop.goForContinueShopping().click();
    // cy.addProduct("Nokia");
    // shop.clickCheckOutButton().click();
    // shop.goForCheckOut();
    // shop.goForPerchase().click();
    
  });
});
