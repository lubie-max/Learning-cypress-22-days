// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("addProduct" , (product) => { 

    cy.get('h4.card-title a').each((elm , index , list)=>{
        if(elm.text().includes(product)){
          // cy.log(elm.text(), index) //sake of debugging
          cy.get('button.btn.btn-info').eq(index).click()
        }
      })
 })


 // Selecting country at checkout
 Cypress.Commands.add("selectCountry",(countryName)=>{

  cy.get('.suggestions').each((el , i , list)=>{

    if(el.text().includes(countryName)){
      cy.get('.suggestions li').eq(i).click()
    }
  })
 })


 
 Cypress.Commands.add("LoginAPI",()=>{
   // https://rahulshettyacademy.com/api/ecom/auth/register
  cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
  {userEmail: "shabana@mail.com", userPassword: "IamLubie9899"}).then((res)=>{
    expect(res.status).to.eq(200)

    Cypress.env('token',res.body.token)
    
    
  })
  
 })

 
 
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })