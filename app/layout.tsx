import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://jainishdabgar.vercel.app";
const OG_IMAGE = "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289032/jainishdabgar_brn6dx.jpg";

export const viewport: Viewport = {
  themeColor: "#00d4ff",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Jainish Dabgar — Full-Stack Web Developer",
    template: "%s | Jainish Dabgar",
  },

  description:
    "Full-Stack Web Developer specializing in MERN stack, Python, and modern web ecosystems. CTO & Co-Organizer of Code Builders BCA. Explore premium 3D portfolio, projects, skills, and achievements.",

  keywords: [
    "Jainish Dabgar",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Python Developer",
    "Web Developer India",
    "Web Developer Ahmedabad",
    "Code Builders BCA",
    "GyanStack",
    "BCA Student Developer",
    "Portfolio",
    "3D Portfolio",
    "Som-Lalit Institute",
    "Gujarat University",
    "JavaScript Developer",
    "TypeScript",
    "Full Stack Portfolio",
  ],

  authors: [{ name: "Jainish Dabgar", url: BASE_URL }],
  creator: "Jainish Dabgar",
  publisher: "Jainish Dabgar",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp, Discord, Slack) ──
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Jainish Dabgar Portfolio",
    title: "Jainish Dabgar — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer · MERN · Python · Next.js · CTO @ Code Builders BCA · Ahmedabad, India",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Jainish Dabgar — Full-Stack Web Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Jainish Dabgar — Full-Stack Web Developer",
    description:
      "MERN · Python · Next.js specialist. CTO @ Code Builders BCA. Premium 3D Portfolio.",
    images: [OG_IMAGE],
    creator: "@jainishdabgar",
    site: "@jainishdabgar",
  },

  // ── App Link Metadata (iOS / Android deep linking) ──
  appLinks: {
    web: {
      url: BASE_URL,
      should_fallback: true,
    },
  },

  // ── Verification tokens (add your own from Google / Bing search console) ──
  verification: {
    // google: "your-google-site-verification-token",
    // other: { "msvalidate.01": "your-bing-token" },
  },

  // ── Other meta ──
  other: {
    "linkedin:owner": "jainish-dabgar-87474a320",
    "og:locality": "Ahmedabad",
    "og:region": "Gujarat",
    "og:country-name": "India",
    "og:email": "jainishdabgar2901@gmail.com",
    "og:phone_number": "+91-9773272749",
    "profile:first_name": "Jainish",
    "profile:last_name": "Dabgar",
    "profile:username": "Jainish-2901",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        {/* Canonical & preconnect for Cloudinary CDN */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data — JSON-LD Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jainish Dabgar",
              url: BASE_URL,
              image: OG_IMAGE,
              sameAs: [
                "https://github.com/Jainish-2901",
                "https://www.linkedin.com/in/jainish-dabgar-87474a320/",
                "https://www.youtube.com/@jainishdabgar2637",
                "https://www.instagram.com/dabgar_jainish_2901/",
              ],
              jobTitle: "Full-Stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Code Builders BCA",
                url: "https://www.codebuilders.co.in",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Som-Lalit Institute of Computer Application",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              email: "jainishdabgar2901@gmail.com",
              telephone: "+91-9773272749",
              knowsAbout: [
                "React.js", "Next.js", "Node.js", "MongoDB",
                "Express.js", "Python", "FastAPI", "TypeScript",
                "Three.js", "Framer Motion", "MERN Stack", "Full-Stack Development",
              ],
            }),
          }}
        />

        {/* Structured Data — WebSite schema for Sitelinks search box eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jainish Dabgar Portfolio",
              url: BASE_URL,
              description:
                "Full-Stack Web Developer portfolio — MERN, Python, Next.js, 3D React Three Fiber.",
              author: {
                "@type": "Person",
                name: "Jainish Dabgar",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
