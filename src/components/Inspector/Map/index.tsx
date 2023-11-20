import { Controller } from "react-hook-form";
import { Input } from "antd";
import styles from "./index.module.scss";

export default function MapInspector() {
  return (
    <div className={styles["inspector-layout"]}>
      <Controller
        name="block.subway"
        render={({ field }) => (
          <div className={styles.container}>
            <label>지하철 안내</label>
            <Input.TextArea {...field} autoSize={{ minRows: 4 }} />
          </div>
        )}
      />
      <Controller
        name="block.bus"
        render={({ field }) => (
          <div className={styles.container}>
            <label>버스 안내</label>
            <Input.TextArea {...field} autoSize={{ minRows: 4 }} />
          </div>
        )}
      />
      <Controller
        name="block.parking"
        render={({ field }) => (
          <div className={styles.container}>
            <label>주차 안내</label>
            <Input.TextArea {...field} autoSize={{ minRows: 4 }} />
          </div>
        )}
      />
    </div>
  );
}
