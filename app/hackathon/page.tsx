import React from "react";
import HackathonHero from "@/components/hackathon/hero/HackathonHero";
import HackathonAbout from "@/components/hackathon/about/HackathonAbout";
import HackathonPrize from "@/components/hackathon/prize/HackathonPrize";
import HackathonFAQ from "@/components/hackathon/faq/HackathonFAQ";
import HackathonGuidelines from "@/components/hackathon/guidelines/HackathonGuidelines";

export default function HackathonPage() {
    return (
        <main style={{ minHeight: "100vh" }}>
            <HackathonHero />
            <HackathonAbout />
            <HackathonPrize />
            <HackathonGuidelines />
            <HackathonFAQ />
        </main>
    );
}
