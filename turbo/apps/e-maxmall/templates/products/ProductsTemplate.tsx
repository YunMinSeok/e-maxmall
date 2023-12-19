import { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

// components
import Pagination from "@components/pagination/Pagination";
import ProductItem from "@components/products/ProductItem";
import ProductFilter from "@components/products/ProductFilter";
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
  const params = useSearchParams();
  const pathname = usePathname();

  const paramsPage = String(params.get("page") || "1");
  const paramsSort = String(params.get("sort") || "desc");
  const paramsSize = String(params.get("size") || "5");

  const handleFilter = (type: string, value: string) => {
    const queryParams = new URLSearchParams(params);
    queryParams.set(type, value);
    router.push(pathname + "?" + queryParams);
  };

  const { data } = useQuery({
    queryKey: [queryKeys.product, paramsPage, paramsSort, paramsSize],
    queryFn: () =>
      getProduct({
        page: paramsPage,
        sort: paramsSort,
        size: paramsSize,
      }),
    initialData: products,
    ...commonOptions,
  });

  return (
    <ProductsWrap>
      <Header title={"상품 목록페이지"} />
      <ProductFilter sortState={paramsSort} sizeState={paramsSize} onChange={handleFilter} />
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
