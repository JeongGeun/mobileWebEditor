export type TemplateType = "A" | "B" | "C" | "D";

export interface Block {
  type: TemplateType;
  value?: string;
}

export interface FormListType {
  blocks: Block[];
}
