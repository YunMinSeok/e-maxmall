import { MouseEvent } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

// type
import { ProductVO } from "@type/products/products";
// recoil
import { cart } from "src/states/atom/atom";

interface UseproductsType {
  handleClickCart: (e: MouseEvent, item: ProductVO) => void;
  isHaveCart: (item: ProductVO) => boolean;
}

// product에서 사용되는 함수들
export function useProducts(): UseproductsType {
  const cartValue = useRecoilState(cart);

  const setCart = useSetRecoilState<Array<ProductVO>>(cart); // recoil

  // 장바구니 버튼 클릭
  const handleClickCart = async (e: MouseEvent, item: ProductVO) => {
    e.preventDefault();
    // 장바구니 없으면 추가 있으면 삭제
    if (isHaveCart(item)) {
      setCart(prevState => [...prevState, item]);
    } else {
      setCart(prevState => prevState.filter(prevItem => prevItem.item_no !== item.item_no));
    }
  };

  // 카트에 상품이 담겨있는지
  const isHaveCart = (item: ProductVO) => {
    return cartValue[0].indexOf(item) === -1;
  };
  return { handleClickCart, isHaveCart };
}
