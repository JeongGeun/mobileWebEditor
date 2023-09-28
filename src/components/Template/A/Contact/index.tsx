import { Button } from "antd";
import styles from "./index.module.scss";
import { PhoneFilled, MessageFilled } from "@ant-design/icons";

interface ContactProps {
  onSectionClick: VoidFunction;
}

export default function Contact({ onSectionClick }: ContactProps) {
  const onClickContactButton = (type: "TEL" | "SMS", phoneNumber: number) => {
    if (type === "TEL") {
      document.location.href = `tel:${phoneNumber}`;
    } else {
      document.location.href = `sms:${phoneNumber}`;
    }
  };

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
      <section className={styles.tel}>
        <div>
          <div className={styles.row}>
            <div>
              <strong>신랑</strong>에게 연락하기
            </div>
            <div className={styles.buttonGroup}>
              <Button
                type="primary"
                shape="circle"
                icon={<PhoneFilled />}
                onClick={() => onClickContactButton("TEL", 11)}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<MessageFilled />}
                onClick={() => onClickContactButton("SMS", 11)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <strong>신부</strong>에게 연락하기
            </div>
            <div className={styles.buttonGroup}>
              <Button
                type="primary"
                shape="circle"
                icon={<PhoneFilled />}
                onClick={() => onClickContactButton("TEL", 11)}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<MessageFilled />}
                onClick={() => onClickContactButton("SMS", 11)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.parentTel}>
        <div className={styles.title}>혼주에게 연락하기</div>
        <div className={styles.parentTable}>
          <div className={styles.col}>
            <div className={styles.husbandText}>신랑측 혼주</div>
            <div className={styles.telContent}>
              <div>
                <span>아버지</span>
                <strong className={styles.name}>이석훈</strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() => onClickContactButton("TEL", 11)}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() => onClickContactButton("SMS", 11)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.telContent}>
              <div>
                <span>어머니</span>
                <strong className={styles.name}>이미자</strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() => onClickContactButton("TEL", 11)}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() => onClickContactButton("SMS", 11)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.wifeText}>신부측 혼주</div>
            <div className={styles.telContent}>
              <div>
                <span>아버지</span>
                <strong className={styles.name}>유성령</strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() => onClickContactButton("TEL", 11)}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() => onClickContactButton("SMS", 11)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.telContent}>
              <div>
                <span>어머니</span>
                <strong className={styles.name}>이미자</strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() => onClickContactButton("TEL", 11)}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() => onClickContactButton("SMS", 11)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
