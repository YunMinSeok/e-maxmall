import axios from "axios";

// constant
import { getProductPropsType } from "@constant/searchSort";

// 상품 조회하기
export const getProduct = async ({ page, sort, size }: getProductPropsType) => {
  const res = await axios.get("http://localhost:3000/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
    params: { page: page, sort: sort, size: size },
  });

  return res;
};

// 상품 상세 조회하기
export const getProductDetail = async (productNo: string) => {
  const res = await axios.get(`http://localhost:3000/api/products/${productNo}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data.product;
};

export const getAllProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
    params: { page: 1, sort: "desc", size: 30 },
  });

  return res.data;
};
