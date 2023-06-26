import { NextPage, GetServerSideProps } from "next";
import axios from "axios";

// templates
import ProductsTemplate from "@templates/products/ProductsTemplate";

// type
import { ProductVO } from "@type/products/products";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";
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
    console.log(params);
    const res = await queryClient.fetchQuery(
      [queryKeys.product],
      () => axios.get("http://localhost:3000/api/products", { params }),
      {
        ...commonOptions,
      },
    );

    return {
      props: {
        products: res.data,
      },
    };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("error");
    }
  } finally {
    queryClient.clear();
  }
};
