import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className={styles.mobileBar}>
        <button
          className={styles.hamburger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <Link to="/" className={styles.brand}>
          No-Coder
        </Link>
      </div>

      {/* Overlay for mobile */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
        onClick={close}
      />

      {/* Sidebar / Drawer */}
      <nav className={`${styles.navbar} ${open ? styles.open : ""}`}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            No-Coder
          </Link>
        </div>

        <ul className={styles.navLinks} onClick={close}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About Us
            </HashLink>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
