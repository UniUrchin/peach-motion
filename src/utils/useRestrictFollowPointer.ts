import { useState, RefObject, useEffect } from "react";

export const useRestrictFollowPointer = (
  ref: RefObject<HTMLElement>,
  radius: number
) => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [{ originX, originY }, setOrigin] = useState({
    originX: 0,
    originY: 0,
  });

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current!;

    setOrigin({
      originX: element.offsetLeft - element.offsetWidth / 2,
      originY: element.offsetTop - element.offsetHeight / 2,
    });

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const mouseX = clientX - element.offsetLeft - element.offsetWidth / 2;
      const mouseY = clientY - element.offsetTop - element.offsetHeight / 2;

      const distance = Math.sqrt(
        (mouseX - originX) ** 2 + (mouseY - originY) ** 2
      );

      if (distance > radius) {
        const angle = Math.atan2(mouseY - originY, mouseX - originX);
        setPoint({
          x: originX + Math.cos(angle) * radius,
          y: originY + Math.sin(angle) * radius,
        });
      } else {
        setPoint({ x: mouseX, y: mouseY });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
};
