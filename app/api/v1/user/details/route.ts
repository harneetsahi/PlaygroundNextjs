import { NextResponse } from "next/server";

//// backend endpoints

export function GET() {
  return NextResponse.json({
    name: "harneet",
    email: "harneet@gmail.com",
  });
}

export function POST() {
  return NextResponse.json({
    name: "navjot",
    email: "navjot.gmail.com",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "updated succesfully",
  });
}
