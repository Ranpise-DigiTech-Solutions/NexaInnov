// src/pages/_app.tsx

// THIS IS THE ONLY PLACE GLOBAL CSS CAN BE IMPORTED IN PAGES ROUTER
import '@/app/globals.css'; 

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
