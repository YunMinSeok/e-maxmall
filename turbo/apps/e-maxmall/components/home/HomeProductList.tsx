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
  // 한번에 모든 product 가져오게 바꿔야함
  return (
    <ProductListWrap>
      {productList &&
        productList.map((product: ProductItemVO) => {
          const container = useRef<HTMLDivElement>(null);
          const overlay = useRef<HTMLDivElement>(null);

          return (
            <ShowCaseCard
              key={`Home-product-${product.item_no}`}
              cardImage={product.detail_image_url}
              containerRef={container}
              overlayRef={overlay}
              itemNo={product.item_no}
            />
          );
        })}
    </ProductListWrap>
  );
};

export default HomeProductList;
