Cypress.Commands.add("login", (email, password) => {
  cy.get("#user_email").type(email);
  cy.get("#user_password").type(password);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("#open-navigation-menu-mobile").click();
  cy.get("button").contains("Log out").click();
});
