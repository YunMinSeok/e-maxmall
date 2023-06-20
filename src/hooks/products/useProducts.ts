import { useSetRecoilState, useRecoilState } from "recoil";

// recoil
import { cart } from "src/states/atom/atom";

interface UseproductsType {
  handleClickCart: (e: MouseEvent, itemNo: number) => void;
  isHaveCart: (itemNo: number) => boolean;
}

export function useProducts(): UseproductsType {
  const cartValue = useRecoilState(cart);
  console.log(cartValue);

  const setCart = useSetRecoilState<Array<number>>(cart); // recoil 주택 형태 값

  // 장바구니 버튼 클릭
  const handleClickCart = async (e: MouseEvent, itemNo: number) => {
    e.preventDefault();
    // 장바구니 없으면 추가 있으면 삭제
    if (isHaveCart(itemNo)) {
      setCart(prevState => [...prevState, itemNo]);
    } else {
      setCart(prevState => prevState.filter(item => item !== itemNo));
    }
  };

  // 카트에 상품이 담겨있는지
  const isHaveCart = (itemNo: number) => {
    return cartValue[0].indexOf(itemNo) === -1;
  };
  return { handleClickCart, isHaveCart };
}
