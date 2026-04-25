"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/navbar.css";

const navLinks = [
  { href: "/",         label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog",     label: "Blog" },
  { href: "/vlog",     label: "Vlog" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>

      {/* BRAND */}
      <Link href="/" className="nav-brand">
        <div className="nav-logo-circle">HR</div>
        <span className="nav-brand-name">Hanane Risayindi</span>
        <span className="nav-sep" aria-hidden="true" />
        <span className="nav-brand-tagline">Pensée · Identité · Visibilité</span>
      </Link>

      {/* LIENS — centrés absolus comme Websait */}
      <ul className={`nav-links${menuOpen ? " nav-links--open" : ""}`}>
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`nav-link${pathname === l.href ? " nav-link--active" : ""}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://websait.com"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta-btn"
      >
        Websait →
      </a>

      {/* BURGER MOBILE */}
      <button
        className={`nav-burger${menuOpen ? " nav-burger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer" : "Menu"}
      >
        <span /><span /><span />
      </button>

    </nav>
  );
}