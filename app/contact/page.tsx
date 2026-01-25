"use client";

import "./contact.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      {/* Marble Background Texture */}
      <div className="contact-bg" />

      <main className="contact-main">
        <div className="contact-content">
          {/* Large Header */}
          <div className="contact-header">
            <h1 className="contact-title">CONTACT</h1>
            <p className="contact-subtitle">
              (coming soon) stay tuned for more updates
            </p>
          </div>

          <div className="contact-card">
            {/* Aesthetic circle in background */}
            <div className="contact-card-circle" />

            <div className="contact-card-inner">
              <div className="contact-follow-section">
                <h3 className="contact-follow-title">Follow Our Journey</h3>
                <a
                  href="https://instagram.com/sathwa_cem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-text">@sathwa_cem</span>
                  <div className="contact-link-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="contact-icon-svg"
                    >
                      <title>Redirect</title>
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-footer">
            <p className="contact-footer-text">
              College of Engineering Muttathara, Trivandrum, Kerala
            </p>
          </div>
        </div>
      </main>

      {/* Decorative vertical lines */}
      <div className="contact-line-left" />
      <div className="contact-line-right" />
    </div>
  );
}
