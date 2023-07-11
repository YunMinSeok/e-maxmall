import { NextPage, GetServerSideProps } from "next";

// templates
import CartTemplate from "@templates/cart/CartTemplate";
import { dehydrate } from "react-query";

// type
import { CouponVO } from "@type/coupon/coupon";

// query
import { queryClient } from "@query/queryClient";
import { queryKeys, commonOptions } from "@query/constant";

// api
import { getCoupon } from "@api/coupon";

const Cart: NextPage<Array<CouponVO>> = ({ coupons }) => {
  console.log(coupons);
  return <CartTemplate />;
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const page = context.query.page ?? 1;

    const coupons = await queryClient.fetchQuery([queryKeys.coupon], () => getCoupon(), {
      ...commonOptions,
    });

    return {
      props: {
        coupons: coupons,
        dehydratedState: dehydrate(queryClient),
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
};
