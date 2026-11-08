import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Image Resizing Guides & FAQs",
  description: "Practical guides for resizing images to 20KB, 50KB or 100KB, choosing dimensions, compressing photos and preparing passport photos or signatures.",
};

const linkStyle = { color: "#176b50", fontWeight: 700 };

export default function GuidesPage() {
  return <main style={{maxWidth:820,margin:"0 auto",padding:"48px 24px 72px",lineHeight:1.8,color:"#202923"}}>
    <Link href="/" style={linkStyle}>← Back to Easy Image Resizer</Link>
    <header style={{margin:"32px 0"}}>
      <p style={{color:"#176b50",fontWeight:700,letterSpacing:2,fontSize:12}}>IMAGE HELP CENTRE</p>
      <h1 style={{fontSize:40,lineHeight:1.15}}>Practical image resizing guides</h1>
      <p>Learn how to prepare image files for online forms, applications, websites and everyday sharing. The right settings depend on the website or organisation receiving your image, so always check its instructions first.</p>
      <p><Link href="/#tools" style={linkStyle}>Open the free image tools →</Link></p>
    </header>

    <article>
      <h2>1. How to resize an image to 20KB, 50KB or 100KB</h2>
      <p>Some online forms set a maximum file size for profile photos, signatures or supporting images. A smaller file is easier to upload, but excessive compression can make text, edges and facial details difficult to see.</p>
      <ol>
        <li>Open the <Link href="/#tools" style={linkStyle}>image workspace</Link> and choose Photo to 20KB, Photo to 50KB, Photo to 100KB or Custom KB size.</li>
        <li>Select a JPG, PNG or WebP image from your device. The maximum input size is 20MB.</li>
        <li>For a custom limit, enter a target between 5KB and 2,000KB.</li>
        <li>Select Process image and review the displayed output size and before-and-after preview.</li>
        <li>Download the result only after checking that it remains clear and meets the receiving form's requirements.</li>
      </ol>
      <p><strong>Important:</strong> The selected KB value is a maximum target, not a promise that every image can be encoded at exactly that size. The tool reduces image quality and, if needed, dimensions. Very detailed or unusually large images may not reach a very small limit. Try a larger limit if the result becomes unclear or the target cannot be reached.</p>
    </article>

    <article>
      <h2>2. How to choose image dimensions</h2>
      <p>Pixels describe an image's width and height. For example, 1200 × 800 pixels is a landscape image, while 800 × 1200 pixels is portrait. A form may specify exact pixel dimensions, an aspect ratio, or both.</p>
      <ul>
        <li>Use Custom dimensions when the destination gives exact width and height values.</li>
        <li>Keep the original aspect ratio when you want to avoid stretching faces, logos or objects.</li>
        <li>Use Quick crop when you need a common ratio such as 1:1, 4:3, 3:4, 16:9 or 9:16.</li>
        <li>Check the final preview because a centered crop may remove content near the edges.</li>
      </ul>
      <p>Easy Image Resizer currently applies a centered crop; it does not provide a draggable crop-position selector. If the subject is near an edge, choose a different source image or crop it in an editor that allows manual positioning.</p>
    </article>

    <article>
      <h2>3. JPG or PNG: which format should you use?</h2>
      <p>JPG is commonly useful for photographs because it can create relatively small files. JPG uses lossy compression, so repeated saving or very low quality can introduce visible artefacts.</p>
      <p>PNG is useful for graphics, sharp text, icons and images that need transparency. PNG files can be larger than comparable JPG photographs. Converting a JPG to PNG does not restore detail that was lost in the original JPG.</p>
      <p>Choose the format requested by the destination website. If no format is specified, consider the image itself: JPG for many photos, PNG for transparent graphics or crisp interface artwork.</p>
    </article>

    <article>
      <h2>4. Preparing a passport-style photo</h2>
      <p>The Passport photo preset creates a 413 × 531 pixel image using a centered crop. This is a starter size only. Passport, visa, examination and other application rules differ by country and organisation and may specify different dimensions, background colours, face position, expression, lighting or file-size limits.</p>
      <p>Before submitting, compare the output with the official photo instructions for your application. The preset does not certify that a photo will be accepted, change its background, or verify identity-document requirements.</p>
    </article>

    <article>
      <h2>5. Resizing a signature image</h2>
      <p>The Signature resize preset creates a 140 × 60 pixel image. This is a basic starting template, not a universal standard. Some forms require a different pixel size, file format, background, ink colour or maximum file size.</p>
      <p>Use a clear image with enough contrast, check that the full signature remains visible in the preview, and verify the receiving organisation's instructions before uploading. Do not use this tool to imitate or alter another person's signature.</p>
    </article>

    <article>
      <h2>6. Image privacy and file handling</h2>
      <p>Image selection, processing and preview generation happen in your browser. The application does not intentionally upload the selected image to its own servers. Your browser creates a temporary local preview and a downloadable output. As with any website, the hosting provider may process standard technical request information. Avoid processing confidential images on a shared or public computer.</p>
      <p>Read the full <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link> for more information.</p>
    </article>

    <section style={{marginTop:44,paddingTop:24,borderTop:"1px solid #dce5df"}}>
      <h2>Frequently asked questions</h2>
      <h3>Is Easy Image Resizer free?</h3>
      <p>Yes. The image tools are currently available to use without creating an account or paying a fee. Internet access may be needed to open the website.</p>
      <h3>Are my photos uploaded?</h3>
      <p>The image processing in this tool runs in your browser. The app does not intentionally send selected image files to its application servers. See the <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link> for hosting-related details.</p>
      <h3>Which image formats can I select?</h3>
      <p>You can select JPG/JPEG, PNG and WebP files up to 20MB. The conversion tools let you create JPG or PNG output.</p>
      <h3>Why did my image not reach the requested KB size?</h3>
      <p>Some images contain too much detail to fit a very small limit while remaining within the tool's minimum quality and dimension settings. Try a higher target size or a smaller source image.</p>
      <h3>Will a passport photo or signature preset be accepted by every form?</h3>
      <p>No. These are starter dimensions only. Always follow the official requirements for the specific application.</p>
      <h3>Can I crop a specific area of an image?</h3>
      <p>The current Quick crop tool uses a centered crop and preset aspect ratios. It does not let you drag the crop area to reposition it.</p>
      <h3>What should I do if processing fails?</h3>
      <p>Check that the file is a supported format and under 20MB, try another browser, and avoid closing the tab while processing. If the problem continues, use the <Link href="/contact" style={linkStyle}>Contact & Feedback page</Link> and include the tool name, browser and steps that caused the issue. Do not send private images.</p>
    </section>

    <p style={{marginTop:40}}><Link href="/#tools" style={linkStyle}>Ready to resize an image? Start here →</Link></p>
  </main>;
}
