"use client";

import "./events.css";

export default function EventsPage() {
  return (
    <div className="events-container">
      <div className="events-bg" />

      <main className="events-main">
        <div className="events-content">
          <div className="events-header">
            <h1 className="events-title">EVENTS</h1>
            <p className="events-subtitle">
              weaving the threads of tradition and technology into a grand
              spectacle
            </p>
          </div>
          <div className="events-footer">
            <p className="events-footer-text">
              Please check back soon. We are preparing something extraordinary
              for you.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
