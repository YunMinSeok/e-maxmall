import { NextPage, GetServerSideProps } from "next";
import { dehydrate } from "react-query";

// templates

// type
import { ProductItemVO } from "@type/product/product";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";

// api
import { getProductDetail } from "@api/product";

interface ProductDetailType {
  product: ProductItemVO;
}

const ProductDetail: NextPage<ProductDetailType> = ({ product }) => {
  console.log(product);
  return <>상품 상세페이지</>;
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const page = context.query.id;
    const product = await queryClient.fetchQuery(
      [queryKeys.product, page],
      () => getProductDetail(String(context.query.id)),
      {
        ...commonOptions,
      },
    );

    return {
      props: {
        product,
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
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
