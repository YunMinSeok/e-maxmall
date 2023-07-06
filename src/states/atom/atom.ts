import { atom } from "recoil";

// type
import { ProductItemVO } from "@type/products/products";

// 장바구니
export const cart = atom({
  key: "cart",
  default: [] as Array<ProductItemVO>,
});
