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
const LOGO_URL = `${BASE_URL}/assets/logo.png`;
const OG_IMAGE = LOGO_URL;

export const viewport: Viewport = {
  themeColor: "#00d4ff",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title: concise, keyword-first, under 60 chars ──
  title: {
    default: "Jainish Dabgar | Full-Stack Web Developer — MERN & Next.js",
    template: "%s | Jainish Dabgar",
  },

  // ── Description: action-oriented, 150-160 chars, includes primary keywords ──
  description:
    "Jainish Dabgar is a Full-Stack Web Developer from Ahmedabad, India. Specializes in MERN Stack, Next.js, Python & FastAPI. CTO of Code Builders BCA. View live projects, skills & contact.",

  // ── Keywords: mix of broad, mid-tail, and long-tail for coverage ──
  keywords: [
    // Core identity
    "Jainish Dabgar",
    "Jainish Dabgar Developer",
    "Jainish Dabgar Portfolio",
    // Primary skills
    "Full-Stack Web Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Python Developer",
    "FastAPI Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    // Location-based (important for local SEO)
    "Web Developer Ahmedabad",
    "Web Developer Gujarat",
    "Web Developer India",
    "Freelance Developer Ahmedabad",
    "Hire Web Developer India",
    // Long-tail project/role searches
    "MERN Stack Portfolio",
    "3D Portfolio Website",
    "Code Builders BCA",
    "GyanStack Student Platform",
    "BCA Developer India",
    "Som-Lalit Institute Computer Application",
    "Gujarat University Student Developer",
    // Technology-specific
    "React Three Fiber Developer",
    "Framer Motion Animation",
    "Full Stack MERN Projects",
    "AI Web Application Developer",
    "EmailJS Contact Form",
    // Intent-based keywords
    "Hire Full-Stack Developer India",
    "Junior Developer Portfolio",
    "Student Developer Portfolio India",
  ],

  authors: [{ name: "Jainish Dabgar", url: BASE_URL }],
  creator: "Jainish Dabgar",
  publisher: "Jainish Dabgar",

  category: "Technology",

  // ── Robots: fully open to all crawlers ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical URL — prevents duplicate content penalties ──
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
      "en-US": BASE_URL,
    },
  },

  // ── Icons for browser tabs, bookmarks, iOS home screen ──
  icons: {
    icon: [
      { url: "/assets/logo.png", type: "image/png", sizes: "any" },
      { url: "/assets/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/assets/logo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/assets/logo.png",
  },

  // ── Open Graph — LinkedIn, WhatsApp, Discord, Slack, Facebook ──
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: BASE_URL,
    siteName: "Jainish Dabgar | Full-Stack Developer Portfolio",
    title: "Jainish Dabgar | Full-Stack Web Developer — MERN & Next.js",
    description:
      "Ahmedabad-based Full-Stack Developer · MERN · Python · Next.js · React Three Fiber · CTO @ Code Builders BCA. 9+ production projects. Open for hire.",
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 512,
        height: 512,
        alt: "Jainish Dabgar | Full-Stack Web Developer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Jainish Dabgar | Full-Stack Web Developer",
    description:
      "MERN · Next.js · Python specialist from Ahmedabad. CTO @ Code Builders BCA. Open to freelance & full-time roles.",
    images: [OG_IMAGE],
    creator: "@jainishdabgar",
    site: "@jainishdabgar",
  },

  // ── App link metadata ──
  appLinks: {
    web: {
      url: BASE_URL,
      should_fallback: true,
    },
  },

  // ── Extended meta for LinkedIn, profile cards, social indexing ──
  other: {
    // LinkedIn
    "linkedin:owner": "jainish-dabgar-87474a320",
    // Location micro-data (helps local search)
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad, Gujarat, India",
    "geo.position": "23.0225;72.5714",
    "ICBM": "23.0225, 72.5714",
    // OG extended profile fields
    "og:locality": "Ahmedabad",
    "og:region": "Gujarat",
    "og:country-name": "India",
    "og:email": "jainishdabgar2901@gmail.com",
    "og:phone_number": "+91-9773272749",
    "profile:first_name": "Jainish",
    "profile:last_name": "Dabgar",
    "profile:username": "Jainish-2901",
    // Referral / search intent
    "revisit-after": "7 days",
    "rating": "general",
    "language": "English",
    "coverage": "Worldwide",
    "distribution": "Global",
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
        {/* ── CDN / font preconnects for Core Web Vitals ── */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />

        {/* ── JSON-LD: Person schema — Google Knowledge Panel eligibility ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${BASE_URL}/#person`,
              name: "Jainish Dabgar",
              alternateName: ["Jainish", "Jainish D", "Jainish Dabgar Developer"],
              url: BASE_URL,
              image: {
                "@type": "ImageObject",
                url: OG_IMAGE,
                width: 512,
                height: 512,
              },
              sameAs: [
                "https://github.com/Jainish-2901",
                "https://www.linkedin.com/in/jainish-dabgar-87474a320/",
                "https://www.youtube.com/@jainishdabgar2637",
                "https://www.instagram.com/dabgar_jainish_2901/",
              ],
              jobTitle: "Full-Stack Web Developer",
              description:
                "Full-Stack Web Developer from Ahmedabad, India. Specializes in MERN Stack, Next.js, Python, and React Three Fiber. CTO and Co-Organizer of Code Builders BCA.",
              worksFor: {
                "@type": "Organization",
                name: "Code Builders BCA",
                url: "https://www.codebuilders.co.in",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Som-Lalit Institute of Computer Application",
                  url: "https://slica.edu.in",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "H. B. Kapadia New High School",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                postalCode: "380001",
              },
              email: "jainishdabgar2901@gmail.com",
              telephone: "+91-9773272749",
              nationality: "Indian",
              knowsAbout: [
                "React.js", "Next.js", "Node.js", "MongoDB", "Express.js",
                "Python", "FastAPI", "TypeScript", "JavaScript",
                "Three.js", "React Three Fiber", "Framer Motion",
                "MERN Stack", "Full-Stack Web Development",
                "REST API Design", "JWT Authentication",
                "CI/CD Pipelines", "Vercel Deployment",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "IIT Kharagpur NPTEL Programming in Java — Elite Silver",
                  credentialCategory: "Certificate",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "NPTEL — National Programme on Technology Enhanced Learning",
                  },
                },
              ],
              owns: [
                {
                  "@type": "WebSite",
                  name: "Jainish Dabgar Portfolio",
                  url: BASE_URL,
                },
              ],
            }),
          }}
        />

        {/* ── JSON-LD: WebSite schema — Sitelinks search box eligibility ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${BASE_URL}/#website`,
              name: "Jainish Dabgar Portfolio",
              alternateName: "Jainish Dabgar",
              url: BASE_URL,
              description:
                "Full-Stack Web Developer portfolio — MERN, Python, Next.js, React Three Fiber, Framer Motion. Built by Jainish Dabgar from Ahmedabad, India.",
              inLanguage: "en-IN",
              author: {
                "@id": `${BASE_URL}/#person`,
              },
              publisher: {
                "@id": `${BASE_URL}/#person`,
              },
              image: OG_IMAGE,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${BASE_URL}/archive?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ── JSON-LD: ProfilePage schema — newer Google People feature ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              dateCreated: "2024-01-01T00:00:00Z",
              dateModified: new Date().toISOString(),
              mainEntity: {
                "@id": `${BASE_URL}/#person`,
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}