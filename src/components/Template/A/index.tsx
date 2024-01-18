import { useFormContext } from "react-hook-form";
import Cover from "./Cover";
import Message from "./Message";
import Contact from "./Contact";
import Calendar from "./Calendar";
import Slider from "./Slider";
import WeddingMap from "./Map";
import { FormListType } from "@/apis/list";

interface TemplateAProps {
  data?: FormListType;
  onSectionClick?: (event: React.MouseEvent) => void;
}

export default function TemplateA({ data, onSectionClick }: TemplateAProps) {
  return (
    <>
      <Cover data={data} onSectionClick={onSectionClick} />
      <Message data={data} onSectionClick={onSectionClick} />
      <Contact data={data} onSectionClick={onSectionClick} />
      <Calendar data={data} />
      <Slider data={data} onSectionClick={onSectionClick} />
      <WeddingMap data={data} onSectionClick={onSectionClick} />
    </>
  );
}
