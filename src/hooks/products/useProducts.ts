import { MouseEvent } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

// type
import { ProductItemVO } from "@type/products/products";
// recoil
import { cart } from "src/states/atom/atom";

interface UseproductsType {
  handleClickCart: (e: MouseEvent, item: ProductItemVO) => void;
  isHaveCart: (item: ProductItemVO) => boolean;
}

// product에서 사용되는 함수들
export const useProducts = (): UseproductsType => {
  const cartValue = useRecoilState(cart);

  const setCart = useSetRecoilState<Array<ProductItemVO>>(cart); // recoil

  // 장바구니 버튼 클릭
  const handleClickCart = async (e: MouseEvent, item: ProductItemVO) => {
    e.preventDefault();
    // 장바구니 있으면 삭제
    if (!isHaveCart(item)) {
      setCart(prevState => prevState.filter(prevItem => prevItem.item_no !== item.item_no));
      return;
    }
    // 장바구니 최대 수량 을 넘으면 return
    if (cartValue[0].length >= 3) {
      alert("장바구니의 최대 수량은 3개 입니다.");
      return;
    }

    setCart(prevState => [...prevState, item]);
  };

  // 카트에 상품이 담겨있는지
  const isHaveCart = (item: ProductItemVO) => {
    return cartValue[0].indexOf(item) === -1;
  };
  return { handleClickCart, isHaveCart };
};
