# 🚀 Jainish Dabgar — 3D Portfolio

> Elite, cinematic-grade 3D portfolio built with Next.js, React Three Fiber, Framer Motion, and EmailJS — purpose-engineered for performance, aesthetics, and zero-compromise user experience.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-000000?style=flat-square&logo=threedotjs)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)

---

## ✨ Live Demo

**[jainishdabgar.vercel.app](https://jainishdabgar.vercel.app)**

---

## 📸 Highlights

- **3D Starfield Canvas** — 3000-point fixed GlowBackground rendered on a WebGL canvas via React Three Fiber
- **Cinematic Hero Section** — Animated typing effect, live project stats, and a perspective-warped console widget
- **Interactive Experience Cards** — Real-time 3D tilt physics + neon glow effects using spring-physics
- **Interactive 404 Terminal** — A fully functional diagnostics terminal with live commands (`matrix`, `status`, `home`, etc.)
- **Scroll Reveal Animations** — Framer Motion directional reveals on every section (up, down, left, right)
- **EmailJS Contact Form** — Fully functional server-free email pipeline with animated status feedback
- **Cloudinary CDN** — All project images and avatar served via Cloudinary for optimal loading speed

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.2.6 (App Router + Turbopack) |
| **UI Language** | TypeScript + React 19 |
| **3D Rendering** | React Three Fiber + @react-three/drei + Three.js |
| **Animations** | Framer Motion 12 |
| **Email** | EmailJS Browser SDK |
| **Styling** | Vanilla CSS + Global Design Tokens |
| **Typography** | Inter (Google Fonts) |
| **Images** | Cloudinary CDN + Next.js Image |
| **Deployment** | Vercel |

---

## 📁 Project Architecture

```
app/
├── layout.tsx              # Root layout — Inter font + full SEO metadata
├── globals.css             # Design system — tokens, animations, custom scrollbar
├── page.tsx                # Home page — assembles all sections
├── not-found.tsx           # Interactive diagnostics terminal 404 page
├── achievements/           # /achievements — full achievements archive
│   ├── page.tsx
│   └── AchievementsClient.tsx
└── archive/                # /archive — full projects archive
    ├── page.tsx
    └── ArchiveClient.tsx

components/
├── GlowBackground.tsx      # Fixed WebGL starfield canvas
├── Navbar.tsx              # Glassmorphic navigation + mobile menu
├── Hero.tsx                # 3D console widget + typing animation + stats
├── About.tsx               # Bio card + journey timeline
├── Achievement.tsx         # Achievements timeline with laser wire connectors
├── Education.tsx           # SSC, HSC, BCA academic records
├── Experience.tsx          # Code Builders & JMC Enterprises experience cards
├── Skills.tsx              # R3F node graph orbs + animated skill bars
├── Projects.tsx            # 3D cylinder card carousel (Cloudinary images)
├── Contact.tsx             # EmailJS form + direct contact + social links
├── Footer.tsx              # Social links, navigation map, credits
├── ScrollReveal.tsx        # Framer Motion directional scroll wrapper
├── ScrollToTop.tsx         # Floating scroll-to-top button
└── TiltGlowCard.tsx        # Spring-physics 3D tilt + neon glow card

lib/
└── data.ts                 # Centralized data — projects, achievements, skills

public/
└── assets/
    └── logo.png            # Brand logo (local)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jainish-2901/jainish-3d-portfolio.git

# Navigate to the project
cd jainish-3d-portfolio

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file at the root of the project:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

> Get your EmailJS credentials at [emailjs.com](https://www.emailjs.com/)

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📧 EmailJS Template Setup

Your EmailJS template should use the following variable mapping to match the form data sent from the contact form:

| Template Variable | Form Field `name` Attribute | Description |
|---|---|---|
| `{{name}}` | `name` (hidden input) | Sender's name |
| `{{from_name}}` | `from_name` | Sender's name (visible input) |
| `{{reply_to}}` | `reply_to` | Sender's email address |
| `{{subject}}` | `subject` | Message subject |
| `{{message}}` | `message` | Message body |

**Recommended Template:**
```
A message by {{name}} has been received. Kindly respond at your earliest convenience.

--
You received a new message from your portfolio site:

Name: {{from_name}}
Email: {{reply_to}}

Message:
---------------------------------------------
{{message}}
---------------------------------------------

Sent via Jainish-Portfolio Connection Pipeline.
```

---

## 🌐 Sections

| # | Section | Description |
|---|---|---|
| 01 | **About** | Bio, journey timeline, tech stack tags |
| 02 | **Skills** | R3F node orb graph + animated skill bars (MERN, Python, PHP, JS) |
| 03 | **Projects** | 3D rotating card carousel with Cloudinary thumbnails |
| 04 | **Achievements** | Timeline with NPTEL, Hackathon, CMAT certifications |
| 05 | **Education** | SSC (81.67%), HSC (77.71%), BCA at Som-Lalit (7.82 SGPA) |
| 06 | **Experience** | Code Builders BCA (CTO) + JMC Enterprises (Digital Architect) |
| 07 | **Contact** | EmailJS form + email, phone, location + GitHub/LinkedIn/YouTube/Instagram |

---

## 🔗 Connect

| Platform | Link |
|---|---|
| 🐙 GitHub | [github.com/Jainish-2901](https://github.com/Jainish-2901) |
| 💼 LinkedIn | [linkedin.com/in/jainish-dabgar-87474a320](https://www.linkedin.com/in/jainish-dabgar-87474a320/) |
| 📺 YouTube | [@jainishdabgar2637](https://www.youtube.com/@jainishdabgar2637) |
| 📸 Instagram | [@dabgar_jainish_2901](https://www.instagram.com/dabgar_jainish_2901/) |
| ✉️ Email | [jainishdabgar2901@gmail.com](mailto:jainishdabgar2901@gmail.com) |

---

## 📄 License

This project is open-source for reference and inspiration. Please give credit if you use significant portions of the design or code.

---

<div align="center">
  <p>Designed & Engineered by <strong>Jainish Dabgar</strong></p>
  <p>Powered by <code>Next.js + React Three Fiber + Framer Motion</code></p>
</div>
