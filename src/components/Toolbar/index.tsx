import Image from "next/image";
import styles from "./index.module.scss";
import { FileImageOutlined } from "@ant-design/icons";

export default function Toolbar() {
  return (
    <ul className={styles.toolbar}>
      <li>
        <Image src="/text.png" width={24} height={24} alt="텍스트" />
      </li>
      <li>
        <FileImageOutlined  />
      </li>
    </ul>
  );
}
