import { PhoneFilled } from "@ant-design/icons";
import styles from "./index.module.scss";
import { Button } from "antd";
import { useFormContext } from "react-hook-form";

interface WedddingMapProps {
  onSectionClick?: (event: React.MouseEvent) => void;
}

export default function WeddingMap({ onSectionClick }: WedddingMapProps) {
  const { watch } = useFormContext();
  const address = watch("block.address");
  const addressDetail = watch("block.addressDetail");

  return (
    <div id="4" className={styles.layout} onClick={onSectionClick}>
      <div className={styles.title}>오시는길</div>

      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.name}>
            {addressDetail || "잇츠카드 웨딩홀 6층 노블레스홀"}
          </div>
          <div>
            <p className={styles.text}>
              {address || "경기 성남시 분당구 판교역로 166"}
            </p>
            <p className={styles.text}>Tel. 02-1234-5678</p>
          </div>
        </div>
        <Button type="primary" shape="circle" icon={<PhoneFilled />} />
      </div>
      <div id="map" className={styles.map}></div>
      <div className={styles.info}>
        <div className={styles.contain}>
          <dl>
            <dt>지하철 안내</dt>
            <dd>7호선 학동역 8번출구 도보 10분 거리</dd>
          </dl>
          <dl>
            <dt>버스안내</dt>
            <dd>간선버스 : 47, 240, 463</dd>
            <dd>지선버스 : 4211</dd>
            <dd>마을버스 : 강남08</dd>
          </dl>
          <dl>
            <dt>주차안내</dt>
            <dd>웨딩홀 전방 우측 150m 사이 공용주차장 이용</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
