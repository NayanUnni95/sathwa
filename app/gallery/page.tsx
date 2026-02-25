import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { galleryData } from "@/data/gallery";
import "./Gallery.css";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Relive the best moments from Sathwa '26 — a three-day techno-cultural fest at College of Engineering, Muttathara. Browse photos from cultural shows, hackathons, workshops, and more.",
};

const PAGE_SIZE = 10;

export default async function GalleryPage() {
    // Directly read data for SSR (no self-referential fetch needed)
    // When backend is ready, replace this with a db/api call
    const allItems = galleryData;
    const firstPage = allItems.slice(0, PAGE_SIZE);
    const hasMore = allItems.length > PAGE_SIZE;

    return (
        <main className="gallery-page">
            {/* Hero */}
            <section className="gallery-hero">
                <span className="gallery-hero-label">Sathwa'26 — CEM</span>
                <h1 className="gallery-hero-title">GALLERY</h1>
                <p className="gallery-hero-desc">
                    Capturing the spirit of three unforgettable days — from our stages to
                    our studios, workshops to runways.
                </p>
            </section>

            {/* Grid + Load More */}
            <section style={{ paddingBottom: "8rem" }}>
                <GalleryClient
                    initialItems={firstPage}
                    initialNextPage={hasMore ? 2 : null}
                    totalCount={allItems.length}
                />
            </section>
        </main>
    );
}
