import Image from "next/image";
import { Peach } from "@/components/Peach";
import styles from "@/styles/Index.module.css";

export default function Index() {
  return (
    <div className="flex h-screen justify-center items-center relative">
      <Peach />
      <div className={styles.separator} />
      <Image
        className="absolute z-0"
        src="/background.png"
        width={500}
        height={500}
        alt="background"
      />
    </div>
  );
}
