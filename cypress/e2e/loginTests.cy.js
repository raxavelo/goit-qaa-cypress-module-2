describe("Login tests", () => {
  it("Test 1: Login without usage of self created command", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.get("button[type=submit]").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get("button").contains("Log out").click();
  });

  it("Test 2: Login with usage of self created command", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("user888@gmail.com", "1234567890");
    cy.logout();
  });
});
