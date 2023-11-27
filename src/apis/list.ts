import { URLS, axiosInstance, resultify } from ".";

export type TemplateType = "A" | "B" | "C" | "D";

export interface Block {
  husbandName: string;
  wifeName: string;
  place: string;
  date: string;
  messageTitle: string;
  messageContent: string;
  husbandFatherName: string;
  husbandMotherName: string;
  wifeFatherName: string;
  wifeMotherName: string;
  invitationText: string;
  husbandTel: string;
  wifeTel: string;
  husbandFatherTel: string;
  husbandMotherTel: string;
  wifeFatherTel: string;
  wifeMotherTel: string;
}

export interface FormListType {
  type: TemplateType;
  inspectorNumber: number;
  block: Block;
}

export interface InvitationList {
  title: string;
  date: string;
  createdBy: string;
}

export const getInvitationList = () => {
  return resultify<InvitationList>(axiosInstance.get(URLS.INVITATION_LIST));
};
