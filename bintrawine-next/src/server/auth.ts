import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { env } from "@/env.mjs";
import { prisma } from "@/server/db";
import bcrypt from 'bcrypt';
import { Role } from "@prisma/client";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number;
      surname: string;
      cellar: string;
      roles: Role[];
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    id: number;
    surname: string;
    cellar: string;
    roles: Role[];
    //   // ...other properties
    //   // role: UserRole;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  jwt: {
    secret: env.NEXTAUTH_JWT_SECRET,
    maxAge: 30 * 24 * 60 * 60
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-in",
    newUser: "/",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.surname = user.surname;
        token.cellar = user.cellar;
        token.roles = user.roles;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id as number;
        session.user.surname = token.surname as string;
        session.user.cellar = token.cellar as string;
        session.user.roles = token.roles as Role[];
      }
      return session;
    },
    redirect({ url, baseUrl }) {
      return baseUrl
    }
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@test.it' },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, _req) {

        if (!credentials) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) return null;

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) return null;

        return user;
      },
    })
  ]
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
