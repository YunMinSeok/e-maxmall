import { NextPage, GetServerSideProps } from "next";

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

const Cart: NextPage<CartType> = ({ coupons }) => {
  return <CartTemplate coupons={coupons} />;
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const coupons = await queryClient.fetchQuery(queryKeys.coupon, () => getCoupons(), {
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
};
