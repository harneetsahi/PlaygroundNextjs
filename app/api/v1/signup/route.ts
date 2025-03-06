import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const data = await req.json();

  /// store data in db
  try {
    const hashedPassword = await bcrypt.hash(data.password, 8);

    await prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
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
