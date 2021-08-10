export class HomePage {

    navigate(url) {
        cy.visit(url);
    }
    chooseFromMenu(subject) {
        cy.contains(subject).click();
    }

}