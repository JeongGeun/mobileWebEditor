import { Controller } from "react-hook-form";
import styles from "./index.module.scss";
import { Input, Select } from "antd";

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
        name="block.husbandOrder"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 서열</label>
            <Select
              {...field}
              placeholder="남자 형제 중 서열"
              options={[
                { value: "장남", label: "장남" },
                { value: "차남", label: "차남" },
                { value: "삼남", label: "삼남" },
                { value: "사남", label: "사남" },
              ]}
            />
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
      <Controller
        name="block.wifeOrder"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 서열</label>
            <Select
              {...field}
               placeholder="여자 자매 중 서열"
              options={[
                { value: "장녀", label: "장녀" },
                { value: "차녀", label: "차녀" },
                { value: "삼녀", label: "삼녀" },
                { value: "사녀", label: "사녀" },
              ]}
            />
          </div>
        )}
      />
    </div>
  );
}
