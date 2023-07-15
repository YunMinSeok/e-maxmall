import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

// components
import Pagination from "@components/pagination/Pagination";
import ProductItem from "@components/products/ProductItem";

// css
import { ProductsWrap, ProductSection } from "@styles/products/products";

// type
import { ProductVO, ProductItemVO } from "@type/product/product";

// api
import { getProduct } from "@api/product";
// query
import { queryKeys, commonOptions } from "@query/constant";

//image
import Cart from "@images/icon/shopping_cart.png";

const ProductsTemplate = ({ products }: ProductVO) => {
  const router = useRouter();

  const { data } = useQuery(
    [queryKeys.product, router.query.page],
    () => getProduct(String(router.query.page)),
    {
      initialData: products,
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
      <ProductSection>
        {data.productItems.map((product: ProductItemVO) => {
          return <ProductItem key={product.item_no} product={product} />;
        })}
      </ProductSection>
      <Pagination page={data.page} totalPage={data.totalPage} />
    </ProductsWrap>
  );
};

export default ProductsTemplate;
