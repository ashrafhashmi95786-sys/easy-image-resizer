import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://easy-image-resizer-seven.vercel.app";

export const metadata: Metadata = {
  title: "Resize Image to 50KB Online Free",
  description: "Resize a JPG, PNG or WebP photo to a maximum of 50KB online for free. Preview and download your image in your browser with no sign-up.",
  alternates: { canonical: `${siteUrl}/resize-image-to-50kb` },
  openGraph: {
    title: "Resize Image to 50KB Online Free | Easy Image Resizer",
    description: "Reduce an image to 50KB with a free browser-based photo resizer.",
    url: `${siteUrl}/resize-image-to-50kb`,
    type: "article",
  },
};

const linkStyle = { color: "#176b50", fontWeight: 700 };

export default function ResizeImageTo50KBPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 72px", lineHeight: 1.8, color: "#202923" }}>
      <Link href="/" style={linkStyle}>← Easy Image Resizer home</Link>
      <header style={{ margin: "30px 0" }}>
        <p style={{ color: "#176b50", fontWeight: 700, letterSpacing: 2, fontSize: 12 }}>FREE ONLINE IMAGE TOOL</p>
        <h1 style={{ fontSize: 40, lineHeight: 1.15 }}>Resize Image to 50KB Online</h1>
        <p>Need a photo under a 50KB upload limit? Use Easy Image Resizer to reduce a JPG, PNG or WebP image in your browser, review the result and download it for your form, application or website.</p>
        <p><Link href="/#tools" style={linkStyle}>Open the Photo to 50KB tool →</Link></p>
      </header>

      <section>
        <h2>How to reduce an image to 50KB</h2>
        <ol>
          <li>Open the <Link href="/#tools" style={linkStyle}>image workspace</Link> on Easy Image Resizer.</li>
          <li>Select <strong>Photo to 50KB</strong>.</li>
          <li>Choose a JPG, PNG or WebP image from your device. The current maximum input size is 20MB.</li>
          <li>Select <strong>Process image</strong> and wait for the preview.</li>
          <li>Check the final file size and image clarity, then download the result.</li>
        </ol>
      </section>

      <section>
        <h2>Can every image be reduced below 50KB?</h2>
        <p>Many photos can be reduced to this size, but the result depends on the original dimensions, detail and colours. The tool may lower image quality and dimensions to meet the selected maximum. If it cannot reach the target without exceeding its compression limits, try a smaller source image or a higher file-size limit if your destination allows it.</p>
      </section>

      <section>
        <h2>Is JPG or PNG better for a 50KB photo?</h2>
        <p>JPG is often suitable for photographs because it can create smaller files. PNG is useful for transparent graphics, logos and sharp text, but it may be larger. Choose the format required by the form or website where you will upload the image.</p>
      </section>

      <section>
        <h2>Can I use this 50KB image resizer on my phone?</h2>
        <p>Yes. Open Easy Image Resizer in a modern mobile browser, choose a photo from your device, process it and download the result. Check the saved file before uploading it to another app or website.</p>
      </section>

      <section>
        <h2>Is it private to resize an image here?</h2>
        <p>Image selection and processing happen in your browser. Easy Image Resizer does not intentionally upload the selected image to its application servers. Avoid processing confidential photos on shared devices, and read the <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link> for website data details.</p>
      </section>

      <section>
        <h2>Other image resizing tools</h2>
        <ul>
          <li><Link href="/resize-image-to-20kb" style={linkStyle}>Resize an image to 20KB</Link></li>
          <li><Link href="/#tools" style={linkStyle}>Resize an image to 100KB</Link></li>
          <li><Link href="/#tools" style={linkStyle}>Choose a custom KB limit</Link></li>
          <li><Link href="/guides" style={linkStyle}>Read image resizing guides and FAQs</Link></li>
        </ul>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <h3>Is the 50KB image resizer free?</h3>
        <p>Yes. The image tool is currently free to use and does not require an account.</p>
        <h3>Will the image be exactly 50KB?</h3>
        <p>50KB is a maximum target, not a promise of an exact file size. The final size depends on the original image and the compression settings.</p>
        <h3>Will compressing to 50KB reduce image quality?</h3>
        <p>Compression can reduce detail, especially for complex photos. Review the preview at a readable size before using the downloaded image.</p>
        <h3>What if my image does not reach 50KB?</h3>
        <p>Try a smaller source image, reduce its dimensions, or choose a higher target size if the receiving website permits it. Some images cannot reach a very small file size while preserving acceptable clarity.</p>
      </section>

      <p style={{ marginTop: 36 }}><Link href="/#tools" style={linkStyle}>Resize your image to 50KB now →</Link></p>
    </main>
  );
}
