import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const client = new S3Client({});

export async function POST(request: Request) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: `${file.name}_${new Date().getTime()}`,
    Body: file,
  });

  try {
    const response = await client.send(command);
    console.log(response);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Fail" }, { status: 500 });
  }
}
