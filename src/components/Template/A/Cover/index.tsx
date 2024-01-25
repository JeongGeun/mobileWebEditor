import Image from "next/image";
import styles from "./index.module.scss";
import { useMemo } from "react";
import { DAYS } from "@/constant/date";
import { FormListType } from "@/apis/list";

interface CoverProps {
  data?: FormListType;
  onSectionClick?: (event: React.MouseEvent) => void;
}

export default function Cover({ data, onSectionClick }: CoverProps) {
  const dates = data?.block?.date as string;
  const husbandName = data?.block?.husbandName;
  const wifeName = data?.block?.wifeName;
  const address = data?.block?.address;
  const addressDetail = data?.block?.addressDetail;
  const representativeImage = data?.block?.representativeImage;

  const getDate = useMemo(() => {
    if (dates) {
      const targetDate = new Date(dates);

      return {
        month: targetDate.getMonth() + 1,
        date: targetDate.getDate(),
        day: targetDate.getDay(),
        hour: targetDate.getHours(),
        min: targetDate.getMinutes(),
      };
    }
    return {
      month: "00",
      date: "00",
      hour: "00",
      min: "00",
      day: 0,
    };
  }, [dates]);

  const { month, date, hour, min, day } = getDate;

  return (
    <div id="0" className={styles.layout} onClick={onSectionClick}>
      <p className={styles.date}>
        {month}월{date}일
      </p>
      <Image
        src={
          representativeImage ||
          "https://www.itscard.co.kr/mobile/new_m/mcard/images/mcard_29/visual_01.jpg"
        }
        alt="대표 결혼식 이미지"
        width={260}
        height={260}
      />
      <div className={styles.name}>
        {husbandName} / {wifeName}
      </div>
      <div className={styles.content}>
        {DAYS[day]}요일 오후 {hour}시 {min}분
        <br /> {addressDetail}
        <br /> ({address})
      </div>
    </div>
  );
}
