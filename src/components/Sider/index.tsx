import ContactInspector from "../Inspector/Contact";
import CoverInspector from "../Inspector/Cover";
import MessageInspector from "../Inspector/Message";
import styles from "./index.module.scss";
import { useWatch } from "react-hook-form";

export default function Sider() {
  const type = useWatch({ name: "type" });
  const inspectorNumber = useWatch({ name: "inspectorNumber" });

  return (
    <div className={styles["cover-layout"]}>
      {type === "A" && (
        <>
          {inspectorNumber === 0 && <CoverInspector />}
          {inspectorNumber === 1 && <MessageInspector />}
          {inspectorNumber === 2 && <ContactInspector />}
        </>
      )}
    </div>
  );
}
