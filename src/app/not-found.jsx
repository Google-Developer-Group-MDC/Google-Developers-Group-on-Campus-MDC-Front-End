import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4">
      <div className="text-center space-y-5">
        <img
          src="/gdg-logo.png"
          alt="Google Developer Groups"
          className="h-7 mx-auto"
        />
        <p className="text-6xl font-medium" style={{ color: "#dadce0" }}>
          404
        </p>
        <h1 className="text-xl font-medium" style={{ color: "#202124" }}>
          Page Not Found
        </h1>
        <p className="text-sm max-w-sm mx-auto" style={{ color: "#676c72" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-blue">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
