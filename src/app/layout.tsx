import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./globals.css";
import ModalProvider from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexaInnov Technologies",
  description: "NexaInnov Technologies is at the forefront of next-generation innovation, providing cutting-edge technological solutions.",
  keywords: "NexaInnov, Next Generation Innovation, Technology Solutions, Innovative Solutions, Nexa, Innov"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ModalProvider>
            <main className={inter.className}>{children}</main>
          </ModalProvider>
        </UserProvider>
      </body>
    </html>
  );
}
