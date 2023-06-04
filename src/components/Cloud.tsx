import { motion } from "framer-motion";

export const Cloud1: React.FC = () => {
  return (
    <motion.img
      src="/cloud.png"
      className="w-[8rem] h-[5rem] top-[10rem] absolute z-30"
      animate={{ x: [-300, 300] }}
      transition={{ duration: 18, ease: "linear", repeat: Infinity }}
    />
  );
};

export const Cloud2: React.FC = () => {
  return (
    <motion.img
      src="/cloud.png"
      className="w-[6rem] h-[4rem] top-[20rem] absolute z-30"
      animate={{ x: [300, -300] }}
      transition={{ duration: 15, delay: 3, ease: "linear", repeat: Infinity }}
    />
  );
};
