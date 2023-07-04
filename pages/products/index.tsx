import { NextPage, GetServerSideProps } from "next";
import axios from "axios";
import { dehydrate } from "react-query";

// templates
import ProductsTemplate from "@templates/products/ProductsTemplate";

// type
import { ProductVO } from "@type/products/products";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";

// api
import { ProductApi } from "@api/product";

interface ProductsType {
  products: {
    page: number;
    totalPage: number;
    productItems: ProductVO[];
  };
}

// 상품 리스트 페이지
const Products: NextPage<ProductsType> = ({ products }) => {
  return <ProductsTemplate products={products} />;
};

export default Products;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const params = { search: { page: context.query.page } };
    const res = await queryClient.fetchQuery([queryKeys.product], () => ProductApi().getCoupons(), {
      ...commonOptions,
    });

    console.log(res);

    return {
      props: {
        products: JSON.parse(JSON.stringify(res.data)),
        // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/error",
        statusCode: 307,
      },
    };
  } finally {
    queryClient.clear();
  }
};
