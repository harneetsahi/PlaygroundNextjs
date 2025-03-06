import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma from "../../../lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();

  /// store data in db
  try {
    await prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });

    return NextResponse.json({
      message: "You have signed up",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating user",
    });
  }
}
