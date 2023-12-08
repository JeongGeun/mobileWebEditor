import { MongoClient } from "mongodb";

export async function GET() {
  const mongodbUrl = process.env.MONGODB_URI as string;
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db("editor");
  const invitationCollection = db.collection("invitation");

  const result = await invitationCollection.find().toArray();
  return (Response as any).json(result);
}
