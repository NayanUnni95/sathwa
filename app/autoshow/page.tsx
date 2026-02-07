import React from "react";
import AutoShowHero from "@/components/autoshow/AutoShowHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoShow | Sathwa'26",
  description: "Experience the ultimate automotive showcase at Sathwa'26.",
};

export default function AutoShowPage() {
  return (
    <main className="w-full min-h-screen bg-black overflow-hidden relative">
      <AutoShowHero />
    </main>
  );
}
