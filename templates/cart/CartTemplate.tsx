// components
import CartItem from "@components/cart/CartItem";

// hooks
import { useCart } from "@hooks/cart/useCart";

// type
import { CouponVO } from "@type/coupon/coupon";

// css
import { CartWrap, CartTable, CartCoupon, CartTotalPrice } from "@styles/cart/cart";

interface CartTemplateType {
  coupons: CouponVO[];
}

const CartTemplate = ({ coupons }: CartTemplateType) => {
  const {
    cartList,
    allCheck,
    checkedItems,
    setCheckedItems,
    selectCoupon,
    setCouponData,
    allCheckedItemHandler,
    checkedItemHandler,
    getDiscountPrice,
  } = useCart();
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
        {cartList.map((product, index) => {
          return (
            <CartItem
              key={"cart -" + product.item_no + index}
              product={product}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              checkedItemHandler={checkedItemHandler}
            />
          );
        })}
      </CartTable>
      <CartCoupon>
        <div className="coupon-info">
          <h3>쿠폰 이름 : {selectCoupon ? String(selectCoupon.price) + selectCoupon.name : ""}</h3>
          <span>쿠폰 금액 : {selectCoupon ? String(selectCoupon.price) : ""}</span>
        </div>
        <div className="coupon-select">
          <select className="coupon-select" onChange={e => setCouponData(Number(e.target.value))}>
            <option value="">선택 안 함</option>
            {coupons.map((element, index) => {
              return (
                <option key={element.price + element.name + index} value={element.id}>
                  {element.price + element.name}
                </option>
              );
            })}
          </select>
        </div>
      </CartCoupon>
      <CartTotalPrice>
        <div className="cart-total-price__inner">
          <div className="price-area">
            총 상품가격
            <em className="final-product-price">
              {/* 체크 기준 현재 가격 */}
              {getDiscountPrice().allMount || 0}원
            </em>
            <span className="symbol">-</span>총 할인가격
            <em className="final-product-price">{getDiscountPrice().discount || 0}원</em>
            <span className="symbol">=</span>총 주문 금액
            <em className="final-order-price">{getDiscountPrice().totalAmount || 0}원</em>
          </div>
        </div>
      </CartTotalPrice>
    </CartWrap>
  );
};

export default CartTemplate;
