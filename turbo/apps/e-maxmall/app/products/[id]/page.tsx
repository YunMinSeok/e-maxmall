import { NextPage, GetStaticPaths, GetStaticProps } from "next";
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

const ProductDetail: NextPage<ProductDetailType> = ({ product }) => {
  return <ProductDetailTemplate product={product} />;
};

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const productIds = await getAllProduct();

  // paths 배열에 동적 경로 객체들을 생성
  const paths = productIds.productItems.map((product: ProductItemVO) => ({
    params: { id: String(product.item_no) },
  }));

  return { paths, fallback: false }; // fallback 옵션 설정
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const page = params?.id as string;
    const product = await queryClient.fetchQuery({
      queryKey: [queryKeys.product, page],
      queryFn: () => getProductDetail(page),
      ...commonOptions,
    });

    return {
      props: {
        product: product,
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
