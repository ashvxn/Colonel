import type { Metadata } from "next";
import { IconSprite } from "@/components/Icons";
import "./globals.css";

export const metadata: Metadata = {
  title: "Major Sandeep Unnikrishnan, AC (Posthumous) — Ashok Chakra Memorial Foundation",
  description:
    "Official memorial foundation honouring Major Sandeep Unnikrishnan, AC (Posthumous), hero of Operation Black Tornado, 26/11 Mumbai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
