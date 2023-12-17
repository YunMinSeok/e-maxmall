import { getProduct } from "@api/product";

describe("template spec", () => {
  let products;

  before(() => {
    cy.visit("/products");
  });
  it("페이지 확인용", () => {
    cy.contains("span", "상품 목록페이지").should("be.visible");
  });

  it("React Query로 데이터가 성공적으로 렌더링되었는지 확인하기", async () => {
    // React Query로 데이터를 받아온 후 렌더링되는 요소를 확인합니다.
    products = await getProduct({ page: "1", sort: "desc", size: "5" });
    // products 값이 초기값이 아닌지 확인
    expect(products).not.to.be.undefined;
    expect(products).not.to.be.null;
    // products 값이 있는지 확인
    expect(products.productItems).to.exist;
  });
});
