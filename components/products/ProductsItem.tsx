import Image from "next/image";
// images
import Cart from "@images/icon/shopping_cart.png";
// type
import { ProductVO } from "@type/products/products";

// css
import { ProductItemWrap } from "@styles/products/products";
import Link from "next/link";

interface ProductItemType {
  product: ProductVO;
}

const ProductsItem = ({ product }: ProductItemType) => {
  return (
    <ProductItemWrap>
      <Link href={`/products/${product.item_no}`}>
        <div className="product-image-container">
          <Image src={product.detail_image_url} width={199} height={270} alt="상품 이미지" />
          <div>
            <button type="button" className="product-cart-container">
              <Image src={Cart} width={35} height={35} alt="장바구니 아이콘" />
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
