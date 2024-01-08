"use client";

import { FormListType } from "@/apis/list";
import { useInvitationMutation } from "@/query/useInvitationMutation";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import AppLayout from "@/components/Layout";
import { Button } from "antd";

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
        router.push("/");
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
    <AppLayout buttonComponent={buttonComponent} isEditorPage>
      <FormProvider {...methods}>{children}</FormProvider>
    </AppLayout>
  );
}
