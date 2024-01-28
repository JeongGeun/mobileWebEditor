import { PhoneFilled } from "@ant-design/icons";
import styles from "./index.module.scss";
import { Button } from "antd";
import { FormListType } from "@/apis/list";
import { useEffect, useRef } from "react";

interface WedddingMapProps {
  data?: FormListType;
  onSectionClick?: (event: React.MouseEvent) => void;
}

export default function WeddingMap({ data, onSectionClick }: WedddingMapProps) {
  const map = useRef<HTMLDivElement | null>(null);
  const marker = useRef<any>();
  const address = data?.block?.address;
  const addressDetail = data?.block?.addressDetail;
  const addressYposition = data?.block?.addressYposition;
  const addressXposition = data?.block?.addressXposition;
  const subway = data?.block?.subway;
  const bus = data?.block?.bus;
  const parking = data?.block?.parking;

  // https://postcode.map.daum.net/guide
  // https://developers.kakao.com/docs/latest/ko/local/dev-guide#trans-coord
  useEffect(() => {
    window.kakao.maps.load(() => {
      if (addressXposition && addressYposition) {
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            addressYposition,
            addressXposition
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        map.current = new window.kakao.maps.Map(map.current, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(
          addressYposition,
          addressXposition
        );

        // 마커를 생성합니다
        marker.current = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.current?.setMap(map.current);
      }
    });
  }, [addressXposition, addressYposition]);
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
      <div ref={map} className={styles.map}></div>
      <div className={styles.info}>
        <div className={styles.contain}>
          <dl>
            <dt>지하철 안내</dt>
            {subway?.split("\n")?.map((text) => <dd key={text}>{text}</dd>)}
          </dl>
          <dl>
            <dt>버스안내</dt>
            {bus?.split("\n")?.map((text) => <dd key={text}>{text}</dd>)}
          </dl>
          <dl>
            <dt>주차안내</dt>
            {parking?.split("\n")?.map((text) => <dd key={text}>{text}</dd>)}
          </dl>
        </div>
      </div>
    </div>
  );
}
