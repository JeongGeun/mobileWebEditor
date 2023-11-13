import { PhoneFilled } from "@ant-design/icons";
import styles from "./index.module.scss";
import { Button } from "antd";

export default function WeddingMap() {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>오시는길</div>

      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.name}>잇츠카드 웨딩홀 6층 노블레스홀</div>
          <div>
            <p className={styles.text}>서울특별시 강남구 논현로 742</p>
            <p className={styles.text}>Tel. 02-1234-5678</p>
          </div>
        </div>
        <Button type="primary" shape="circle" icon={<PhoneFilled />} />
      </div>
    </div>
  );
}
