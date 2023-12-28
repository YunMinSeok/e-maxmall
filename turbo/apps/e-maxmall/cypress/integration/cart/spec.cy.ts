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
    // 장바구니 이동 완료
    expect(cy.url().should("eq", Cypress.config().baseUrl! + "/cart"));
    // 담은 상품 갯수가 3개가 맞는지 확인
    expect(cy.get(".cartTable-itemWrap").should("have.length", 3));
  });

  it("장바구니 상품 선택", () => {
    // 상품 전체선택 클릭
    cy.get("input.all-item-select").click();
    cy.get('td.product-select-event input[type="checkbox"]').each($checkbox => {
      // 각각의 checkbox가 체크되어 있는지 확인
      expect($checkbox).to.be.checked; // 체크되어 있는지 확인
    });
  });

  it("상품 수량 변경하기", () => {
    // 첫번째 상품 수량 3으로 변경
    cy.get(".quantity-select").eq(0).select("3");
    expect(cy.get(".quantity-select").eq(0).should("have.value", "3"));

    // 2번째 상품 수량 6로 변경
    cy.get(".quantity-select").eq(0).select("6");
    expect(cy.get(".quantity-select").eq(0).should("have.value", "6"));

    // 3번째 상품 수량 6로 변경
    cy.get(".quantity-select").eq(0).select("9");
    expect(cy.get(".quantity-select").eq(0).should("have.value", "9"));
  });

  it("쿠폰 선택하기", () => {
    // 쿠폰 1500원 선택
    cy.get("select.coupon-select").select("1500원 할인");
    expect(cy.get("select.coupon-select").should("have.value", "1500원 할인"));

    // 쿠폰 10% 선택
    cy.get("select.coupon-select").select("10% 할인");
    expect(cy.get("select.coupon-select").should("have.value", "10% 할인"));
  });
});
