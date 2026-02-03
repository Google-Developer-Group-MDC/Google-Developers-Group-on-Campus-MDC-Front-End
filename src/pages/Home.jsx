import Link from "next/link";

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

function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ color: "#202124" }}>
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid #dadce0" }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/gdg-logo.png"
              alt="Google Developer Groups"
              className="h-7"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/partner-with-us" className="btn btn-green hidden sm:inline-block">
              Partner With Us
            </Link>
            <Link href="/become-a-member" className="btn btn-blue">
              Join Us
            </Link>
          </div>
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
          </svg>
        ))}

        {/* Arrow tip (static glow) — Red */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <polyline points="260,425 290,440 260,455" stroke="#ef8a82" strokeWidth="2" fill="none" opacity="0.6" filter="url(#neon)" />
        </svg>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 sm:py-28 flex flex-col items-center text-center">
          <p className="text-sm font-medium tracking-wide uppercase mb-4 text-[#8ab4f8]">
            Google Developer Groups &middot; On Campus Miami Dade College
          </p>

          <h1 className="text-4xl sm:text-5xl font-medium leading-tight max-w-2xl text-white">
            Welcome to the Google Developer Group on Campus
            <br />
            <span className="text-[#8ab4f8]">Miami Dade College</span>
          </h1>

          <p className="mt-5 text-lg max-w-xl leading-relaxed text-white/70">
            A community of students passionate about technology. We host
            workshops, build projects, and connect you with industry
            professionals to help launch your career in tech.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/become-a-member" className="btn btn-blue">
              Become a Member
            </Link>
            <Link href="/partner-with-us" className="btn btn-green">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-medium" style={{ color: "#1a73e8" }}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm" style={{ color: "#676c72" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="bg-[#f8f9fa]" style={{ borderTop: "1px solid #dadce0", borderBottom: "1px solid #dadce0" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-medium text-center mb-3">What We Do</h2>
          <p
            className="text-center max-w-lg mx-auto mb-12"
            style={{ color: "#676c72" }}
          >
            Empowering students with the skills, connections, and experience to
            succeed in the technology industry.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white p-5"
                style={{ border: "1px solid #dadce0", borderRadius: 8 }}
              >
                <div className="mb-3">{pillar.icon}</div>
                <h3 className="text-base font-medium mb-1">{pillar.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#676c72" }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-2xl font-medium text-center mb-12">
          What Our Members Say
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-5 flex flex-col"
              style={{ border: "1px solid #dadce0", borderRadius: 8 }}
            >
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#676c72" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid #dadce0" }}>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs" style={{ color: "#676c72" }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section
        className="text-center text-white"
        style={{ backgroundColor: "#1a73e8" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-medium">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-3 text-white/80 max-w-md mx-auto">
            Join a growing community of developers, designers, and innovators at
            Miami Dade College. No experience required.
          </p>
          <Link href="/become-a-member" className="btn btn-yellow mt-6">
            Become a Member
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid #dadce0" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/gdg-logo.png"
            alt="Google Developer Groups"
            className="h-5"
          />

          <div className="flex items-center gap-5 text-sm" style={{ color: "#676c72" }}>
            <Link href="/become-a-member" className="hover:underline">
              Join
            </Link>
            <Link href="/partner-with-us" className="hover:underline">
              Partner
            </Link>
          </div>

          <p className="text-xs" style={{ color: "#676c72" }}>
            &copy; {new Date().getFullYear()} GDG on Campus &mdash; MDC
          </p>
        </div>
      </footer>
    </div>
  );
}

export { Home };
