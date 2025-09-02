import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import ModalProvider from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexaInnov Solutions LLP",
  description:
    "NexaInnov Solutions is at the forefront of next-generation innovation, providing cutting-edge technological solutions.",
  keywords:
    "NexaInnov, Next Generation Innovation, Technology Solutions, Innovative Solutions, Nexa, Innov",
  openGraph: {
    title: "NexaInnov Solutions LLP",
    description:
      "NexaInnov Solutions is at the forefront of next-generation innovation, providing cutting-edge technological solutions.",
    url: "https://nexainnov.com",
    type: "website",
    images: [
      {
        url: "https://nexainnov.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NexaInnov Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexainnovsolutions",
    title: "NexaInnov Solutions LLP",
    description: "Providing next-generation technology solutions.",
    images: ["https://nexainnov.com/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="AU4xpR869jNsnmznwvBA8TBUTqhcaWPAmJJMLohVsho"
        />
        {/* Fallback meta tags */}
        <meta
          name="description"
          content="NexaInnov Solutions is at the forefront of next-generation innovation, providing cutting-edge technological solutions."
        />
        <meta
          name="keywords"
          content="NexaInnov, Next Generation Innovation, Technology Solutions, Innovative Solutions, Nexa, Innov"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NexaInnov Solutions LLP" />
        <meta
          property="og:description"
          content="NexaInnov Solutions is at the forefront of next-generation innovation, providing cutting-edge technological solutions."
        />
        <meta property="og:image" content="https://nexainnov.com/logo.png" />
        <meta property="og:url" content="https://nexainnov.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nexainnovsolutions" />
        <meta name="twitter:title" content="NexaInnov Solutions LLP" />
        <meta
          name="twitter:description"
          content="Providing next-generation technology solutions."
        />
        <meta name="twitter:image" content="https://nexainnov.com/logo.png" />
        <meta name="p:domain_verify" content="8f322e05f258f4f3cecc2b75d694ca2c" />
        <meta name="google-site-verification" content="google4b0da5e0dcffbac1" />
      </head>
      <body>
        <UserProvider>
          <ModalProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <main className={inter.className}>{children}</main>
              <Toaster />
            </ThemeProvider>
          </ModalProvider>
        </UserProvider>
      </body>
    </html>
  );
}
