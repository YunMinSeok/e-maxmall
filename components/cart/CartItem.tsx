import Link from "next/link";
import Image from "next/image";

// type
import { ProductItemInterface } from "@type/product/product";
import { useRef } from "react";

interface CartItemType {
  product: ProductItemInterface;
  checkedItems: Array<ProductItemInterface>;
  setCheckedItems: React.Dispatch<React.SetStateAction<Array<ProductItemInterface>>>;
  checkedItemHandler: (itemNo: ProductItemInterface, checked: boolean) => void;
}

const CartItem = ({ product, checkedItems, setCheckedItems, checkedItemHandler }: CartItemType) => {
  const countRef = useRef<HTMLSelectElement>(null);

  console.log(product.count);
  console.log(countRef.current?.value);

  return (
    <tbody className="cartTable-itemWrap">
      <tr className="cart-item">
        <td className="product-select-event">
          <input
            type="checkbox"
            title={product.item_name}
            value={product.item_no}
            // 체크된 아이템 담는 배열에 item_no가 있냐
            checked={checkedItems.find(item => item.item_no === product.item_no) !== undefined}
            onChange={e => {
              checkedItemHandler(product, e.target.checked);
            }}
          />
        </td>
        <td className="product-item-image">
          <Link href={`/product/${product.item_no}`}>
            <Image src={product.detail_image_url} width={78} height={78} alt={product.item_name} />
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
                <select
                  ref={countRef}
                  className="quantity-select"
                  onChange={e => {
                    setCheckedItems(prevState =>
                      prevState.map((checkItem: ProductItemInterface) => {
                        return checkItem.item_no === product.item_no
                          ? { ...checkItem, count: Number(e.target.value) }
                          : { ...checkItem };
                      }),
                    );
                  }}
                >
                  {Array.from({ length: 10 }, (_, index) => index + 1).map(element => {
                    return (
                      <option key={product.item_no + element} value={element}>
                        {element}
                      </option>
                    );
                  })}
                </select>
              </span>
            </div>
          </div>
        </td>
        <td className="unit-total-price">
          <div className="unit-total-sale-price">
            {Number(product.price) * (product.count || Number(countRef.current?.value) || 1)}
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
