/// <reference types="Cypress" />


describe('mocking APS',()=>{

    it('testing shetty s site',()=>{

        cy.log('Hi there!')
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

//   `cy.intercept('method','url',req()) `
  // cy.intercept()
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
         (req)=>{

            //if following updated link is fetching details then this is a bug at backend.
            req.url ="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=khan"
            req.continue((req)=>{
                    // cy.log(req)
            })

        }).as('dummyUrl')

        cy.get('.btn-primary').click()

        cy.wait('@dummyUrl')



    })
})

