// import { before } from "cypress/types/lodash";



before(function () {
    // "this" points at the test context object
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });