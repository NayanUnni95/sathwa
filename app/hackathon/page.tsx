import React from "react";
import HackathonHero from "@/components/hackathon/hero/HackathonHero";
import HackathonAbout from "@/components/hackathon/about/HackathonAbout";

export default function HackathonPage() {
    return (
        <main style={{ minHeight: "100vh" }}>
            <HackathonHero />
            <HackathonAbout />
        </main>
    );
}
