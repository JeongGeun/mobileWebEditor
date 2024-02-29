import { MongoClient } from "mongodb";

function sleep(ms: number) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

export async function GET() {
  const mongodbUrl = process.env.MONGODB_URI as string;
  console.log("Start", new Date());
  sleep(3000);
  console.log("End", new Date());
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db("editor");
  const invitationCollection = db.collection("invitation");

  const result = await invitationCollection.find().toArray();
  return (Response as any).json(result);
}
