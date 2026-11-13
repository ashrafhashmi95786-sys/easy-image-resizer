import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Easy Image Resizer",
  description: "Email Easy Image Resizer support with questions, feedback, or a report about an image tool.",
};

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=supportash01@gmail.com&su=Easy%20Image%20Resizer%20Support";

export default function ContactPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer</Link>
    <h1 style={{fontSize:38,marginTop:28}}>Contact & Feedback</h1>
    <p>Need help with Easy Image Resizer, or noticed something that could work better? Email our support team with your question, suggestion or issue report. Feedback helps us identify confusing instructions, browser compatibility problems and improvements to the image tools.</p>
    <h2>Email support</h2>
    <p>Use the link below to open a new Gmail message addressed to our support inbox. You can also write to <a href="mailto:supportash01@gmail.com" style={{color:"#176b50",fontWeight:700}}>supportash01@gmail.com</a>.</p>
    <p><a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#176b50",color:"#fff",fontWeight:700,padding:"12px 20px",borderRadius:8,textDecoration:"none"}}>Send us a message</a></p>
    <h2>What to include in a bug report</h2>
    <p>To help us understand a problem, please include the name of the tool, your device and browser, the image format, the steps you followed, and the error message or unexpected result. If possible, explain what you expected the tool to do. Do not include passwords, account credentials or private documents.</p>
    <h2>Protect your privacy</h2>
    <p>Image processing is designed to happen locally in your browser, but an email you send is handled by your email provider. Please do not attach passport photos, signatures or other sensitive images to a support request. Read our <Link href="/privacy-policy" style={{color:"#176b50"}}>Privacy Policy</Link> to understand how the website handles information.</p>
    <h2>More about the website</h2>
    <p>Learn about the purpose of the tools on our <Link href="/about" style={{color:"#176b50"}}>About page</Link>, or browse the <Link href="/guides" style={{color:"#176b50"}}>image resizing guides</Link> for practical instructions and answers to common questions.</p>
  </main>;
}
