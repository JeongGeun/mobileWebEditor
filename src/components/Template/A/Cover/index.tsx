import Image from "next/image";
import styles from "./index.module.scss";

export default function Cover() {
  return (
    <div className={styles.layout}>
      <p className={styles.date}>10월 26일</p>
      <Image
        src="https://www.itscard.co.kr/mobile/new_m/mcard/images/mcard_29/visual_01.jpg"
        alt="1234"
        width={260}
        height={260}
      />
      <div className={styles.name}>조정근 / 김체린</div>
      <div className={styles.content}>
        토요일 오후 1시 30분
        <br /> 라마다 호텔 6층 노블레스홀
      </div>
    </div>
  );
}
