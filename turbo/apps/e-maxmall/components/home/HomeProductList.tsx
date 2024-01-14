import Link from "next/link";
import { StaticImageData } from "next/image";
import { useRef } from "react";
// components
import ShowCaseCard from "@components/home/ShowCase";
// hooks
import { useMouseEvent } from "@hooks/home/useMouseEvent";
// styles
import { ProductListWrap } from "@styles/home/home";
// type
import { ProductItemVO } from "@type/product/product";

interface HomeProductListType {
  productList: ProductItemVO[] | undefined;
}

const HomeProductList = ({ productList }: HomeProductListType) => {
  return (
    <ProductListWrap>
      {productList &&
        productList.map((product: ProductItemVO) => {
          const container = useRef<HTMLDivElement>(null);
          const overlay = useRef<HTMLDivElement>(null);

          const { handleMouseMove, handleMouseOut } = useMouseEvent(container, overlay);
          return (
            <Link href={`/products/${product.item_no}`} key={`Home-product-${product.item_no}`}>
              <ShowCaseCard
                cardImage={product.detail_image_url}
                containerRef={container}
                overlayRef={overlay}
                mouseMoveEvent={handleMouseMove}
                mouseOutEvent={handleMouseOut}
              />
            </Link>
          );
        })}
    </ProductListWrap>
  );
};

export default HomeProductList;
