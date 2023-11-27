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

// get product id
export async function generateStaticParams() {
  const productIds = await getAllProduct();

  return productIds.productItems.map((product: ProductItemVO) => ({
    params: { id: String(product.item_no) },
  }));
}
// get product detail data
async function fetchData(id: string) {
  try {
    const page = id;
    const product = await queryClient.fetchQuery({
      queryKey: [queryKeys.product, page],
      queryFn: () => getProductDetail(page),
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
  console.log(params);
  const product = await fetchData(params.id);
  console.log(product);
  if (!product.product) return;

  return <ProductDetailTemplate product={product.product} />;
};

export default ProductDetail;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const productIds = await getAllProduct();

//   // paths 배열에 동적 경로 객체들을 생성
//   const paths = productIds.productItems.map((product: ProductItemVO) => ({
//     params: { id: String(product.item_no) },
//   }));

//   return { paths, fallback: false }; // fallback 옵션 설정
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const page = params?.id as string;
//     const product = await queryClient.fetchQuery({
//       queryKey: [queryKeys.product, page],
//       queryFn: () => getProductDetail(page),
//       ...commonOptions,
//     });

//     return {
//       props: {
//         product: product,
//         dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//       },
//     };
//   } catch (err) {
//     return {
//       redirect: {
//         destination: "/products",
//         statusCode: 307,
//       },
//     };
//   } finally {
//     queryClient.clear();
//   }
// };
