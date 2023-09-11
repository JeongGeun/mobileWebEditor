"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Toolbar from "@/components/Toolbar";
import Sider from "@/components/Sider";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import type { FormListType, TemplateType } from "@/apis/list";
import { useState } from "react";

export default function Editor() {
  const methods = useForm<FormListType>({ defaultValues: { blocks: [] } });
  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "blocks", // unique name for your Field Array
  });
  const [item, setItem] = useState({ type: "A" });

  const appendItem = (type: TemplateType) => {
    append({ type: "A", value: "" });
  };

  console.log(fields);
  return (
    <FormProvider {...methods}>
      <form>
        <Layout style={{ height: "100%" }} hasSider>
          <Layout.Content>
            <Toolbar appendItem={appendItem} />
            <Renderer fields={fields} />
          </Layout.Content>
          <Layout.Sider width={350} style={{ background: "white" }}>
            <Sider item={item} />
          </Layout.Sider>
        </Layout>
      </form>
    </FormProvider>
  );
}
