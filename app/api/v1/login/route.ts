// import { NextRequest, NextResponse } from "next/server";
// import prisma from "../../../lib/db";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// export async function POST(req: NextRequest) {
//   const data = await req.json();

//   const { username, password } = data;

//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         username,
//       },
//     });

//     if (user) {
//       const matchPassword = await bcrypt.compare(password, user.password);

//       if (matchPassword) {
//         const token = jwt.sign({ userId: user.id }, "randomsecret");
//       } else {
//         return NextResponse.json({
//           message: "Incorrect password",
//         });
//       }
//     } else {
//       return NextResponse.json({
//         message: "User not found",
//       });
//     }

//     return NextResponse.json({
//       message: "Logged in successfully",
//     });
//   } catch (error) {
//     return NextResponse.json({
//       message: "Error fetching user information",
//     });
//   }
// }
