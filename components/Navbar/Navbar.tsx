"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import AppMenu from "@/components/AppMenu/AppMenu";
import "./Navbar.css";

type NavLink = {
  label: string;
  href: string;
};

const DESKTOP_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - previousScrollY;

      if (currentScrollY <= 16) {
        setIsHidden(false);
      } else if (Math.abs(delta) > 6) {
        setIsHidden(delta > 0);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsHidden(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="nav-shell" data-hidden={isHidden && !isMenuOpen}>
        <div className="nav-left">
          <Link href="/" className="nav-logo-link" aria-label="Go to home page">
            <Image
              src="/assets/sathwa-short-logo-white.png"
              alt="Sathwa"
              width={80}
              height={80}
              className="nav-logo"
              priority
            />
          </Link>
        </div>

        <nav className="nav-center" aria-label="Desktop navigation">
          {DESKTOP_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={isActivePath(pathname, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          <button
            type="button"
            className="nav-menu-button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <span className="nav-menu-text">Menu</span>
            <HiOutlineBars3 className="nav-menu-icon" aria-hidden="true" />
          </button>
        </div>
      </header>

      <AppMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
