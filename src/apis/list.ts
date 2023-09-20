export type TemplateType = "A" | "B" | "C" | "D";

export interface Block {
  husbandName: string;
  wifeName: string;
  place: string;
  messageTitle: string;
  messageContent: string;
}

export interface FormListType {
  type: TemplateType;
  inspectorNumber: number;
  block: Block;
}
