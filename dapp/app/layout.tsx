import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

const pixelify_sans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify-sans",
});

export const metadata: Metadata = {
  title: "Spud Squad",
  description: "Official website of the Spud Squad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelify_sans.variable}`}> {children}</body>
    </html>
  );
}
