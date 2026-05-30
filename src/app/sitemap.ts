import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Krävs för statisk export – genererar /sitemap.xml vid build.
export const dynamic = "force-static";

const routes = [
  "/",
  "/kurser/",
  "/priser/",
  "/teori/",
  "/om-oss/",
  "/faq/",
  "/kontakt/",
  "/integritetspolicy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
