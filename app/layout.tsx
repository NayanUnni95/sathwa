import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import StaggeredMenu from "@/components/StaggeredMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sathwa'26 - Where Tradition Meets Technology",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StaggeredMenu
          items={[
            { label: "Home", ariaLabel: "Home", link: "/" },
            { label: "Events", ariaLabel: "Events", link: "/events" },
            { label: "Contact", ariaLabel: "Contact", link: "/contact" },
          ]}
          socialItems={[
            { label: "Instagram", link: "https://instagram.com/sathwa_cem" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
