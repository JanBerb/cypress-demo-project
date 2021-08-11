export class HomePage {

    //visiting website
    navigate(url) {
        cy.visit(url);
    }

    //choosing category from menu
    chooseFromMenu(subject) {
        cy.contains(subject).click();
    }

}