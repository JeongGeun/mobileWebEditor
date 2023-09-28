import styles from "./index.module.scss";
import { Controller } from "react-hook-form";
import { Input, InputNumber } from "antd";

export default function ContactInspector() {
  return (
    <div className={styles.layout}>
      <Controller
        name="block.invitationText"
        render={({ field }) => (
          <div className={styles.container}>
            <label>문구</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.husbandTel"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 전화번호</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.wifeTel"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 전화번호</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.husbandFatherTel"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 아버님 전화번호</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.husbandMotherTel"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 어머님 전화번호</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.wifeFatherTel"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 아버님 전화번호</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.wifeMotherTel"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 어머님 전화번호</label>
            <Input {...field} />
          </div>
        )}
      />
    </div>
  );
}
