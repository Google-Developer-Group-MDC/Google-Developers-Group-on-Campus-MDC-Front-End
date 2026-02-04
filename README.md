# GDG on Campus — Miami Dade College

A modern, responsive website for the **Google Developer Group (GDG) on Campus** at Miami Dade College. The site showcases the community’s mission, events, and opportunities while inviting students to join and partners to collaborate.

**Live site:** [gdg-on-campus-mdc.netlify.app](https://gdg-on-campus-mdc.netlify.app/)

**Created by [Andres Zubizarreta](https://github.com/andreszubi)

> **Under development** — More features and pages are on the way, including a backend.

---

## About the Project

This is the official landing and information site for the GDG on Campus chapter at Miami Dade College. It presents the group as a student-led tech community that offers workshops, career support, and real-world projects. The design uses Google’s brand colors in a dark theme with subtle neon-style visuals to keep the focus on content while feeling on-brand and contemporary.

---

## Features

- **Landing experience** — Hero section with clear CTAs (Become a Member, Partner With Us) and animated Google-colored accents
- **By the Numbers** — Stats section (members, events, workshops, industry partners)
- **What We Do** — Four pillars: Technical Workshops, Career Development, Community, Real-World Projects
- **Testimonials** — Member quotes with roles and majors
- **Dedicated pages** — `/become-a-member` and `/partner-with-us` for sign-up and partnership info
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

The project uses the Next.js App Router, client components where needed (e.g. scroll/intersection behavior), and Tailwind for utility-first CSS. React Compiler is enabled for optimized React output.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/google-developers-group-on-campus-mdc-front-end.git
cd google-developers-group-on-campus-mdc-front-end

# Install dependencies
npm install
```

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
│   └── not-found.jsx       # 404 page
├── components/
│   ├── Home.jsx            # Main landing content (hero, stats, pillars, testimonials)
│   ├── NeonBackground.jsx  # Custom SVG background
│   ├── BecomeAMember.jsx   # Membership page content
│   └── PartnerWithUs.jsx   # Partner page content
public/                     # Static assets (logos, images)
```

---

## License

This project is for the GDG on Campus — Miami Dade College community. Use and modification should align with the group’s guidelines and Google’s brand policies where applicable.

---

*Built for the Google Developer Group on Campus at Miami Dade College.*
