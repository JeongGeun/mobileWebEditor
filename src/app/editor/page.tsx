"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Toolbar from "@/components/Toolbar";
import Sider from "@/components/Sider";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { FormListType } from "@/apis/list";

export default function Editor() {
  const methods = useForm<FormListType>({ defaultValues: { blocks: [] } });
  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "blocks", // unique name for your Field Array
  });

  const appendItem = (type: "TEXT" | "IMAGE") => {
    append({ type, value: "" });
  };

  console.log(fields);
  return (
    <FormProvider {...methods}>
      <form>
        <Layout style={{ height: "100%" }} hasSider>
          <Layout.Content>
            <Toolbar appendItem={appendItem} />
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
