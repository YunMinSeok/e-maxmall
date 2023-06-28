import axios from "axios";
// components
import Pagination from "@components/pagination/Pagination";
import ProductsItem from "@components/products/ProductsItem";

// css
import { ProductsWrap } from "@styles/products/products";

// type
import { ProductVO } from "@type/products/products";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";
interface ProductsTemplateType {
  products: {
    page: number;
    totalPage: number;
    productItems: ProductVO[];
  };
}

const ProductsTemplate = ({ products }: ProductsTemplateType) => {
  const { page, totalPage, productItems } = products;

  const getProduct = async () => {
    const params = { search: { page: page } };
    await queryClient.fetchQuery(
      [queryKeys.product],
      () => axios.get("http://localhost:3000/api/products", { params }),
      {
        ...commonOptions,
      },
    );
  };
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
