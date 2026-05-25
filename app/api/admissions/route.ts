import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  console.log("[Admissions] New application received:", payload);
  return NextResponse.json({ ok: true });
}
