/// <reference types="Cypress" />


describe('test three- new window and alert handling',()=>{

    it('alerts and child window ',()=>{

        cy.log('hi there')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert',(str)=>{
            expect(str).equal('Hello , share this practice page and share your knowledge')
        })


    })
})
