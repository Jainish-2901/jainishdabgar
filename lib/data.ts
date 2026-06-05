// Central data store for portfolio content

export interface Project {
  id: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  img: string;
  demo: string | null;
  source: string;
}

export interface Achievement {
  id: string;
  category: string;
  title: string;
  issuer: string;
  date: string;
  scope: string;
  credentialUrl: string | null;
}

export const ARCHIVE_PROJECTS: Project[] = [
  {
    id: "code-builders",
    category: "MERN",
    name: "Code Builders - IT Event Platform",
    desc: "A high-scale IT community management ecosystem engineered with the MERN stack. Built for real-time workshop tracking, dynamic seat registrations, and seamless user interaction layouts without operational overhead.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289021/cb_f7wyag.webp",
    demo: "https://codebuilders.co.in",
    source: "https://github.com/Jainish-2901/codebuildersofficialwebsite",
  },
  {
    id: "gyanstack",
    category: "MERN",
    name: "GyanStack - Student Study Partner",
    desc: "A progressive academic companion network for university students featuring a context-aware study mentor. Integrates high-efficiency LLM inference arrays to instantly process dense modular syllabi with smart query feedback.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289026/gs_hzyfq0.png",
    demo: "https://gyanstack.vercel.app",
    source: "https://github.com/Jainish-2901/gyanstack",
  },
  {
    id: "mediasaver",
    category: "PYTHON",
    name: "MediaSaver - Social Media Engine",
    desc: "A robust backend asset extraction interface powered by Python core logic. Incorporates structured client request headers and automated script workers to safely capture and parse high-definition multimedia streams with 0 buffering delay.",
    tags: ["React.js", "Tailwind CSS", "Python", "FastAPI", "yt-dlp"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289028/ms_j3rqjk.png",
    demo: "https://mediasaverwebsite.vercel.app/",
    source: "https://github.com/Jainish-2901/MediaSaver",
  },
  {
    id: "lockr",
    category: "MERN",
    name: "Lockr - Secure Asset Vault",
    desc: "A lightweight, secure vault application optimized for personal asset encryption. Implements local data isolation patterns and low-latency decryption algorithms to preserve user data privacy securely.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Web Crypto API"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289022/lockr_mzaepj.png",
    demo: "https://lockr-safe.vercel.app/",
    source: "https://github.com/Jainish-2901/Lockr",
  },
  {
    id: "sourcing-studio",
    category: "React Web App",
    name: "Sourcing Studio - B2B Textile Hub",
    desc: "An end-to-end B2B industrial sourcing platform built with React.js. Features dynamic invoice modifiers, real-time inventory synchronization, and automated ledger bookkeeping with zero-delay metrics.",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780671136/sourcingstudio_vmhglf.png",
    demo: "https://sourcingstudio.vercel.app/",
    source: "https://github.com/Jainish-2901/sourcing-studio",
  },
  {
    id: "jmc-store",
    category: "MERN",
    name: "JMC Store - Digital Portal",
    desc: "A comprehensive business display platform and advertisement showcase built for local enterprise tracking. Engineered with interactive product layout filters and customized digital business card systems.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289025/jmc-web_duweyg.png",
    demo: null,
    source: "https://github.com/Jainish-2901/jmcstore",
  },
  {
    id: "password-manager-php",
    category: "PHP",
    name: "Core PHP Password Manager",
    desc: "A native server-side credential management engine built with strict backend security protocols. Features granular password hashing maps, relational user linking models, and structured SQL sanitization pipelines.",
    tags: ["PHP Core", "MySQL", "Bootstrap", "Cryptographic Hashing"],
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    demo: null,
    source: "https://github.com/Jainish-2901/password-manager-php",
  },
  {
    id: "tanishq-reality",
    category: "MERN",
    name: "Tanishq Reality - Real Estate App",
    desc: "A luxury full-stack real-estate portal emphasizing modern visual flow elements. Leverages responsive database routing to dynamically match clients with custom property vectors.",
    tags: ["React.js", "Vite", "Node.js", "MongoDB", "Glassmorphism"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289031/realestate_gzuwll.png",
    demo: null,
    source: "https://github.com/Jainish-2901/real-estate-mern",
  },
  {
    id: "gyanstack-thumbnails",
    category: "JavaScript",
    name: "GyanStack Thumbnail Generator",
    desc: "A programmatic image rendering script engineered to dynamically compile and generate high-fidelity YouTube thumbnail design structures using automated JavaScript configurations.",
    tags: ["JavaScript", "HTML5 Canvas", "Automation", "UI Graphic Tokens"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289024/gyanstack-thumbnail_mfnbqv.png",
    demo: null,
    source: "https://github.com/Jainish-2901/gyanstack-thumbnails",
  },
  {
    id: "cric-auction",
    category: "MERN",
    name: "CricAuction - Tournament Management System",
    desc: "A real-time player auction and tournament coordination engine engineered to manage player profiles, budget tracking loops, and team role metrics for cricket leagues without operational overhead.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "State Control"],
    img: "https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289022/cricauc_g1vouc.png",
    demo: null,
    source: "https://github.com/Jainish-2901/CricAuction",
  },
];

export const ARCHIVE_ACHIEVEMENTS: Achievement[] = [
  {
    id: "nptel-java-programming",
    category: "CERTIFICATIONS",
    title: "IIT Kharagpur NPTEL Programming In Java",
    issuer: "National Programme on Technology Enhanced Learning",
    date: "Oct 2025",
    scope: "86% // ELITE_SILVER",
    credentialUrl:
      "https://drive.google.com/file/d/11iwrFzlFVM6OJd90TTykjEZYWnv2anX4/view",
  },
  {
    id: "hackathon-craftathon",
    category: "HACKATHONS",
    title: "Craftathon 36-Hour National Hackathon Competitor",
    issuer: "Gandhinagar University // IEEE Computer Society",
    date: "Mar 2026",
    scope: "NATIONAL // OFFLINE_DEV",
    credentialUrl: null,
  },
  {
    id: "cmat-manthan-2025",
    category: "CERTIFICATIONS",
    title: "CMAT Manthan Career Development Certification",
    issuer: "IMS // Success Simplified",
    date: "2025",
    scope: "CAREER // POST_GRAD_STRAT",
    credentialUrl:
      "https://drive.google.com/file/d/1mCJw2dAhQ524OBDn7WsAZsnYUALStEOe/view",
  },
];

export const SKILLS = {
  MERN: {
    color: "#00d4ff",
    glow: "#00d4ff40",
    icon: "⚡",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Express.js", level: 83 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  Python: {
    color: "#a78bfa",
    glow: "#a78bfa40",
    icon: "🐍",
    items: [
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "yt-dlp", level: 72 },
      { name: "Automation", level: 78 },
    ],
  },
  PHP: {
    color: "#f59e0b",
    glow: "#f59e0b40",
    icon: "🐘",
    items: [
      { name: "PHP Core", level: 73 },
      { name: "MySQL", level: 76 },
      { name: "PostgreySQL", level: 83 },
      { name: "Bootstrap", level: 80 },
      { name: "SQL Security", level: 70 },
    ],
  },
  JavaScript: {
    color: "#34d399",
    glow: "#34d39940",
    icon: "✨",
    items: [
      { name: "JavaScript ES6+", level: 90 },
      { name: "TypeScript", level: 82 },
      { name: "HTML5 Canvas", level: 78 },
      { name: "Web APIs", level: 80 },
      { name: "Framer Motion", level: 75 },
    ],
  },
};
