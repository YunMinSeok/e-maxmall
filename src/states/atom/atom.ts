import { atom } from "recoil";

// 장바구니
export const cart = atom({
  key: "cart",
  default: [] as Array<number>,
});
