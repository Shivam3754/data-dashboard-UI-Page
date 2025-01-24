'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get('error');

  const handleGoBack = () => {
    router.push('/auth/signin');
  };

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
      <Typography variant="h4" color="error" sx={{ marginBottom: 2 }}>
        Authentication Error
      </Typography>
      {error && (
        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
          Error: {error}
        </Typography>
      )}
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 4 }}>
        Something went wrong. Please try again.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoBack}>
        Go back to Sign In
      </Button>
    </Box>
  );
}
