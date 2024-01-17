import { StaticImageData } from "next/image";
import { RefObject } from "react";
// styles
import { ShowCase } from "@styles/home/home";
import { useMouseEvent } from "@hooks/home/useMouseEvent";

type ShowCaseCardType = {
  cardImage: StaticImageData;
  containerRef: RefObject<HTMLDivElement>;
  overlayRef: RefObject<HTMLDivElement>;
  brightType?: string;
};

const ShowCaseCard = ({
  cardImage,
  containerRef,
  overlayRef,
  brightType = "liner",
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
      <div className="card" />
      <div className="overlay" ref={overlayRef} />
    </ShowCase>
  );
};

export default ShowCaseCard;
