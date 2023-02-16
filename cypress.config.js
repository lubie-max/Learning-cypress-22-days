const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url:"https://rahulshettyacademy.com/angularpractice/shop/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
  projectId: "izo6ac",
  
});
