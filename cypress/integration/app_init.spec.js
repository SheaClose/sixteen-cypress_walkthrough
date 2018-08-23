describe("On Page Init", () => {
  const GET_BEER = "Get Beer";
  beforeEach(() => cy.visit("http://localhost:3000"));

  it("Shouldn't do much", () => {
    expect(true).to.equal(true);
  });
  it("Loads the page", () => {});
  it("Should auto focus on input", () => {
    cy.focused().should("exist");
  });
  it("Should accept user input", () => {
    // cy.get("[data-cy-input]")
    //   .type(GET_BEER)
    //   .should("have.value", GET_BEER);
    cy.selectAndType("[data-cy-input]", GET_BEER);
  });
  it.only("Accepts new todo", () => {
    cy.selectAndType("[data-cy-input]", GET_BEER)
      .type("{enter}")
      .should("have.value", "");

    cy.get("[data-cy-list]")
      .should("have.length", 5)
      .last()
      .contains(GET_BEER);

    cy.get(".todos")
      .should("have.length", 5)
      .last()
      .find("[data-cy-delete]")
      .click();
  });
});
