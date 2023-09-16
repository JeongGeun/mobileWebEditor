import { DatePicker, DatePickerProps, Input } from "antd";
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
      <Controller
        name="block.date"
        render={({ field }) => {
          const { onChange } = field;
          const onOk = (value: DatePickerProps["value"]) => {
            if (value) {
              onChange(value.format("YYYY-MM-DD HH:mm"));
            }
          };
          return (
            <div className={styles.container}>
              <label>시간</label>
              <DatePicker
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                onOk={onOk}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
