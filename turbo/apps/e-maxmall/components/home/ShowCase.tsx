import { ShowCase } from "@styles/home/home";
import { RefObject } from "react";

type ShowCaseCardType = {
  containerRef: RefObject<HTMLDivElement>;
  overlayRef: RefObject<HTMLDivElement>;
  mouseMoveEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
  mouseOutEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ShowCaseCard = ({
  containerRef,
  overlayRef,
  mouseMoveEvent,
  mouseOutEvent,
}: ShowCaseCardType) => {
  return (
    <ShowCase ref={containerRef} onMouseMove={mouseMoveEvent} onMouseOut={mouseOutEvent}>
      <div className="card" />
      <div className="overlay" ref={overlayRef} />
    </ShowCase>
  );
};

export default ShowCaseCard;
