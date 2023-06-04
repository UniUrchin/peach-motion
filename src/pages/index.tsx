import { Peach } from "@/components/Peach";
import { Cloud1, Cloud2 } from "@/components/Cloud";
import { Glass1, Glass2 } from "@/components/Glass";
import styles from "@/styles/Index.module.css";

export default function Index() {
  return (
    <div className="flex h-screen justify-center items-center relative">
      <img
        className="w-[30rem] h-[3rem] bottom-[10rem] absolute z-[60]"
        src="/titlelogo.png"
      />
      <Peach />
      <div className={styles.separator} />
      <Cloud1 />
      <Cloud2 />
      <Glass1 />
      <Glass2 />
      <img className="w-[30rem] h-[30rem] absolute z-0" src="/background.png" />
    </div>
  );
}
