import { Button } from "antd";
import styles from "./index.module.scss";
import { PhoneFilled, MessageFilled } from "@ant-design/icons";
import { useFormContext } from "react-hook-form";
import { DEFAULT_NAME } from "@/constant/default";

interface ContactProps {
  onSectionClick: VoidFunction;
}

export default function Contact({ onSectionClick }: ContactProps) {
  const { watch } = useFormContext();
  const [
    invitationText,
    husbandFatherName,
    husbandMotherName,
    wifeFatherName,
    wifeMotherName,
    husbandTel,
    wifeTel,
    husbandFatherTel,
    husbandMotherTel,
    wifeFatherTel,
    wifeMotherTel,
  ] = watch([
    "block.invitationText",
    "block.husbandFatherName",
    "block.husbandMotherName",
    "block.wifeFatherName",
    "block.wifeMotherName",
    "block.husbandTel",
    "block.wifeTel",
    "block.husbandFatherTel",
    "block.husbandMotherTel",
    "block.wifeFatherTel",
    "block.wifeMotherTel",
  ]);
  const onClickContactButton = (type: "TEL" | "SMS", phoneNumber: string) => {
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
          ) center / 100% no-repeat`,
        }}
      >
        <div className={styles.imageContent}>
          <p className={styles.invitation}>
            {invitationText || "한 줄 초대 문구를 써주세요."}
          </p>
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
                onClick={() => onClickContactButton("TEL", husbandTel)}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<MessageFilled />}
                onClick={() => onClickContactButton("SMS", husbandTel)}
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
                onClick={() => onClickContactButton("TEL", wifeTel)}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<MessageFilled />}
                onClick={() => onClickContactButton("SMS", wifeTel)}
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
                <strong className={styles.name}>
                  {husbandFatherName || DEFAULT_NAME}
                </strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() =>
                      onClickContactButton("TEL", husbandFatherTel)
                    }
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() =>
                      onClickContactButton("SMS", husbandFatherTel)
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.telContent}>
              <div>
                <span>어머니</span>
                <strong className={styles.name}>
                  {husbandMotherName || DEFAULT_NAME}
                </strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() =>
                      onClickContactButton("TEL", husbandMotherTel)
                    }
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() =>
                      onClickContactButton("SMS", husbandMotherTel)
                    }
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
                <strong className={styles.name}>
                  {wifeFatherName || DEFAULT_NAME}
                </strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() => onClickContactButton("TEL", wifeFatherTel)}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() => onClickContactButton("SMS", wifeFatherTel)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.telContent}>
              <div>
                <span>어머니</span>
                <strong className={styles.name}>
                  {wifeMotherName || DEFAULT_NAME}
                </strong>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.buttonGroup}>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneFilled />}
                    onClick={() => onClickContactButton("TEL", wifeMotherTel)}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageFilled />}
                    onClick={() => onClickContactButton("SMS", wifeMotherTel)}
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
