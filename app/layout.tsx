import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import StaggeredMenu from "@/components/StaggeredMenu";
import { Noto_Serif } from "next/font/google";

import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sathwa",
  description: null,
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
        >
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
