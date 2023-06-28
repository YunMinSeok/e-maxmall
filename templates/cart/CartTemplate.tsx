import Link from "next/link";
import Image from "next/image";

import { CartWrap, CartTable } from "@styles/cart/cart";

const CartTemplate = () => {
  return (
    <CartWrap>
      <div className="section-title">
        <span>장바구니</span>
        <CartTable>
          <caption className="none">장바구니</caption>
          <tbody className="cartTable-itemWrap">
            <tr className="cart-item">
              <td className="product-select-event">
                <input type="checkbox" title={""} value={""} />
              </td>
              <td className="product-item-image">
                <Link href="">
                  <Image src={""} alt={""} />
                </Link>
              </td>
              <td className="product-box">
                <div className="product-name-part">
                  <Link href="" className="">
                    제품 이름
                  </Link>
                </div>
                <div className="option-item">
                  <div className="option-price-part">
                    <span className="unit-cost">제품 가격</span>
                    <span className="select-select">
                      <select className="quantity-select">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </span>
                  </div>
                </div>
              </td>
              <td className="unit-total-price">
                <div className="unit-total-sale-price">0000원</div>
              </td>
            </tr>
          </tbody>
        </CartTable>
      </div>
    </CartWrap>
  );
};

export default CartTemplate;
