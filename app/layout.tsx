import type { Metadata } from "next";
import "./globals.css";
const siteUrl = "https://easy-image-resizer-seven.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Easy Image Resizer — Free Online Image Tools", template: "%s | Easy Image Resizer" },
  description: "Resize photos to 20KB, 50KB or 100KB, compress images, create passport-size photos, resize signatures and convert JPG/PNG. Free browser-based image tools.",
  applicationName: "Easy Image Resizer",
  keywords: ["image resizer", "photo compressor", "resize image to 20KB", "resize image to 50KB", "passport photo maker", "signature resizer", "JPG to PNG", "PNG to JPG"],
  openGraph: { type: "website", locale: "en_IN", url: siteUrl, siteName: "Easy Image Resizer", title: "Easy Image Resizer — Free Online Image Tools", description: "Resize and compress images privately in your browser." },
  robots: { index: true, follow: true },
  other: {
    "google-adsense-account": "ca-pub-3619322932821521",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
