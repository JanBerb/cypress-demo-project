export class WomenCategory {

    //choosing item from women category
    chooseItem(item) {
        cy.contains(item).click();
    }


}