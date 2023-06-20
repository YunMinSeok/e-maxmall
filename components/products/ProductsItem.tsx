import { MouseEvent, useEffect } from "react";
import Image from "next/image";
import { useSetRecoilState, useRecoilState } from "recoil";
// images
import Cart from "@images/icon/shopping_cart.png";
// type
import { ProductVO } from "@type/products/products";
// recil
import { cart } from "src/states/atom/atom";
// css
import { ProductItemWrap } from "@styles/products/products";
import Link from "next/link";

interface ProductItemType {
  product: ProductVO;
}

const ProductsItem = ({ product }: ProductItemType) => {
  const cartValue = useRecoilState(cart);
  const setCart = useSetRecoilState<Array<number>>(cart); // recoil 주택 형태 값

  // 장바구니 버튼 클릭
  const handleClickCart = async (e: MouseEvent, itemNo: number) => {
    e.preventDefault();
    // 장바구니 없으면 추가 있으면 삭제
    if (isHaveCart(itemNo)) {
      setCart(prevState => [...prevState, itemNo]);
    } else {
      setCart(prevState => prevState.filter(item => item !== itemNo));
    }
  };

  // 카트에 상품이 담겨있는지
  const isHaveCart = (itemNo: number) => {
    return cartValue[0].indexOf(product.item_no) === -1;
  };

  useEffect(() => {
    console.log(cartValue[0]);
  }, [cartValue]);

  return (
    <ProductItemWrap>
      <Link href={`/products/${product.item_no}`}>
        <div className="product-image-container">
          <Image
            className="product-image"
            src={product.detail_image_url}
            width={199}
            height={270}
            alt="상품 이미지"
          />
          <div>
            <button
              type="button"
              className="product-cart-container"
              onClick={(e: MouseEvent) => {
                handleClickCart(e, product.item_no);
              }}
            >
              <Image src={Cart} width={35} height={35} alt="장바구니 아이콘" />
              <div className="product-cart-click-container">
                <span>{isHaveCart(product.item_no) ? "+" : "-"}</span>
              </div>
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.item_name}</h3>
          <div className="product-price">
            <span>{product.price}</span>
          </div>
        </div>
      </Link>
    </ProductItemWrap>
  );
};

export default ProductsItem;
