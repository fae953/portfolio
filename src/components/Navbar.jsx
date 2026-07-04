import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.nav} ${
        scrolled ? styles.scrolled : styles.transparent
      }`}
    >
      <div className={styles.heading}>
        <img src="avatar.png" className={styles.logo} alt="logo" />
        <h1 className={styles.text}>Fathia</h1>
      </div>

      <div className={styles.links}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </div>

      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </div>
      )}
    </nav>
  );
}