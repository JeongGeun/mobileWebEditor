import { useState } from "react";
import styles from "./index.module.scss";
import { useWatch } from "react-hook-form";
import TemplateA from "../Template/A";
import { FormListType } from "@/apis/list";

interface RendererProps {
  width: string;
  data?: FormListType;
  isMobile?: boolean;
  onSectionClick?: (event: React.MouseEvent) => void;
}

export default function Renderer({
  width,
  data,
  isMobile,
  onSectionClick,
}: RendererProps) {
  if (isMobile) {
    return (
      <>
        {data?.type === "A" && (
          <TemplateA data={data} onSectionClick={onSectionClick} />
        )}
      </>
    );
  }

  return (
    <div className={styles.container} style={{ width }}>
      {data?.type === "A" && (
        <TemplateA data={data} onSectionClick={onSectionClick} />
      )}
    </div>
  );
}
