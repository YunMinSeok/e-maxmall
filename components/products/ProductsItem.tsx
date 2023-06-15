import Image from "next/image";
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
        <div className="image-container">
          <Image src={product.detail_image_url} width={199} height={270} alt="상품 이미지" />
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
