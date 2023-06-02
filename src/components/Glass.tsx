import { motion } from "framer-motion";

export const Glass1: React.FC = () => {
  return (
    <motion.img
      src="/glass1.png"
      className="w-[30rem] h-[10rem] bottom-[3rem] absolute z-20"
      animate={{ x: [10, 0, -10, 0, 10], y: [10, 0, 10, 0, 10] }}
      transition={{ duration: 5, ease: "linear", repeat: Infinity }}
    />
  );
};

export const Glass2: React.FC = () => {
  return (
    <motion.img
      src="/glass2.png"
      className="w-[30rem] h-[10rem] bottom-[6rem] absolute z-10"
      animate={{ x: [-10, 0, 10, 0, -10], y: [10, 0, 10, 0, 10] }}
      transition={{ duration: 5, ease: "linear", repeat: Infinity }}
    />
  );
};
