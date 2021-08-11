export class CartPage {

    //checking if products qantity in cart is equal to assumed qantity
    checkProducts(quantity) {
        cy.get('#summary_products_quantity').should('contain', quantity);
    }

    //checking if total product price is equal to discounted price
    checkTotalProductPrice(totalProductDiscPrice) {
        cy.get('#total_product').should('contain', totalProductDiscPrice);
    }

    // going to next step of checkout
    nextStep() {
        cy.get('.cart_navigation > .button > span').click();
    }

    //signing in using email and password from variables
    signIn(email, password) {
        cy.get('#email').type(email);
        cy.get('#passwd').type(password);
        cy.get('#SubmitLogin > span').click();
    }

    //ticking (check();) checkbox terms of service
    tickTos() {
        cy.get('#cgv').check();
    }
}