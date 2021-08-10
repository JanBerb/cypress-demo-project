export class WomenCategory {

    chooseItem(item) {
        cy.contains(item).click();
    }


}