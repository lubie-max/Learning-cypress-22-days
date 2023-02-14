class ShopObjects{

    clickCheckOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    goForCheckOut(){
        return cy.get('button.btn-success')
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
        return cy.get('.ng-untouched > .btn')
    }
}

export default ShopObjects

