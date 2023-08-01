"use client";

import React from "react";
import { Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  position: "relative",
  top: 0,
  textAlign: "center",
  color: "#fff",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <Space direction="vertical" style={{ width: "100%", height: "100vh" }}>
    <Layout style={{ width: "100%", height: "100%", position: "absolute" }}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  </Space>
);

export default AppLayout;
