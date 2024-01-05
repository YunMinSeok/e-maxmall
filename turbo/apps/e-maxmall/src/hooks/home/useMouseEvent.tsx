import { RefObject } from "react";

export const useMouseEvent = (
  container: RefObject<HTMLDivElement>,
  overlay: RefObject<HTMLDivElement>,
) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!overlay.current || !container.current) {
      return;
    }

    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    var rotateY = (-1 / 5) * x + 20;
    var rotateX = (4 / 30) * y - 20;

    overlay.current.style.backgroundPosition = `${x / 5 + y / 5}%`;
    overlay.current.style.filter = `opacity(${x / 200}) brightness(1.2)`;

    container.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = () => {
    if (!overlay.current || !container.current) {
      return;
    }
    overlay.current.style.filter = "opacity(0)";
    container.current.style.transform = "perspective(350px) rotateY(0deg) rotateX(0deg)";
  };

  return { handleMouseMove, handleMouseOut };
};
