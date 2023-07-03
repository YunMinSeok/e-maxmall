import Link from "next/link";
import Image from "next/image";

// type
import { ProductVO } from "@type/products/products";
import { useEffect, useState } from "react";

interface CartItemType {
  product: ProductVO;
  allCheck: boolean;
}

const CartItem = ({ product, allCheck }: CartItemType) => {
  const [count, setCount] = useState<number>(1);
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    setCheck(allCheck);
  }, [allCheck]);
  return (
    <tbody className="cartTable-itemWrap">
      <tr className="cart-item">
        <td className="product-select-event">
          <input
            type="checkbox"
            title={product.item_name}
            value={product.item_no}
            checked={check}
            onChange={e => setCheck(e.target.checked)}
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
                  className="quantity-select"
                  onChange={e => setCount(Number(e.target.value))}
                >
                  {Array.from({ length: 99 }, (_, index) => index + 1).map((element, index) => {
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
          <div className="unit-total-sale-price">{Number(product.price) * count}</div>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
