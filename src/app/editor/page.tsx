"use client";

import { Layout } from "antd";
import Renderer from "@/components/Renderer";
import Sider from "@/components/Sider";
import { FormListType } from "@/apis/list";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useGetInviInfoQuery } from "@/query/useGetInviInfoQuery";
import { useForm, useFormContext } from "react-hook-form";

export default function Editor() {
  const [width, setWidth] = useState("375px");
  const { setValue } = useFormContext<FormListType>();

  const onSectionClick = (event: React.MouseEvent) => {
    setValue("inspectorNumber", Number(event.currentTarget.id));
  };

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
        <Renderer data={data} width={width} onSectionClick={onSectionClick} />
      </Layout.Content>
      <Layout.Sider width={350} style={{ background: "white" }}>
        <Sider />
      </Layout.Sider>
    </Layout>
  );
}
