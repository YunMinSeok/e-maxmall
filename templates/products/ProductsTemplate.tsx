// components
import ProductsItem from "@components/products/ProductsItem";

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
      <div className="section-title">
        <span>상품 목록페이지</span>
      </div>
      <div className="section-content">
        {products.map(product => {
          return <ProductsItem product={product} />;
        })}
      </div>
    </ProductsWrap>
  );
};

export default ProductsTemplate;
