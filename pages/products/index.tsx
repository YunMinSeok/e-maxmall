import { NextPage, GetServerSideProps } from "next";
import { dehydrate } from "react-query";

// templates
import ProductsTemplate from "@templates/products/ProductsTemplate";

// type
import { ProductVO } from "@type/product/product";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";

// api
import { getProduct } from "@api/product";

// 상품 리스트 페이지
const Products: NextPage<ProductVO> = ({ products }) => {
  return <ProductsTemplate products={products} />;
};

export default Products;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const page = context.query.page ?? 1;
    const products = await queryClient.fetchQuery(
      [queryKeys.product, page],
      () => getProduct({ page: String(page), sort: "desc", size: "5" }),
      {
        ...commonOptions,
      },
    );

    return {
      props: {
        products: products.data,
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
};
