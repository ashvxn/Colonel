import type { Metadata, Viewport } from "next";
import { IconSprite } from "@/components/Icons";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const SITE_URL = "https://majorsandeepunnikrishnanfoundation.in";
const SITE_NAME = "Major Sandeep Unnikrishnan Ashok Chakra Foundation";
const SITE_TITLE =
  "Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous) — Ashok Chakra Foundation";
const SITE_DESCRIPTION =
  "Official website of the Major Sandeep Unnikrishnan Ashok Chakra Foundation, a charitable trust in Kollam, Kerala honouring Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous), hero of Operation Black Tornado, 26/11 Mumbai. Learn his story, meet the trustees, and support the Trust's initiatives for soldiers, families, and students.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Major Sandeep Unnikrishnan",
    "Ashok Chakra",
    "Ashok Chakra Foundation",
    "26/11 Mumbai attacks",
    "Taj Mahal Palace Hotel",
    "Operation Black Tornado",
    "National Security Guard",
    "51 Special Action Group",
    "NSG commando",
    "Indian Army hero",
    "charitable trust Kerala",
    "Kollam charitable trust",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Nonprofit",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/image.png",
        width: 1536,
        height: 1024,
        alt: "Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d10",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  alternateName: "Ashok Chakra Foundation",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpg`,
  image: `${SITE_URL}/images/image.png`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lakshanam, Valathungal PO",
    addressLocality: "Kollam",
    addressRegion: "Kerala",
    postalCode: "691011",
    addressCountry: "IN",
  },
  telephone: "+91-95579-97414",
  founder: {
    "@type": "Person",
    name: "Major Sandeep Unnikrishnan",
    honorificSuffix: "Ashok Chakra",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <IconSprite />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
