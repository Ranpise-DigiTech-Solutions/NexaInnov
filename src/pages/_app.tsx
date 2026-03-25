// pages/_app.tsx
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from "@/components/providers/theme-provider"; // <-- Add ThemeProvider import

import "@/app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      {/* Add ThemeProvider here for Pages Router pages to maintain consistency */}
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;