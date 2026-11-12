import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://easy-image-resizer-seven.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resize-image-to-20kb`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resize-image-to-50kb`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resize-image-to-100kb`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/image-compressor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/passport-photo-resizer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/signature-resizer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];
}