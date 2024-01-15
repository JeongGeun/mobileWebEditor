import styles from "./index.module.scss";
import { DEFAULT_NAME } from "@/constant/default";
import { FormListType } from "@/apis/list";

interface MessageProps {
  data?: FormListType;
  onSectionClick?: (event: React.MouseEvent) => void;
}

export default function Message({ data, onSectionClick }: MessageProps) {
  const block = data?.block;
  // const [
  //   title,
  //   content,
  //   husbandFatherName,
  //   husbandMotherName,
  //   wifeFatherName,
  //   wifeMotherName,
  //   husbandName,
  //   wifeName,
  //   husbandOrder,
  //   wifeOrder,
  // ] = watch([
  //   "block.messageTitle",
  //   "block.messageContent",
  //   "block.husbandFatherName",
  //   "block.husbandMotherName",
  //   "block.wifeFatherName",
  //   "block.wifeMotherName",
  //   "block.husbandName",
  //   "block.wifeName",
  //   "block.husbandOrder",
  //   "block.wifeOrder",
  // ]);

  const title = block?.messageTitle;
  const content = block?.messageContent;
  const husbandFatherName = block?.husbandFatherName;
  const husbandMotherName = block?.husbandMotherName;
  const wifeFatherName = block?.wifeFatherName;
  const wifeMotherName = block?.wifeMotherName;
  const husbandName = block?.husbandName;
  const wifeName = block?.wifeName;
  const husbandOrder = block?.husbandOrder;
  const wifeOrder = block?.wifeOrder;

  return (
    <div id="1" className={styles.layout} onClick={onSectionClick}>
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
