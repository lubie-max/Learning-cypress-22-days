/// <reference types="Cypress" />
import HomeObjects from "../PageObjects/HomeObjects";

describe("fixtures", () => {
  const home = new HomeObjects();

  // arrow functions are not supported by hooks so in it() too.

  before(function () {
    // "this" points at the test context object
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  it("Json fixture", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.log(this.data.name);

    home.getName().eq(0).type(this.data.name);
    home.getEmail().type(this.data.email);
    cy.get('input[type="password"]').type(this.data.password);
    home.getGender().select(this.data.gender);
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').should("be.checked");

    // checking two way data binding
    cy.get(".ng-untouched").should("have.value", this.data.name);

    // checking minlen  of name
    cy.get(":nth-child(1) > .form-control").should(
      "have.attr",
      "minlength",
      "2"
    );

    //navigating to the shop
    home.navigateToShop().click();
    cy.get(".col-lg-9 > .row");

    // below code is converted to a costum command in support/commands.js >>addProduct()
    // cy.get('h4.card-title a').each((elm , index , list)=>{
    //   if(elm.text().includes("Blackberry")){
    //     cy.log(elm.text(), index)
    //     cy.get('button.btn.btn-info').eq(index).click()
    //   }
    // })

    cy.addProduct("iphone");

  });
});
