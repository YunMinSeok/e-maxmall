describe("template spec", () => {
  before(() => {
    cy.visit("/products");
  });
  it("페이지 확인용", () => {
    cy.contains("span", "상품 목록페이지").should("be.visible");
  });
});
