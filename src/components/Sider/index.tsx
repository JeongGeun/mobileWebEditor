import Inspector from "../Inspector";
import styles from "./index.module.scss";
import { useWatch } from "react-hook-form";

export default function Sider() {
  const type = useWatch({ name: "type" });
  return (
    <>
      {type === "A" && (
        <div className={styles["cover-layout"]}>
          <Inspector />
        </div>
      )}
    </>
  );
}
