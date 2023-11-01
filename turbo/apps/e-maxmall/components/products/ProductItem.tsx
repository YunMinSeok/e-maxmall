import { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
// images
import Cart from "@images/icon/shopping_cart.png";
// type
import { ProductItemVO } from "@type/product/product";
// css
import { ProductItemWrap } from "@styles/products/products";
import { useProducts } from "@hooks/products/useProducts";

interface ProductItem {
  product: ProductItemVO;
}

const ProductItem = ({ product }: ProductItem) => {
  const { handleClickCart, isHaveCart } = useProducts();

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
                handleClickCart(e, product, 1);
              }}
            >
              <Image src={Cart} width={35} height={35} alt="장바구니 아이콘" />
              <div className="product-cart-click-container">
                <span>{isHaveCart({ ...product, count: 1 }) ? "+" : "-"}</span>
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

export default ProductItem;
