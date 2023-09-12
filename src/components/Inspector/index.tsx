import { Input } from "antd";
import { Controller } from "react-hook-form";
import styles from "./index.module.scss";

export default function Inspector() {
  return (
    <div className={styles["inspector-layout"]}>
      <Controller
        name="block.husbandName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 성명</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.wifeName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 성명</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.place"
        render={({ field }) => (
          <div className={styles.container}>
            <label>장소</label>
            <Input {...field} />
          </div>
        )}
      />
    </div>
  );
}
