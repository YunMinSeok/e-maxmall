"use client";

import { dehydrate } from "@tanstack/react-query";

// templates
import ProductDetailTemplate from "@templates/products/ProductsDetailTemplate";

// type
import { ProductItemVO } from "@type/product/product";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";
// api
import { getProductDetail, getAllProduct } from "@api/product";

interface ProductDetailType {
  product: ProductItemVO;
}

// get product detail data
async function fetchData(id: string) {
  try {
    const product = await queryClient.fetchQuery({
      queryKey: [queryKeys.productDetail, id],
      queryFn: () => getProductDetail(id),
      ...commonOptions,
    });
    return {
      product: product,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
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

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await fetchData(params.id);

  if (!product.product) return;

  return <ProductDetailTemplate product={product.product} />;
};

export default ProductDetail;
