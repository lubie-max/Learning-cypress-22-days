/// <reference types="Cypress" />

const neatCsv= require("neat-csv")

describe('testing auth',()=>{
    let productName 
    it('Auth test',()=>{
    
        cy.LoginAPI().then(()=>{

            cy.visit('https://rahulshettyacademy.com/client/',
            {

              
                onBeforeLoad:(window)=>{
                    window.localStorage.setItem('token', Cypress.env('token'))
                },
                
            })

            // cy.log('hi', Cypress.env('token'))

            cy.get('.card button :last-of-type').eq(1).click()
            cy.wait(2000)
            cy.get(':nth-child(4) > .btn').click()
            
           

            cy.get(':nth-child(1) > h3').then((elm)=>{
                productName = elm.text()
                cy.log(productName)
            })
            // cy.pause()
            cy.get('.subtotal > ul > :nth-child(3) > .btn').click()
            cy.get('.form-group > .input').type('india')

            cy.get('.ta-results button').each(($e1, index, $list) => {

                if($e1.text()===" India")
                         {
                         cy.wrap($e1).click()
                     }
          
            })

            cy.wait(1000)
            cy.get('.btnn').click()
            cy.wait(1000)

            cy.get('tr .btn-primary').click()

            
            cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_shabana.csv")
            .then(async(text) =>{
                //    await cy.log(text)
                let csv = await neatCsv(text)
                cy.log("In in read file", csv)
                const actualProductCSV = csv[0]["Product Name"]

                expect(productName).to.equal(actualProductCSV)
            })

       



        })

    })
})