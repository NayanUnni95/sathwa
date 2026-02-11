"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import "./FooterSecondary.css";

const FooterSecondary = () => {
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
          <h2 className="footer-sec-email">sathwa26@gmail.com</h2>
        </div>

        {/* Organized By */}
        <div className="footer-sec-card organized-card">
          <div className="organized-header">
            <p className="footer-sec-label-small">ORGANIZED BY</p>
            <h3 className="organized-title">SATHWA</h3>
            {/* <p className="organized-subtitle">Dept of Computer Science</p> */}
            <p className="organized-subtitle">
              College of Engineering Muttathara
            </p>
            <p className="organized-subtitle">Trivandrum</p>
          </div>
          {/* <div className="organized-logos">
                        <div className="logo-placeholder code-logo">Code</div>
                        <div className="logo-placeholder cce-logo">CCE</div>
                    </div> */}

          <div className="divider-horizontal"></div>

          {/* Quick Links Section */}
          <div className="quick-links-section">
            <p className="footer-sec-label-small centered">QUICK LINKS</p>
            <div className="links-grid">
              <div className="links-column">
                <Link href="/">Home</Link>
                {/* <Link href="/events">Events</Link> */}
                <Link href="/workshops">Workshops</Link>
                <Link href="/competitions">Competitions</Link>
                {/* <Link href="/team">Team</Link> */}
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>

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
            {/* <h4 className="coordinator-name">Nill</h4> */}
            {/* <a href="tel:+910000000000" className="coordinator-phone">+91 00000 00000</a> */}

            <h4 className="coordinator-name mt-small">Deepak Das K</h4>
            <a href="tel:+918139001416" className="coordinator-phone">
              +91 81390 01416
            </a>
          </div>
        </div>

        <div className="social-section">
          <p className="footer-sec-label">SOCIAL MEDIA:</p>
          <div className="social-icons">
            <Link
              href="https://instagram.com/sathwa_cem"
              className="social-icon-btn"
            >
              <FaInstagram />
            </Link>
            {/* <Link href="https://linkedin.com" className="social-icon-btn">
                            <FaLinkedinIn />
                        </Link> */}
            <Link
              href="https://youtube.com/@sathwa26"
              className="social-icon-btn"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div className="footer-sec-bottom">
          <p className="copyright-text">© SATHWA'26. ALL RIGHTS RESERVED.</p>
          <p className="developer-text">
            DESIGNED & DEVELOPED BY <span className="dev-name">MakeITShip</span>
          </p>
        </div>
      </div>

      {/* <button type="button" className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                <MdArrowUpward />
            </button> */}
    </footer>
  );
};

export default FooterSecondary;
