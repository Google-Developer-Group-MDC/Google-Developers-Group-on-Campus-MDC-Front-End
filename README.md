# GDG on Campus — Miami Dade College

A modern, responsive website for the **Google Developer Group (GDG) on Campus** at Miami Dade College. The site showcases the community’s mission, events, and opportunities while inviting students to join and partners to collaborate.

**Live site:** [gdg-on-campus-mdc.netlify.app](https://gdg-on-campus-mdc.netlify.app/)

**Created by [Andres Zubizarreta](https://github.com/andreszubi)

**Back-end API:** [Google-Developers-Group-on-Campus-MDC-Back-End](https://github.com/Google-Developer-Group-MDC/Google-Developers-Group-on-Campus-MDC-Back-End) (Express + MongoDB)

---

## About the Project

This is the official landing and information site for the GDG on Campus chapter at Miami Dade College. It presents the group as a student-led tech community that offers workshops, career support, and real-world projects. The design uses Google’s brand colors in a dark theme with subtle neon-style visuals to keep the focus on content while feeling on-brand and contemporary.

---

## Features

- **Landing experience** — Hero section with clear CTAs (Become a Member, Partner With Us) and animated Google-colored accents
- **By the Numbers** — Stats section (members, events, workshops, industry partners)
- **What We Do** — Four pillars: Technical Workshops, Career Development, Community, Real-World Projects
- **Testimonials** — Member quotes with roles and majors
- **Membership & partner forms** — `/become-a-member` and `/partner-with-us` submit to the back-end API with validation, error messages and spam protection
- **Events** — `/events` page plus a Home section showing upcoming/past events, synced automatically from the chapter's [gdg.community.dev](https://gdg.community.dev/gdg-on-campus-miami-dade-college-miami-united-states/) page
- **Admin dashboard** — `/admin` (officers only): review members and partner inquiries, update statuses, add notes, export CSV, and manage events
- **Custom visuals** — SVG-based “neon” background inspired by Google Developer branding (globe, cloud, pin, etc.)
- **Responsive layout** — Mobile-first with touch-friendly cards and readable typography
- **SEO & sharing** — Metadata, Open Graph, and Twitter cards for better previews when shared

---

## Tech Stack

| Category      | Technology |
|---------------|------------|
| Framework     | [Next.js 16](https://nextjs.org/) (App Router) |
| UI            | [React 19](https://react.dev/) |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com/) |
| Compiler      | [React Compiler](https://react.dev/learn/react-compiler) (Babel plugin) |
| Linting       | ESLint with `eslint-config-next` |
| Deployment    | [Netlify](https://www.netlify.com/) |
| Back-end      | [Express + MongoDB API](https://github.com/Google-Developer-Group-MDC/Google-Developers-Group-on-Campus-MDC-Back-End) (separate repo) |

The project uses the Next.js App Router, client components where needed (e.g. scroll/intersection behavior), and Tailwind for utility-first CSS. React Compiler is enabled for optimized React output.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/Google-Developer-Group-MDC/Google-Developers-Group-on-Campus-MDC-Front-End.git
cd Google-Developers-Group-on-Campus-MDC-Front-End

# Install dependencies
npm install
```

### Connect to the back-end

The forms, events and admin dashboard talk to the [back-end API](https://github.com/Google-Developer-Group-MDC/Google-Developers-Group-on-Campus-MDC-Back-End). Copy the env template and point it at the API:

```bash
cp .env.example .env.local
```

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://127.0.0.1:4000` | Base URL of the back-end API (no trailing slash) |

For local development, run the back-end (`npm install && npm run dev` in the back-end repo). It starts on port 4000 with an in-memory database, syncs events from gdg.community.dev, and prints a temporary admin login for `/admin`.

On Netlify, set `NEXT_PUBLIC_API_URL` to the deployed API URL under **Site settings → Environment variables**, then redeploy.

### Development

```bash
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser.

### Build & Production

```bash
# Build for production
npm run build

# Run production server locally
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.jsx          # Root layout, metadata (SEO, OG, Twitter)
│   ├── page.jsx            # Home page
│   ├── index.css           # Global styles (Tailwind)
│   ├── become-a-member/    # Join / membership page
│   ├── partner-with-us/    # Partnership page
│   ├── events/             # Events page
│   ├── admin/              # Admin dashboard (noindex)
│   └── not-found.jsx       # 404 page
├── components/
│   ├── Home.jsx            # Main landing content (hero, stats, pillars, events, testimonials)
│   ├── NeonBackground.jsx  # Custom SVG background
│   ├── BecomeAMember.jsx   # Membership form → POST /api/members
│   ├── PartnerWithUs.jsx   # Partner form → POST /api/partners
│   ├── Events.jsx          # Events page, event cards and Home teaser
│   ├── Admin.jsx           # Admin login + dashboard
│   └── FormHelpers.jsx     # Shared form error / honeypot components
└── lib/
    └── api.js              # fetch wrapper for the back-end API
public/                     # Static assets (logos, images)
```

---

## License

This project is for the GDG on Campus — Miami Dade College community. Use and modification should align with the group’s guidelines and Google’s brand policies where applicable.

---

*Built for the Google Developer Group on Campus at Miami Dade College.*
