import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

// recoil
import { cart } from "@states/atom/atom";
// type
import { ProductItemVO } from "@type/products/products";

// cart에 쓰이는 로직 및 값
export const useCart = () => {
  const cartList = useRecoilValue(cart); // 장바구니 recoil 값
  const [checkedItems, setCheckedItems] = useState<Array<ProductItemVO>>([]);
  const [allCheck, setAllCheck] = useState(false);

  const checkedItemHandler = (product: ProductItemVO, checked: boolean) => {
    if (checked) {
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, product]);
    } else {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(button => button.item_no !== product.item_no),
      );
    }
  };

  const allCheckedItemHandler = () => {
    if (!allCheck) {
      setCheckedItems(cartList);
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
