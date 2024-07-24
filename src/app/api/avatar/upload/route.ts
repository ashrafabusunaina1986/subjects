import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") ;

  // ⚠️ The below code is for App Router Route Handlers only

  const blob = await put(
    `subjects/${filename}`,
    request.body as ReadableStream,
    {
      access: "public",
    }
  );
  return NextResponse.json(blob);
}
