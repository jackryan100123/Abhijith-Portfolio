import type { Metadata } from "next";
import { JetBrains_Mono, Instrument_Serif } from "next/font/google";
import Nav from "@/components/Nav";
import { SITE } from "@/lib/site";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export const metadata: Metadata = {
  title: SITE.title,
  description:
    "Backend systems architect, AWS cloud practitioner, and DevOps engineer. Building secure, observable production systems.",
  keywords: [
    "Abhijith Menon",
    "Software Engineer",
    "Backend",
    "AWS",
    "DevOps",
    "Django",
    "Kubernetes",
  ],
  authors: [{ name: SITE.name }],
  icons: {
    icon: [{ url: SITE.faviconPath, type: "image/png" }],
    apple: SITE.faviconPath,
    shortcut: SITE.faviconPath,
  },
  openGraph: {
    title: `${SITE.name} — Portfolio`,
    description: "Backend systems · Cloud · DevOps · AI/ML",
    type: "website",
    images: [{ url: SITE.photoPath, width: 512, height: 512, alt: SITE.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased min-h-screen overflow-x-hidden">
        <Nav />
        <main className="w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
