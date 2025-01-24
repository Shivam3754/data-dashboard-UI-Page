import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",  // Custom sign-in page
    error: "/auth/error",    // Custom error page
  },
  secret: process.env.NEXTAUTH_SECRET,  // Ensure this is set
};

const handler = NextAuth(authOptions);


// Export the handler for both GET and POST methods
export { handler as GET, handler as POST };
