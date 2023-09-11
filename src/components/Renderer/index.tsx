import { useState } from "react";
import styles from "./index.module.scss";
import type { FieldArrayWithId } from "react-hook-form";
import type { FormListType } from "@/apis/list";
import Cover from "../Template/A/Cover";

interface RendererProps {
  fields: FieldArrayWithId<FormListType, "blocks", "id">[];
}

export default function Renderer({ fields }: RendererProps) {
  const [width, setWidth] = useState("375px");
  return (
    <div className={styles.container} style={{ width }}>
      {fields.map((field) => {
        if (field.type === "A") {
          return <Cover key={field.id} />;
        }
        return <div key={field.id}>이미지</div>;
      })}
    </div>
  );
}
