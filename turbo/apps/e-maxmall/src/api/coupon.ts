"use client";

import axios from "axios";

//type
import { CouponVO } from "@type/coupon/coupon";

// 쿠폰 전체 보내기
export const getCoupons = async () => {
  const res = await axios.get("http://localhost:3000/api/coupons");

  return res.data.coupons;
};

// 쿠폰 1개 데이터 보내기
export const getCoupon = async (selectCouponId: number) => {
  const res = await axios.get("http://localhost:3000/api/coupons");

  const filterCouponData = res.data.coupons.filter(
    (coupon: CouponVO) => coupon.id === selectCouponId,
  )[0];
  return filterCouponData;
};
