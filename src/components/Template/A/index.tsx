import { useFormContext } from "react-hook-form";
import Cover from "./Cover";
import Message from "./Message";

export default function TemplateA() {
  const { setValue } = useFormContext();

  const onSectionClick = (section: number) => {
    setValue("inspectorNumber", section);
  };

  return (
    <>
      <Cover onSectionClick={() => onSectionClick(0)} />
      <Message />
    </>
  );
}
