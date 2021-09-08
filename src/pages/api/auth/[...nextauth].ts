import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { fauna } from "../../../services/fauna.ts";
import { query as q } from "faunadb";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user",
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, email, profile }) {
      console.log(user);
      return true;
    },
  },
});
