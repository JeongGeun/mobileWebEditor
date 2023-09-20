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
    </div>
  );
}
