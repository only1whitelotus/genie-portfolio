import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ArrowUpRight, ArrowUp, Menu, X, MoveRight } from "lucide-react";
import { contact, socialLinks } from "../data/content";
import { usePreferences } from "./preferences";
import { Brand } from "./brand";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/films", label: "Films" },
  { to: "/lab", label: "Lab" },
  { to: "/about", label: "About" },
];

export function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  function close() {
    dialog.current?.close();
  }
  useEffect(() => {
    dialog.current?.close();
  }, [location.pathname]);
  useEffect(() => {
    const el = dialog.current;
    const restore = () => {
      setMenuOpen(false);
      document.body.style.overflow = "";
      opener.current?.focus();
    };
    el?.addEventListener("close", restore);
    return () => {
      el?.removeEventListener("close", restore);
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link
          className="brand-link"
          to="/"
          aria-label="The Creative Genie — Home"
        >
          <Brand compactOnMobile />
        </Link>
        <span className="header-caption mono">
          Independent creative
          <br />
          Design · Film · Code
        </span>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} viewTransition>
              {n.label}
              <span className="nav-dot" />
            </NavLink>
          ))}
        </nav>
        <Link className="header-contact" to="/contact" viewTransition>
          Let’s talk <ArrowUpRight size={17} />
        </Link>
        <button
          ref={opener}
          className="menu-trigger icon-button"
          aria-label="Open navigation"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMenuOpen(true);
            dialog.current?.showModal();
            document.body.style.overflow = "hidden";
          }}
        >
          <Menu />
        </button>
      </header>
      <dialog
        id="mobile-navigation"
        ref={dialog}
        className="menu-dialog"
        aria-label="Navigation"
      >
        <div className="menu-top">
          <Brand />
          <button
            className="icon-button"
            onClick={close}
            aria-label="Close navigation"
            autoFocus
          >
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {[...nav, { to: "/contact", label: "Contact" }].map((n, i) => (
            <Link key={n.to} to={n.to} onClick={close}>
              <span className="mono">0{i + 1}</span>
              {n.label}
              <ArrowUpRight />
            </Link>
          ))}
        </nav>
        <a className="menu-email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <p className="mono">One curious mind. Many ways to make.</p>
      </dialog>
    </>
  );
}

export function ContactBand() {
  return (
    <section
      id="contact"
      className="contact-band section-pad"
      aria-labelledby="contact-title"
    >
      <div className="section-kicker">
        <span className="status-dot" /> Have something in mind?
      </div>
      <Link to="/contact" viewTransition className="contact-heading">
        <h2 id="contact-title">
          Let’s make
          <br />
          <span>it happen.</span>
        </h2>
        <ArrowUpRight aria-hidden="true" />
      </Link>
      <div className="contact-band-bottom">
        <p>
          Brand. Film. Digital experience.
          <br />
          Or something we haven’t named yet.
        </p>
        <a className="text-link" href={`mailto:${contact.email}`}>
          {contact.email}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const { reduced, toggle } = usePreferences();
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link
          className="brand-link"
          to="/"
          aria-label="The Creative Genie — Home"
        >
          <Brand />
        </Link>
        <p>
          Akinola Akinjide.
          <br />
          The Creative Genie.
        </p>
        <div className="footer-socials">
          {socialLinks.map((s) => (
            <a href={s.href} key={s.label} target="_blank" rel="noreferrer">
              {s.label}
              <ArrowUpRight size={14} />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom mono">
        <span>© {new Date().getFullYear()} Akinola Akinjide</span>
        <button
          onClick={toggle}
          className="motion-toggle"
          aria-pressed={reduced}
        >
          <span className={`toggle-track ${reduced ? "" : "is-on"}`} />
          Reduce motion: {reduced ? "on" : "off"}
        </button>
        <a href="#top">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}

export function TextLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} viewTransition className={`text-link ${className}`}>
      {children}
      <ArrowUpRight size={20} />
    </Link>
  );
}
export function ButtonLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      to={to}
      viewTransition
      className={`button ${light ? "button-light" : ""}`}
    >
      {children}
      <MoveRight size={20} />
    </Link>
  );
}
