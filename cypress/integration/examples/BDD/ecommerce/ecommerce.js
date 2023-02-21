import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor"
import ShopObjects from "../../../PageObjects/ShopObjects" ;
import HomeObjects from "../../../PageObjects/HomeObjects" ;

const shop = new ShopObjects();
const home = new HomeObjects();



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
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

})

// When I add items to cart
When("I add items to cart", function(){
    // cy.visit("https://rahulshettyacademy.com/angularpractice/");
    home.navigateToShop().click();

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

//  Data Driven Scenario in Cucumber.
When('I fill the form',function(dataTable){
  home.getName().eq(0).type(dataTable.rawTable[1][0]);
    home.getEmail().type(dataTable.rawTable[1][1]);
    cy.get('input[type="password"]').type(this.data.password);
    home.getGender().select(this.data.gender);
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').should("be.checked");
    cy.get(".ng-untouched").should("have.value", dataTable.rawTable[1][0]);

})

Then('Check minlength',()=>{
  // checking minlen  of name
  cy.get(":nth-child(1) > .form-control").should(
    "have.attr",
    "minlength",
    "2"
  );
})