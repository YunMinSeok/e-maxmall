import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

// recoil
import { cart } from "@states/atom/atom";

// cart에 쓰이는 로직 및 값
export const useCart = () => {
  const cartList = useRecoilValue(cart); // 장바구니 recoil 값
  const [checkedItems, setCheckedItems] = useState<Array<number>>([]);
  const [allCheck, setAllCheck] = useState(false);

  const checkedItemHandler = (itemNo: number, checked: boolean) => {
    if (checked) {
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, itemNo]);
    } else {
      setCheckedItems(prevCheckedItems => prevCheckedItems.filter(button => button !== itemNo));
    }
  };

  const allCheckedItemHandler = () => {
    if (!allCheck) {
      const itemNos = cartList.map(item => item.item_no);
      setCheckedItems(itemNos);
    } else {
      setCheckedItems([]);
    }
    setAllCheck(!allCheck);
  };

  useEffect(() => {
    if (cartList.length === 0) {
      return;
    }

    if (checkedItems.length === cartList.length) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [checkedItems]);

  return {
    cartList,
    allCheck,
    checkedItems,
    setAllCheck,
    allCheckedItemHandler,
    checkedItemHandler,
  };
};
