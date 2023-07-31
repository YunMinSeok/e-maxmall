import { useRouter } from "next/router";
import { useQuery } from "react-query";

// components
import Pagination from "@components/pagination/Pagination";
import ProductItem from "@components/products/ProductItem";
import Header from "@components/common/Header";

// css
import { ProductsWrap, ProductSection } from "@styles/products/products";

// type
import { ProductVO, ProductItemVO } from "@type/product/product";

// api
import { getProduct } from "@api/product";
// query
import { queryKeys, commonOptions } from "@query/constant";

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
      <Header title={"상품 목록페이지"} />
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
