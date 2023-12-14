describe("template spec", () => {
  before(() => {
    cy.visit("/");
  });
  it("글자 확인용", () => {
    cy.contains("div", "메인 페이지").should("be.visible");
  });
});
