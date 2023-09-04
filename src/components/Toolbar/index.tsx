import Image from "next/image";
import styles from "./index.module.scss";
import { FileImageOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

interface ToolbarProps {
  appendItem: (type: "TEXT" | "IMAGE") => void;
}

const menuList: {
  title: string;
  type: "TEXT" | "IMAGE";
  children: React.ReactNode;
}[] = [
  {
    title: "텍스트",
    type: "TEXT",
    children: <Image src="/text.png" width={24} height={24} alt="텍스트" />,
  },
  { title: "이미지", type: "IMAGE", children: <FileImageOutlined /> },
];

export default function Toolbar({ appendItem }: ToolbarProps) {
  return (
    <ul className={styles.toolbar}>
      {menuList.map(({ title, children, type }, index) => (
        <li key={index} onClick={() => appendItem(type)}>
          <Tooltip placement="right" title={title}>
            {children}
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
