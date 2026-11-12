import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://easy-image-resizer-seven.vercel.app";

export const metadata: Metadata = {
  title: "Passport Photo Resizer Online Free (35×45 mm)",
  description: "Create a passport-size photo preset online for free. Resize your photo to 413×531 pixels, preview it and download it in your browser.",
  alternates: { canonical: `${siteUrl}/passport-photo-resizer` },
  openGraph: {
    title: "Passport Photo Resizer Online Free | Easy Image Resizer",
    description: "Resize a photo with a 413×531 pixel passport-size preset using a free browser-based image tool.",
    url: `${siteUrl}/passport-photo-resizer`,
    type: "article",
  },
};

const linkStyle = { color: "#176b50", fontWeight: 700 };

export default function PassportPhotoResizerPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 72px", lineHeight: 1.8, color: "#202923" }}>
      <Link href="/" style={linkStyle}>← Easy Image Resizer home</Link>
      <header style={{ margin: "30px 0" }}>
        <p style={{ color: "#176b50", fontWeight: 700, letterSpacing: 2, fontSize: 12 }}>FREE ONLINE PHOTO TOOL</p>
        <h1 style={{ fontSize: 40, lineHeight: 1.15 }}>Passport Size Photo Resizer Online</h1>
        <p>Prepare a passport-size photo using a simple 413 × 531 pixel preset. Choose an image, preview the result and download it directly from your browser without creating an account.</p>
        <p><Link href="/#tools" style={linkStyle}>Open the Passport photo tool →</Link></p>
      </header>

      <section>
        <h2>How to make a passport-size photo</h2>
        <ol>
          <li>Open the <Link href="/#tools" style={linkStyle}>Easy Image Resizer workspace</Link>.</li>
          <li>Select <strong>Passport photo</strong> from the image tools.</li>
          <li>Choose a JPG, PNG or WebP image from your device (up to 20MB).</li>
          <li>Preview the selected photo and press <strong>Process image</strong>.</li>
          <li>Check the crop and clarity, then download the processed image.</li>
        </ol>
      </section>

      <section>
        <h2>What size does this passport photo tool use?</h2>
        <p>The current preset outputs an image at 413 × 531 pixels, commonly used as an approximate 35 × 45 mm portrait at 300 DPI. The tool fits and center-crops the source image to this shape. It does not verify identity-photo rules or guarantee acceptance by a passport office, embassy, visa portal or other authority.</p>
      </section>

      <section>
        <h2>Check official photo requirements before applying</h2>
        <p>Photo rules can differ by country and application. They may specify exact dimensions, background colour, head size and position, facial expression, lighting, shadows, clothing and recency. This tool does not change the background or automatically check those requirements. Confirm the latest instructions from the authority receiving your photo before submitting it.</p>
      </section>

      <section>
        <h2>Tips for a clear passport photo</h2>
        <ul>
          <li>Start with a sharp, well-lit photo taken from the front.</li>
          <li>Keep the face clearly visible and avoid strong shadows.</li>
          <li>Use a plain background if the destination rules require one.</li>
          <li>Check that the center crop does not cut off the head or shoulders.</li>
          <li>Review the downloaded image at full size before uploading it.</li>
        </ul>
      </section>

      <section>
        <h2>Is the passport photo resizer private?</h2>
        <p>Image selection and processing happen locally in your browser. The selected photo is not intentionally uploaded to the application's servers. For more information about website data, read the <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link>.</p>
      </section>

      <section>
        <h2>More free image tools</h2>
        <ul>
          <li><Link href="/resize-image-to-20kb" style={linkStyle}>Resize an image to 20KB</Link></li>
          <li><Link href="/resize-image-to-50kb" style={linkStyle}>Resize an image to 50KB</Link></li>
          <li><Link href="/resize-image-to-100kb" style={linkStyle}>Resize an image to 100KB</Link></li>
          <li><Link href="/guides" style={linkStyle}>Image resizing guides and FAQs</Link></li>
        </ul>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <h3>Is this passport photo resizer free?</h3>
        <p>Yes. It is currently free to use and does not require sign-up.</p>
        <h3>Does it create a 35 × 45 mm photo?</h3>
        <p>It creates a 413 × 531 pixel image, an approximate 35 × 45 mm portrait at 300 DPI. Always check the receiving authority's required dimensions and print settings.</p>
        <h3>Does it remove or change the background?</h3>
        <p>No. The current preset resizes and center-crops the image; it does not replace the background.</p>
        <h3>Will every passport or visa office accept the result?</h3>
        <p>No acceptance is guaranteed. Requirements vary, so compare the final photo with the official instructions for your application.</p>
      </section>

      <p style={{ marginTop: 36 }}><Link href="/#tools" style={linkStyle}>Create a passport-size photo now →</Link></p>
    </main>
  );
}
