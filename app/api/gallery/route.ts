import { type NextRequest, NextResponse } from "next/server";
import { galleryData } from "@/data/gallery";
import type { FestMedia } from "@/data/gallery";

export type { FestMedia };

const PAGE_SIZE = 10;

export interface GalleryResponse {
    items: FestMedia[];
    nextPage: number | null;
    totalCount: number;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") ?? "1");

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const items = galleryData.slice(start, end);
    const nextPage = end < galleryData.length ? page + 1 : null;

    return NextResponse.json(
        {
            items,
            nextPage,
            totalCount: galleryData.length,
        } satisfies GalleryResponse,
        {
            status: 200,
            headers: {
                // Cache for 1 hour, stale-while-revalidate for 30 minutes
                "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
            },
        }
    );
}
