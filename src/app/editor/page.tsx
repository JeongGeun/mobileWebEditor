"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Toolbar from "@/components/Toolbar";
import Sider from "@/components/Sider";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import type { FormListType, TemplateType } from "@/apis/list";
import { useState } from "react";

export default function Editor() {
  const methods = useForm<FormListType>({
    defaultValues: { type: "A", inspectorNumber: 0 },
  });

  const setTemplateType = (type: TemplateType) => {
    methods.setValue("type", type);
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Layout style={{ height: "100%" }} hasSider>
          <Layout.Content>
            <Toolbar setTemplateType={setTemplateType} />
            <Renderer />
          </Layout.Content>
          <Layout.Sider width={350} style={{ background: "white" }}>
            <Sider />
          </Layout.Sider>
        </Layout>
      </form>
    </FormProvider>
  );
}
