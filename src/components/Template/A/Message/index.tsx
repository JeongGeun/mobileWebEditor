import { useFormContext, useWatch } from "react-hook-form";
import styles from "./index.module.scss";

interface MessageProps {
  onSectionClick: VoidFunction;
}

const DEFAULT_NAME = "OOO";
export default function Message({ onSectionClick }: MessageProps) {
  const { watch } = useFormContext();
  const [
    title,
    content,
    husbandFatherName,
    husbandMotherName,
    wifeFatherName,
    wifeMotherName,
    husbandName,
    wifeName,
    husbandOrder,
    wifeOrder,
  ] = watch([
    "block.messageTitle",
    "block.messageContent",
    "block.husbandFatherName",
    "block.husbandMotherName",
    "block.wifeFatherName",
    "block.wifeMotherName",
    "block.husbandName",
    "block.wifeName",
    "block.husbandOrder",
    "block.wifeOrder",
  ]);

  return (
    <div className={styles.layout} onClick={onSectionClick}>
      <div className={styles.title}>{title || "제목은 여기에"}</div>
      <div className={styles.content}>{content || "문구는 여기에"}</div>
      <div className={styles.info}>
        <div className={styles.row}>
          <span>{husbandFatherName || DEFAULT_NAME}</span>
          <span className={styles.bullet} />
          <span>{husbandMotherName || DEFAULT_NAME}</span>
          <span className={styles.small}>의 {husbandOrder || "OO"}</span>
          <span className={styles.hero}>{husbandName || DEFAULT_NAME}</span>
        </div>
        <div className={styles.row}>
          <span>{wifeFatherName || DEFAULT_NAME}</span>
          <span className={styles.bullet} />
          <span>{wifeMotherName || DEFAULT_NAME}</span>
          <span className={styles.small}>의 {wifeOrder || "OO"}</span>
          <span className={styles.hero}>{wifeName || DEFAULT_NAME}</span>
        </div>
      </div>
    </div>
  );
}
