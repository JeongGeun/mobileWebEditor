import { useFormContext } from "react-hook-form";
import Cover from "./Cover";
import Message from "./Message";
import Contact from "./Contact";
import Calendar from "./Calendar";
import Slider from "./Slider";
import WeddingMap from "./Map";

interface TemplateAProps {
  onSectionClick?: (event: React.MouseEvent) => void;
}

export default function TemplateA({ onSectionClick }: TemplateAProps) {
  return (
    <>
      <Cover onSectionClick={onSectionClick} />
      <Message onSectionClick={onSectionClick} />
      <Contact onSectionClick={onSectionClick} />
      <Calendar />
      <Slider onSectionClick={onSectionClick} />
      <WeddingMap onSectionClick={onSectionClick} />
    </>
  );
}
