import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Catalyst Public School",
    short_name: "Catalyst",
    start_url: "/",
    display: "standalone",
    theme_color: "#839788",
    background_color: "#fcf9f4",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
