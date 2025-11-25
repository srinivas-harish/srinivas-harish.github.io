import React from "react";

function Navbar() {
  const handleThemeToggle = () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="brand" href="#top" aria-label="Home">
          Srinivas Harish
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#about">Experiences</a>
          <a href="#work">Systems</a>
          <a href="#contact">Contact</a>
          <a href="/public/resume.pdf" target="_blank" rel="noopener" className="resume">
            Resume
          </a>
          <button
            type="button"
            id="theme-toggle"
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
          >
            ●
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
