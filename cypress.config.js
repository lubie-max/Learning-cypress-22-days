const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {

        charts: true,
    
        reportPageTitle: 'Cypress Inline Reporter',
    
        embeddedScreenshots: true, 
    
        inlineAssets: true, //Adds the asserts inline
    
      },

  env:{
    url:"https://rahulshettyacademy.com/angularpractice/shop/"
  },
  e2e: {
   
    setupNodeEvents,
    specPattern:'cypress/integration/examples/BDD/ecommerce/*.feature',
  },
  projectId: "izo6ac",
  
});
