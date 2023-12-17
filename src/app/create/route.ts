import { FormListType } from "@/apis/list";
import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  const body: FormListType = await request.json();
  const mongodbUrl = process.env.MONGODB_URI as string;
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db("editor");
  const invitationCollection = db.collection("invitation");
  const result = await invitationCollection.insertOne({
    ...body,
    title: `${body.block.husbandName}님 & ${body.block.wifeName}님의 청첩장`,
    date: body.date,
    createdBy: "Goony",
  });
  return (Response as any).json({ success: true });
}
