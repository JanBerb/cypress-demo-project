export class ItemPage {

    //checks discount percentage, new price value and old price visibility and value
    checkDicount(discPerc, oldPrice, newPrice) {
        cy.get('#reduction_percent_display').should('contain', discPerc);
        cy.get('#old_price_display').should('be.visible').and('contain', oldPrice);
        cy.get('#our_price_display').should('contain', newPrice);
    }

    addToCart(checkout) {
        cy.get('.exclusive > span').click();
        if (checkout == true) {
            cy.get('.button-medium > span').click();
        } else {
            cy.get('.continue > span').click();
        }
    }
}