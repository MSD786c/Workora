import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata } from "./metadata";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  ...siteMetadata,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/workora-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/workora-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/workora-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
