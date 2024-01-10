"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Sider from "@/components/Sider";
import { useFormContext } from "react-hook-form";
import { FormListType } from "@/apis/list";
import { useState } from "react";

export default function Editor() {
  const [width, setWidth] = useState("375px");
  const { watch, setValue } = useFormContext<FormListType>();
  const data = watch();
  const onSectionClick = (event: React.MouseEvent) => {
    setValue("inspectorNumber", Number(event.currentTarget.id));
  };

  return (
    <Layout style={{ height: "100%" }} hasSider>
      <Layout.Content>
        {/* <Toolbar setTemplateType={setTemplateType} /> */}
        <Renderer data={data} width={width} onSectionClick={onSectionClick} />
      </Layout.Content>
      <Layout.Sider width={350} style={{ background: "white" }}>
        <Sider />
      </Layout.Sider>
    </Layout>
  );
}
