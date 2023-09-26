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
      <Controller
        name="block.husbandFatherName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 아버지 성함</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.husbandMotherName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 어머니 성함</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.wifeFatherName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 아버지 성함</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.wifeMotherName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 어머니 성함</label>
            <Input {...field} />
          </div>
        )}
      />
    </div>
  );
}
