import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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

//image
import Cart from "@images/icon/shopping_cart.png";
interface ProductsTemplateType {
  products: {
    page: number;
    totalPage: number;
    productItems: ProductVO[];
  };
}

const ProductsTemplate = ({ products }: ProductsTemplateType) => {
  const { page, totalPage, productItems } = products;

  queryClient.fetchQuery(
    [queryKeys.product, page],
    () => axios.get("http://localhost:3000/api/products", { params: { search: { page: page } } }),
    {
      ...commonOptions,
    },
  );

  return (
    <ProductsWrap>
      <div className="section-title">
        <span>상품 목록페이지</span>
        <Link href={"/cart"} className="cart-icon">
          <Image src={Cart} alt="장바구니 아이콘" width={35} height={35} />
        </Link>
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
