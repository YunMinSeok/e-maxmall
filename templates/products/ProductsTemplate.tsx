import { useRouter } from "next/router";
import { useQuery } from "react-query";

// components
import Pagination from "@components/pagination/Pagination";
import ProductItem from "@components/products/ProductItem";
import ProductFilter from "@components/products/ProductFilter";
import Header from "@components/common/Header";

// css
import { ProductsWrap, ProductSection } from "@styles/products/products";

// type
import { ProductVO, ProductItemVO } from "@type/product/product";
import { getProductPropsType } from "@constant/searchSort";
// api
import { getProduct } from "@api/product";
// query
import { queryKeys, commonOptions } from "@query/constant";

const ProductsTemplate = ({ products }: ProductVO) => {
  const router = useRouter();

  const handleFilter = (value: string) => {
    const newQuery = {
      ...router.query,
      ...Object.fromEntries(new URLSearchParams(`sort=${value}`)),
    };
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const { data } = useQuery(
    [queryKeys.product, router.query],
    () =>
      getProduct({
        page: String(router.query.page || 1),
        sort: String(router.query.sort || "desc"),
      }),
    {
      initialData: products,
      ...commonOptions,
    },
  );

  return (
    <ProductsWrap>
      <Header title={"상품 목록페이지"} />
      <ProductFilter state={String(router.query.sort || "desc")} onChange={handleFilter} />
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
