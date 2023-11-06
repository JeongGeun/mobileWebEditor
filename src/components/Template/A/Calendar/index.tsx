import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import styles from "./index.module.scss";
import { ENG_DAYS, ENG_MONTH } from "@/constant/date";
import { useEffect, useState } from "react";

const DynamicCalendar = dynamic(() => import("react-calendar"), { ssr: false });

export default function Calendar() {
  const [isClient, setIsClient] = useState(false);

  const { watch } = useFormContext();
  const formValueDate = watch("block.date");
  const value = formValueDate ? new Date(formValueDate) : new Date();
  const hour = value.getHours();
  const min = value.getMinutes();
  const day = ENG_DAYS[value.getDay()];
  const month = value.getMonth();
  const noonWord = hour / 12 >= 1 ? "pm" : "am";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.month}>
          <strong>{month + 1}</strong> {ENG_MONTH[month]}
        </div>
        <div className={styles.day}>
          <span>{day}.</span>
          <span>
            {noonWord} {hour === 12 ? 12 : hour % 12}:{min}
          </span>
        </div>
      </div>
      <DynamicCalendar
        className={styles.calendar}
        formatDay={(_, date) => dayjs(date).format("D")}
        value={value}
        calendarType="US"
        nextLabel=""
        next2Label=""
        prevLabel=""
        prev2Label=""
        tileDisabled={({ date }) =>
          date.getDate() !== value.getDate() ||
          date.getMonth() !== value.getMonth()
        }
        showNavigation={false}
      />
    </section>
  );
}
