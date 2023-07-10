// components
import CartItem from "@components/cart/CartItem";

// hooks
import { useCart } from "@hooks/cart/useCart";

// css
import { CartWrap, CartTable } from "@styles/cart/cart";

const CartTemplate = () => {
  const { cartList, allCheck, checkedItems, allCheckedItemHandler, checkedItemHandler } = useCart();

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
    </CartWrap>
  );
};

export default CartTemplate;
