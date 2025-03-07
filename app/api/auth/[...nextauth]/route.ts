import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import NextAuth from "next-auth";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: " email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "enter your email here",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter your password here",
        },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        try {
          const user = await prisma.user.findUnique({
            where: {
              username,
            },
          });

          if (user) {
            const matchPassword = await bcrypt.compare(password, user.password);

            if (matchPassword) {
              return user;
            } else {
              return null;
            }
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
