import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};
import { Geist, Geist_Mono, Orbitron, Space_Grotesk, Plus_Jakarta_Sans, Rammetto_One } from "next/font/google"; // Added Plus_Jakarta_Sans
import StaggeredMenu from "@/components/StaggeredMenu/StaggeredMenu";
import { menuConfig } from "@/config/navigation";
import Loader from "@/app/Loader";
import "./globals.css";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans", // Variable for usage
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Added weights usually needed
});

const rammettoOne = Rammetto_One({
  variable: "--font-rammetto-one",
  subsets: ["latin"],
  weight: ["400"],
});

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
  publisher: "College of Engineering, Muttathara",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Sathwa'26 | Where Tradition Meets Technology",
    description:
      "A three-day techno-cultural fest celebrating innovation, creativity, and engineering at College of Engineering, Muttathara.",
    url: "https://sathwa.live",
    siteName: "Sathwa'26",
    images: [
      {
        url: "/assets/sathwa-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Sathwa'26 - Techno Cultural Fest",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathwa'26 | Where Tradition Meets Technology",
    description:
      "A three-day techno-cultural fest celebrating innovation, creativity, and engineering at College of Engineering, Muttathara.",
    images: [
      {
        url: "/assets/sathwa-og.jpeg",
        alt: "Sathwa'26 - Techno Cultural Fest",
      },
    ],
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
  alternates: {
    canonical: "https://sathwa.live",
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
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} ${rammettoOne.variable} root-body`}
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
