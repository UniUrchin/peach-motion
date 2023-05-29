import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRestrictFollowPointer } from "@/utils/useRestrictFollowPointer";

export const Peach: React.FC = () => {
  const ref = useRef(null);
  const { x, y } = useRestrictFollowPointer(ref, 25);

  return (
    <motion.img
      ref={ref}
      src="peach.png"
      className="w-[30rem] h-[30rem]"
      animate={{ x, y }}
      transition={{ type: "tweet", duration: 1 }}
    />
  );
};
