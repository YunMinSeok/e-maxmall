import { StaticImageData } from "next/image";
import { RefObject } from "react";
// styles
import { ShowCase } from "@styles/home/home";

type ShowCaseCardType = {
  cardImage: StaticImageData;
  containerRef: RefObject<HTMLDivElement>;
  overlayRef: RefObject<HTMLDivElement>;
  mouseMoveEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
  mouseOutEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
  brightType?: string;
};

const ShowCaseCard = ({
  cardImage,
  containerRef,
  overlayRef,
  mouseMoveEvent,
  mouseOutEvent,
  brightType = "liner",
}: ShowCaseCardType) => {
  return (
    <ShowCase
      image={cardImage}
      ref={containerRef}
      onMouseMove={mouseMoveEvent}
      onMouseOut={mouseOutEvent}
      brightType={brightType}
    >
      <div className="card" />
      <div className="overlay" ref={overlayRef} />
    </ShowCase>
  );
};

export default ShowCaseCard;
