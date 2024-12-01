class HomePage {
  logoutUser() {
    cy.get("#open-navigation-menu-mobile").click();
    cy.get("button").contains("Log out").click();
  }
}

export default new HomePage();
