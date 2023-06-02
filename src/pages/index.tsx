import Image from "next/image";
import { Peach } from "@/components/Peach";
import { Glass1, Glass2 } from "@/components/Glass";
import styles from "@/styles/Index.module.css";

export default function Index() {
  return (
    <div className="flex h-screen justify-center items-center relative">
      <Peach />
      <div className={styles.separator} />
      <Glass1 />
      <Glass2 />
      <img className="w-[30rem] h-[30rem] absolute z-0" src="/background.png" />
    </div>
  );
}
