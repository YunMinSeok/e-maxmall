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

  console.log(productIds);
  return productIds.productItems.map((product: ProductItemVO) => ({
    params: { id: String(product.item_no) },
  }));
}
// get product detail data
async function fetchData(id: string) {
  console.log("id", id);
  try {
    const product = await queryClient.fetchQuery({
      queryKey: [queryKeys.product, id],
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
  console.log(params);
  const product = await fetchData(params.id);

  if (!product.product) return;

  return <ProductDetailTemplate product={product.product} />;
};

export default ProductDetail;
