"use client";

// templates
import ProductsTemplate from "@templates/products/ProductsTemplate";

// type
import { ProductVO } from "@type/product/product";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";

// params
import { useSearchParams } from "next/navigation";

// api
import { getProduct } from "@api/product";

async function fetchData() {
  const params = useSearchParams();
  try {
    const page = params.get("page") ?? 1;
    const products: ProductVO = await queryClient.fetchQuery({
      queryKey: [queryKeys.product, page],
      queryFn: () => getProduct({ page: String(page), sort: "desc", size: "5" }),

      ...commonOptions,
    });

    return {
      props: {
        products: products,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/products",
        statusCode: 307,
      },
    };
  } finally {
    queryClient.clear();
  }
}

// 상품 리스트 페이지
const Products = async () => {
  const products = await fetchData();
  return <ProductsTemplate products={products.props!.products.products} />;
};

export default Products;
