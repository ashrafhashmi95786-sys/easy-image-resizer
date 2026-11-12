import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://easy-image-resizer-seven.vercel.app";

export const metadata: Metadata = {
  title: "Resize Image to 20KB Online Free",
  description: "Reduce a JPG, PNG or WebP photo to 20KB in your browser. Free image size reducer with preview and download. No sign-up and no intentional image upload.",
  alternates: { canonical: `${siteUrl}/resize-image-to-20kb` },
  openGraph: {
    title: "Resize Image to 20KB Online Free | Easy Image Resizer",
    description: "Make an image smaller than 20KB with a free browser-based photo resizer.",
    url: `${siteUrl}/resize-image-to-20kb`,
    type: "article",
  },
};

const linkStyle = { color: "#176b50", fontWeight: 700 };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "Is this 20KB image resizer free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. The tool is currently free to use and does not require an account."
    }
  },
  {
    "@type": "Question",
    "name": "Can I resize a photo from my phone?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Open the website in a modern mobile browser, choose a photo and process it. Check the downloaded file before uploading it to another app."
    }
  },
  {
    "@type": "Question",
    "name": "Will the output be exactly 20KB?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The target is a maximum file size, not a guarantee of an exact 20KB file. The final size depends on the original image and compression limits."
    }
  },
  {
    "@type": "Question",
    "name": "Will reducing an image to 20KB make it blurry?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Strong compression or smaller dimensions can reduce clarity. Always inspect the preview and make sure important details remain readable."
    }
  }
],
};

export default function ResizeImageTo20KBPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 72px", lineHeight: 1.8, color: "#202923" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Link href="/" style={linkStyle}>← Easy Image Resizer home</Link>
      <header style={{ margin: "30px 0" }}>
        <p style={{ color: "#176b50", fontWeight: 700, letterSpacing: 2, fontSize: 12 }}>FREE ONLINE IMAGE TOOL</p>
        <h1 style={{ fontSize: 40, lineHeight: 1.15 }}>Resize Image to 20KB Online</h1>
        <p>Need to upload a photo with a 20KB file-size limit? Use the free Easy Image Resizer tool to reduce a JPG, PNG or WebP image in your browser, check the result and download it.</p>
        <p><Link href="/#tools" style={linkStyle}>Open the Photo to 20KB tool →</Link></p>
      </header>

      <section>
        <h2>How to reduce an image to 20KB</h2>
        <ol>
          <li>Open the <Link href="/#tools" style={linkStyle}>image workspace</Link>.</li>
          <li>Select <strong>Photo to 20KB</strong>.</li>
          <li>Choose a JPG, PNG or WebP image from your device. The current maximum input size is 20MB.</li>
          <li>Select <strong>Process image</strong> and wait for the output preview.</li>
          <li>Check the final file size and image clarity, then download the result.</li>
        </ol>
      </section>

      <section>
        <h2>Can every photo be reduced to 20KB?</h2>
        <p>Not always. Photos with lots of detail, large dimensions or complex colours can be difficult to compress below 20KB while keeping them clear. This tool reduces image quality and, when needed, image dimensions to try to meet the selected maximum size. If it cannot reach the limit, try a simpler or smaller source image, or use a higher file-size limit if the form allows it.</p>
      </section>

      <section>
        <h2>Which image format should I use?</h2>
        <p>JPG is often a practical choice for photographs because it can produce smaller files. PNG is useful for graphics, sharp text and transparency, but it may create a larger file. Always follow the file-format instructions shown by the website or application where you plan to upload the image.</p>
      </section>

      <section>
        <h2>Is it safe to resize a photo here?</h2>
        <p>Image selection and processing happen in your browser. Easy Image Resizer does not intentionally upload the selected image to its application servers. Avoid using a shared device for confidential photos, and read the <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link> for details about website data.</p>
      </section>

      <section>
        <h2>Other image size options</h2>
        <ul>
          <li><Link href="/resize-image-to-50kb" style={linkStyle}>Read the guide to resize an image to 50KB</Link></li>
          <li><Link href="/#tools" style={linkStyle}>Resize a photo to 100KB</Link></li>
          <li><Link href="/#tools" style={linkStyle}>Choose a custom KB limit</Link></li>
          <li><Link href="/guides" style={linkStyle}>Read image resizing guides and FAQs</Link></li>
        </ul>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <h3>Is this 20KB image resizer free?</h3>
        <p>Yes. The tool is currently free to use and does not require an account.</p>
        <h3>Can I resize a photo from my phone?</h3>
        <p>Yes. Open the website in a modern mobile browser, choose a photo and process it. Check the downloaded file before uploading it to another app.</p>
        <h3>Will the output be exactly 20KB?</h3>
        <p>The target is a maximum file size, not a guarantee of an exact 20KB file. The final size depends on the original image and compression limits.</p>
        <h3>Will reducing an image to 20KB make it blurry?</h3>
        <p>Strong compression or smaller dimensions can reduce clarity. Always inspect the preview and make sure important details remain readable.</p>
      </section>

      <p style={{ marginTop: 36 }}><Link href="/#tools" style={linkStyle}>Resize your image to 20KB now →</Link></p>
    </main>
  );
}
