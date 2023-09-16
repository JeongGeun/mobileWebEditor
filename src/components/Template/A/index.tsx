import { useFormContext } from "react-hook-form";
import Cover from "./Cover";

export default function TemplateA() {
  const { setValue } = useFormContext();

  const onSectionClick = (section: number) => {
    setValue("inspectorNumber", section);
  };

  return (
    <>
      <Cover onSectionClick={() => onSectionClick(0)} />
      <div onClick={() => onSectionClick(1)}>123</div>
    </>
  );
}
