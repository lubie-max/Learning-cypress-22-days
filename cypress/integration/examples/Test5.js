describe('handling mouse over', ()=>{
    it('Mouse Over',()=>{

     // cypress doesn't support mouse hovering, but has asset known as jQuery.

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // cy.get('.mouse-hover-content').invoke('show') // show JQuery function
    // cy.contains('Top').click()
    
    // 2nd way of handling 
    cy.contains('Top').click({force:true })
    
    cy.url().should('include','top') // assuaring the result

    })
})