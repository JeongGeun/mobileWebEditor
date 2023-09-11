import type { Block } from "@/apis/list";
import { Radio } from "antd";
import styles from "./index.module.scss";

interface SiderProps {
  item: Block;
}

export default function Sider({ item }: SiderProps) {
  return (
    <>{item.type === "A" && <div className={styles["cover-layout"]}></div>}</>
  );
}
