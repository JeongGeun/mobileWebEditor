import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    // Read the contents of the File object into a Buffer
    const fileData = await file.arrayBuffer();
    const buffer = Buffer.from(fileData);
    const fileName = `${new Date().getTime()}_${file.name}`;

    const command = new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    });

    const response = await client.send(command);
    console.log(response);
    const url = `${process.env.BASE_S3_URL}/${fileName}`;
    return NextResponse.json({ message: "success", url }, { status: 200 });
  } catch (error) {
    console.log("실패", error);
    return NextResponse.json({ message: "Fail" }, { status: 500 });
  }
}
