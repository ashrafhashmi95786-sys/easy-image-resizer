import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://easy-image-resizer-seven.vercel.app";

export const metadata: Metadata = {
  title: "Signature Resizer (140×60 Pixels)",
  description: "Resize a signature image online for free with a 140×60 pixel starter preset. Preview and download your image directly in your browser.",
  alternates: { canonical: `${siteUrl}/signature-resizer` },
  openGraph: {
    title: "Signature Resizer Online Free | Easy Image Resizer",
    description: "Use a free 140×60 pixel signature resize preset. Process your image in your browser without an account.",
    url: `${siteUrl}/signature-resizer`,
    type: "article",
  },
};

const linkStyle = { color: "#176b50", fontWeight: 700 };

export default function SignatureResizerPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 72px", lineHeight: 1.8, color: "#202923" }}>
      <Link href="/" style={linkStyle}>← Easy Image Resizer home</Link>
      <header style={{ margin: "30px 0" }}>
        <p style={{ color: "#176b50", fontWeight: 700, letterSpacing: 2, fontSize: 12 }}>FREE ONLINE IMAGE TOOL</p>
        <h1 style={{ fontSize: 40, lineHeight: 1.15 }}>Signature Resizer Online</h1>
        <p>Resize a scanned or photographed signature with a simple 140 × 60 pixel starter preset. Preview the result and download it directly from your browser without creating an account.</p>
        <p><Link href="/#tools" style={linkStyle}>Open the Signature resize tool →</Link></p>
      </header>
      <section>
        <h2>How to resize a signature image</h2>
        <ol>
          <li>Open the <Link href="/#tools" style={linkStyle}>Easy Image Resizer workspace</Link>.</li>
          <li>Select <strong>Signature resize</strong> from the available tools.</li>
          <li>Choose your signature image in JPG, PNG or WebP format (up to 20MB).</li>
          <li>Preview the image and select <strong>Process image</strong>.</li>
          <li>Check the dimensions and appearance, then download the result.</li>
        </ol>
      </section>
      <section>
        <h2>What size does this signature resizer use?</h2>
        <p>The current starter preset creates an image that is 140 × 60 pixels. This is a general preset only, not a universal signature standard. Government forms, exam portals, banks and other websites may require different pixel dimensions, file formats, file-size limits or background rules. Check the instructions for the exact form before uploading.</p>
      </section>
      <section>
        <h2>Tips for a clear signature image</h2>
        <ul>
          <li>Sign on clean, plain paper using a dark pen.</li>
          <li>Capture the signature in good, even lighting.</li>
          <li>Keep the signature fully inside the image before resizing.</li>
          <li>Use a sharp source image so the resized result remains legible.</li>
          <li>Review the downloaded file at full size and confirm it meets the destination form's rules.</li>
        </ul>
      </section>
      <section>
        <h2>Does this tool remove the background?</h2>
        <p>No. The current signature preset resizes and center-crops the image to 140 × 60 pixels. It does not remove or replace the background, clean ink marks, or verify whether a form will accept the result.</p>
      </section>
      <section>
        <h2>Is it safe to resize a signature online?</h2>
        <p>Image selection and processing happen locally in your browser. The selected image is not intentionally uploaded to the application's servers. A signature can be sensitive personal information, so use a device and browser you trust, and avoid sharing the original image unnecessarily. Read the <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link> for more information.</p>
      </section>
      <section>
        <h2>More free image tools</h2>
        <ul>
          <li><Link href="/passport-photo-resizer" style={linkStyle}>Passport photo resizer</Link></li>
          <li><Link href="/resize-image-to-20kb" style={linkStyle}>Resize an image to 20KB</Link></li>
          <li><Link href="/resize-image-to-50kb" style={linkStyle}>Resize an image to 50KB</Link></li>
          <li><Link href="/resize-image-to-100kb" style={linkStyle}>Resize an image to 100KB</Link></li>
          <li><Link href="/guides" style={linkStyle}>Image resizing guides and FAQs</Link></li>
        </ul>
      </section>
      <section>
        <h2>Frequently asked questions</h2>
        <h3>Is this signature resizer free?</h3>
        <p>Yes. It is currently free to use and does not require sign-up.</p>
        <h3>Can I resize my signature to 140 × 60 pixels?</h3>
        <p>Yes. Select the Signature resize tool to use the 140 × 60 pixel starter preset. Confirm the required dimensions for your particular application before submitting.</p>
        <h3>Can I use the resized signature for every government form?</h3>
        <p>Not necessarily. Each form may have its own image dimensions, file-size and format requirements. Always follow the official instructions.</p>
        <h3>Does the tool make the signature background transparent?</h3>
        <p>No. It does not remove or replace the background.</p>
      </section>
      <p style={{ marginTop: 36 }}><Link href="/#tools" style={linkStyle}>Resize your signature now →</Link></p>
    </main>
  );
}
