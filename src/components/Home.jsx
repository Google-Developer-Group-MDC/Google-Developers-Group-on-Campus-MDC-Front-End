import Link from "next/link";

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#0F9D58"];

const STATS = [
  { value: "200+", label: "Members" },
  { value: "30+", label: "Events Hosted" },
  { value: "15+", label: "Workshops" },
  { value: "10+", label: "Industry Partners" },
];

const PILLARS = [
  {
    title: "Technical Workshops",
    description:
      "Hands-on sessions covering web development, mobile apps, cloud computing, AI/ML, and more.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#4285F4]">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
  },
  {
    title: "Career Development",
    description:
      "Resume reviews, mock interviews, and networking events to help you land roles in tech.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#EA4335]">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "Connect with students, Google Developer Experts, and professionals who share your passion.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#0F9D58]">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Real-World Projects",
    description:
      "Collaborate on projects that solve real problems and build your portfolio.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#F4B400]">
        <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "GDG on Campus gave me the hands-on experience I needed to feel confident applying for internships. The workshops are genuinely useful.",
    name: "Maria L.",
    role: "Computer Science, Junior",
  },
  {
    quote:
      "I came in not knowing how to code and left with a portfolio and a community that supports me. This club changed my trajectory.",
    name: "David R.",
    role: "Information Technology, Sophomore",
  },
  {
    quote:
      "The networking events connected me directly with engineers at Google and other companies. I landed my first tech internship through GDG.",
    name: "Sofia P.",
    role: "Software Engineering, Senior",
  },
];

function SectionDivider({ color, label, light }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <span
        className="inline-block w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span
        className={`text-xs font-medium uppercase tracking-wider whitespace-nowrap ${light ? "text-[#5f6368]" : "text-white/50"}`}
      >
        {label}
      </span>
      <span
        className="flex-1 h-px"
        style={{ backgroundColor: light ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)" }}
      />
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-[#202124]">
      {/* ── Navbar ── */}
      <nav
        className="sticky top-0 z-50 bg-[#202124]/80 backdrop-blur-md"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/gdg-logo-white.png"
              alt="Google Developer Groups"
              className="h-5 sm:h-7"
            />
          </Link>

          <Link href="/become-a-member" className="btn btn-blue shrink-0">
            Join Us
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#202124" }}>
        {/* Decorative line-art shapes */}
        {/* Base dim shapes — Google colors: Blue, Red, Yellow, Green */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 520"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globe — Blue circle, Red equator & meridian */}
          <circle cx="80" cy="200" r="120" stroke="#5a8fd6" strokeWidth="1.5" opacity="0.25" />
          <ellipse cx="80" cy="200" rx="120" ry="50" stroke="#d47068" strokeWidth="1.5" opacity="0.2" />
          <line x1="80" y1="80" x2="80" y2="320" stroke="#d47068" strokeWidth="1.5" opacity="0.18" />
          {/* Arrow — Red */}
          <line x1="20" y1="440" x2="280" y2="440" stroke="#d47068" strokeWidth="1.5" opacity="0.25" />
          <polyline points="260,425 290,440 260,455" stroke="#d47068" strokeWidth="1.5" fill="none" opacity="0.25" />
          {/* Vertical line — Yellow */}
          <line x1="300" y1="0" x2="300" y2="520" stroke="#c9a020" strokeWidth="1" opacity="0.15" />
          {/* Cloud — Blue outline */}
          <path d="M316 298 C297 298 284 267 307 244 C303 207 336 181 375 194 C388 159 433 159 453 194 C476 176 502 205 492 244 C511 254 508 296 485 298 Z" stroke="#5a8fd6" strokeWidth="1.5" fill="none" opacity="0.22" />
          {/* AI neural net nodes — Yellow */}
          <circle cx="342" cy="231" r="5" stroke="#c9a020" strokeWidth="1.2" fill="none" opacity="0.2" />
          <circle cx="342" cy="276" r="5" stroke="#c9a020" strokeWidth="1.2" fill="none" opacity="0.2" />
          <circle cx="401" cy="253" r="6" stroke="#c9a020" strokeWidth="1.2" fill="none" opacity="0.2" />
          <circle cx="459" cy="231" r="5" stroke="#c9a020" strokeWidth="1.2" fill="none" opacity="0.2" />
          <circle cx="459" cy="276" r="5" stroke="#c9a020" strokeWidth="1.2" fill="none" opacity="0.2" />
          {/* AI neural net connections — Yellow */}
          <line x1="342" y1="231" x2="401" y2="253" stroke="#c9a020" strokeWidth="1" opacity="0.18" />
          <line x1="342" y1="276" x2="401" y2="253" stroke="#c9a020" strokeWidth="1" opacity="0.18" />
          <line x1="401" y1="253" x2="459" y2="231" stroke="#c9a020" strokeWidth="1" opacity="0.18" />
          <line x1="401" y1="253" x2="459" y2="276" stroke="#c9a020" strokeWidth="1" opacity="0.18" />
          {/* Pin — Green */}
          <circle cx="1360" cy="220" r="70" stroke="#4fa868" strokeWidth="1.5" opacity="0.25" />
          <circle cx="1360" cy="220" r="25" stroke="#4fa868" strokeWidth="1.5" opacity="0.25" />
          {/* Rect — Yellow */}
          <rect x="1250" y="20" rx="16" width="170" height="120" stroke="#c9a020" strokeWidth="1.5" opacity="0.18" />
          {/* Pills — Red */}
          <rect x="1300" y="30" rx="12" width="50" height="24" stroke="#d47068" strokeWidth="1.5" opacity="0.2" transform="rotate(-40 1325 42)" />
          {/* Pill B — Blue */}
          <rect x="1340" y="60" rx="12" width="50" height="24" stroke="#5a8fd6" strokeWidth="1.5" opacity="0.2" transform="rotate(-40 1365 72)" />
          {/* Horizontal line — Green */}
          <line x1="1140" y1="340" x2="1440" y2="340" stroke="#4fa868" strokeWidth="1" opacity="0.15" />
          {/* Corner curve — Yellow */}
          <path d="M1440 400 Q1350 400 1350 490 L1350 520" stroke="#c9a020" strokeWidth="1.5" fill="none" opacity="0.2" />
          {/* GDG Dev logo — 4 capsules forming < > chevrons */}
          {/* Blue (bottom-left arm of <) */}
          <rect x="1010" y="276" rx="14" width="80" height="28" stroke="#5a8fd6" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(35 1050 290)" />
          {/* Red (top-left arm of <) */}
          <rect x="1010" y="216" rx="14" width="80" height="28" stroke="#d47068" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(-35 1050 230)" />
          {/* Green (top-right arm of >) */}
          <rect x="1110" y="216" rx="14" width="80" height="28" stroke="#4fa868" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(35 1150 230)" />
          {/* Yellow (bottom-right arm of >) */}
          <rect x="1110" y="276" rx="14" width="80" height="28" stroke="#c9a020" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(-35 1150 290)" />

        </svg>

        {/* Animated electricity layers — 3 offset streams per shape, Google colors */}
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1440 520"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {i === 0 && (
              <defs>
                <filter id="neon">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            )}

            {i === 0 && (
              <style>{`
                .nf { filter: url(#neon); }

                /* Globe r=120, C≈754 */
                .fg0 { stroke-dasharray: 200 554; animation: fg 6s linear infinite; }
                .fg1 { stroke-dasharray: 200 554; animation: fg 6s -2s linear infinite; }
                .fg2 { stroke-dasharray: 200 554; animation: fg 6s -4s linear infinite; }
                @keyframes fg { to { stroke-dashoffset: -754; } }

                /* Equator ellipse C≈596 */
                .fe0 { stroke-dasharray: 180 416; animation: fe 5s linear infinite; }
                .fe1 { stroke-dasharray: 180 416; animation: fe 5s -1.67s linear infinite; }
                .fe2 { stroke-dasharray: 180 416; animation: fe 5s -3.33s linear infinite; }
                @keyframes fe { to { stroke-dashoffset: -596; } }

                /* Meridian 240 */
                .fm0 { stroke-dasharray: 100 140; animation: fm 3s linear infinite; }
                .fm1 { stroke-dasharray: 100 140; animation: fm 3s -1s linear infinite; }
                .fm2 { stroke-dasharray: 100 140; animation: fm 3s -2s linear infinite; }
                @keyframes fm { to { stroke-dashoffset: -240; } }

                /* Arrow 260 */
                .fa0 { stroke-dasharray: 120 140; animation: fa 3s linear infinite; }
                .fa1 { stroke-dasharray: 120 140; animation: fa 3s -1s linear infinite; }
                .fa2 { stroke-dasharray: 120 140; animation: fa 3s -2s linear infinite; }
                @keyframes fa { to { stroke-dashoffset: -260; } }

                /* Vertical 520 */
                .fv0 { stroke-dasharray: 160 360; animation: fv 4s linear infinite; }
                .fv1 { stroke-dasharray: 160 360; animation: fv 4s -1.33s linear infinite; }
                .fv2 { stroke-dasharray: 160 360; animation: fv 4s -2.67s linear infinite; }
                @keyframes fv { to { stroke-dashoffset: -520; } }

                /* Pin outer r=70 C≈440 */
                .fpo0 { stroke-dasharray: 140 300; animation: fpo 5s linear infinite; }
                .fpo1 { stroke-dasharray: 140 300; animation: fpo 5s -1.67s linear infinite; }
                .fpo2 { stroke-dasharray: 140 300; animation: fpo 5s -3.33s linear infinite; }
                @keyframes fpo { to { stroke-dashoffset: -440; } }

                /* Pin inner r=25 C≈157 */
                .fpi0 { stroke-dasharray: 60 97; animation: fpi 2.5s linear infinite; }
                .fpi1 { stroke-dasharray: 60 97; animation: fpi 2.5s -0.83s linear infinite; }
                .fpi2 { stroke-dasharray: 60 97; animation: fpi 2.5s -1.67s linear infinite; }
                @keyframes fpi { to { stroke-dashoffset: -157; } }

                /* Rect 580 */
                .fr0 { stroke-dasharray: 180 400; animation: fr 5s linear infinite; }
                .fr1 { stroke-dasharray: 180 400; animation: fr 5s -1.67s linear infinite; }
                .fr2 { stroke-dasharray: 180 400; animation: fr 5s -3.33s linear infinite; }
                @keyframes fr { to { stroke-dashoffset: -580; } }

                /* Pill A 148 */
                .fpa0 { stroke-dasharray: 60 88; animation: fpa 2s linear infinite; }
                .fpa1 { stroke-dasharray: 60 88; animation: fpa 2s -0.67s linear infinite; }
                .fpa2 { stroke-dasharray: 60 88; animation: fpa 2s -1.33s linear infinite; }
                @keyframes fpa { to { stroke-dashoffset: -148; } }

                /* Pill B 148 */
                .fpb0 { stroke-dasharray: 60 88; animation: fpb 2.5s linear infinite; }
                .fpb1 { stroke-dasharray: 60 88; animation: fpb 2.5s -0.83s linear infinite; }
                .fpb2 { stroke-dasharray: 60 88; animation: fpb 2.5s -1.67s linear infinite; }
                @keyframes fpb { to { stroke-dashoffset: -148; } }

                /* Horiz 300 */
                .fh0 { stroke-dasharray: 120 180; animation: fh 3s linear infinite; }
                .fh1 { stroke-dasharray: 120 180; animation: fh 3s -1s linear infinite; }
                .fh2 { stroke-dasharray: 120 180; animation: fh 3s -2s linear infinite; }
                @keyframes fh { to { stroke-dashoffset: -300; } }

                /* Curve 220 */
                .fc0 { stroke-dasharray: 90 130; animation: fc 3s linear infinite; }
                .fc1 { stroke-dasharray: 90 130; animation: fc 3s -1s linear infinite; }
                .fc2 { stroke-dasharray: 90 130; animation: fc 3s -2s linear infinite; }
                @keyframes fc { to { stroke-dashoffset: -220; } }

                /* Cloud outline ~585 */
                .fcl0 { stroke-dasharray: 180 405; animation: fcl 6s linear infinite; }
                .fcl1 { stroke-dasharray: 180 405; animation: fcl 6s -2s linear infinite; }
                .fcl2 { stroke-dasharray: 180 405; animation: fcl 6s -4s linear infinite; }
                @keyframes fcl { to { stroke-dashoffset: -585; } }

                /* AI neural net connections ~48 */
                .fn0 { stroke-dasharray: 24 24; animation: fn 1.8s linear infinite; }
                .fn1 { stroke-dasharray: 24 24; animation: fn 1.8s -0.6s linear infinite; }
                .fn2 { stroke-dasharray: 24 24; animation: fn 1.8s -1.2s linear infinite; }
                @keyframes fn { to { stroke-dashoffset: -48; } }

                /* AI node circles r=4 C≈25, r=5 C≈31 */
                .fnn0 { stroke-dasharray: 10 15; animation: fnn 1.5s linear infinite; }
                .fnn1 { stroke-dasharray: 10 15; animation: fnn 1.5s -0.5s linear infinite; }
                .fnn2 { stroke-dasharray: 10 15; animation: fnn 1.5s -1s linear infinite; }
                @keyframes fnn { to { stroke-dashoffset: -25; } }

                .fnm0 { stroke-dasharray: 12 19; animation: fnm 1.8s linear infinite; }
                .fnm1 { stroke-dasharray: 12 19; animation: fnm 1.8s -0.6s linear infinite; }
                .fnm2 { stroke-dasharray: 12 19; animation: fnm 1.8s -1.2s linear infinite; }
                @keyframes fnm { to { stroke-dashoffset: -31; } }

                /* GDG logo capsules ~192 */
                .flc0 { stroke-dasharray: 70 122; animation: flc 3s linear infinite; }
                .flc1 { stroke-dasharray: 70 122; animation: flc 3s -1s linear infinite; }
                .flc2 { stroke-dasharray: 70 122; animation: flc 3s -2s linear infinite; }
                @keyframes flc { to { stroke-dashoffset: -192; } }
              `}</style>
            )}

            {/* Globe — Blue circle, Red equator & meridian */}
            <circle className={`nf fg${i}`} cx="80" cy="200" r="120" stroke="#7ba8ef" strokeWidth="2" />
            <ellipse className={`nf fe${i}`} cx="80" cy="200" rx="120" ry="50" stroke="#ef8a82" strokeWidth="2" />
            <line className={`nf fm${i}`} x1="80" y1="80" x2="80" y2="320" stroke="#ef8a82" strokeWidth="2" />

            {/* Arrow — Red */}
            <line className={`nf fa${i}`} x1="20" y1="440" x2="280" y2="440" stroke="#ef8a82" strokeWidth="2" />

            {/* Vertical line — Yellow */}
            <line className={`nf fv${i}`} x1="300" y1="0" x2="300" y2="520" stroke="#efc84a" strokeWidth="1.5" />

            {/* Cloud outline — Blue */}
            <path className={`nf fcl${i}`} d="M316 298 C297 298 284 267 307 244 C303 207 336 181 375 194 C388 159 433 159 453 194 C476 176 502 205 492 244 C511 254 508 296 485 298 Z" stroke="#7ba8ef" strokeWidth="2" fill="none" />
            {/* AI neural net nodes — Yellow */}
            <circle className={`nf fnn${i}`} cx="342" cy="231" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
            <circle className={`nf fnn${i}`} cx="342" cy="276" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
            <circle className={`nf fnm${i}`} cx="401" cy="253" r="6" stroke="#efc84a" strokeWidth="1.5" fill="none" />
            <circle className={`nf fnn${i}`} cx="459" cy="231" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
            <circle className={`nf fnn${i}`} cx="459" cy="276" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
            {/* AI neural net connections — Yellow */}
            <line className={`nf fn${i}`} x1="342" y1="231" x2="401" y2="253" stroke="#efc84a" strokeWidth="1.5" />
            <line className={`nf fn${i}`} x1="342" y1="276" x2="401" y2="253" stroke="#efc84a" strokeWidth="1.5" />
            <line className={`nf fn${i}`} x1="401" y1="253" x2="459" y2="231" stroke="#efc84a" strokeWidth="1.5" />
            <line className={`nf fn${i}`} x1="401" y1="253" x2="459" y2="276" stroke="#efc84a" strokeWidth="1.5" />

            {/* Pin — Green */}
            <circle className={`nf fpo${i}`} cx="1360" cy="220" r="70" stroke="#6fc488" strokeWidth="2" />
            <circle className={`nf fpi${i}`} cx="1360" cy="220" r="25" stroke="#6fc488" strokeWidth="2" />

            {/* Rect — Yellow */}
            <rect className={`nf fr${i}`} x="1250" y="20" rx="16" width="170" height="120" stroke="#efc84a" strokeWidth="2" />

            {/* Pill A — Red */}
            <rect className={`nf fpa${i}`} x="1300" y="30" rx="12" width="50" height="24" stroke="#ef8a82" strokeWidth="2" transform="rotate(-40 1325 42)" />
            {/* Pill B — Blue */}
            <rect className={`nf fpb${i}`} x="1340" y="60" rx="12" width="50" height="24" stroke="#7ba8ef" strokeWidth="2" transform="rotate(-40 1365 72)" />

            {/* Horizontal line — Green */}
            <line className={`nf fh${i}`} x1="1140" y1="340" x2="1440" y2="340" stroke="#6fc488" strokeWidth="1.5" />

            {/* Corner curve — Yellow */}
            <path className={`nf fc${i}`} d="M1440 400 Q1350 400 1350 490 L1350 520" stroke="#efc84a" strokeWidth="2" fill="none" />

            {/* GDG Dev logo — 4 neon capsules */}
            {/* Blue (bottom-left arm of <) */}
            <rect className={`nf flc${i}`} x="1010" y="276" rx="14" width="80" height="28" stroke="#7ba8ef" strokeWidth="2" fill="none" transform="rotate(35 1050 290)" />
            {/* Red (top-left arm of <) */}
            <rect className={`nf flc${i}`} x="1010" y="216" rx="14" width="80" height="28" stroke="#ef8a82" strokeWidth="2" fill="none" transform="rotate(-35 1050 230)" />
            {/* Green (top-right arm of >) */}
            <rect className={`nf flc${i}`} x="1110" y="216" rx="14" width="80" height="28" stroke="#6fc488" strokeWidth="2" fill="none" transform="rotate(35 1150 230)" />
            {/* Yellow (bottom-right arm of >) */}
            <rect className={`nf flc${i}`} x="1110" y="276" rx="14" width="80" height="28" stroke="#efc84a" strokeWidth="2" fill="none" transform="rotate(-35 1150 290)" />

          </svg>
        ))}

        {/* Arrow tip (static glow) — Red */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <polyline points="260,425 290,440 260,455" stroke="#ef8a82" strokeWidth="2" fill="none" opacity="0.6" filter="url(#neon)" />
        </svg>

        {/* Neon effects for decorative shapes */}
        <style>{`
          @keyframes neonPulse {
            0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 6px var(--glow)); }
            50% { opacity: 1; filter: drop-shadow(0 0 16px var(--glow)); }
          }
          /* Diamond perimeter ≈136 */
          .dec-diamond { stroke-dasharray: 50 86; animation: decDiamond 3s linear infinite; }
          @keyframes decDiamond { to { stroke-dashoffset: -136; } }
          /* Circle r=20 C≈126 */
          .dec-circle { stroke-dasharray: 40 86; animation: decCircle 3.5s linear infinite; }
          @keyframes decCircle { to { stroke-dashoffset: -126; } }
          /* Small circle r=4 C≈25 */
          .dec-dot { stroke-dasharray: 10 15; animation: decDot 1.5s linear infinite; }
          @keyframes decDot { to { stroke-dashoffset: -25; } }
          /* Arc ≈60 */
          .dec-arc { stroke-dasharray: 25 35; animation: decArc 2s linear infinite; }
          @keyframes decArc { to { stroke-dashoffset: -60; } }
          /* Capsule ≈96 */
          .dec-capsule { stroke-dasharray: 35 61; animation: decCapsule 2.5s linear infinite; }
          @keyframes decCapsule { to { stroke-dashoffset: -96; } }
          /* GDG logo capsule ≈82 */
          .dec-gdg { stroke-dasharray: 30 52; animation: decGdg 2s linear infinite; }
          @keyframes decGdg { to { stroke-dashoffset: -82; } }
        `}</style>

        {/* ── Positioned decorative neon shapes (around text, not behind) ── */}
        {/* Top-left: Green diamond + red dot */}
        <div className="absolute top-4 left-4 w-12 h-12 sm:w-20 sm:h-20 pointer-events-none z-[6]" style={{ "--glow": "#6fc488", animation: "neonPulse 3s ease-in-out infinite 0s" }}>
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <filter id="glow-tl"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <rect className="dec-diamond" x="20" y="20" width="24" height="24" rx="3" stroke="#6fc488" strokeWidth="2.5" transform="rotate(45 32 32)" filter="url(#glow-tl)" />
            <circle className="dec-dot" cx="48" cy="16" r="4" stroke="#ef8a82" strokeWidth="2" filter="url(#glow-tl)" />
          </svg>
        </div>

        {/* Top-right: Blue circle + yellow dot */}
        <div className="absolute top-4 right-4 w-12 h-12 sm:w-20 sm:h-20 pointer-events-none z-[6]" style={{ "--glow": "#7ba8ef", animation: "neonPulse 3s ease-in-out infinite 0.5s" }}>
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <filter id="glow-tr"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <circle className="dec-circle" cx="32" cy="32" r="20" stroke="#7ba8ef" strokeWidth="2.5" filter="url(#glow-tr)" />
            <circle className="dec-dot" cx="14" cy="48" r="4" stroke="#efc84a" strokeWidth="2" filter="url(#glow-tr)" />
          </svg>
        </div>

        {/* Bottom-left: Yellow arc + small blue dot */}
        <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-20 sm:h-20 pointer-events-none z-[6]" style={{ "--glow": "#efc84a", animation: "neonPulse 3s ease-in-out infinite 1s" }}>
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <filter id="glow-bl"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <path className="dec-arc" d="M12 12 Q40 32 12 52" stroke="#efc84a" strokeWidth="3" strokeLinecap="round" filter="url(#glow-bl)" />
            <circle className="dec-dot" cx="44" cy="20" r="4" stroke="#7ba8ef" strokeWidth="2" filter="url(#glow-bl)" />
          </svg>
        </div>

        {/* Bottom-right: Green capsule + small red dot */}
        <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-20 sm:h-20 pointer-events-none z-[6]" style={{ "--glow": "#6fc488", animation: "neonPulse 3s ease-in-out infinite 1.5s" }}>
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <filter id="glow-br"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <rect className="dec-capsule" x="14" y="24" rx="8" width="32" height="16" stroke="#6fc488" strokeWidth="2.5" filter="url(#glow-br)" />
            <circle className="dec-dot" cx="52" cy="44" r="4" stroke="#ef8a82" strokeWidth="2" filter="url(#glow-br)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-28 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4 text-[#8ab4f8]">
            Google Developer Groups &middot; On Campus Miami Dade College
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium leading-tight max-w-2xl text-white" style={{ textShadow: "0 0 20px rgba(32,33,36,0.9)" }}>
            Welcome to the Google Developer Group on Campus
            <br />
            <span className="text-[#8ab4f8]">Miami Dade College</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg max-w-xl leading-relaxed text-white/70" style={{ textShadow: "0 0 20px rgba(32,33,36,0.9)" }}>
            A community of students passionate about technology. We host
            workshops, build projects, and connect you with industry
            professionals to help launch your career in tech.
          </p>

          <div className="mt-6 sm:mt-8 relative w-full flex justify-center">
            {/* Left decoration: rotated diamond + small circles — absolutely positioned */}
            <div className="absolute right-[calc(50%+100px)] sm:right-[calc(50%+140px)] top-1/2 -translate-y-1/2 pointer-events-none" style={{ "--glow": "#efc84a", animation: "neonPulse 3s ease-in-out infinite 0.5s" }}>
              <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow-lb"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>
                <rect className="dec-diamond" x="16" y="16" width="20" height="20" rx="3" stroke="#efc84a" strokeWidth="2.5" transform="rotate(45 26 26)" filter="url(#glow-lb)" />
                <circle className="dec-dot" cx="44" cy="12" r="4" stroke="#6fc488" strokeWidth="2" filter="url(#glow-lb)" />
                <circle className="dec-dot" cx="10" cy="46" r="3" stroke="#ef8a82" strokeWidth="2" filter="url(#glow-lb)" />
              </svg>
            </div>

            {/* Centered buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/become-a-member" className="btn btn-blue">
                Become a Member
              </Link>
              <Link href="/partner-with-us" className="btn btn-green">
                Partner With Us
              </Link>
            </div>

            {/* Right decoration: < > GDG chevron logo — absolutely positioned, solid strokes */}
            <div className="absolute left-[calc(50%+100px)] sm:left-[calc(50%+140px)] top-1/2 -translate-y-1/2 pointer-events-none" style={{ "--glow": "#7ba8ef", animation: "neonPulse 3s ease-in-out infinite 1s" }}>
              <svg className="w-20 h-20 sm:w-28 sm:h-28" viewBox="0 0 96 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow-rb"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>
                {/* < */}
                <rect x="2" y="8" rx="7" width="34" height="13" stroke="#7ba8ef" strokeWidth="2.5" transform="rotate(-25 19 14)" filter="url(#glow-rb)" />
                <rect x="2" y="36" rx="7" width="34" height="13" stroke="#ef8a82" strokeWidth="2.5" transform="rotate(25 19 43)" filter="url(#glow-rb)" />
                {/* > */}
                <rect x="60" y="8" rx="7" width="34" height="13" stroke="#6fc488" strokeWidth="2.5" transform="rotate(25 77 14)" filter="url(#glow-rb)" />
                <rect x="60" y="36" rx="7" width="34" height="13" stroke="#efc84a" strokeWidth="2.5" transform="rotate(-25 77 43)" filter="url(#glow-rb)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* dark → light rainbow fade */}
      <div className="h-1 sm:h-1.5" style={{ background: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #0F9D58)" }} />
      <div className="h-12 sm:h-20" style={{ background: "linear-gradient(to bottom, #202124, #f8f9fa)" }} />

      {/* ── Stats (light) ── */}
      <section
        className="py-12 sm:py-20"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionDivider color="#4285F4" label="By The Numbers" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8 sm:mt-10">
            {STATS.map((stat, idx) => {
              const color = GOOGLE_COLORS[idx % 4];
              return (
                <div
                  key={stat.label}
                  className="bg-white p-4 sm:p-6 text-center relative overflow-hidden"
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 16,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06), -10px 0 40px rgba(66,133,244,0.45), -4px 6px 35px rgba(234,67,53,0.35), 4px 6px 35px rgba(251,188,5,0.35), 10px 0 40px rgba(15,157,88,0.45)",
                  }}
                >
                  {/* Google 4-color gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{
                      background: "linear-gradient(90deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #0F9D58 75%)",
                    }}
                  />
                  {/* Icon */}
                  <div
                    className="mx-auto mb-2 sm:mb-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    {idx === 0 && (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" style={{ fill: color }}>
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" style={{ fill: color }}>
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" style={{ fill: color }}>
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" style={{ fill: color }}>
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                      </svg>
                    )}
                  </div>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ color }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#5f6368]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* light → dark rainbow fade */}
      <div className="h-12 sm:h-20" style={{ background: "linear-gradient(to bottom, #f8f9fa, #202124)" }} />
      <div className="h-1 sm:h-1.5" style={{ background: "linear-gradient(90deg, #0F9D58, #FBBC05, #EA4335, #4285F4)" }} />

      {/* ── What We Do (dark) ── */}
      <section
        className="py-12 sm:py-20"
        style={{ backgroundColor: "#202124" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionDivider color="#FBBC05" label="What We Do" />
          <h2 className="text-xl sm:text-2xl font-medium text-center mb-3 mt-8 sm:mt-10 text-white">What We Do</h2>
          <p className="text-center text-sm sm:text-base max-w-lg mx-auto mb-8 sm:mb-12 text-white/50">
            Empowering students with the skills, connections, and experience to
            succeed in the technology industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#202124]/70 backdrop-blur-xl p-5 relative overflow-hidden"
                style={{
                  border: "1px solid rgba(26,115,232,0.3)",
                  borderRadius: 16,
                  boxShadow: "0 0 30px rgba(26,115,232,0.15)",
                }}
              >
                {/* Google 4-color gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #0F9D58 75%)",
                  }}
                />
                <div className="mb-3 mt-1">{pillar.icon}</div>
                <h3 className="text-base font-medium mb-1 text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* dark → light rainbow fade */}
      <div className="h-1 sm:h-1.5" style={{ background: "linear-gradient(90deg, #EA4335, #FBBC05, #0F9D58, #4285F4)" }} />
      <div className="h-12 sm:h-20" style={{ background: "linear-gradient(to bottom, #202124, #f8f9fa)" }} />

      {/* ── Testimonials (light) ── */}
      <section
        className="py-12 sm:py-20"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionDivider color="#0F9D58" label="Testimonials" light />
          <h2 className="text-xl sm:text-2xl font-medium text-center mb-8 sm:mb-12 mt-8 sm:mt-10 text-[#202124]">
            What Our Members Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white p-5 flex flex-col relative overflow-hidden"
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: 16,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06), -10px 0 40px rgba(66,133,244,0.45), -4px 6px 35px rgba(234,67,53,0.35), 4px 6px 35px rgba(251,188,5,0.35), 10px 0 40px rgba(15,157,88,0.45)",
                }}
              >
                {/* Google 4-color gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #0F9D58 75%)",
                  }}
                />
                <p className="text-sm leading-relaxed flex-1 text-[#5f6368] mt-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className="mt-4 pt-4"
                  style={{ borderTop: "1px solid #e8eaed" }}
                >
                  <p className="text-sm font-medium text-[#202124]">{t.name}</p>
                  <p className="text-xs text-[#80868b]">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* light → dark rainbow fade */}
      <div className="h-12 sm:h-20" style={{ background: "linear-gradient(to bottom, #f8f9fa, #202124)" }} />
      <div className="h-1 sm:h-1.5" style={{ background: "linear-gradient(90deg, #4285F4, #0F9D58, #FBBC05, #EA4335)" }} />

      {/* ── Join CTA (dark) ── */}
      <section
        className="py-12 sm:py-20"
        style={{ backgroundColor: "#202124" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionDivider color="#EA4335" label="Get Started" />
          <div
            className="max-w-3xl mx-auto mt-8 sm:mt-10 text-center bg-[#202124]/70 backdrop-blur-xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
            style={{
              border: "1px solid rgba(26,115,232,0.3)",
              borderRadius: 16,
              boxShadow: "0 0 30px rgba(26,115,232,0.15)",
            }}
          >
            {/* Google 4-color gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background: "linear-gradient(90deg, #4285F4 25%, #EA4335 25%, #EA4335 50%, #FBBC05 50%, #FBBC05 75%, #0F9D58 75%)",
              }}
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/60 max-w-md mx-auto">
              Join a growing community of developers, designers, and innovators at
              Miami Dade College. No experience required.
            </p>
            <Link href="/become-a-member" className="btn btn-yellow mt-6">
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/gdg-logo-white.png"
            alt="Google Developer Groups"
            className="h-4 sm:h-5"
          />

          <div className="flex items-center gap-5 text-sm text-white/40">
            <Link href="/become-a-member" className="hover:text-white transition-colors">
              Join
            </Link>
            <Link href="/partner-with-us" className="hover:text-white transition-colors">
              Partner
            </Link>
          </div>

          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} GDG on Campus &mdash; MDC
          </p>
        </div>
      </footer>
    </div>
  );
}

export { Home };
