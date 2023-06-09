import { ProductVO } from "@type/products/products";

interface ProductItemType {
  product: ProductVO;
}

const ProductsItem = ({ product }: ProductItemType) => {
  console.log(product);
  return <></>;
};

export default ProductsItem;
