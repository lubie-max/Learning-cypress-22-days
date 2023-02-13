class HomeObjects{

    getName(){
        return cy.get('input[name="name"]')
    }
    getEmail(){
        return cy.get('input[name="email"]')
    }
    getGender(){
        return cy.get('select')
    }

    navigateToShop(){
        return cy.get(":nth-child(2) > .nav-link")
    }
}

export default HomeObjects