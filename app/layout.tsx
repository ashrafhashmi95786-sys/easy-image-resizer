import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://easy-image-resizer-seven.vercel.app";
const googleAnalyticsId = "G-7TQEJWK2S2";
const googleAdsenseId = "ca-pub-3619322932821521";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Easy Image Resizer — Free Online Image Tools", template: "%s | Easy Image Resizer" },
  description: "Resize photos to 20KB, 50KB or 100KB, compress images, create passport-size photos, resize signatures and convert JPG/PNG. Free browser-based image tools.",
  applicationName: "Easy Image Resizer",
  keywords: ["image resizer", "photo compressor", "resize image to 20KB", "resize image to 50KB", "passport photo maker", "signature resizer", "JPG to PNG", "PNG to JPG"],
  openGraph: { type: "website", locale: "en_IN", url: siteUrl, siteName: "Easy Image Resizer", title: "Easy Image Resizer — Free Online Image Tools", description: "Resize and compress images privately in your browser." },
  robots: { index: true, follow: true },
  verification: { google: "WmwD7ZOSJjsqZT0z72r0EuQrq-_WSJPm6mFlJf5Fx0o" },
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
