import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import type { FestMedia } from "@prisma/client";

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

    const skip = (page - 1) * PAGE_SIZE;
    const fetchFromDb = process.env.FETCH_FROM_DB === "true";

    try {
        let items: FestMedia[] = [];
        let totalCount = 0;

        if (fetchFromDb) {
            try {
                [items, totalCount] = await Promise.all([
                    prisma.festMedia.findMany({
                        where: { isVisible: true },
                        orderBy: { imageRank: "asc" },
                        skip,
                        take: PAGE_SIZE,
                    }),
                    prisma.festMedia.count({
                        where: { isVisible: true },
                    }),
                ]);
            } catch (dbError) {
                console.error("Database connection failed in API:", dbError);
                items = [];
                totalCount = 0;
            }
        } else {
            // Fetch from local data/gallery.ts
            const { galleryData } = await import("@/data/gallery");
            totalCount = galleryData.length;
            items = galleryData.slice(skip, skip + PAGE_SIZE) as FestMedia[];
        }

        const nextPage = skip + items.length < totalCount ? page + 1 : null;

        return NextResponse.json(
            {
                items,
                nextPage,
                totalCount,
            } satisfies GalleryResponse,
            {
                status: 200,
                headers: {
                    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=10",
                },
            }
        );
    } catch (error) {
        console.error("Gallery API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
