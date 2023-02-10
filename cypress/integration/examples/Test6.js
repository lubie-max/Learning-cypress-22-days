/// <reference types="Cypress" />
import 'cypress-iframe'

describe('IFrames handle',()=>{

    it('1st test',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // there is a package to handle iframes in cypress. and that's 
    // cypress-iframes  to install it: >> npm i -D cypress-iframe
    // import 'cypress-iframe'

    
    cy.frameLoaded('#courses-iframe')

    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    // cy.iframe().find('')
    // cy.iframe().find("h1[class*='pricing-title']")
    
    })
})