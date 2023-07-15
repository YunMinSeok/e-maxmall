import axios from "axios";

// type
import { ProductItemVO } from "@type/product/product";

// 상품 조회하기
export const getProduct = async (page: string) => {
  const res = await axios.get("http://localhost:3000/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
    params: { page: page },
  });

  return res.data;
};

// 상품 상세 조회하기
export const getProductDetail = async (productNo: number) => {};
