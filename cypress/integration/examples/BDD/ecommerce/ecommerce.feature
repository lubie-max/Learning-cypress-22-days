# import {When, Then} from "@badeball/cypress-cucumber-preprocessor"
# const { When, Then, Given, Scenario, And } = require("@badeball/cypress-cucumber-preprocessor");

# import "../step_definitions"

Feature: Validating shop page

    Validating items in cart and Purchase the items

    Scenario: Add , Validate and Purchase items.
    Given I open Ecommerce Page
    When I add items to cart
    And Validate the price of items
    Then select a country and purchase items.


    Scenario: Fill the form.
    Given I open Ecommerce Page
    When I fill the form
    |name|email|
    |Shabana|shabana@mail.com|
    Then Check minlength
