import { useState, useEffect, useCallback } from "react";
import { useRecoilValue } from "recoil";

// recoil
import { cart } from "@states/atom/atom";
// type
import { ProductItemInterface } from "@type/product/product";
import { CouponVO } from "@type/coupon/coupon";
// api
import { getCoupon } from "@api/coupon";

// cart에 쓰이는 로직 및 값
export const useCart = () => {
  const cartList = useRecoilValue(cart); // 장바구니 recoil 값
  const [checkedItems, setCheckedItems] = useState<Array<ProductItemInterface>>([]);
  const [allCheck, setAllCheck] = useState(false);
  const [selectCoupon, setSelectCoupon] = useState<CouponVO | null>(null);

  // 체크 버트 누르면 일어나는 함수
  const checkedItemHandler = (
    product: ProductItemInterface,
    checked: boolean,
    count: number | null,
  ) => {
    if (checked) {
      setCheckedItems(prevCheckedItems => [
        ...prevCheckedItems,
        count ? Object.assign({}, product, { count }) : product,
      ]);
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
  const setCouponData = useCallback(async (id: number) => {
    const couponData = await getCoupon();
    const filterCouponData = couponData.filter((coupon: CouponVO) => coupon.id === id);
    setSelectCoupon(filterCouponData[0]);
    getDiscountPrice();
  }, []);

  // 할인가격, 총 주문금액 구하는 함수
  const getDiscountPrice = useCallback(() => {
    let discount = 0; // 할인금액
    let allPrice = 0; // 체크 상품 총액
    let totalPrice = 0; // 구매 총액

    // 클릭한 아이템 총액 구하기
    allPrice = checkedItems.reduce((acc: number, val: ProductItemInterface) => {
      return acc + Number(val.price) * (val.count || 1);
    }, 0);

    // 쿠폰을 선택 했을때
    if (selectCoupon) {
      // 쿠폰 가능 아이템 총액 구하기
      const availableCouponItemAmount = checkedItems.reduce(
        (acc: number, val: ProductItemInterface) => {
          if (val.availableCoupon !== false) {
            return acc + Number(val.price) * (val.count || 1);
          }
          return acc;
        },
        0,
      );

      // 쿠폰이 원일때
      if (selectCoupon.type === "won") {
        discount = selectCoupon.price;
      }
      // 쿠폰이 퍼센트일떄
      if (selectCoupon.type === "percent") {
        discount = Math.floor((availableCouponItemAmount * selectCoupon.price) / 100);
      }
    }

    // 총액 = 아이템 총액 - 할인 금액
    totalPrice = Math.floor(allPrice - discount);

    return {
      allMount: String(allPrice),
      discount: String(discount),
      totalAmount: String(totalPrice),
    };
  }, [selectCoupon, checkedItems]);

  return {
    cartList,
    allCheck,
    checkedItems,
    setCheckedItems,
    selectCoupon,
    setCouponData,
    setAllCheck,
    allCheckedItemHandler,
    checkedItemHandler,
    getDiscountPrice,
  };
};
