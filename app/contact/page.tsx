import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Easy Image Resizer by email for support, feedback, questions or issue reports.",
};

export default function ContactPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer</Link>
    <h1 style={{fontSize:38,marginTop:28}}>Contact & Feedback</h1>
    <p>Have a question, suggestion, or problem using Easy Image Resizer? Contact us by email. We welcome clear feedback that helps us improve the tools.</p>
    <h2>Email support</h2>
    <p>For support, feedback, technical issues and general enquiries, email us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=supportash01@gmail.com&su=Easy%20Image%20Resizer%20Support" target="_blank" rel="noopener noreferrer" style={{color:"#176b50",fontWeight:700}}>supportash01@gmail.com</a>.</p>
    <p>When reporting a problem, please mention the tool you were using, your browser and device, what you expected, and what happened instead. Please do not email private or sensitive images or documents.</p>
    <p>For more information, see our <Link href="/about" style={{color:"#176b50"}}>About page</Link> and <Link href="/privacy-policy" style={{color:"#176b50"}}>Privacy Policy</Link>.</p>
  </main>;
}
