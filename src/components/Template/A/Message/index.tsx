import { useWatch } from "react-hook-form";
import styles from "./index.module.scss";

interface MessageProps {
  onSectionClick: VoidFunction;
}

export default function Message({ onSectionClick }: MessageProps) {
  const title = useWatch({ name: "block.messageTitle" });
  const text = useWatch({ name: "block.messageContent" });

  return (
    <div className={styles.layout} onClick={onSectionClick}>
      <div className={styles.title}>{title || "제목은 여기에"}</div>
      <div className={styles.content}>{text || "문구는 여기에"}</div>
      <div className={styles.info}>
        <div className={styles.row}>
          <div>조용오</div>
          <span className={styles.bullet} />
          <div>김현숙의 장남 정근</div>
        </div>
        <div className={styles.row}>
          김체린
          <span className={styles.bullet} />
          김체린의 장녀 체린
        </div>
      </div>
    </div>
  );
}
