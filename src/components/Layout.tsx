"use client";

import React, { useState } from "react";
import { PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import styles from "./layout.module.scss";
import { useRouter } from "next/navigation";

const { Header, Content, Sider } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
  buttonComponent?: React.ReactNode;
  isEditorPage?: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [getItem("모바일 청첩창", "1", <PieChartOutlined />)];

const AppLayout = ({
  children,
  buttonComponent,
  isEditorPage,
}: AppLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  if (isEditorPage) return <>{children}</>;

  return (
    <Layout>
      <Header className={styles.header}>
        <div
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        >
          모청 메이커
        </div>
        {buttonComponent || null}
      </Header>
      <Layout className={styles.layout} hasSider>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
