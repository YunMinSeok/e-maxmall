// components
import Pagination from "@components/pagination/Pagination";
import ProductsItem from "@components/products/ProductsItem";

// css
import { ProductsWrap } from "@styles/products/products";

// type
import { ProductVO } from "@type/products/products";

interface ProductsTemplateType {
  products: {
    page: number;
    totalPage: number;
    productItems: ProductVO[];
  };
}

const ProductsTemplate = ({ products }: ProductsTemplateType) => {
  const { page, totalPage, productItems } = products;
  console.log(page);
  return (
    <ProductsWrap>
      <div className="section-title">
        <span>상품 목록페이지</span>
      </div>
      <div className="section-content">
        {productItems.map(product => {
          return <ProductsItem key={product.item_no} product={product} />;
        })}
      </div>
      <Pagination page={page} totalPage={totalPage} />
    </ProductsWrap>
  );
};

export default ProductsTemplate;
