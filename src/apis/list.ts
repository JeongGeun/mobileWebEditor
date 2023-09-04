export interface Block {
  type: "TEXT" | "IMAGE";
  value: string;
}

export interface FormListType {
  blocks: Block[];
}
