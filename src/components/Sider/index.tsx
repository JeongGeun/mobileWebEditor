import Inspector from "../Inspector";
import styles from "./index.module.scss";
import { useWatch } from "react-hook-form";

export default function Sider() {
  const type = useWatch({ name: "type" });
  const inspectorNumber = useWatch({ name: "inspectorNumber" });

  return (
    <div className={styles["cover-layout"]}>
      {type === "A" && <>{inspectorNumber === 0 && <Inspector />}</>}
    </div>
  );
}
