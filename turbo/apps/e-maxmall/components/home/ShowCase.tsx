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
};

const ShowCaseCard = ({
  cardImage,
  containerRef,
  overlayRef,
  mouseMoveEvent,
  mouseOutEvent,
}: ShowCaseCardType) => {
  return (
    <ShowCase
      image={cardImage}
      ref={containerRef}
      onMouseMove={mouseMoveEvent}
      onMouseOut={mouseOutEvent}
    >
      <div className="card" />
      <div className="overlay" ref={overlayRef} />
    </ShowCase>
  );
};

export default ShowCaseCard;
