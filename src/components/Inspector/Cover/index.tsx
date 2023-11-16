import { Button, DatePicker, DatePickerProps, Input } from "antd";
import { Controller } from "react-hook-form";
import styles from "./index.module.scss";

export default function CoverInspector() {
  const postAddressCode = () => {
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new window.daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };

    //지도를 미리 생성
    const map = new window.daum.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    const geocoder = new window.daum.maps.services.Geocoder();
    //마커를 미리 생성
    const marker = new window.daum.maps.Marker({
      position: new window.daum.maps.LatLng(37.537187, 127.005476),
      map: map,
    });

    new window.daum.Postcode({
      oncomplete: function (data: any) {
        const addr = data.address; // 최종 주소 변수
        const addressInput = document.getElementById(
          "address"
        ) as HTMLInputElement;
        // 주소 정보를 해당 필드에 넣는다.
        addressInput.value = addr;
        // 주소로 상세 정보를 검색
        geocoder.addressSearch(
          data.address,
          function (results: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.daum.maps.services.Status.OK) {
              var result = results[0]; //첫번째 결과의 값을 활용

              // 해당 주소에 대한 좌표를 받아서
              var coords = new window.daum.maps.LatLng(result.y, result.x);

              map.relayout();
              // 지도 중심을 변경한다.
              map.setCenter(coords);
              // 마커를 결과값으로 받은 위치로 옮긴다.
              marker.setPosition(coords);
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
        name="block.place"
        render={({ field }) => (
          <div className={styles.container}>
            <label>장소</label>
            <Input.TextArea
              id="address"
              {...field}
              autoSize={{ minRows: 4 }}
              readOnly
            />
            <Button
              className={styles.place_btn}
              type="primary"
              onClick={postAddressCode}
            >
              주소 검색
            </Button>
          </div>
        )}
      />
      <Controller
        name="block.date"
        render={({ field }) => {
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
