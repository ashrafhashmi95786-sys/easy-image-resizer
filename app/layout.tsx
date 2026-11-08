import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Easy Image Resizer — Free Online Image Tools", description: "Resize photos to 20KB, 50KB or 100KB, compress images, and convert image formats privately in your browser." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
