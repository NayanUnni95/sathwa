"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiMail, FiPhone, FiYoutube } from "react-icons/fi";
import "./FooterModern.css";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Workshops", href: "/workshops" },
  { label: "Competitions", href: "/competitions" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];

const STUDENT_COORDINATORS = [
  { name: "Deepak Das K", phone: "+91 81390 01416", href: "tel:+918139001416" },
  { name: "Jeswin AJ", phone: "+91 70127 21738", href: "tel:+917012721738" },
];

export default function FooterModern() {
  return (
    <footer className="footer-modern">
      <div className="footer-modern__shell">
        <div className="footer-modern__top">
          <section className="footer-modern__brand">
            <p className="footer-modern__logo">SATHWA</p>
            <p className="footer-modern__address">
              College of Engineering Muttathara, Trivandrum
            </p>

            <div className="footer-modern__logos">
              <div className="footer-modern__logo-tile">
                <Image
                  src="/assets/sathwa-short-logo-white.png"
                  alt="Sathwa logo"
                  width={54}
                  height={54}
                  className="footer-modern__logo-image"
                />
              </div>
              <div className="footer-modern__logo-tile">
                <Image
                  src="/assets/cem_logo.png"
                  alt="College of Engineering Muttathara logo"
                  width={54}
                  height={54}
                  className="footer-modern__logo-image"
                />
              </div>
            </div>
          </section>

          <nav className="footer-modern__column" aria-label="Quick links">
            <p className="footer-modern__eyebrow">Quick Links</p>
            <div className="footer-modern__links">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-modern__link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <section className="footer-modern__column">
            <p className="footer-modern__eyebrow">Faculty Coordinator</p>
            {/* <p className="footer-modern__name">Dr. Anoop Sivasankar</p>
            <a href="tel:+919446747253" className="footer-modern__contact-link">
              <FiPhone aria-hidden="true" />
              <span>+91 94467 47253</span>
            </a> */}
            <div className="footer-modern__person">
              <p className="footer-modern__name">Dr. Anoop Sivasankar</p>
              <a
                href="tel:+919446747253"
                className="footer-modern__contact-link"
              >
                <FiPhone aria-hidden="true" />
                <span>+91 94467 47253</span>
              </a>
            </div>
          </section>

          <section className="footer-modern__column">
            <p className="footer-modern__eyebrow">Student Coordinators</p>
            <div className="footer-modern__people">
              {STUDENT_COORDINATORS.map((coordinator) => (
                <div key={coordinator.name} className="footer-modern__person">
                  <p className="footer-modern__name">{coordinator.name}</p>
                  <a
                    href={coordinator.href}
                    className="footer-modern__contact-link"
                  >
                    <FiPhone aria-hidden="true" />
                    <span>{coordinator.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="footer-modern__middle">
          <a href="mailto:sathwa26@gmail.com" className="footer-modern__mail">
            <FiMail aria-hidden="true" />
            <span>SATHWA26@GMAIL.COM</span>
          </a>

          <div className="footer-modern__socials">
            <a
              href="https://www.instagram.com/sathwa_cem"
              target="_blank"
              rel="noreferrer"
              className="footer-modern__social"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.youtube.com/@sathwa26"
              target="_blank"
              rel="noreferrer"
              className="footer-modern__social"
              aria-label="YouTube"
            >
              <FiYoutube />
            </a>
          </div>

          <p className="footer-modern__credits">
            Designed & developed by{" "}
            <a
              href="https://www.instagram.com/_.n4y4n"
              target="_blank"
              rel="noreferrer"
              className="footer-modern__credit-link"
            >
              Nayan
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/mr.clifin._.12"
              target="_blank"
              rel="noreferrer"
              className="footer-modern__credit-link"
            >
              Clifin
            </a>{" "}
            &{" "}
            <a
              href="https://www.instagram.com/aswinvs_123"
              target="_blank"
              rel="noreferrer"
              className="footer-modern__credit-link"
            >
              Aswin
            </a>
          </p>
        </div>
      </div>

      <div className="footer-modern__bottom">
        <p>
          &copy; <strong>SATHWA 2026</strong>. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
