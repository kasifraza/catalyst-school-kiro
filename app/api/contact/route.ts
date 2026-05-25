import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  // Honeypot check
  if (payload._hp) {
    return NextResponse.json({ ok: true });
  }
  console.log("[Contact] New message received:", payload);
  return NextResponse.json({ ok: true });
}
