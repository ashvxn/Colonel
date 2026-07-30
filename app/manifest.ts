import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Major Sandeep Unnikrishnan Ashok Chakra Foundation",
    short_name: "Ashok Chakra Foundation",
    description:
      "Official website of the Major Sandeep Unnikrishnan Ashok Chakra Foundation, a charitable trust honouring Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous).",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d10",
    theme_color: "#0a0d10",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "600x600",
        type: "image/jpeg",
      },
      {
        src: "/apple-icon.jpg",
        sizes: "600x600",
        type: "image/jpeg",
      },
    ],
  };
}
