import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://easy-image-resizer-seven.vercel.app/sitemap.xml" };
}
