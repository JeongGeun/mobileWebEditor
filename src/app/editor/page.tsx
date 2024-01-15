"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Sider from "@/components/Sider";
import { useSearchParams } from "next/navigation";
import { useGetInviInfoQuery } from "@/query/useGetInviInfoQuery";
import { useEffect } from "react";
import { useForm, useFormContext } from "react-hook-form";

export default function Editor() {
  const { reset } = useFormContext();
  const params = useSearchParams();
  const id = params.get("id") as string;
  const { data } = useGetInviInfoQuery(id, { enabled: !!id });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [reset, data]);

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
