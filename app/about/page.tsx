import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://easyimageresizertools.com/about" },
  openGraph: { type: "website", url: "https://easyimageresizertools.com/about", siteName: "Easy Image Resizer Tools" },
  title: "About Us",
  description: "Learn about Easy Image Resizer Tools, a free browser-based toolkit for resizing, compressing and converting images.",
};

export default function AboutPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer Tools</Link>
    <h1 style={{fontSize:38,marginTop:28}}>About Easy Image Resizer Tools</h1>
    <p>Easy Image Resizer Tools is a free online toolkit designed to make common image tasks simple and accessible. You can resize images to a target file size, compress images, convert JPG and PNG formats, prepare starter passport-photo and signature dimensions, set custom dimensions, and crop images.</p>
    <h2>Tools for everyday image tasks</h2>
    <p>Choose a target file size when an online form limits uploads to a certain number of kilobytes. Use the image compressor to adjust output quality, custom dimensions to enter a required width and height, or Quick crop to frame an image using common aspect ratios. JPG and PNG conversion options help prepare files in a format accepted by many websites.</p>
    <p>Start with the <Link href="/#tools" style={{color:"#176b50"}}>image workspace</Link>, or visit our focused guides for <Link href="/resize-image-to-20kb" style={{color:"#176b50"}}>20KB images</Link>, <Link href="/resize-image-to-50kb" style={{color:"#176b50"}}>50KB images</Link>, <Link href="/resize-image-to-100kb" style={{color:"#176b50"}}>100KB images</Link>, <Link href="/passport-photo-resizer" style={{color:"#176b50"}}>passport-style photos</Link> and <Link href="/signature-resizer" style={{color:"#176b50"}}>signature images</Link>.</p>
    <h2>Simple, private image processing</h2>
    <p>Image processing takes place locally in your browser. The image file you select is not intentionally uploaded to our application servers. Your browser creates the processed image so you can preview and download it on your device.</p>
    <h2>Use the right requirements</h2>
    <p>Passport-photo and signature presets are starting templates only. Required dimensions, file sizes, background rules and photo specifications vary by institution and application. Always check the requirements of the form or authority you are submitting to.</p>
    <h2>How to use the website</h2>
    <p>Choose the tool that matches your task, select an image from your device, review the available settings, and process the image. Check the output preview and displayed file size before downloading. If a form has specific requirements, use those instructions rather than assuming a preset will be accepted.</p>
    <h2>Free to use</h2>
    <p>Our goal is to provide straightforward image utilities without requiring an account. Features and availability may change as the website improves.</p>
    <p><Link href="/contact" style={{color:"#176b50"}}>Contact / send feedback</Link> · <Link href="/privacy-policy" style={{color:"#176b50"}}>Privacy Policy</Link></p>
  </main>;
}
