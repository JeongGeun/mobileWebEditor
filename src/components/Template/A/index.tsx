import { useFormContext } from "react-hook-form";
import Cover from "./Cover";
import Message from "./Message";
import Contact from "./Contact";
import Calendar from "./Calendar";
import Slider from "./Slider";
import WeddingMap from "./Map";

export default function TemplateA() {
  const { setValue } = useFormContext();

  const onSectionClick = (section: number) => {
    setValue("inspectorNumber", section);
  };

  return (
    <>
      <Cover onSectionClick={() => onSectionClick(0)} />
      <Message onSectionClick={() => onSectionClick(1)} />
      <Contact onSectionClick={() => onSectionClick(2)} />
      <Calendar />
      <Slider onSectionClick={() => onSectionClick(3)} />
      <WeddingMap onSectionClick={() => onSectionClick(4)} />
    </>
  );
}
