export type TemplateType = "A" | "B" | "C" | "D";

export interface Block {
  husbandName: string;
  wifeName: string;
  place: string;
}

export interface FormListType {
  type: TemplateType;
  block: Block;
}
