import "./index.css";

export const metadata = {
  title: "GDG on Campus — Miami Dade College",
  description:
    "Google Developers Group on Campus at Miami Dade College. Build, learn, and grow with a community of student developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
