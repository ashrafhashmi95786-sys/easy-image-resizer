import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://easyimageresizertools.com";

export const metadata: Metadata = {
  title: "Image Compressor Online Free – Compress JPG, PNG & WebP",
  description: "Compress JPG, PNG and WebP images online for free. Adjust image quality, preview smaller files and download them in your browser with no signup or intentional image upload.",
  alternates: { canonical: `${siteUrl}/image-compressor` },
  openGraph: {
    title: "Image Compressor Online Free – Compress JPG, PNG & WebP | Easy Image Resizer Tools",
    description: "Compress JPG, PNG and WebP images in your browser. Adjust quality, preview the result and download without signing up.",
    url: `${siteUrl}/image-compressor`,
    type: "article",
  },
};

const linkStyle = { color: "#176b50", fontWeight: 700 };

export default function ImageCompressorPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 72px", lineHeight: 1.8, color: "#202923" }}>
      <Link href="/" style={linkStyle}>← Easy Image Resizer Tools home</Link>
      <header style={{ margin: "30px 0" }}>
        <p style={{ color: "#176b50", fontWeight: 700, letterSpacing: 2, fontSize: 12 }}>FREE ONLINE IMAGE TOOL</p>
        <h1 style={{ fontSize: 40, lineHeight: 1.15 }}>Image Compressor Online – Compress JPG, PNG & WebP</h1>
        <p>Compress JPG, PNG and WebP images online for free with an adjustable quality setting. Preview the smaller image before downloading it directly in your browser. No account or sign-up is required.</p>
        <p><Link href="/#tools" style={linkStyle}>Open the Image compressor tool →</Link></p>
      </header>
      <section>
        <h2>Why use this free online image compressor?</h2>
        <ul>
          <li>Compress JPG, PNG and WebP images with an adjustable quality setting.</li>
          <li>Preview the processed image before downloading it.</li>
          <li>Process the selected image locally in your browser; it is not intentionally uploaded to the application servers.</li>
          <li>Use the tool without creating an account or signing up.</li>
          <li>Choose a quality level that balances file size and visual detail.</li>
        </ul>
      </section>
      <section>
        <h2>How to compress an image online</h2>
        <ol>
          <li>Open the <Link href="/#tools" style={linkStyle}>Easy Image Resizer Tools workspace</Link>.</li>
          <li>Select <strong>Image compressor</strong>.</li>
          <li>Choose a JPG, PNG or WebP image from your device. The current input limit is 20MB.</li>
          <li>Adjust the image quality slider. A lower setting can reduce file size but may make details less clear.</li>
          <li>Select <strong>Process image</strong>, review the before-and-after preview and download the result.</li>
        </ol>
      </section>
      <section>
        <h2>How does image compression work?</h2>
        <p>Image compression reduces the amount of data needed to store an image. In this tool, the quality setting controls the output encoding quality. Very large images are also scaled down so neither side exceeds 2,400 pixels. The final file size depends on the image content, dimensions, format and quality setting.</p>
      </section>
      <section>
        <h2>What quality setting should I choose?</h2>
        <p>Start with a higher quality setting and reduce it gradually if the file is still too large. Compare the original and processed previews before downloading. Photos with faces, fine patterns, small text or sharp edges may show compression artefacts more clearly at lower quality.</p>
        <p>The quality slider is a visual trade-off, not a guaranteed file-size target. If a form or website requires a specific maximum, use a dedicated target-size tool such as <Link href="/resize-image-to-20kb" style={linkStyle}>20KB</Link>, <Link href="/resize-image-to-50kb" style={linkStyle}>50KB</Link> or <Link href="/resize-image-to-100kb" style={linkStyle}>100KB image resizer</Link>, then verify the downloaded file.</p>
      </section>
      <section>
        <h2>Does compression change image dimensions?</h2>
        <p>It can. The compressor scales images down when their width or height exceeds 2,400 pixels, while keeping the aspect ratio. Smaller images are not enlarged by this limit. Check the output dimensions and appearance before using the file.</p>
      </section>
      <section>
        <h2>Which formats can I compress?</h2>
        <p>You can choose JPG/JPEG, PNG and WebP files. The current compressor keeps PNG input as PNG; JPG and WebP input are exported as JPG. If you need a specific output format, check the destination website's accepted formats before downloading or use an appropriate conversion tool.</p>
      </section>
      <section>
        <h2>Are my images uploaded to a server?</h2>
        <p>Image selection, compression and preview generation happen locally in your browser. The application does not intentionally upload the selected image to its own servers. Avoid using a shared device for confidential images, and read the <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link> for details about website data.</p>
      </section>
      <section>
        <h2>More free image tools</h2>
        <ul>
          <li><Link href="/resize-image-to-20kb" style={linkStyle}>Resize an image to 20KB</Link></li>
          <li><Link href="/resize-image-to-50kb" style={linkStyle}>Resize an image to 50KB</Link></li>
          <li><Link href="/resize-image-to-100kb" style={linkStyle}>Resize an image to 100KB</Link></li>
          <li><Link href="/passport-photo-resizer" style={linkStyle}>Passport photo resizer</Link></li>
          <li><Link href="/signature-resizer" style={linkStyle}>Signature resizer</Link></li>
          <li><Link href="/guides" style={linkStyle}>Image resizing guides and FAQs</Link></li>
        </ul>
      </section>
      <section>
        <h2>Frequently asked questions</h2>
        <h3>Q1. Is this image compressor free?</h3>
        <p>Yes. It is currently free to use and does not require sign-up.</p>
        <h3>Q2. Will it compress an image to an exact KB size?</h3>
        <p>No. The compressor uses a quality setting rather than an exact KB target. Use the <Link href="/resize-image-to-20kb" style={linkStyle}>20KB</Link>, <Link href="/resize-image-to-50kb" style={linkStyle}>50KB</Link>, <Link href="/resize-image-to-100kb" style={linkStyle}>100KB</Link> or Custom KB tools when you have a file-size limit.</p>
        <h3>Q3. Will my image become blurry?</h3>
        <p>Lower quality and smaller dimensions can reduce detail. Review the preview and choose a higher quality setting if the result is not clear enough.</p>
        <h3>Q4. Can I compress an image on my phone?</h3>
        <p>Yes. Open the website in a modern mobile browser, select an image and process it. Check the downloaded file before uploading it elsewhere.</p>
        <h3>Q5. Which image formats does the compressor support?</h3>
        <p>You can select JPG/JPEG, PNG and WebP images. PNG input stays PNG, while JPG and WebP input are exported as JPG by the current tool.</p>
      </section>
      <p style={{ marginTop: 36 }}><Link href="/#tools" style={linkStyle}>Compress an image now →</Link></p>
    </main>
  );
}
