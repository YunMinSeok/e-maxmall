"use client";

import { useState } from "react";

// productDetail 에서 사용되는 함수들
export const useProductDetail = () => {
  const [count, setCount] = useState<number>(1); // 상품 갯수

  // 상품 갯수 관련 함수
  const handleSetCount = (type: string) => {
    // 0되는거 방지
    if (type === "minus" && count === 1) {
      return;
    }

    if (type === "plus") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return { count, handleSetCount };
};
