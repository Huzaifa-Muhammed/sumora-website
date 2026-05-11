import type { Metadata } from "next";
import DevtoolsDeterrent from "@/components/DevtoolsDeterrent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumora Health — Redefining care with intelligence",
  description:
    "An AI healthcare company building intelligent systems for clinicians, patients, and the care that connects them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DevtoolsDeterrent />
        {children}
      </body>
    </html>
  );
}
