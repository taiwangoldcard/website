describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1313");
  });

  it("Banner exists", () => {
    cy.get(".section.homePicture img");
  });

  it("Can navigate to news page", () => {
    cy.get("#lastestNewsList").contains("Read More").click({ force: true });
    cy.get(".content").contains("Gold Card News");
  });

  it("Can navigate to applicant FAQ", () => {
    cy.scrollTo(0, 500);
    cy.contains("Access the FAQ").click({ force: true });
    cy.contains("Gold Card Application FAQ");
  });

  it("Can navigate to goldcard holders FAQ", () => {
    cy.scrollTo(0, 500);
    cy.contains("Resources for GoldCard holders").click({ force: true });
    cy.contains("Gold Card Holders FAQ");
  });
});
