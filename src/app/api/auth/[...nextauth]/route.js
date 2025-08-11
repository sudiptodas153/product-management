import { loginUser } from "@/app/action/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { useCallback } from "react";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter your Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // loginUser কল করার সময় অবশ্যই await দিতে হবে

                const user = await loginUser(credentials);
                console.log(user);

                if (user) {
                    return user; // সফল হলে ইউজার অবজেক্ট রিটার্ন
                } else {
                    return null; // ব্যর্থ হলে null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signin: '/signin' 
    },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
