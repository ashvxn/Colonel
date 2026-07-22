import type { Metadata } from "next";
import { IconSprite } from "@/components/Icons";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous) — Ashok Chakra Foundation",
  description:
    "Official website of the Major Sandeep Unnikrishnan Ashok Chakra Foundation, honouring Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous), hero of Operation Black Tornado, 26/11 Mumbai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <IconSprite />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
