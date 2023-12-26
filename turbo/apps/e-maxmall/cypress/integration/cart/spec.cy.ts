describe("template spec", () => {
  before(() => {
    cy.visit("/products");
  });
  it("로그인 먼저 하기", () => {
    cy.get(".login-wrap").click();
    cy.get(".member-input").eq(0).type("yunminseok");
    cy.get(".member-input").eq(1).type("1234");
    cy.get(".login-button").click();
  });
  it("장바구니에 상품 담기", () => {
    // 첫번쨰꺼 클릭
    let productName: string = "";
    cy.get(".product-name")
      .eq(0)
      .invoke("text")
      .then(result => {
        productName = result;
      });
    cy.get(".product-cart-click-container").eq(0).trigger("mouseover").click();
    cy.on("window:alert", str => {
      expect(str).to.equal(`장바구니에 ${productName}을 담았습니다.`);
    });
    // 2번째꺼 클릭
    cy.get(".product-name")
      .eq(1)
      .invoke("text")
      .then(result => {
        productName = result;
      });
    cy.get(".product-cart-click-container").eq(1).trigger("mouseover").click();
    cy.on("window:alert", str => {
      expect(str).to.equal(`장바구니에 ${productName}을 담았습니다.`);
    });
    // 4번째꺼 클릭
    cy.get(".product-name")
      .eq(3)
      .invoke("text")
      .then(result => {
        productName = result;
      });
    cy.get(".product-cart-click-container").eq(3).trigger("mouseover").click();
    cy.on("window:alert", str => {
      expect(str).to.equal(`장바구니에 ${productName}을 담았습니다.`);
    });
  });
  it("장바구니 클릭시 이동", () => {
    cy.get(".cart-icon").click();
    expect(cy.url().should("eq", Cypress.config().baseUrl! + "/cart"));
  });
});
