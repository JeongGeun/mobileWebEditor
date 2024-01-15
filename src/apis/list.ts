import { URLS, resultify } from ".";

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
  _id: string;
  title: string;
  date: string;
  createdBy: string;
}

export const getInvitationList = () => {
  return resultify(
    fetch(URLS.INVITATION_LIST, { method: "GET", next: { revalidate: 10 } })
  );
};

export const getInvitatationInfo = (id: string) => {
  return resultify(
    fetch(`${URLS.INVITATION_LIST}/${id}`, {
      method: "GET",
      next: { revalidate: 10 },
    })
  );
};

export const postInvitation = (body: any) => {
  return resultify(fetch(URLS.CREATE_INVI, { method: "POST", body }));
};
