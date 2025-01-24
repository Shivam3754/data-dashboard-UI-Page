/* eslint-disable @typescript-eslint/no-unused-vars */
// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin", // Redirect to this page if not authenticated
    error: "/auth/error",   // Error page URL if authentication fails
  },
  callbacks: {
    authorized: ({ req, token }) => {
      console.log("Token in middleware:", token); // Verify token availability
      return !!token; // If a valid token exists, allow access
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // Protect all subpaths under /dashboard
};
