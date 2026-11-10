import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Easy Image Resizer, including browser-based image processing, hosting, analytics, support email, cookies and advertising.",
};

export default function PrivacyPolicyPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"64px 24px",lineHeight:1.75}}>
    <Link href="/" style={{color:"#176b50"}}>← Back to Easy Image Resizer</Link>
    <h1 style={{fontSize:38,marginTop:28}}>Privacy Policy</h1>
    <p><strong>Last updated:</strong> November 11, 2026</p>
    <p>This policy explains what information may be handled when you visit or contact Easy Image Resizer.</p>

    <h2>Images you process</h2>
    <p>Image selection, resizing, compression, cropping, preview and format conversion are performed in your browser. The image file you select is not intentionally uploaded to our application servers. Your browser creates the processed image for preview and download. Avoid using a shared or public device for confidential images, and close the browser tab when you have finished.</p>

    <h2>Information handled by the website</h2>
    <p>You do not need to create an account to use the image tools. We do not intentionally collect the contents of images you process. The website is hosted by Vercel. Like other hosting providers, its infrastructure may process standard technical information such as IP address, browser and device details, request timestamps and security logs to deliver, maintain and protect the website. This technical information is handled by the hosting provider under its own terms and privacy practices.</p>

    <h2>Google Analytics</h2>
    <p>We use Google Analytics 4 (GA4) to understand how visitors use Easy Image Resizer, including page views, general interaction events, traffic sources, approximate location, browser and device information. Google Analytics may use cookies or similar technologies and may process information such as online identifiers, IP address (which Google says it does not log or store for GA4), and information about your use of the website. We use these reports to improve the website and its tools; we do not use GA4 to identify you by name. You can learn more in <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{color:"#176b50"}}>Google's explanation of data use on partner sites</a> and the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{color:"#176b50"}}>Google Privacy Policy</a>. You can manage or delete cookies through your browser settings. Blocking cookies may affect analytics measurement.</p>

    <h2>When you contact us by email</h2>
    <p>If you choose to contact support using the email link on our Contact page, your email address, message and any information you choose to include will be sent to supportash01@gmail.com through your email service. We use the information you send to read and respond to your enquiry or feedback. Your email may remain in the sender's and recipient's mailboxes and may be processed or stored by the email providers according to their own policies and settings. Please do not email private, confidential or sensitive images or documents.</p>

    <h2>Cookies and advertising</h2>
    <p>Easy Image Resizer does not currently display third-party advertisements. If advertising is enabled on this website, Google and its advertising partners may use cookies or similar technologies to store or access information on your browser. These technologies may be used to deliver, measure and limit advertising, prevent fraud, and, where permitted by your settings and applicable law, show personalized or non-personalized ads. Advertising partners may process information such as your IP address, browser or device identifiers, and information about interactions with ads or pages. Advertising will be described in this policy when enabled.</p>
    <p>You can review and manage Google's ad-personalization settings at <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" style={{color:"#176b50"}}>Google My Ad Center</a>. Where required by applicable law, we will provide appropriate consent or privacy choices before using relevant technologies.</p>

    <h2>Third-party services</h2>
    <p>The website uses Vercel for hosting, Google Fonts for typography and Google Analytics for audience measurement. When your browser requests resources from these providers, they may receive technical information needed to provide their services. If advertising is enabled, Google advertising services may also process information as described above. Their handling of information is governed by their respective privacy policies.</p>

    <h2>Children</h2>
    <p>Easy Image Resizer is a general-purpose image utility. It is not designed to knowingly collect personal information from children.</p>

    <h2>Changes to this policy</h2>
    <p>We may update this policy when the website, its features or the services it uses change. The latest version and update date will be published on this page.</p>

    <h2>Contact</h2>
    <p>For privacy questions or feedback, please use our <Link href="/contact" style={{color:"#176b50"}}>Contact page</Link>.</p>
  </main>;
}
