import { NextPage, GetServerSideProps } from "next";
import { dehydrate } from "react-query";

// templates
import ProductsTemplate from "@templates/products/ProductsTemplate";

// type
import { ProductVO } from "@type/products/products";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";

// api
import getProduct from "@api/product";

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
    const res = await queryClient.fetchQuery(
      [queryKeys.product, context.query.page],
      () => getProduct(String(context.query.page)),
      {
        ...commonOptions,
      },
    );

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
        destination: "/products",
        statusCode: 307,
      },
    };
  } finally {
    queryClient.clear();
  }
};
