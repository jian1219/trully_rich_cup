import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CustomerPage.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="customerPageHeader">
      <div className="customerPageHeader__logo">
        <h1>☕ TRULLY RICH CUP</h1>
      </div>

      <nav className={`customerPageHeader__nav ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/coffee" onClick={() => setIsOpen(false)}>Coffee</Link>
        <Link to="/baristas" onClick={() => setIsOpen(false)}>Baristas</Link>
      </nav>

      {/* Hamburger */}
      <button
        className="customerPageHeader__menuToggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </header>
  );
}
