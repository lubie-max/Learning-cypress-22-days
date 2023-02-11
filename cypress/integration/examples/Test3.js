/// <reference types="Cypress" />


describe('test three- new window and alert handling',()=>{

    it('alerts and child window ',()=>{

        cy.log('hi there')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        // cypress automatically handles the alerts.
        //  To insure that the alert got handled. used .on() function.
        //  which takes window events like alerts >>'window:alert' and a callback function which yeilds the response/returned value . 
        // then checked that recieved str equels to the given str (alert msg). 

        // alerts
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

            //  we can also make confirm alert with this method. jst by changing  the giving 
            //  alert event to confirm event 
        cy.on('window:alert',(str)=>{
            expect(str).equal('Hello , share this practice page and share your knowledge')
        })

        // 1st way
        // handling new tabs 
        // cypress doesn't allow any new window access feature as other automation tools do.
        // so  we manually have to write  code to open new tab in same tab
        // we will use invoke method from cypress, which allows to call a function.
        // the given function will be removeAttr=> which is jQuery function, removes an attribute from targated element.

        // cy.get('#opentab').invoke('removeAttr','target').click()
        // cy.url().should('include',"rahulshettyacademy")

        // 2nd way to open child tab [ with prop() of jQuery()]
            cy.get('#opentab').then((el)=>{
            const url = el.prop('href')
            cy.visit(url)
            cy.log(el)
        })

        // for going back to the previos page
        cy.go('back')

        // checking weather it is redirected or not. W
        cy.url().should('include',"Practice")






    })
})
