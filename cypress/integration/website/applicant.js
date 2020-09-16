describe("Application FAQ", () => {
  const url = "http://localhost:1313/application-faq/";

  beforeEach(() => {
    cy.visit(url);
  });

  it("Sidebar navigation", () => {
    // check sidebar collapsing menus
    cy.get(".toc_active").should("not.exist");
    cy.get(".section_link").first().click();
    cy.get(".toc_active").should("exist");

    // check menu navigation
    cy.url().then((sidebarUrl) => {
      cy.get(".toc_active .toc_item").last().click();
      cy.get(".toc_active .toc_item a")
        .last()
        .invoke("attr", "href")
        .then((href) => {
          cy.url().should("eq", sidebarUrl + href);
        });
    });
  });
});
