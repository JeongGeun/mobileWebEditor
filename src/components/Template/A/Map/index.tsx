import { PhoneFilled } from "@ant-design/icons";
import styles from "./index.module.scss";
import { Button } from "antd";
import { useEffect } from "react";

interface WedddingMapProps {
  onSectionClick: VoidFunction;
}

export default function WeddingMap({ onSectionClick }: WedddingMapProps) {
  // https://postcode.map.daum.net/guide
  // https://developers.kakao.com/docs/latest/ko/local/dev-guide#trans-coord
  // useEffect(() => {
  //   window.kakao.maps.load(() => {
  //     console.log(1234);
  //     const mapDiv = document.querySelector("#map");
  //     const mapOption = {
  //       center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
  //       level: 3, // 지도의 확대 레벨
  //     };

  //     const map = new window.kakao.maps.Map(mapDiv, mapOption);

  //     const markerPosition = new window.kakao.maps.LatLng(
  //       33.450701,
  //       126.570667
  //     );

  //     // 마커를 생성합니다
  //     const marker = new window.kakao.maps.Marker({
  //       position: markerPosition,
  //     });

  //     // 마커가 지도 위에 표시되도록 설정합니다
  //     marker.setMap(map);
  //   });
  // }, []);
  return (
    <div className={styles.layout} onClick={onSectionClick}>
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
