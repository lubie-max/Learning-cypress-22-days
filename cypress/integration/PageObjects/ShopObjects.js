class ShopObjects{

    clickCheckOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    goForCheckOut(){
        return cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
    }

    goForContinueShopping(){
        return cy.get(':nth-child(4) > .btn')
    }

    getCountry(){
        return cy.get('#country')
    }
    checkAgreeWithTNC(){
        return cy.get('label[for="checkbox2"]')
    }

    goForPerchase(){
        return cy.get('.ng-untouched > .btn').click()
    }
}

export default ShopObjects

