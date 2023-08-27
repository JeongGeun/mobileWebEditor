"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Toolbar from "@/components/Toolbar";

export default function Editor() {
  return (
    <Layout style={{ height: "100%" }} hasSider>
      <Layout.Content>
        <Toolbar />
        <Renderer />
      </Layout.Content>
      <Layout.Sider width={350} style={{ background: "white" }}>
        Sider
      </Layout.Sider>
    </Layout>
  );
}
