"use client";

import { Layout, Spin } from "antd";
import Renderer from "@/components/Renderer";
import Sider from "@/components/Sider";
import { FormListType } from "@/apis/list";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useGetInviInfoQuery } from "@/query/useGetInviInfoQuery";
import { useFormContext } from "react-hook-form";

export default function Editor() {
  const [width, setWidth] = useState("375px");
  const { setValue, watch } = useFormContext<FormListType>();

  const onSectionClick = (event: React.MouseEvent) => {
    setValue("inspectorNumber", Number(event.currentTarget.id));
  };

  const { reset } = useFormContext();
  const params = useSearchParams();
  const id = params.get("id") as string;
  const { isPending, data } = useGetInviInfoQuery(id, { enabled: !!id });
  const formData = watch();

  useEffect(() => {
    if (data) {
      reset({ ...data, inspectorNumber: 0 });
    }
  }, [reset, data]);

  if (id && isPending) {
    return <Spin spinning={isPending} fullscreen></Spin>;
  }

  return (
    <Layout style={{ height: "100%" }} hasSider>
      <Layout.Content>
        {/* <Toolbar setTemplateType={setTemplateType} /> */}
        <Renderer
          data={formData}
          width={width}
          onSectionClick={onSectionClick}
        />
      </Layout.Content>
      <Layout.Sider width={350} style={{ background: "white" }}>
        <Sider />
      </Layout.Sider>
    </Layout>
  );
}
