import styles from "./index.module.scss";

export default function Message() {
  const text = `서로가 마주보며 다져온 사랑을
  이제 함께 한 곳을 바라보며
  걸어갈 수 있는 큰 사랑으로
  키우고자 합니다.
  저희 두 사람이 사랑의 이름으로
  지켜나갈 수 있도록
  앞날을 축복해 주시면
  감사하겠습니다.`;

  return (
    <div className={styles.layout}>
      <div className={styles.title}>이제 서로, 평생 함께</div>
      <div className={styles.content}>{text}</div>
    </div>
  );
}
