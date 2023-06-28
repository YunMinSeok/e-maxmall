import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { useRef } from "react";

// recoil
import { cart } from "@states/atom/atom";

// css
import { CartWrap, CartTable } from "@styles/cart/cart";

const CartTemplate = () => {
  const cartValue = useRecoilValue(cart); // 장바구니 recoil 값
  console.log(cartValue);
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
        {cartValue.map(product => {
          return (
            <tbody className="cartTable-itemWrap">
              <tr className="cart-item">
                <td className="product-select-event">
                  <input type="checkbox" title={product.item_name} value={product.item_no} />
                </td>
                <td className="product-item-image">
                  <Link href="">
                    <Image
                      src={product.detail_image_url}
                      width={78}
                      height={78}
                      alt={product.item_name}
                    />
                  </Link>
                </td>
                <td className="product-box">
                  <div className="product-name-part">
                    <Link href={`/product/${product.item_no}`} className="product-name">
                      {product.item_name}
                    </Link>
                  </div>
                  <div className="option-item">
                    <div className="option-price-part">
                      <span className="unit-cost">{product.price}</span>
                      <span className="select-select">
                        <select className="quantity-select">
                          {Array.from({ length: 99 }, (_, index) => index + 1).map(
                            (element, index) => {
                              return <option>{element}</option>;
                            },
                          )}
                        </select>
                      </span>
                    </div>
                  </div>
                </td>
                <td className="unit-total-price">
                  <div className="unit-total-sale-price">{product.price}</div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </CartTable>
    </CartWrap>
  );
};

export default CartTemplate;
