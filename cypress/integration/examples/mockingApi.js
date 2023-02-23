/// <reference types="Cypress" />


describe('mocking APS',()=>{

    it('testing shetty s site',()=>{

        cy.log('Hi there!')
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        //cy.intercept({requestValue},{responseValue}) and this method yeilds a promise

        cy.intercept({
            method:'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'},
            {
                statusCode:200,
                body:[
                    {"book_name":"RobotFramework","isbn":"984353","aisle":"982053pop"}
                ]
            }).as('result') // stored the yeilded result with .as() method as result

            cy.get('.btn-primary').click()
            cy.wait('@result').then(({request, response})=>{
                cy.log(request.headers ,response.body.length)
                cy.get('tr').should('have.length',response.body.length+1)
            })

            cy.get('p').should('have.text',"Oops only 1 Book available")


    })
})

