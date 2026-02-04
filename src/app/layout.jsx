import "./index.css";

const siteUrl = "https://gdg-on-campus-mdc.netlify.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "GDG on Campus — Miami Dade College",
  description:
    "Google Developers Group on Campus at Miami Dade College. Build, learn, and grow with a community of student developers.",
  openGraph: {
    title: "GDG on Campus — Miami Dade College",
    description:
      "Google Developers Group on Campus at Miami Dade College. Build, learn, and grow with a community of student developers.",
    url: siteUrl,
    siteName: "GDG on Campus — MDC",
    images: [
      {
        url: "/gdg-logo.png",
        width: 512,
        height: 512,
        alt: "GDG on Campus Miami Dade College",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "GDG on Campus — Miami Dade College",
    description:
      "Google Developers Group on Campus at Miami Dade College. Build, learn, and grow with a community of student developers.",
    images: ["/gdg-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
