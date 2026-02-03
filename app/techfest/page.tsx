import TechFestHero from "@/components/techfest/TechFestHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Techfest | Sathwa'26",
    description: "Experience the biggest techfest in South India. Innovations, Competitions, and Workshops.",
};

export default function TechfestPage() {
    return (
        <main>
            <TechFestHero />
        </main>
    );
}
