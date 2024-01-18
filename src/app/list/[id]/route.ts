import { MongoClient, ObjectId } from "mongodb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = new ObjectId(params.id);
  const mongodbUrl = process.env.MONGODB_URI as string;
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db("editor");
  const invitationCollection = db.collection("invitation");
  const result = await invitationCollection.findOne(id);
  return (Response as any).json(result);
}
