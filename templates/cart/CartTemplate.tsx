import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { useRef } from "react";

// components
import CartItem from "@components/cart/CartItem";

// recoil
import { cart } from "@states/atom/atom";

// css
import { CartWrap, CartTable } from "@styles/cart/cart";

const CartTemplate = () => {
  const cartList = useRecoilValue(cart); // 장바구니 recoil 값
  return (
    <CartWrap>
      <div className="section-title">
        <span className="title">장바구니</span>
      </div>
      <CartTable>
        <caption className="none">장바구니</caption>
        <thead>
          <tr className="head">
            <th scope="col" className="all-item-select">
              <label>
                <input
                  title="모든 상품을 결제상품으로 설정"
                  type="checkbox"
                  className="all-item-select"
                />
                <span>&nbsp;&nbsp;전체선택</span>
              </label>
            </th>

            <th scope="colgroup" id="th-product-box" colSpan={2}>
              상품정보
            </th>
            <th scope="col" id="th-unit-total-price">
              상품금액
            </th>
            <th scope="col" id="th-delivery-fee">
              배송비
            </th>
          </tr>
        </thead>
        {cartList.map(product => {
          return <CartItem product={product} />;
        })}
      </CartTable>
    </CartWrap>
  );
};

export default CartTemplate;
