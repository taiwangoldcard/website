describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1313");
  });

  it("Banner exists", () => {
    cy.get(".section.homePicture img");
  });

  it("Can navigate to news page", () => {
    cy.get("#lastestNewsList").contains("More News").click({ force: true });
    cy.get(".content").contains("Gold Card News");
  });

  it("Can navigate to applicant FAQ", () => {
    cy.contains("Access the FAQ").click({ force: true });
    cy.contains("Gold Card Application FAQ");
  });

  it("Can navigate to goldcard holders FAQ", () => {
    cy.contains("Resources for Gold Card holders").click({ force: true });
    cy.contains("Gold Card Holders FAQ");
  });

  it("Can search", () => {
    cy.get(".search_field").type("Taiwan")
    cy.get(".search_results").contains("Taiwan")
  })
});
