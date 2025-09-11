import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          No-Coder
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About Us</Link>
        </li>{" "}
        <li>
          <HashLink smooth to="/login">
            Login
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
