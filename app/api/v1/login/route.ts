import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  // verify data (username, password)

  return NextResponse.json({
    message: "Logged in successfully",
  });
}
