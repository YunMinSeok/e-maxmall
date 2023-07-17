import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

// type
import { ProductItemVO } from "@type/product/product";
// recoil
import { cart } from "src/states/atom/atom";

// product에서 사용되는 함수들
export const useProductDetail = () => {
  const [count, setCount] = useState<number>(1);

  return { count, setCount };
};
