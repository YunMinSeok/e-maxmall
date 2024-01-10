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

  const ImageArray = Object.values(ProductImages);
  return (
    <ProductListWrap>
      {ImageArray.map((productImage: StaticImageData) => {
        return (
          <ShowCaseCard
            cardImage={productImage}
            containerRef={container}
            overlayRef={overlay}
            mouseMoveEvent={handleMouseMove}
            mouseOutEvent={handleMouseOut}
          />
        );
      })}
    </ProductListWrap>
  );
};

export default HomeProductList;
