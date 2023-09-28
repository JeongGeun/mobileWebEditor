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

  const heroList = [
    { name: "신랑", tel: husbandTel },
    { name: "신부", tel: wifeTel },
  ];

  const heroParentList = [
    {
      name: "신랑",
      parentInfo: [
        { name: husbandFatherName, tel: husbandFatherTel, type: "아버지" },
        { name: husbandMotherName, tel: husbandMotherTel, type: "어머니" },
      ],
    },
    {
      name: "신부",
      parentInfo: [
        { name: wifeFatherName, tel: wifeFatherTel, type: "아버지" },
        { name: wifeMotherName, tel: wifeMotherTel, type: "어머니" },
      ],
    },
  ];

  const onClickContactButton = (type: "TEL" | "SMS", phoneNumber: string) => {
    document.location.href = `${type.toLocaleLowerCase()}:${phoneNumber}`;
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
        {heroList.map(({ name, tel }) => (
          <div className={styles.row} key={name}>
            <div>
              <strong>{name}</strong>에게 연락하기
            </div>
            <div className={styles.buttonGroup}>
              <Button
                type="primary"
                shape="circle"
                icon={<PhoneFilled />}
                onClick={() => onClickContactButton("TEL", tel)}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<MessageFilled />}
                onClick={() => onClickContactButton("SMS", tel)}
              />
            </div>
          </div>
        ))}
      </section>
      <section className={styles.parentTel}>
        <div className={styles.title}>혼주에게 연락하기</div>
        <div className={styles.parentTable}>
          {heroParentList.map(({ name, parentInfo }) => (
            <div className={styles.col} key={name}>
              <div className={styles.husbandText}>{name}측 혼주</div>
              {parentInfo.map(({ type, name, tel }) => (
                <div className={styles.telContent} key={name}>
                  <div>
                    <span>{type}</span>
                    <strong className={styles.name}>
                      {name || DEFAULT_NAME}
                    </strong>
                  </div>
                  <div className={styles.buttonSection}>
                    <div className={styles.buttonGroup}>
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<PhoneFilled />}
                        onClick={() => onClickContactButton("TEL", tel)}
                      />
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<MessageFilled />}
                        onClick={() => onClickContactButton("SMS", tel)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
