describe("Stub test", () => {
  it("loads todos", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/todos",
      response: "fixture:todos"
    });
    // cy.route("/api/todos", "fixture:todos");
    cy.visit("/");
    cy.get("[data-cy-list]")
      .should("exist")
      .should("have.length", 4);
    // cy.server();
    // cy.route("https://localhost:3000/api/todos", [{ id: 1, title: "Pat" }]);
  });

  it("should post new todo", () => {
    cy.fixture("todos").then(todos => {
      cy.server();
      cy.route({
        method: "POST",
        url: "/api/todos",
        body: todos
      });
    });
  });
});
