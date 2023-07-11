// components
import CartItem from "@components/cart/CartItem";

// hooks
import { useCart } from "@hooks/cart/useCart";

// css
import { CartWrap, CartTable, CartTotalPrice } from "@styles/cart/cart";
import { ProductItemVO } from "@type/products/products";

const CartTemplate = () => {
  const { cartList, allCheck, checkedItems, allCheckedItemHandler, checkedItemHandler } = useCart();

  console.log(checkedItems);
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
                  checked={allCheck}
                  onChange={allCheckedItemHandler}
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
          return (
            <CartItem
              key={product.item_no}
              product={product}
              checkedItems={checkedItems}
              checkedItemHandler={checkedItemHandler}
            />
          );
        })}
      </CartTable>
      <CartTotalPrice>
        <div className="cart-total-price__inner">
          <div className="price-area">
            총 상품가격
            <em className="final-product-price">
              {/* 체크 기준 현재 가격 */}
              {checkedItems.reduce((acc: number, val: ProductItemVO) => {
                return acc + Number(val.price);
              }, 0)}
              원
            </em>
            <span className="symbol">-</span>총 할인가격
            <em className="final-product-price">0원</em>
            <span className="symbol">=</span>총 주문 금액
            <em className="final-order-price">0원</em>
          </div>
        </div>
      </CartTotalPrice>
    </CartWrap>
  );
};

export default CartTemplate;
