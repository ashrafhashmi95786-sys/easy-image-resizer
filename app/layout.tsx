import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://easyimageresizertools.com";
const googleAnalyticsId = "G-7TQEJWK2S2";
const googleAdsenseId = "ca-pub-3619322932821521";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Free Online Image Resizer & Photo Compressor", template: "%s | Easy Image Resizer Tools" },
  description: "Resize images to 20KB, 50KB or 100KB online. Compress JPG, PNG and WebP photos, make passport-size pictures and resize signatures free in your browser.",
  applicationName: "Easy Image Resizer Tools",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  keywords: ["free online image resizer", "photo compressor", "resize image to 20KB", "resize image to 50KB", "resize image to 100KB", "image compressor online", "passport size photo resizer", "signature size reducer", "JPG to PNG", "PNG to JPG"],
  openGraph: { type: "website", locale: "en_IN", url: siteUrl, siteName: "Easy Image Resizer Tools", title: "Free Online Image Resizer & Photo Compressor", description: "Resize images to 20KB, 50KB or 100KB online. Compress JPG, PNG and WebP photos, make passport-size pictures and resize signatures free in your browser." },
  robots: { index: true, follow: true },
  verification: {
    google: "WmwD7ZOSJjsqZT0z72r0EuQrq-_WSJPm6mFlJf5Fx0o",
    other: {
      "msvalidate.01": "C3929D689BCE822AE170B88B3DF0BEF5",
    },
  },
  other: {
    "google-adsense-account": googleAdsenseId,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Script
        id="google-adsense"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsenseId}`}
        async
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
