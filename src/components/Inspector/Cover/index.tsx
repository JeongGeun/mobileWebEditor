import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";
import dayjs from "dayjs";

export default function CoverInspector() {
  const map = useRef<any>();
  const marker = useRef<any>();
  const { setValue } = useFormContext();

  // https://postcode.map.daum.net/guide
  // https://developers.kakao.com/docs/latest/ko/local/dev-guide#trans-coord
  useEffect(() => {
    window.kakao.maps.load(() => {});
  }, []);

  const postAddressCode = () => {
    const geocoder = new window.daum.maps.services.Geocoder();

    new window.daum.Postcode({
      oncomplete: function (data: any) {
        const mapDiv = document.querySelector("#map");
        // 주소 정보를 해당 필드에 넣는다.
        setValue("block.address", data.address);
        // 주소로 상세 정보를 검색
        geocoder.addressSearch(
          data.address,
          function (results: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.daum.maps.services.Status.OK) {
              const result = results[0]; //첫번째 결과의 값을 활용

              // 해당 주소에 대한 좌표를 받아서
              const mapOption = {
                center: new window.kakao.maps.LatLng(result.y, result.x), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
              };
              map.current = new window.kakao.maps.Map(mapDiv, mapOption);
              const markerPosition = new window.kakao.maps.LatLng(
                result.y,
                result.x
              );

              // 마커를 생성합니다
              marker.current = new window.kakao.maps.Marker({
                position: markerPosition,
              });

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.current?.setMap(map.current);
            }
          }
        );
      },
    }).open();
  };
  return (
    <div className={styles["inspector-layout"]}>
      <Controller
        name="block.husbandName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신랑 성명</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.wifeName"
        render={({ field }) => (
          <div className={styles.container}>
            <label>신부 성명</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.address"
        render={({ field }) => (
          <div className={styles.container}>
            <label>식장 도로명 주소</label>
            <Input.Search
              id="address"
              {...field}
              onClick={postAddressCode}
              onSearch={postAddressCode}
              readOnly
            />
          </div>
        )}
      />
      <Controller
        name="block.addressDetail"
        render={({ field }) => (
          <div className={styles.container}>
            <label>식장 상세 주소</label>
            <Input {...field} />
          </div>
        )}
      />
      <Controller
        name="block.date"
        render={({ field }) => {
          const value = field.value ? dayjs(field.value) : null;
          const { onChange } = field;
          const onOk = (value: DatePickerProps["value"]) => {
            if (value) {
              onChange(value.format("YYYY-MM-DD HH:mm"));
            }
          };
          return (
            <div className={styles.container}>
              <label>시간</label>
              <DatePicker
                value={value}
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                onOk={onOk}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
