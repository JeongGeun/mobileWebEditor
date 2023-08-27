import { useState } from "react";
import styles from "./index.module.scss";

export default function Renderer() {
  const [width, setWidth] = useState("375px");
  return (
    <div className={styles.container} style={{ width }}>
      123
    </div>
  );
}
