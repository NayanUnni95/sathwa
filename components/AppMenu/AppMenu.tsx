"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./AppMenu.css";

type AppMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

type MenuItem = {
  label: string;
  href: string;
};

const MENU_ITEMS: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Competitions", href: "/competitions" },
  { label: "Workshops", href: "/workshops" },
  { label: "Schedule", href: "/schedule" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/sathwa_cem";

const isItemActive = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

const panelVariants = {
  closed: {
    x: "100%",
    transition: {
      x: {
        duration: 0.74,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },
  open: {
    x: 0,
    transition: {
      x: {
        type: "spring" as const,
        stiffness: 340,
        damping: 34,
        mass: 0.9,
      },
      when: "beforeChildren" as const,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function AppMenu({ isOpen, onClose }: AppMenuProps) {
  const pathname = usePathname();
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const previousScrollbarCompensation = document.documentElement.style.getPropertyValue(
      "--app-scrollbar-compensation"
    );
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.style.setProperty("--app-scrollbar-compensation", `${scrollbarWidth}px`);
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      if (previousScrollbarCompensation) {
        document.documentElement.style.setProperty(
          "--app-scrollbar-compensation",
          previousScrollbarCompensation
        );
      } else {
        document.documentElement.style.removeProperty("--app-scrollbar-compensation");
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!portalTarget) {
    return null;
  }

  return createPortal(
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.div
          className="app-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.button
            type="button"
            className="app-menu-backdrop"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          <motion.aside
            className="app-menu-panel"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div className="app-menu-topbar" variants={itemVariants}>
              <button type="button" className="app-menu-close" onClick={onClose} aria-label="Close menu">
                <span />
                <span />
              </button>
            </motion.div>

            <nav className="app-menu-nav" aria-label="Primary">
              {MENU_ITEMS.map((item) => {
                const active = isItemActive(pathname, item.href);

                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="app-menu-link"
                      data-active={active}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div className="app-menu-footer" variants={itemVariants}>
              <p className="app-menu-socials-label">Socials</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="app-menu-social-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="app-menu-social-icon"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
                <span>Instagram</span>
              </a>
            </motion.div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    portalTarget
  );
}
