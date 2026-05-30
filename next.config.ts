import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Helt statisk export -> bygger till ./out, kan hostas gratis/billigt på Netlify.
  output: "export",
  // Krävs vid statisk export (ingen Image Optimization-server).
  images: { unoptimized: true },
  // Genererar mappbaserade rena URL:er (t.ex. /kurser/index.html) som funkar fint på statisk hosting.
  trailingSlash: true,
};

export default nextConfig;
