import { UploadFile } from "antd";
import { URLS, resultify } from ".";

export type TemplateType = "A" | "B" | "C" | "D";

export interface Block {
  ogTitle: string;
  ogDescription: string;
  husbandName: string;
  wifeName: string;
  address: string;
  addressDetail: string;
  addressYposition: string;
  addressXposition: string;
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
  husbandOrder: string;
  wifeOrder: string;
  fileList: UploadFile<any>[];
  representativeImage: string;
  subway: string;
  bus: string;
  parking: string;
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
  return resultify<InvitationList[]>(
    fetch(URLS.INVITATION_LIST, { method: "GET", next: { revalidate: 10 } })
  );
};

export const getInvitatationInfo = (id: string) => {
  return resultify<FormListType>(
    fetch(`${URLS.INVITATION_LIST}/${id}`, {
      method: "GET",
      cache: "no-store",
      //next: { revalidate: 10 },
    })
  );
};

export const postInvitation = (body: any) => {
  return resultify(fetch(URLS.CREATE_INVI, { method: "POST", body }));
};
