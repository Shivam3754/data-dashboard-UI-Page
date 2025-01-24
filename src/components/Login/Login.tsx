"use client";

import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button
          variant="contained"
          color="error"
          onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        >
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        Sign in
      </Button>
    </>
  );
}
