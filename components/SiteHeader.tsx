"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Page =
  | "home"
  | "technology"
  | "solutions"
  | "signals"
  | "about"
  | "careers"
  | "contact";

type NavItem = {
  href: string;
  label: string;
  page: Page;
  sup?: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", page: "home" },
  { href: "/technology", label: "Technology", page: "technology" },
  { href: "/#solutions", label: "Solutions", page: "solutions", sup: "(4)" },
  { href: "/signals", label: "Signals", page: "signals" },
  { href: "/about", label: "About", page: "about" },
  { href: "/careers", label: "Careers", page: "careers", sup: "(7)" },
  { href: "/contact", label: "Contact", page: "contact" },
];

export default function SiteHeader({
  currentPage = "home",
  withBorder = false,
}: {
  currentPage?: Page;
  withBorder?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", open);
    return () => {
      document.body.classList.remove("drawer-open");
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className={`topbar${withBorder ? " with-border" : ""}`}>
        <Link href="/" className="brand">
          <span className="brand-mark"></span>sumora<span className="reg">®</span>
        </Link>
        <div className="topbar-right">
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobileDrawer"
            aria-expanded={open}
            type="button"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        className={`drawer-backdrop${open ? " open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      ></div>
      <aside
        className={`drawer${open ? " open" : ""}`}
        id="mobileDrawer"
        aria-hidden={!open}
        aria-labelledby="drawerLabel"
      >
        <div className="drawer-inner">
          <div className="drawer-head">
            <span className="drawer-eyebrow" id="drawerLabel">
              // MENU
            </span>
            <button
              className="drawer-close"
              aria-label="Close menu"
              type="button"
              onClick={() => setOpen(false)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className="drawer-nav">
            {navItems.map((item) => {
              const isActive = item.page === currentPage;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {isActive ? <em>{item.label}</em> : item.label}
                  {item.sup ? <sup>{item.sup}</sup> : null}
                </Link>
              );
            })}
          </nav>
          <div className="drawer-foot">
            <a
              href="mailto:hello@sumorahealth.com"
              className="drawer-email"
            >
              hello@sumorahealth.com
            </a>
            <span className="drawer-addr">Downtown Dubai · UAE</span>
          </div>
        </div>
      </aside>
    </>
  );
}
