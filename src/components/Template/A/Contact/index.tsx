import styles from "./index.module.scss";

interface ContactProps {
  onSectionClick: VoidFunction;
}

export default function Contact({ onSectionClick }: ContactProps) {
  return (
    <div className={styles.layout} onClick={onSectionClick}>
      <section
        className={styles.image}
        style={{
          background: `url(
            "https://www.itscard.co.kr/mobile/new_m/mcard/images/mcard_29/banner_01.jpg"
          ) center center no-repeat`,
        }}
      >
        <div className={styles.imageContent}>
          <p className={styles.invitation}>소중한 당신을 환영합니다.</p>
        </div>
      </section>
    </div>
  );
}
