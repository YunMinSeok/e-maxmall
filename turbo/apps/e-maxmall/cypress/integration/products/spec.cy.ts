import { ProductVO } from "@type/product/product";
import { getProduct } from "@api/product";

describe("template spec", () => {
  let products: { productItems: ProductVO };

  before(async () => {
    cy.visit("/products");
    products = await getProduct({ page: "1", sort: "desc", size: "5" });
  });

  it("상품 페이지 확인용", () => {
    // 상품 목록 페이지으로 잘 들어왔는지 확인
    expect(cy.contains("span", "상품 목록페이지").should("be.visible"));
  });

  it("React Query로 데이터가 성공적으로 렌더링되었는지 확인하기", () => {
    // React Query로 데이터를 받아온 후 렌더링되는 요소를 확인합니다.
    // products 값이 초기값이 아닌지 확인
    expect(products).not.to.be.undefined;
    expect(products).not.to.be.null;
    // products 값이 있는지 확인
    expect(products.productItems).to.exist;
  });

  it("필터링 점수 부분 작동 잘하는지 확인", () => {
    // 필터링 점수 낮은순
    cy.contains("label", "점수 낮은순").click();
    expect(cy.url().should("include", "sort=asc"));

    // 필터링 점수 높은순
    cy.contains("label", "점수 높은순").click();
    expect(cy.url().should("include", "sort=desc"));
  });

  it("필터링 갯수 부분 작동 잘하는지 확인", () => {
    // 필터링 갯수 5개
    cy.get(".product_filter_wrap")
      .trigger("mouseover")
      // 5개씩 보기 글자가 포함된 li 요소 찾기
      .contains("5개씩 보기")
      // 클릭 이벤트 발생
      .click();

    expect(cy.url().should("include", "size=5"));

    // // 필터링 갯수 10개
    cy.get(".product_filter_wrap")
      .trigger("mouseover")
      // 10개씩 보기 글자가 포함된 li 요소 찾기
      .contains("10개씩 보기")
      // 클릭 이벤트 발생
      .click({ force: true });

    expect(cy.url().should("include", "size=10"));
  });

  it("페이지네이션 작동 잘하는지 확인", () => {
    // 페이지네이션 요소 선택하여 변수에 저장
    const pagination = cy.get(".pagination-list-wrap");
    // 예: 1초 기다림
    cy.wait(1000);
    // 변수를 이용해 "2" 텍스트를 포함한 링크 클릭
    pagination.contains("2").click();
    expect(cy.url().should("include", "page=2"));
  });
});
