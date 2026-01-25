"use client";

import Link from "next/link";
import "@/app/styles/notfound.css";

export default function NotFound() {
  return (
    <div className="nf-scope">
      {/* Marble Background Texture */}
      <div className="nf-bg" />

      <main className="nf-main">
        <div className="nf-header">
          <h1 className="nf-404">404</h1>
          <div className="nf-sub-wrapper">
            <h2 className="nf-sub">NOT FOUND</h2>
          </div>
        </div>

        <Link href="/" className="nf-btn group">
          <div className="nf-icon-circle group-hover:scale-105">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="nf-arrow group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <title>Redirect</title>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          <span className="nf-btn-text">Return Home</span>
        </Link>
      </main>
    </div>
  );
}
