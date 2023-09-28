import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import styles from "./index.module.scss";

const DynamicCalendar = dynamic(() => import("react-calendar"), { ssr: false });

interface CalendarProps {
  onSectionClick: VoidFunction;
}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendar({ onSectionClick }: CalendarProps) {
  const { watch } = useFormContext();
  const date = watch("block.date");
  const value = date ? new Date(date) : new Date();

  return (
    <section className={styles.layout}>
      <div className={styles.header}>
        <span className={styles.month}>
          <strong>10</strong> October
        </span>
        <span className={styles.day}>
          <span>sat.</span>
          <span>pm 1:30</span>
        </span>
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
