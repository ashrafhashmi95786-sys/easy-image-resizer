import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Easy Image Resizer, a free browser-based toolkit for resizing, compressing and converting images.",
};

export default function AboutPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer</Link>
    <h1 style={{fontSize:38,marginTop:28}}>About Easy Image Resizer</h1>
    <p>Easy Image Resizer is a free online toolkit designed to make common image tasks simple and accessible. You can resize images to a target file size, compress images, convert JPG and PNG formats, prepare starter passport-photo and signature dimensions, set custom dimensions, and crop images.</p>
    <h2>Simple, private image processing</h2>
    <p>Image processing takes place locally in your browser. The image file you select is not intentionally uploaded to our application servers. Your browser creates the processed image so you can preview and download it on your device.</p>
    <h2>Use the right requirements</h2>
    <p>Passport-photo and signature presets are starting templates only. Required dimensions, file sizes, background rules and photo specifications vary by institution and application. Always check the requirements of the form or authority you are submitting to.</p>
    <h2>Free to use</h2>
    <p>Our goal is to provide straightforward image utilities without requiring an account. Features and availability may change as the website improves.</p>
    <p><Link href="/contact" style={{color:"#176b50"}}>Contact / send feedback</Link> · <Link href="/privacy-policy" style={{color:"#176b50"}}>Privacy Policy</Link></p>
  </main>;
}
