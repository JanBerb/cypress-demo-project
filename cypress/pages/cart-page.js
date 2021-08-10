export class CartPage {

    checkProducts(qantity) {
        cy.get('#summary_products_quantity').should('contain', qantity);
    }
    checkTotalProductPrice(totalPRoductPrice) {
        cy.get('#total_product').should('contain', totalPRoductPrice);
    }
    nextStep() {
        cy.get('.cart_navigation > .button > span').click();
    }
    signIn(email, password) {
        cy.get('#email').type(email);
        cy.get('#passwd').type(password);
        cy.get('#SubmitLogin > span').click();
    }
    goToShipping() {
        cy.get('.cart_navigation > .button > span').click();
    }
    checkTos() {
        cy.get('#cgv').check();
    }
}