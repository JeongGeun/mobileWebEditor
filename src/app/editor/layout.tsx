"use client";

import { FormListType } from "@/apis/list";
import { useInvitationMutation } from "@/query/useInvitationMutation";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import AppLayout from "@/components/Layout";
import { Button } from "antd";
import Script from "next/script";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<FormListType>({
    defaultValues: { type: "A", inspectorNumber: 0 },
  });
  const { mutate, isPending } = useInvitationMutation();
  const router = useRouter();

  const onCreateInvitation = (data: FormListType) => {
    mutate(JSON.stringify(data), {
      onSuccess: () => {
        router.push("/main");
      },
    });
  };

  const buttonComponent = (
    <Button
      loading={isPending}
      type="primary"
      onClick={methods.handleSubmit(onCreateInvitation)}
    >
      청첩장 등록
    </Button>
  );

  return (
    <>
      <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=893057f10023d283eb6d23d177fbf578&autoload=false&libraries=services" />
      <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
      <AppLayout buttonComponent={buttonComponent}>
        <FormProvider {...methods}>{children}</FormProvider>
      </AppLayout>
    </>
  );
}
