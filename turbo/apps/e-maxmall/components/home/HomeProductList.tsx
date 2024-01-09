import { StaticImageData } from "next/image";
import { useRef } from "react";
// components
import ShowCaseCard from "@components/home/ShowCase";
// hooks
import { useMouseEvent } from "@hooks/home/useMouseEvent";
// image
import * as ProductImages from "@images/index";
// styles
import { ProductListWrap } from "@styles/home/home";

const HomeProductList = () => {
  const container = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  const { handleMouseMove, handleMouseOut } = useMouseEvent(container, overlay);

  console.log(ProductImages);
  return (
    <ProductListWrap>
      {/* {result.map((productImage: StaticImageData) => {
        console.log(productImage);
        return (
          <ShowCaseCard
            cardImage={productImage.src}
            containerRef={container}
            overlayRef={overlay}
            mouseMoveEvent={handleMouseMove}
            mouseOutEvent={handleMouseOut}
          />
        );
      })} */}
    </ProductListWrap>
  );
};

export default HomeProductList;
