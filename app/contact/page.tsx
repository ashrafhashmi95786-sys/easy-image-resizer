import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send feedback, report an issue or ask a question about Easy Image Resizer.",
};

export default function ContactPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer</Link>
    <h1 style={{fontSize:38,marginTop:28}}>Contact & Feedback</h1>
    <p>Found a problem, have a suggestion, or need to report an issue with Easy Image Resizer? We welcome feedback to help improve the website.</p>
    <h2>Report an issue</h2>
    <p>Please include the tool you were using, the browser and device, what you expected to happen, and what happened instead. Do not attach private or sensitive images or documents.</p>
    <p><a href="https://github.com/ashrafhashmi95786-sys/easy-image-resizer/issues/new" target="_blank" rel="noreferrer" style={{color:"#176b50",fontWeight:700}}>Open a GitHub issue →</a></p>
    <p>For general information, see our <Link href="/about" style={{color:"#176b50"}}>About page</Link> and <Link href="/privacy-policy" style={{color:"#176b50"}}>Privacy Policy</Link>.</p>
  </main>;
}
