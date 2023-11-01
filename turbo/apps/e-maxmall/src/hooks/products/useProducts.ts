import { MouseEvent } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

// type
import { ProductItemVO, ProductItemInterface } from "@type/product/product";
// recoil
import { cart } from "src/states/atom/atom";

interface UseproductsType {
  handleClickCart: (e: MouseEvent, item: ProductItemVO, count: number) => void;
  isHaveCart: (item: ProductItemInterface) => boolean;
}

// product에서 사용되는 함수들
export const useProducts = (): UseproductsType => {
  const cartValue = useRecoilState(cart);

  const setCart = useSetRecoilState<Array<ProductItemInterface>>(cart); // recoil

  // 카트에 상품이 담겨있는지
  const isHaveCart = (item: ProductItemInterface) => {
    return cartValue[0].indexOf(item) === -1;
  };

  // 장바구니 버튼 클릭
  const handleClickCart = async (e: MouseEvent, item: ProductItemVO, count: number) => {
    e.preventDefault();

    const convertProduct: ProductItemInterface = { ...item, count: count };
    // 장바구니 있으면 삭제
    if (!isHaveCart(convertProduct)) {
      setCart(prevState => prevState.filter(prevItem => prevItem.item_no !== item.item_no));
      return;
    }
    // 장바구니 최대 수량 을 넘으면 return
    if (cartValue[0].length >= 3) {
      alert("장바구니의 최대 수량은 3개 입니다.");
      return;
    }

    setCart(prevState => [...prevState, convertProduct]);

    alert("장바구니에 " + item.item_name + "을 담았습니다.");
  };

  return { handleClickCart, isHaveCart };
};
