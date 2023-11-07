import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
  },
});

export const getUploadedS3Url = async (file: File) => {
  try {
    // Read the contents of the File object into a Buffer
    const fileData = await file.arrayBuffer();
    const buffer = Buffer.from(fileData);
    const fileName = `${new Date().getTime()}_${file.name}`;

    const command = new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    });

    const response = await client.send(command);
    console.log(response);
    return `${process.env.NEXT_PUBLIC_BASE_S3_URL}/${fileName}`;
  } catch (error) {
    console.log("실패", error);
  }
};
