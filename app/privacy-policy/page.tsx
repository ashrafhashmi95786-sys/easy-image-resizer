import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Easy Image Resizer and its browser-based image processing tools.",
};

export default function PrivacyPolicyPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer</Link>
    <h1 style={{fontSize:38,marginTop:28}}>Privacy Policy</h1>
    <p><strong>Last updated:</strong> November 8, 2026</p>
    <p>This policy explains how Easy Image Resizer handles information when you use this website.</p>
    <h2>Images you process</h2>
    <p>Image selection, resizing, compression, cropping and format conversion are performed in your browser using browser-based image processing. The image file is not intentionally uploaded to our application servers. Processed images are created in your browser for preview and download. Avoid using a shared or public device for confidential images.</p>
    <h2>Information handled by the website</h2>
    <p>We do not currently require an account and do not intentionally collect the contents of the images you process. The website is hosted by Vercel. Like other hosting providers, the hosting infrastructure may process standard request and security information such as IP address, browser details and request logs to deliver and protect the website.</p>
    <h2>Cookies, analytics and advertising</h2>
    <p>As of the date above, this website does not intentionally use advertising cookies or analytics tools. If advertising or analytics services are added in the future, this policy will be updated to explain relevant data collection and choices. Third-party services may have their own privacy policies.</p>
    <h2>Third-party services</h2>
    <p>The website uses Vercel for hosting and Google Fonts to load typography. Those services may receive technical information needed to provide their services. Please review their respective privacy policies for details.</p>
    <h2>Children</h2>
    <p>This website is a general-purpose image utility and is not designed to collect personal information from children.</p>
    <h2>Changes to this policy</h2>
    <p>We may update this policy when website features or services change. The latest version will be published on this page with an updated date.</p>
    <h2>Contact</h2>
    <p>For privacy questions or feedback, please use our <Link href="/contact" style={{color:"#176b50"}}>Contact page</Link>.</p>
  </main>;
}
