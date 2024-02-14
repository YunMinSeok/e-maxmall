import { StaticImageData } from "next/image";
import { RefObject } from "react";
// styles
import { ShowCase } from "@styles/home/home";
import { useMouseEvent } from "@hooks/home/useMouseEvent";
import Link from "next/link";

type ShowCaseCardType = {
  cardImage: StaticImageData;
  containerRef: RefObject<HTMLDivElement>;
  overlayRef: RefObject<HTMLDivElement>;
  brightType?: string;
  itemNo: number;
};

const ShowCaseCard = ({
  cardImage,
  containerRef,
  overlayRef,
  brightType = "liner",
  itemNo,
}: ShowCaseCardType) => {
  const { handleMouseMove, handleMouseOut } = useMouseEvent(containerRef, overlayRef, brightType);

  return (
    <ShowCase
      image={cardImage}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      brightType={brightType}
    >
      <Link href={`/products/${itemNo}`} key={`Home-product-${itemNo}`}>
        <div className="card" />
        <div className="overlay" ref={overlayRef} />
      </Link>
    </ShowCase>
  );
};

export default ShowCaseCard;
