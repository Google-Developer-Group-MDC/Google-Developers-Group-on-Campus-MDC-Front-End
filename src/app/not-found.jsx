import Link from "next/link";
import { NeonBackground } from "../components/NeonBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <NeonBackground />

      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 bg-[#202124]/80 backdrop-blur-md"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/gdg-logo-white.png"
              alt="Google Developer Groups"
              className="h-4.5 sm:h-7"
            />
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link href="/become-a-member" className="btn btn-blue shrink-0 text-[10px] px-2.5 py-1.5 sm:text-sm sm:px-6 sm:py-2.5">
              <span className="sm:hidden">Join Now!</span>
              <span className="hidden sm:inline">Become a Member</span>
            </Link>
            <Link href="/partner-with-us" className="btn btn-green shrink-0 text-[10px] px-2.5 py-1.5 sm:text-sm sm:px-6 sm:py-2.5">
              <span className="sm:hidden">Partner with us!</span>
              <span className="hidden sm:inline">Partner With Us</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-5">
          <p
            className="text-8xl sm:text-9xl font-bold tracking-tight"
            style={{ animation: "pulse404 3s ease-in-out infinite" }}
          >
            <span style={{ color: "#4285F4", textShadow: "0 0 30px rgba(66,133,244,0.5), 0 0 60px rgba(66,133,244,0.3)" }}>4</span>
            <span style={{ color: "#EA4335", textShadow: "0 0 30px rgba(234,67,53,0.5), 0 0 60px rgba(234,67,53,0.3)" }}>0</span>
            <span style={{ color: "#FBBC05", textShadow: "0 0 30px rgba(251,188,5,0.5), 0 0 60px rgba(251,188,5,0.3)" }}>4</span>
          </p>
          <h1 className="text-2xl sm:text-3xl font-medium text-white">
            Page Not Found
          </h1>
          <p className="text-sm max-w-sm mx-auto text-white/50">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="pt-2">
            <Link href="/" className="btn btn-blue">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse404 {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.9;
          }
        }
      `}</style>

      {/* Footer */}
      <footer className="relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <img
              src="/gdg-logo-white.png"
              alt="Google Developer Groups"
              className="h-5 sm:h-6"
            />

            <div className="flex items-center gap-5 text-base text-white/40">
              <Link href="/become-a-member" className="hover:text-white transition-colors">
                Join
              </Link>
              <Link href="/partner-with-us" className="hover:text-white transition-colors">
                Partner
              </Link>
            </div>

            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} GDG on Campus &mdash; MDC
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-base text-white/50">Follow us on social media</p>
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/profile.php?id=61586034917973" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/gdgoncampusmdc" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://x.com/GDG_MDC" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/gdg-on-campus-miami-dade-college/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
