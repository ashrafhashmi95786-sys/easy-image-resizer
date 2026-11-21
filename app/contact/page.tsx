import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  alternates: { canonical: "https://easyimageresizertools.com/contact" },
  openGraph: { type: "website", url: "https://easyimageresizertools.com/contact", siteName: "Easy Image Resizer Tools" },
  title: "Contact Easy Image Resizer Tools",
  description: "Send Easy Image Resizer Tools support a question, suggestion, or feedback using our contact form.",
};

export default function ContactPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75,color:"#17231e"}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer Tools</Link>
    <h1 style={{fontSize:38,marginTop:28,marginBottom:8}}>Contact & Feedback</h1>
    <p style={{color:"#52645b",marginTop:0}}>Have a question, suggestion, or feedback? Send us a message using the form below. We’d love to hear from you.</p>
    <ContactForm />
    <h2 style={{marginTop:36}}>What to include in a bug report</h2>
    <p>To help us understand a problem, include the name of the tool, your device and browser, the image format, the steps you followed, and the error message or unexpected result. If possible, explain what you expected the tool to do.</p>
    <h2>Protect your privacy</h2>
    <p>Never include passwords, payment details, identity documents, passport photos, signatures, or other sensitive personal information in a support message. Your message is sent to our support inbox through our email delivery provider. Read our <Link href="/privacy-policy" style={{color:"#176b50"}}>Privacy Policy</Link> to understand how the website handles information.</p>
    <h2>Prefer email?</h2>
    <p>You can also contact us directly at <a href="mailto:supportash01@gmail.com" style={{color:"#176b50",fontWeight:700}}>supportash01@gmail.com</a>.</p>
    <p>Learn more about the website on our <Link href="/about" style={{color:"#176b50"}}>About page</Link>, or browse the <Link href="/guides" style={{color:"#176b50"}}>image resizing guides</Link>.</p>
  </main>;
}
