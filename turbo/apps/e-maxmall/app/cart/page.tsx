"use client";
// templates
import CartTemplate from "@templates/cart/CartTemplate";
import { dehydrate } from "@tanstack/react-query";

// type
import { CouponVO } from "@type/coupon/coupon";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";

// api
import { getCoupons } from "@api/coupon";

interface CartType {
  coupons: CouponVO[];
}

async function fetchData() {
  try {
    const coupons = await queryClient.fetchQuery({
      queryKey: [queryKeys.coupon],
      queryFn: () => getCoupons(),
      ...commonOptions,
    });

    return {
      props: {
        coupons: coupons,
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/products",
        statusCode: 307,
      },
    };
  } finally {
    queryClient.clear();
  }
}

const Cart = async () => {
  const coupons = await fetchData();

  return <CartTemplate coupons={coupons.props!.coupons} />;
};

export default Cart;
