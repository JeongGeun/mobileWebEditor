import Image from "next/image";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";
import { useMemo } from "react";
import { DAYS } from "@/constant/date";

interface CoverProps {
  onSectionClick: VoidFunction;
}

export default function Cover({ onSectionClick }: CoverProps) {
  const { watch } = useFormContext();
  const dates = watch("block.date") as string;

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
    <div className={styles.layout} onClick={onSectionClick}>
      <p className={styles.date}>
        {month}월{date}일
      </p>
      <Image
        src="https://www.itscard.co.kr/mobile/new_m/mcard/images/mcard_29/visual_01.jpg"
        alt="1234"
        width={260}
        height={260}
      />
      <div className={styles.name}>
        {watch("block.husbandName")} / {watch("block.wifeName")}
      </div>
      <div className={styles.content}>
        {DAYS[day]}요일 오후 {hour}시 {min}분
        <br /> {watch("block.place")}
      </div>
    </div>
  );
}
