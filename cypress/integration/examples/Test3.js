/// <reference types="Cypress" />


describe('test three- new window and alert handling',()=>{

    it('alerts and child window ',()=>{

        cy.log('hi there')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        // alerts
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

            //  we can also make confirm alert with this method. jst by changing  the giving 
            //  alert event to confirm event 
        cy.on('window:alert',(str)=>{
            expect(str).equal('Hello , share this practice page and share your knowledge')
        })


        // handling new tabs 
        // cypress doesn't allow any new window access feature as other automation tools do.
        // so  we manually have to write  code to open new tab in same tab
        // we will use invoke method from cypress, which allows to call a function.
        // the given function will be removeAttr=> which is jQuery function, removes an attribute from targated element.

        cy.get('#opentab').invoke('removeAttr','target').click()



    })
})
