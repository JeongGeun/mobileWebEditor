import Inspector from "../Inspector";
import styles from "./index.module.scss";
import { useWatch } from "react-hook-form";

export default function Sider() {
  const type = useWatch({ name: "type" });
  const inspectorNumber = useWatch({ name: "inspectorNumber" });

  return (
    <>
      {type === "A" && (
        <div className={styles["cover-layout"]}>
          {inspectorNumber === 0 && <Inspector />}
        </div>
      )}
    </>
  );
}
