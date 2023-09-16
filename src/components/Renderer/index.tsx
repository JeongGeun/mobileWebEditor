import { useState } from "react";
import styles from "./index.module.scss";
import { useWatch } from "react-hook-form";
import TemplateA from "../Template/A";

export default function Renderer() {
  const [width, setWidth] = useState("375px");
  const type = useWatch({ name: "type" });
  return (
    <div className={styles.container} style={{ width }}>
      {type === "A" && <TemplateA />}
    </div>
  );
}
