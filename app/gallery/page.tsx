import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import prisma from "@/lib/prisma";
import "./Gallery.css";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Relive the best moments from Sathwa '26 — a three-day techno-cultural fest at College of Engineering, Muttathara. Browse photos from cultural shows, hackathons, workshops, and more.",
};

export const revalidate = 10;

const PAGE_SIZE = 10;

export default async function GalleryPage() {
    let items: any[] = [];
    let totalCount = 0;

    try {
        [items, totalCount] = await Promise.all([
            prisma.festMedia.findMany({
                where: { isVisible: true },
                orderBy: { imageRank: "asc" },
                take: PAGE_SIZE,
            }),
            prisma.festMedia.count({
                where: { isVisible: true },
            }),
        ]);
    } catch (error) {
        console.error("Database connection failed:", error);
        items = [];
        totalCount = 0;
    }

    const hasMore = items.length < totalCount;

    return (
        <main className="gallery-page">
            <section className="gallery-hero">
                <span className="gallery-hero-label">Sathwa'26 — CEM</span>
                <h1 className="gallery-hero-title">GALLERY</h1>
                <p className="gallery-hero-desc">
                    Capturing the spirit of three unforgettable days — from our stages to
                    our studios, workshops to runways.
                </p>
            </section>

            <section style={{ paddingBottom: "8rem" }}>
                <GalleryClient
                    initialItems={items}
                    initialNextPage={hasMore ? 2 : null}
                    totalCount={totalCount}
                />
            </section>
        </main>
    );
}
