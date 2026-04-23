/**
 * scripts/fetch_gallery_data.ts
 *
 * Fetches all rows from the `FestMedia` table and updates the
 * GALLERY_DATA constant inside `data/gallery.ts`.
 *
 * Usage (from project root):
 *   npx tsx --env-file .env scripts/fetch_gallery_data.ts
 *
 * Env vars required (see .env.example):
 *   DATABASE_URL  – PostgreSQL connection string
 */

import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
    console.error(
        "❌  DATABASE_URL is not set. Pass it via --env-file .env or export it."
    );
    process.exit(1);
}

const prisma = new PrismaClient({
    datasources: { db: { url: DATABASE_URL } },
    log: ["warn", "error"],
});

interface FestMedia {
    id: string;
    url: string;
    caption?: string | null;
    mimeType?: string | null;
    sizeBytes?: number | null;
    imageRank: number;
    isVisible: boolean;
    thumbnailUrl?: string | null;
}

/** Serialise a single FestMedia record into a pretty-printed object literal. */
function serialiseRecord(m: FestMedia, indent = "    "): string {
    const lines: string[] = ["{"];

    lines.push(`${indent}    id: ${JSON.stringify(m.id)},`);
    lines.push(`${indent}    url: ${JSON.stringify(m.url)},`);

    if (m.caption != null) {
        lines.push(`${indent}    caption: ${JSON.stringify(m.caption)},`);
    } else {
        lines.push(`${indent}    caption: undefined,`);
    }

    if (m.mimeType != null) {
        lines.push(`${indent}    mimeType: ${JSON.stringify(m.mimeType)},`);
    } else {
        lines.push(`${indent}    mimeType: undefined,`);
    }

    if (m.sizeBytes != null) {
        lines.push(`${indent}    sizeBytes: ${m.sizeBytes},`);
    }

    lines.push(`${indent}    imageRank: ${m.imageRank},`);
    lines.push(`${indent}    isVisible: ${m.isVisible},`);

    if (m.thumbnailUrl != null) {
        lines.push(`${indent}    thumbnailUrl: ${JSON.stringify(m.thumbnailUrl)},`);
    }

    lines.push(`${indent}}`);
    return lines.join("\n");
}

/** Build the full GALLERY_DATA array literal string. */
function buildArrayLiteral(records: FestMedia[]): string {
    if (records.length === 0) return "[]";

    const items = records
        .map((r) => `    ${serialiseRecord(r, "    ")}`)
        .join(",\n");

    return `[\n${items},\n]`;
}

// ── Regex that matches the GALLERY_DATA assignment block ──────────────────────
//   Handles both `const` and `let`, with or without a type annotation.
const GALLERY_DATA_RE =
    /^(const|let)\s+GALLERY_DATA\s*(?::\s*FestMedia\[\])?\s*=\s*\[[\s\S]*?\];/m;

async function main() {
    console.log("🔌  Connecting to database…");

    const rows = await prisma.festMedia.findMany({
        orderBy: { imageRank: "asc" },
        select: {
            id: true,
            url: true,
            caption: true,
            mimeType: true,
            sizeBytes: true,
            imageRank: true,
            isVisible: true,
            thumbnailUrl: true,
        },
    });

    console.log(`✅  Fetched ${rows.length} FestMedia record(s).`);

    const targetFile = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "../data/gallery.ts"
    );

    if (!fs.existsSync(targetFile)) {
        console.error(`❌  Target file not found: ${targetFile}`);
        process.exit(1);
    }

    const original = fs.readFileSync(targetFile, "utf-8");

    const newArrayLiteral = buildArrayLiteral(rows as FestMedia[]);
    const replacement = `const GALLERY_DATA: FestMedia[] = ${newArrayLiteral};`;

    if (!GALLERY_DATA_RE.test(original)) {
        console.error(
            "❌  Could not locate the GALLERY_DATA assignment in data/gallery.ts.\n" +
            "    Make sure the variable is declared as:\n" +
            "      const GALLERY_DATA: FestMedia[] = [...];"
        );
        process.exit(1);
    }

    const updated = original.replace(GALLERY_DATA_RE, replacement);

    fs.writeFileSync(targetFile, updated, "utf-8");

    console.log(`📝  data/gallery.ts updated with ${rows.length} record(s).`);
}

main()
    .catch((err) => {
        console.error("❌  Script failed:", err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
