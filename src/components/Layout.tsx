"use client";

import React, { useState } from "react";
import { PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./layout.module.scss";
import { FormListType } from "@/apis/list";
import { usePathname } from "next/navigation";
import { useInvitationMutation } from "@/query/useInvitationMutation";


const { Header, Content, Sider } = Layout;

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

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormListType>({
    defaultValues: { type: "A", inspectorNumber: 0 },
  });
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const { mutate } = useInvitationMutation();

  const onCreateInvitation = (data: FormListType) => {
    mutate(JSON.stringify(data), {
      onSuccess: () => {
        console.log("success");
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo}>모청 메이커</div>
          {pathname === "/editor" && (
            <Button
              type="primary"
              onClick={methods.handleSubmit(onCreateInvitation)}
            >
              청첩장 등록
            </Button>
          )}
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
    </FormProvider>
  );
};

export default AppLayout;
