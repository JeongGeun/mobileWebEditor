import { Controller } from "react-hook-form";
import styles from "./index.module.scss";
import { Input } from "antd";

export default function MessageInspector() {
  return (
    <div className={styles.layout}>
      <Controller
        name="block.messageTitle"
        render={({ field }) => (
          <div className={styles.container}>
            <label>제목</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.messageContent"
        render={({ field }) => (
          <div className={styles.container}>
            <label>문구</label>
            <Input.TextArea {...field} autoSize={{ minRows: 4 }} />
          </div>
        )}
      />
    </div>
  );
}
