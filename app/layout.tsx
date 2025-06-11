import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Workora - Your Trusted Labor Supply Partner",
  description: "Workora Manpower Supply L.L.C. S.O.C – Providing skilled & unskilled labor across the UAE for construction, hospitality, and more.",
  keywords: ["manpower supply", "UAE labor", "construction labor", "hospitality staff", "Dubai manpower"],
  authors: [{ name: "Workora" }],
  metadataBase: new URL('https://workora.ae'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
