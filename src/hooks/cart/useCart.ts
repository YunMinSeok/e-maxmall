import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

// recoil
import { cart } from "@states/atom/atom";
// type
import { ProductItemVO } from "@type/product/product";
import { CouponVO } from "@type/coupon/coupon";
// api
import { getCoupon } from "@api/coupon";

// cart에 쓰이는 로직 및 값
export const useCart = () => {
  const cartList = useRecoilValue(cart); // 장바구니 recoil 값
  const [checkedItems, setCheckedItems] = useState<Array<ProductItemVO>>([]);
  const [allCheck, setAllCheck] = useState(false);
  const [selectCoupon, setSelectCoupon] = useState<CouponVO | null>(null);

  // 체크 버트 누르면 일어나는 함수
  const checkedItemHandler = (product: ProductItemVO, checked: boolean) => {
    if (checked) {
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, product]);
    } else {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(button => button.item_no !== product.item_no),
      );
    }
  };

  // 전체 체크 버튼
  const allCheckedItemHandler = () => {
    if (!allCheck) {
      setCheckedItems(cartList);
    } else {
      setCheckedItems([]);
    }
    setAllCheck(!allCheck);
  };

  // 전체 체크 버튼 useEffect
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

  // 쿠폰 선택시
  const setCouponData = async (id: number) => {
    const couponData = await getCoupon();
    const filterCouponData = couponData.filter((coupon: CouponVO) => coupon.id === id);
    setSelectCoupon(filterCouponData[0]);
    getDiscountPrice();
  };

  // 할인가격, 총 주문금액 구하는 함수
  const getDiscountPrice = () => {
    let discount = 0;
    let allPrice = 0;
    let totalPrice = 0;

    if (!selectCoupon) {
      return {
        allMount: "0",
        discount: "0",
        totalAmount: "0",
      };
    }

    const availableCouponItemAmount = checkedItems.reduce((acc: number, val: ProductItemVO) => {
      if (val.availableCoupon !== false) {
        return acc + Number(val.price);
      }
      return acc;
    }, 0);

    allPrice = checkedItems.reduce((acc: number, val: ProductItemVO) => {
      return acc + Number(val.price);
    }, 0);

    if (selectCoupon.type === "won") {
      discount = selectCoupon.price;
    }

    console.log(availableCouponItemAmount);
    if (selectCoupon.type === "percent") {
      discount = Math.floor((availableCouponItemAmount * selectCoupon.price) / 100);
    }

    totalPrice = Math.floor(allPrice - discount);

    return {
      allMount: String(allPrice),
      discount: String(discount),
      totalAmount: String(totalPrice),
    };
  };

  return {
    cartList,
    allCheck,
    checkedItems,
    selectCoupon,
    setCouponData,
    setAllCheck,
    allCheckedItemHandler,
    checkedItemHandler,
    getDiscountPrice,
  };
};
