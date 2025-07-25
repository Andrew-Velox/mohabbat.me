import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MediaPreloader from "../components/MediaPreloader";
import DynamicFooter from "../components/DynamicFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohabbat",
  description: "Focusing on CP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[color-scheme:light_dark]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <MediaPreloader />
        <div className="min-h-screen">
          <div className="min-h-screen pb-16 flex items-center justify-center">
            {children}
          </div>
          <DynamicFooter />
        </div>
      </body>
    </html>
  );
}
