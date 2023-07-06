import { useState } from "react";
import { useRecoilValue } from "recoil";

// recoil
import { cart } from "@states/atom/atom";

// cart에 쓰이는 로직 및 값
export const useCart = () => {
  const cartList = useRecoilValue(cart); // 장바구니 recoil 값
  const [allCheck, setAllCheck] = useState(false);

  return { cartList, allCheck, setAllCheck };
};
