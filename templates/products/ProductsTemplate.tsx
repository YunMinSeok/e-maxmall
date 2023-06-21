// components
import Pagination from "@components/pagination/Pagination";
import ProductsItem from "@components/products/ProductsItem";

// css
import { ProductsWrap } from "@styles/products/products";

// type
import { ProductVO } from "@type/products/products";

interface ProductsTemplateType {
  products: ProductVO[];
}

const ProductsTemplate = ({ products }: ProductsTemplateType) => {
  return (
    <ProductsWrap>
      <div className="section-title">
        <span>상품 목록페이지</span>
      </div>
      <div className="section-content">
        {products.map(product => {
          return <ProductsItem key={product.item_no} product={product} />;
        })}
      </div>
      <Pagination />
    </ProductsWrap>
  );
};

export default ProductsTemplate;
