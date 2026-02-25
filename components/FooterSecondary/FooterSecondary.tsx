"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import "./FooterSecondary.css";
import Image from "next/image";

const FooterSecondary = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is near the bottom
      const scrolled = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 300; // 300px from bottom

      if (scrolled >= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-sec-container">
      <div className="footer-sec-content">
        {/* Contact Section */}
        <div className="footer-sec-section contact-section">
          <p className="footer-sec-label">CONTACTS</p>
          <h2 className="footer-sec-email">SATHWA26@GMAIL.COM</h2>
        </div>

        {/* Organized By & Quick Links Card */}
        <div className="footer-sec-card organized-card">
          <div className="organized-header">
            <p className="footer-sec-label-small">ORGANIZED BY</p>
            <h3 className="organized-title">SATHWA</h3>
            {/* <p className="organized-subtitle">Dept of Computer Science</p> */}
            <p className="organized-subtitle">
              College of Engineering Muttathara
            </p>
            <p className="organized-subtitle">Trivandrum</p>

            <div className="organized-logos">
              <div className="logo-placeholder">
                <Image
                  alt="/assets/favicon.png"
                  width={40}
                  height={40}
                  src={"/assets/favicon.png"}
                />
              </div>
              <div className="logo-placeholder">
                <Image
                  alt="/assets/cem_logo.png"
                  width={45}
                  height={45}
                  src={"/assets/cem_logo.png"}
                />
              </div>
            </div>
          </div>

          <div className="divider-horizontal"></div>

          {/* Quick Links Section */}
          <div className="quick-links-section">
            <p className="footer-sec-label-small">QUICK LINKS</p>
            <div className="links-grid">
              <div className="links-column">
                <Link href="/">Home</Link>
                <Link href="/events">Events</Link>
                <Link href="/workshops">Workshops</Link>
                <Link href="/competitions">Competitions</Link>
                <Link href="/schedule">Schedule</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinators Section */}
        <div className="coordinators-container">
          <div className="coordinator-group">
            <p className="footer-sec-label-small">FACULTY COORDINATOR</p>
            <h4 className="coordinator-name">Dr. Anoop Sivasankar</h4>
            <a href="tel:+919446747253" className="coordinator-phone">
              +91 94467 47253
            </a>
          </div>

          <div className="coordinator-group">
            <p className="footer-sec-label-small">STUDENT COORDINATOR</p>
            <div className="student-coordinator-item">
              <h4 className="coordinator-name">Deepak Das K</h4>
              <a href="tel:+918139001416" className="coordinator-phone">
                +91 81390 01416
              </a>
            </div>
            <div className="student-coordinator-item">
              <h4 className="coordinator-name">Jeswin AJ</h4>
              <a href="tel:+917012721738" className="coordinator-phone">
                +91 70127 21738
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-section">
          <p className="footer-sec-label">SOCIAL MEDIA:</p>
          <div className="social-icons">
            <Link
              href="https://instagram.com/sathwa_cem"
              className="social-icon-btn"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://youtube.com/@sathwa26"
              className="social-icon-btn"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-sec-bottom">
          <p className="copyright-text">© SATHWA'26. ALL RIGHTS RESERVED.</p>
          <div className="developer-text">
            <span className="dev-label">DEVELOPED & SHIPPED BY</span>
            <div className="dev-links">
              <Link href="https://instagram.com/_.n4y4n">Nayan</Link>,{" "}
              <Link href="https://instagram.com/mr.clifin._.12">Clifin</Link> &{" "}
              <Link href="https://instagram.com/aswinvs_123">Aswin</Link>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`scroll-top-btn ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <MdArrowUpward />
      </button>
    </footer>
  );
};

export default FooterSecondary;
