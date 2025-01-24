'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SignInPage = () => {
  const { data: session, status } = useSession();

  const handleSignIn = async () => {
    const result = await signIn('google', { callbackUrl: '/' }); // Redirect to homepage
    if (result?.url) {
      window.location.href = result.url;
    }
  };

  if (status === 'loading') {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        {session ? 'Thank you for logging in' : 'Please log in'}
      </Typography>

      {!session ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignIn}
          sx={{
            padding: '10px 20px',
            fontSize: '16px',
          }}
        >
          Sign in with Google
        </Button>
      ) : (
        <Typography variant="h6" color="textSecondary">
          You are already logged in.
        </Typography>
      )}
    </Box>
  );
};

export default SignInPage;
