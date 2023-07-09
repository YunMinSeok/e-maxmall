import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

// recoil
import { cart } from "@states/atom/atom";

// cart에 쓰이는 로직 및 값
export const useCart = () => {
  const cartList = useRecoilValue(cart); // 장바구니 recoil 값
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [allCheck, setAllCheck] = useState(false);

  const checkedItemHandler = (itemNo: number, checked: boolean) => {
    let newCheckedItems;
    if (checked) {
      setCheckedItems([...checkedItems, itemNo]);
    } else {
      setCheckedItems(checkedItems.filter(button => button !== itemNo));
    }
  };

  const allCheckedItemHandler = (checked: boolean) => {
    console.log(checked);
  };

  useEffect(() => {
    console.log(checkedItems);
    if (checkedItems.size === cartList.length) {
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
