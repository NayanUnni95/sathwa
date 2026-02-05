import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import StaggeredMenu from "@/components/StaggeredMenu/StaggeredMenu";
import { menuConfig } from "@/config/navigation";
import Loader from "@/app/Loader";
import "./globals.css";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sathwa.live"),
  title: {
    default: "Sathwa'26 - Where Tradition Meets Technology",
    template: "%s | Sathwa'26",
  },
  description:
    "Sathwa is a three-day techno-cultural fest at College of Engineering, Muttathara, celebrating innovation, creativity, and engineering—blending tradition with modern technology through workshops, competitions, and cultural experiences.",
  keywords: [
    "Sathwa",
    "Sathwa fest",
    "Techno cultural fest",
    "College of Engineering Muttathara",
    "Engineering fest Kerala",
    "College fest Kerala",
    "Tech fest",
    "Cultural fest",
    "Workshops competitions fest",
    "Student fest India",
    "Technology and tradition fest",
  ],
  authors: [{ name: "Sathwa Team" }],
  creator: "College of Engineering, Muttathara",
  openGraph: {
    title: "Sathwa 2026 | Where Tradition Meets Technology",
    description:
      "A three-day techno-cultural fest celebrating innovation, creativity, and engineering at College of Engineering, Muttathara.",
    type: "website",
    locale: "en_IN",
    siteName: "Sathwa'26",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathwa 2026",
    description: "Where Tradition Meets Technology",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} root-body`}
      >
        <Loader />
        <AnalyticsProvider />
        <StaggeredMenu {...menuConfig} />
        {children}

        <style>{`
            .root-body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        `}</style>
      </body>
    </html>
  );
}
