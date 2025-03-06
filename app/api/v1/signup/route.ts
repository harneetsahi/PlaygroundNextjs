import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  /// store data in db
  // prisma.user.update({});

  return NextResponse.json({
    message: "You have signed up",
  });
}
