import { NextPage, GetServerSideProps } from "next";
import axios from "axios";

// templates
import ProductsTemplate from "@templates/products/ProductsTemplate";

// type
import { ProductVO } from "@type/products/products";
interface ProductsType {
  products: { productItems: ProductVO[] };
}

// 상품 리스트 페이지
const Products: NextPage<ProductsType> = ({ products }) => {
  return <ProductsTemplate products={products.productItems} />;
};

export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  console.log(res);
  return {
    props: {
      products: res.data,
    },
  };
};
