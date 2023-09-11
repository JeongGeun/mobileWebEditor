import Image from "next/image";
import styles from "./index.module.scss";
import { FileImageOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { TemplateType } from "@/apis/list";

interface ToolbarProps {
  appendItem: (type: TemplateType) => void;
}

const menuList: {
  title: string;
  type: TemplateType;
  children: React.ReactNode;
}[] = [
  {
    title: "커버",
    type: "A",
    children: (
      <Image src="/cover-image.png" width={24} height={24} alt="표지" />
    ),
  },
  {
    title: "텍스트",
    type: "B",
    children: <Image src="/text.png" width={24} height={24} alt="텍스트" />,
  },
  { title: "이미지", type: "C", children: <FileImageOutlined /> },
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
