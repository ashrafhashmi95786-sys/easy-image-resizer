import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://easy-image-resizer-seven.vercel.app";

export const metadata: Metadata = {
  title: "Resize Image to 100KB Online Free",
  description: "Resize a JPG, PNG or WebP photo to a maximum of 100KB online for free. Preview and download your image in your browser with no sign-up.",
  alternates: { canonical: `${siteUrl}/resize-image-to-100kb` },
  openGraph: {
    title: "Resize Image to 100KB Online Free | Easy Image Resizer",
    description: "Reduce an image to a maximum of 100KB with a free browser-based photo resizer.",
    url: `${siteUrl}/resize-image-to-100kb`,
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
    "name": "Is this 100KB image resizer free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. The tool is currently free to use and does not require an account."
    }
  },
  {
    "@type": "Question",
    "name": "Can I resize an image to 100KB on my phone?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Open the website in a modern mobile browser, choose a photo and process it. Check the downloaded file before uploading it to another app."
    }
  },
  {
    "@type": "Question",
    "name": "Will the output be exactly 100KB?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The target is a maximum file size. The final image may be smaller than 100KB depending on its content and compression result."
    }
  },
  {
    "@type": "Question",
    "name": "What if my image cannot reach 100KB?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Try a smaller source image or reduce its dimensions. If the receiving form permits it, choose a higher file-size limit instead of making the image too unclear."
    }
  }
],
};

export default function ResizeImageTo100KBPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 72px", lineHeight: 1.8, color: "#202923" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Link href="/" style={linkStyle}>← Easy Image Resizer home</Link>
      <header style={{ margin: "30px 0" }}>
        <p style={{ color: "#176b50", fontWeight: 700, letterSpacing: 2, fontSize: 12 }}>FREE ONLINE IMAGE TOOL</p>
        <h1 style={{ fontSize: 40, lineHeight: 1.15 }}>Resize Image to 100KB Online</h1>
        <p>Need a photo under a 100KB upload limit? Use Easy Image Resizer to reduce a JPG, PNG or WebP image in your browser, review the result and download it for a form, application, website or email.</p>
        <p><Link href="/#tools" style={linkStyle}>Open the Photo to 100KB tool →</Link></p>
      </header>

      <section>
        <h2>How to reduce an image to 100KB</h2>
        <ol>
          <li>Open the <Link href="/#tools" style={linkStyle}>image workspace</Link> on Easy Image Resizer.</li>
          <li>Select <strong>Photo to 100KB</strong>.</li>
          <li>Choose a JPG, PNG or WebP image from your device. The current maximum input size is 20MB.</li>
          <li>Select <strong>Process image</strong> and wait for the output preview.</li>
          <li>Check the final file size and image clarity, then download the result.</li>
        </ol>
      </section>

      <section>
        <h2>Can every image be reduced below 100KB?</h2>
        <p>Many common photos can fit within 100KB, but the result depends on the original image dimensions, detail, colours and format. The tool may adjust image quality and dimensions to try to meet the selected maximum. If it cannot reach the limit within its compression settings, try a smaller source image or a higher file-size limit if the destination allows it.</p>
      </section>

      <section>
        <h2>Is JPG or PNG better for a 100KB image?</h2>
        <p>JPG is often a practical choice for photographs because it can produce smaller files. PNG is useful for transparent graphics, logos and sharp text, but it may be larger. Choose the format accepted by the website or application where you will upload the image.</p>
      </section>

      <section>
        <h2>Will resizing to 100KB reduce image quality?</h2>
        <p>Compression can reduce fine detail, and changing dimensions can make an image smaller. Review the preview before downloading, especially when the photo contains small text, a face or other important details. A 100KB target is a maximum size, not a promise of an exact file size or a particular visual quality.</p>
      </section>

      <section>
        <h2>Is it safe to resize a photo here?</h2>
        <p>Image selection and processing happen in your browser. Easy Image Resizer does not intentionally upload the selected image to its application servers. Avoid using a shared device for confidential photos, and read the <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link> for details about website data.</p>
      </section>

      <section>
        <h2>More free image tools</h2>
        <ul>
          <li><Link href="/passport-photo-resizer" style={linkStyle}>Create a passport-size photo</Link></li>
          <li><Link href="/resize-image-to-20kb" style={linkStyle}>Resize an image to 20KB</Link></li>
          <li><Link href="/resize-image-to-50kb" style={linkStyle}>Resize an image to 50KB</Link></li>
          <li><Link href="/guides" style={linkStyle}>Read image resizing guides and FAQs</Link></li>
        </ul>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <h3>Is this 100KB image resizer free?</h3>
        <p>Yes. The tool is currently free to use and does not require an account.</p>
        <h3>Can I resize an image to 100KB on my phone?</h3>
        <p>Yes. Open the website in a modern mobile browser, choose a photo and process it. Check the downloaded file before uploading it to another app.</p>
        <h3>Will the output be exactly 100KB?</h3>
        <p>The target is a maximum file size. The final image may be smaller than 100KB depending on its content and compression result.</p>
        <h3>What if my image cannot reach 100KB?</h3>
        <p>Try a smaller source image or reduce its dimensions. If the receiving form permits it, choose a higher file-size limit instead of making the image too unclear.</p>
      </section>

      <p style={{ marginTop: 36 }}><Link href="/#tools" style={linkStyle}>Resize your image to 100KB now →</Link></p>
    </main>
  );
}
