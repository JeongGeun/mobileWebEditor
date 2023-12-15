"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Sider from "@/components/Sider";

export default function Editor() {
  return (
    <Layout style={{ height: "100%" }} hasSider>
      <Layout.Content>
        {/* <Toolbar setTemplateType={setTemplateType} /> */}
        <Renderer />
      </Layout.Content>
      <Layout.Sider width={350} style={{ background: "white" }}>
        <Sider />
      </Layout.Sider>
    </Layout>
  );
}
