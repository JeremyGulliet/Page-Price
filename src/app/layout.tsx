import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const Space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricing - Spikes Challenge",
  description: "Création d'un page prix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Space.className}>
        {children}</body>
    </html>
  );
}
