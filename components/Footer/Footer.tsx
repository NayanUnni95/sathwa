"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaPhone, FaYoutube } from "react-icons/fa";
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
          {/* Card 1: Coordinators */}
          <div className="partner-card group">
            <p className="partner-type">Event Coordinators</p>
            <div className="coordinator-info">
              <div className="coordinator-row">
                <div className="coordinator-details-v2">
                  <h3 className="partner-name">Dr. Anoop S</h3>
                  <p className="partner-desc">Staff Coordinator</p>
                </div>
                <div className="coordinator-action">
                  <a href="tel:+910000000000" className="social-icon">
                    <FaPhone />
                  </a>
                </div>
              </div>
              <div className="coordinator-divider"></div>
              <div className="coordinator-row">
                <div className="coordinator-details-v2">
                  <h3 className="partner-name">Deepak Das K</h3>
                  <p className="partner-desc">Student Coordinator</p>
                </div>
                <div className="coordinator-action">
                  <a href="tel:+910000000000" className="social-icon">
                    <FaPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Map & Location */}
          <div className="partner-card group location-card">
            <p className="partner-type">Our Location</p>
            <div className="location-container">
              <div className="map-placeholder">
                <iframe
                  title="College of Engineering Muttathara Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25527.687814836667!2d76.929734!3d8.469281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb6855619efd%3A0x74cf47fba1fc4a28!2sCollege%20of%20Engineering%20Muttathara%2C%20Trivandrum%20(Govt.%20Of%20Kerala)!5e1!3m2!1sen!2sus!4v1770712346479!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="location-details">
                <h3 className="location-name">
                  College of Engineering, Muttathara
                </h3>
                <p className="location-address">
                  St. Sebastians Church Road, Vallakadavu, Trivandrum
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Social Media */}
          <div className="partner-card group">
            <p className="partner-type">Connect With Us</p>
            <h3 className="partner-name">Stay Updated</h3>
            <p className="partner-desc">
              Follow us on our social platforms for more updates
            </p>
            <div className="partner-links socials-list">
              <Link
                href="https://youtube.com/@sathwa26"
                className="social-icon"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://instagram.com/sathwa_cem"
                className="social-icon"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com/company/sathwa"
                className="social-icon"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">© SATHWA'26. All Rights Reserved.</p>
          <div className="footer-legal-links">
            {/* <Link href="/privacy" className="legal-link">
              Privacy
            </Link>
            <Link href="/terms" className="legal-link">
              Terms
            </Link> */}
            <span className="footer-hashtag">#SATHWA2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
