describe("Home page", () => {
  it("Banner exists", () => {
    cy.visit("http://localhost:1313");
    cy.get(".section.homePicture img");
  });
});
