import { NextPage } from "next";

// css
import { ProductsWrap } from "@styles/products/products";

const Products: NextPage = () => {
  return (
    <ProductsWrap>
      <div className="SectionTitle">
        <span>상품 목록페이지</span>
      </div>
    </ProductsWrap>
  );
};

export default Products;
