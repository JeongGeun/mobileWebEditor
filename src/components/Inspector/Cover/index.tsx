import {
  DatePicker,
  DatePickerProps,
  Input,
  Button,
  Upload,
  UploadProps,
  UploadFile,
} from "antd";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { UploadOutlined } from "@ant-design/icons";
import { deleteS3file, getUploadedS3Url } from "@/util/s3";

export default function CoverInspector() {
  const map = useRef<any>();
  const marker = useRef<any>();
  const { setValue } = useFormContext();

  useEffect(() => {}, []);

  const postAddressCode = () => {
    const geocoder = new window.daum.maps.services.Geocoder();

    new window.daum.Postcode({
      oncomplete: function (data: any) {
        // 주소 정보를 해당 필드에 넣는다.
        setValue("block.address", data.address);
        // 주소로 상세 정보를 검색
        geocoder.addressSearch(
          data.address,
          function (results: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.daum.maps.services.Status.OK) {
              const result = results[0]; //첫번째 결과의 값을 활용
              setValue("block.addressYposition", result.y);
              setValue("block.addressXposition", result.x);
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
        name="block.representativeImage"
        render={({ field }) => {
          const { onChange } = field;
          const props: UploadProps = {
            fileList: field.value
              ? [{ uid: "0", name: field.value, thumbUrl: field.value }]
              : [],
            maxCount: 1,
            listType: "picture",
            customRequest: async ({ file }) => {
              const url = await getUploadedS3Url(file as File);
              onChange(url);
            },
            onRemove: async (file: UploadFile<any>) => {
              await deleteS3file(file);
              onChange("");
              window.alert("삭제되었습니다.");
            },
          };

          return (
            <div className={styles.container}>
              <label>대표 이미지</label>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
          );
        }}
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
