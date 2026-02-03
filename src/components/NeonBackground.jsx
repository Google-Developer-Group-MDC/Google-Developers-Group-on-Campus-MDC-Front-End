export function NeonBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ backgroundColor: "#202124", zIndex: 0 }}>
      {/* Base dim shapes */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
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
        {/* GDG Dev logo */}
        <rect x="1010" y="276" rx="14" width="80" height="28" stroke="#5a8fd6" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(35 1050 290)" />
        <rect x="1010" y="216" rx="14" width="80" height="28" stroke="#d47068" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(-35 1050 230)" />
        <rect x="1110" y="216" rx="14" width="80" height="28" stroke="#4fa868" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(35 1150 230)" />
        <rect x="1110" y="276" rx="14" width="80" height="28" stroke="#c9a020" strokeWidth="1.5" fill="none" opacity="0.22" transform="rotate(-35 1150 290)" />
      </svg>

      {/* Animated electricity layers */}
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 520"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {i === 0 && (
            <defs>
              <filter id="neon-bg">
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
              .nb { filter: url(#neon-bg); }
              .bg0 { stroke-dasharray: 200 554; animation: bg 6s linear infinite; }
              .bg1 { stroke-dasharray: 200 554; animation: bg 6s -2s linear infinite; }
              .bg2 { stroke-dasharray: 200 554; animation: bg 6s -4s linear infinite; }
              @keyframes bg { to { stroke-dashoffset: -754; } }
              .be0 { stroke-dasharray: 180 416; animation: be 5s linear infinite; }
              .be1 { stroke-dasharray: 180 416; animation: be 5s -1.67s linear infinite; }
              .be2 { stroke-dasharray: 180 416; animation: be 5s -3.33s linear infinite; }
              @keyframes be { to { stroke-dashoffset: -596; } }
              .bm0 { stroke-dasharray: 100 140; animation: bm 3s linear infinite; }
              .bm1 { stroke-dasharray: 100 140; animation: bm 3s -1s linear infinite; }
              .bm2 { stroke-dasharray: 100 140; animation: bm 3s -2s linear infinite; }
              @keyframes bm { to { stroke-dashoffset: -240; } }
              .ba0 { stroke-dasharray: 120 140; animation: ba 3s linear infinite; }
              .ba1 { stroke-dasharray: 120 140; animation: ba 3s -1s linear infinite; }
              .ba2 { stroke-dasharray: 120 140; animation: ba 3s -2s linear infinite; }
              @keyframes ba { to { stroke-dashoffset: -260; } }
              .bv0 { stroke-dasharray: 160 360; animation: bv 4s linear infinite; }
              .bv1 { stroke-dasharray: 160 360; animation: bv 4s -1.33s linear infinite; }
              .bv2 { stroke-dasharray: 160 360; animation: bv 4s -2.67s linear infinite; }
              @keyframes bv { to { stroke-dashoffset: -520; } }
              .bpo0 { stroke-dasharray: 140 300; animation: bpo 5s linear infinite; }
              .bpo1 { stroke-dasharray: 140 300; animation: bpo 5s -1.67s linear infinite; }
              .bpo2 { stroke-dasharray: 140 300; animation: bpo 5s -3.33s linear infinite; }
              @keyframes bpo { to { stroke-dashoffset: -440; } }
              .bpi0 { stroke-dasharray: 60 97; animation: bpi 2.5s linear infinite; }
              .bpi1 { stroke-dasharray: 60 97; animation: bpi 2.5s -0.83s linear infinite; }
              .bpi2 { stroke-dasharray: 60 97; animation: bpi 2.5s -1.67s linear infinite; }
              @keyframes bpi { to { stroke-dashoffset: -157; } }
              .br0 { stroke-dasharray: 180 400; animation: br 5s linear infinite; }
              .br1 { stroke-dasharray: 180 400; animation: br 5s -1.67s linear infinite; }
              .br2 { stroke-dasharray: 180 400; animation: br 5s -3.33s linear infinite; }
              @keyframes br { to { stroke-dashoffset: -580; } }
              .bpa0 { stroke-dasharray: 60 88; animation: bpa 2s linear infinite; }
              .bpa1 { stroke-dasharray: 60 88; animation: bpa 2s -0.67s linear infinite; }
              .bpa2 { stroke-dasharray: 60 88; animation: bpa 2s -1.33s linear infinite; }
              @keyframes bpa { to { stroke-dashoffset: -148; } }
              .bpb0 { stroke-dasharray: 60 88; animation: bpb 2.5s linear infinite; }
              .bpb1 { stroke-dasharray: 60 88; animation: bpb 2.5s -0.83s linear infinite; }
              .bpb2 { stroke-dasharray: 60 88; animation: bpb 2.5s -1.67s linear infinite; }
              @keyframes bpb { to { stroke-dashoffset: -148; } }
              .bh0 { stroke-dasharray: 120 180; animation: bh 3s linear infinite; }
              .bh1 { stroke-dasharray: 120 180; animation: bh 3s -1s linear infinite; }
              .bh2 { stroke-dasharray: 120 180; animation: bh 3s -2s linear infinite; }
              @keyframes bh { to { stroke-dashoffset: -300; } }
              .bc0 { stroke-dasharray: 90 130; animation: bc 3s linear infinite; }
              .bc1 { stroke-dasharray: 90 130; animation: bc 3s -1s linear infinite; }
              .bc2 { stroke-dasharray: 90 130; animation: bc 3s -2s linear infinite; }
              @keyframes bc { to { stroke-dashoffset: -220; } }
              .bcl0 { stroke-dasharray: 180 405; animation: bcl 6s linear infinite; }
              .bcl1 { stroke-dasharray: 180 405; animation: bcl 6s -2s linear infinite; }
              .bcl2 { stroke-dasharray: 180 405; animation: bcl 6s -4s linear infinite; }
              @keyframes bcl { to { stroke-dashoffset: -585; } }
              .bn0 { stroke-dasharray: 24 24; animation: bn 1.8s linear infinite; }
              .bn1 { stroke-dasharray: 24 24; animation: bn 1.8s -0.6s linear infinite; }
              .bn2 { stroke-dasharray: 24 24; animation: bn 1.8s -1.2s linear infinite; }
              @keyframes bn { to { stroke-dashoffset: -48; } }
              .bnn0 { stroke-dasharray: 10 15; animation: bnn 1.5s linear infinite; }
              .bnn1 { stroke-dasharray: 10 15; animation: bnn 1.5s -0.5s linear infinite; }
              .bnn2 { stroke-dasharray: 10 15; animation: bnn 1.5s -1s linear infinite; }
              @keyframes bnn { to { stroke-dashoffset: -25; } }
              .bnm0 { stroke-dasharray: 12 19; animation: bnm 1.8s linear infinite; }
              .bnm1 { stroke-dasharray: 12 19; animation: bnm 1.8s -0.6s linear infinite; }
              .bnm2 { stroke-dasharray: 12 19; animation: bnm 1.8s -1.2s linear infinite; }
              @keyframes bnm { to { stroke-dashoffset: -31; } }
              .blc0 { stroke-dasharray: 70 122; animation: blc 3s linear infinite; }
              .blc1 { stroke-dasharray: 70 122; animation: blc 3s -1s linear infinite; }
              .blc2 { stroke-dasharray: 70 122; animation: blc 3s -2s linear infinite; }
              @keyframes blc { to { stroke-dashoffset: -192; } }
            `}</style>
          )}

          {/* Globe */}
          <circle className={`nb bg${i}`} cx="80" cy="200" r="120" stroke="#7ba8ef" strokeWidth="2" />
          <ellipse className={`nb be${i}`} cx="80" cy="200" rx="120" ry="50" stroke="#ef8a82" strokeWidth="2" />
          <line className={`nb bm${i}`} x1="80" y1="80" x2="80" y2="320" stroke="#ef8a82" strokeWidth="2" />
          {/* Arrow */}
          <line className={`nb ba${i}`} x1="20" y1="440" x2="280" y2="440" stroke="#ef8a82" strokeWidth="2" />
          {/* Vertical line */}
          <line className={`nb bv${i}`} x1="300" y1="0" x2="300" y2="520" stroke="#efc84a" strokeWidth="1.5" />
          {/* Cloud */}
          <path className={`nb bcl${i}`} d="M316 298 C297 298 284 267 307 244 C303 207 336 181 375 194 C388 159 433 159 453 194 C476 176 502 205 492 244 C511 254 508 296 485 298 Z" stroke="#7ba8ef" strokeWidth="2" fill="none" />
          {/* AI nodes */}
          <circle className={`nb bnn${i}`} cx="342" cy="231" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
          <circle className={`nb bnn${i}`} cx="342" cy="276" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
          <circle className={`nb bnm${i}`} cx="401" cy="253" r="6" stroke="#efc84a" strokeWidth="1.5" fill="none" />
          <circle className={`nb bnn${i}`} cx="459" cy="231" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
          <circle className={`nb bnn${i}`} cx="459" cy="276" r="5" stroke="#efc84a" strokeWidth="1.5" fill="none" />
          {/* AI connections */}
          <line className={`nb bn${i}`} x1="342" y1="231" x2="401" y2="253" stroke="#efc84a" strokeWidth="1.5" />
          <line className={`nb bn${i}`} x1="342" y1="276" x2="401" y2="253" stroke="#efc84a" strokeWidth="1.5" />
          <line className={`nb bn${i}`} x1="401" y1="253" x2="459" y2="231" stroke="#efc84a" strokeWidth="1.5" />
          <line className={`nb bn${i}`} x1="401" y1="253" x2="459" y2="276" stroke="#efc84a" strokeWidth="1.5" />
          {/* Pin */}
          <circle className={`nb bpo${i}`} cx="1360" cy="220" r="70" stroke="#6fc488" strokeWidth="2" />
          <circle className={`nb bpi${i}`} cx="1360" cy="220" r="25" stroke="#6fc488" strokeWidth="2" />
          {/* Rect */}
          <rect className={`nb br${i}`} x="1250" y="20" rx="16" width="170" height="120" stroke="#efc84a" strokeWidth="2" />
          {/* Pills */}
          <rect className={`nb bpa${i}`} x="1300" y="30" rx="12" width="50" height="24" stroke="#ef8a82" strokeWidth="2" transform="rotate(-40 1325 42)" />
          <rect className={`nb bpb${i}`} x="1340" y="60" rx="12" width="50" height="24" stroke="#7ba8ef" strokeWidth="2" transform="rotate(-40 1365 72)" />
          {/* Horizontal line */}
          <line className={`nb bh${i}`} x1="1140" y1="340" x2="1440" y2="340" stroke="#6fc488" strokeWidth="1.5" />
          {/* Corner curve */}
          <path className={`nb bc${i}`} d="M1440 400 Q1350 400 1350 490 L1350 520" stroke="#efc84a" strokeWidth="2" fill="none" />
          {/* GDG Dev logo */}
          <rect className={`nb blc${i}`} x="1010" y="276" rx="14" width="80" height="28" stroke="#7ba8ef" strokeWidth="2" fill="none" transform="rotate(35 1050 290)" />
          <rect className={`nb blc${i}`} x="1010" y="216" rx="14" width="80" height="28" stroke="#ef8a82" strokeWidth="2" fill="none" transform="rotate(-35 1050 230)" />
          <rect className={`nb blc${i}`} x="1110" y="216" rx="14" width="80" height="28" stroke="#6fc488" strokeWidth="2" fill="none" transform="rotate(35 1150 230)" />
          <rect className={`nb blc${i}`} x="1110" y="276" rx="14" width="80" height="28" stroke="#efc84a" strokeWidth="2" fill="none" transform="rotate(-35 1150 290)" />
        </svg>
      ))}

      {/* Arrow tip */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <polyline points="260,425 290,440 260,455" stroke="#ef8a82" strokeWidth="2" fill="none" opacity="0.6" filter="url(#neon-bg)" />
      </svg>
    </div>
  );
}
