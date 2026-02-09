"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-container">
      {/* Background Glow Effect */}
      <div className="footer-glow" />

      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-header">
              {/* <div className="footer-logo-box"> */}
              {/* Placeholder for Logo if image is not available, using text for now or simple shape */}
              {/* <span className="footer-logo-text">SUMMIT</span> */}
              {/* </div> */}
              <h2 className="footer-title">
                <span className="footer-highlight">SATHWA</span>
                '26
              </h2>
            </div>
            <p className="footer-subtitle">Where Tradition Meets Technology</p>
          </div>

          <div className="footer-actions">
            <div className="inquiries-container">
              <p className="inquiries-label">Inquiries</p>
              <a href="mailto:sathwa26@gmail.com" className="inquiries-email">
                sathwa26@gmail.com
              </a>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="jump-top-btn"
            >
              Jump to Top
              <MdArrowUpward className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="partners-grid">
          {/* Card 1: Government Partner */}
          <div className="partner-card group">
            <p className="partner-type">Partner</p>
            <h3 className="partner-name">Partner Name</h3>
            <p className="partner-desc">Partner Description</p>
            <div className="partner-links">
              <Link href="#" className="social-icon">
                <FaLinkedinIn />
              </Link>
              <Link href="#" className="social-icon">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Card 2: Ecosystem Partner */}
          <div className="partner-card group">
            <p className="partner-type">Partner</p>
            <h3 className="partner-name">Partner Name</h3>
            <p className="partner-desc">Partner Description</p>
            <div className="partner-links">
              <Link href="#" className="social-icon">
                <FaLinkedinIn />
              </Link>
              <Link href="#" className="social-icon">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Card 3: Host Institution */}
          <div className="partner-card group">
            <p className="partner-type">Partner</p>
            <h3 className="partner-name">Partner Name</h3>
            <p className="partner-desc">Partner Description</p>
            <div className="partner-links">
              <Link href="#" className="social-icon">
                <FaLinkedinIn />
              </Link>
              <Link href="#" className="social-icon">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">© SATHWA'26. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <Link href="/privacy" className="legal-link">
              Privacy
            </Link>
            <Link href="/terms" className="legal-link">
              Terms
            </Link>
            <span className="footer-hashtag">#SATHWA2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
