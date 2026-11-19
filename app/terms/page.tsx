import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using Easy Image Resizer Tools, including acceptable use, output limitations and important image-submission disclaimers.",
  alternates: { canonical: "https://easyimageresizertools.com/terms" },
  openGraph: {
    type: "website",
    url: "https://easyimageresizertools.com/terms",
    siteName: "Easy Image Resizer Tools",
    title: "Terms of Use | Easy Image Resizer Tools",
    description: "Terms and conditions for using Easy Image Resizer Tools.",
  },
};

export default function TermsPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer Tools</Link>
    <h1 style={{fontSize:38,marginTop:28}}>Terms of Use</h1>
    <p><strong>Last updated:</strong> November 20, 2026</p>
    <p>By accessing or using Easy Image Resizer Tools, you agree to these terms. If you do not agree, please do not use the website.</p>
    <h2>What the tools provide</h2>
    <p>The website provides browser-based utilities for resizing, compressing, cropping and converting images. Tools are provided for general convenience and are offered free of charge. Features may be changed, suspended or discontinued as the website develops.</p>
    <h2>Check the requirements before submitting</h2>
    <p>We do not guarantee that an output will be accepted by a government office, school, employer, examination authority, website or other third party. File-size targets are approximate limits, not a guarantee of image quality or acceptance. Passport-photo and signature presets are starting templates only; requirements for dimensions, file size, background, framing and format vary. You are responsible for checking the receiving authority's current instructions and verifying every downloaded file before submission.</p>
    <h2>Your files and responsibility</h2>
    <p>Image processing is designed to take place locally in your browser. You are responsible for having the rights and permissions needed to use the images you select. Do not use the website to process or distribute unlawful, infringing, deceptive or otherwise harmful material.</p>
    <h2>Availability and limitations</h2>
    <p>We aim to keep the tools useful and available, but do not promise uninterrupted access, error-free operation, compatibility with every device or browser, or that every image can be processed. Results may vary with image dimensions, format, browser memory and device capabilities. Keep your original files and review the output before relying on it.</p>
    <h2>No professional advice</h2>
    <p>The website does not provide legal, government, immigration, identity-document or professional photography advice. Presets and guides are informational aids and are not endorsements or official specifications.</p>
    <h2>Limitation</h2>
    <p>To the extent permitted by applicable law, the website and its tools are provided without warranties of any kind. We are not responsible for rejection of submitted images, loss of data caused by your device or browser, or indirect losses arising from use of the tools. Nothing in these terms excludes liability that cannot legally be excluded.</p>
    <h2>Changes to these terms</h2>
    <p>We may update these terms when the website or its services change. The current version and update date will appear on this page.</p>
    <h2>Contact</h2>
    <p>For questions about these terms, please visit our <Link href="/contact" style={{color:"#176b50"}}>Contact page</Link>. You can also review our <Link href="/privacy-policy" style={{color:"#176b50"}}>Privacy Policy</Link>.</p>
  </main>;
}
