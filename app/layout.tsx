import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jainish Dabgar — Full-Stack Web Developer",
  description:
    "Elite 3D portfolio of Jainish Dabgar, a Full-Stack Web Developer specializing in MERN stack, Python, and modern web ecosystems. Explore projects, skills, and achievements.",
  keywords: [
    "Jainish Dabgar",
    "Full-Stack Developer",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Jainish Dabgar" }],
  openGraph: {
    title: "Jainish Dabgar — Full-Stack Web Developer",
    description:
      "Elite 3D portfolio of Jainish Dabgar. MERN, Python, Next.js specialist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jainish Dabgar — Full-Stack Web Developer",
    description: "Elite 3D portfolio. MERN, Python, Next.js specialist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
