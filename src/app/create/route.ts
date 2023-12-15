import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  const body = await request.json();
  const mongodbUrl = process.env.MONGODB_URI as string;
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db("editor");
  const invitationCollection = db.collection("invitation");

  console.log(body);
  return (Response as any).json({ success: true });
}
