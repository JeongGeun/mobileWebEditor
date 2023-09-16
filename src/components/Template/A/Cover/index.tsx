import Image from "next/image";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";
import { useMemo } from "react";

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
        day: targetDate.getDate(),
        hour: targetDate.getHours(),
        min: targetDate.getMinutes(),
      };
    }
    return {
      month: "00",
      day: "00",
      hour: "00",
      min: "00",
    };
  }, [dates]);

  const { month, day, hour, min } = getDate;

  return (
    <div className={styles.layout} onClick={onSectionClick}>
      <p className={styles.date}>
        {month}월 {day}일
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
        토요일 오후 {hour}시 {min}분
        <br /> {watch("block.place")}
      </div>
    </div>
  );
}
