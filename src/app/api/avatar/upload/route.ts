import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename") as string;
  const blob = await put(filename, req.body as ReadableStream, {
    access: "public",
  });

  // db();
  // await Images.create({ filename: blob.pathname, url: blob.url });
  return NextResponse.json(blob);
}
