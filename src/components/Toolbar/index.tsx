import Image from "next/image";
import styles from "./index.module.scss";
import { FileImageOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const menuList: { title: string; children: React.ReactNode }[] = [
  {
    title: "텍스트",
    children: <Image src="/text.png" width={24} height={24} alt="텍스트" />,
  },
  { title: "이미지", children: <FileImageOutlined /> },
];

export default function Toolbar() {
  return (
    <ul className={styles.toolbar}>
      {menuList.map(({ title, children }, index) => (
        <li key={index}>
          <Tooltip placement="right" title={title}>
            {children}
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
