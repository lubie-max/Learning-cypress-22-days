// cypress is asynchronous in nature but follows synchronouse
// fashion for the code. cypress itself acts as a wrapper and supports synchronous fashion.


describe('My First test case Suite', function(){
    it('my first case',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)

        // not recommended way
        cy.get('.product:visible').should('have.length',4)

        // parent child chaining
        cy.get('.products').find('.product').should('have.length',4)

        // clicking on 2nd item
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($l,index,$list)=>{
            const element = $l.find('h4.product-name').text()
            if(element.includes('Carrot')){
                    // good practice
                cy.wrap($l).find('button').click()
                // bad practice
                // $l.find('button').click()
                cy.log('l',$l.text())
            }     
        })



// in cypress, every cypress command  returns a promise. 

//  this following command will throw an error. as elm is not resolved or returned
        // cy.log(elm.text())

//  but following cy.log(elmVal) will not throw an error cause promise got resolved with .then()
// P.S .text() is not a cypress command it's jQuery command.
        const elm = cy.get('.brand').then((elmVal)=>{
                cy.log(elmVal.text())
        })

       

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
})