/// <reference types="Cypress" />

describe('new test on all html inputs',()=>{

    it('testing shetty s site',()=>{

        cy.log('Hi there!')

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // checkboxes 
        cy.get('#checkBoxOption1').should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2'])
        cy.get('#checkBoxOption2').should('be.checked')

        //static dropdown
        cy.get('select').select('option3').should('have.value','option3')

        // dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($itm, index, $list)=>{
            if($itm.text()==='India'){
                cy.wrap($itm).click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')


        // dealing with invisible elemnt
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        // radio buttons
        
        cy.get('[value="radio2"]').check().should('be.checked')





    })
})