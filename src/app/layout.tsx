'use client';

import { SessionProvider } from 'next-auth/react';
import { Geist, Geist_Mono } from 'next/font/google';
import './Home.module.scss';
import React, { useState } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import Header from '@/components/Header/Header';
import { CssBaseline } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import lightThemeOptions from '@/theme/lightTheme';
import darkThemeOptions from '@/theme/darkTheme';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<Theme>(createTheme(lightThemeOptions));

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === 'light'
        ? createTheme(darkThemeOptions)
        : createTheme(lightThemeOptions)
    );
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header setTheme={toggleTheme} currentTheme={theme} />
            <Layout>
              <main>{children}</main>
            </Layout>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
