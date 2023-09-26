export type TemplateType = "A" | "B" | "C" | "D";

export interface Block {
  husbandName: string;
  wifeName: string;
  place: string;
  messageTitle: string;
  messageContent: string;
  husbandFatherName: string;
  husbandMotherName: string;
  wifeFatherName: string;
  wifeMotherName: string;
}

export interface FormListType {
  type: TemplateType;
  inspectorNumber: number;
  block: Block;
}
