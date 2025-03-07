import { NextRequest, NextResponse } from "next/server";

//// backend endpoints

export function GET(req: NextRequest) {
  const headers = req.headers;

  return NextResponse.json({
    name: "harneet",
    email: "harneet@gmail.com",
  });
}
