import { RefObject } from "react";

export const useMouseEvent = (
  container: RefObject<HTMLDivElement>,
  overlay: RefObject<HTMLDivElement>,
  brightType?: string,
) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!overlay.current || !container.current) {
      return;
    }

    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    var rotateY = (-1 / 5) * x + 20;
    var rotateX = (4 / 30) * y - 20;

    console.log(brightType);
    const gradientPositionX = (x / overlay.current.clientWidth) * 100;
    const gradientPositionY = (y / overlay.current.clientHeight) * 100;

    if (brightType === "liner") {
      overlay.current.style.backgroundImage = `linear-gradient(
        105deg,
        transparent 40%,
        rgba(255, 219, 112, 0.8) 45%,
        rgba(132, 50, 255, 0.6) 50%,
        transparent 54%)`;

      overlay.current.style.backgroundPosition = `${x / 5 + y / 5}%`;
      overlay.current.style.filter = `opacity(${x / 200}) brightness(1.2)`;
      overlay.current.style.mixBlendMode = `color-dodge`;
    }
    if (brightType === "circle") {
      overlay.current.style.backgroundImage = `radial-gradient(
        farthest-corner circle at ${gradientPositionX}% ${gradientPositionY}%,
        hsla(0, 0%, 100%, 0.8) 10%,
        hsla(0, 0%, 100%, 0.65) 20%,
        hsla(0, 0%, 0%, 0.5) 90% )`;
      overlay.current.style.backgroundPosition = `${x / 5 + y / 5}%`;
      overlay.current.style.filter = `brightness(0.85) contrast(2.75) saturate(0.65)`;
      overlay.current.style.mixBlendMode = `overlay`;
    }

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
