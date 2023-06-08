// css
import { ProductsWrap } from "@styles/products/products";

// type
import { ProductVO } from "@type/products/products";

interface ProductsTemplateType {
  products: ProductVO[];
}

const ProductsTemplate = ({ products }: ProductsTemplateType) => {
  console.log(products);
  return (
    <ProductsWrap>
      <div className="SectionTitle">
        <span>상품 목록페이지</span>
      </div>
    </ProductsWrap>
  );
};

export default ProductsTemplate;
