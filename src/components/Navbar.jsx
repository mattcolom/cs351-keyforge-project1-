import { useState } from "react";
import Icon from "./Icon.jsx";

export default function Navbar({ view, count }) {
  const [expanded, setExpanded] = useState(false);
  const close = () => setExpanded(false);
  return (
    <header className="site-header">
      <div className="announcement">
        Thoughtfully built. Exceptionally tactile.
      </div>
      <nav
        className="navbar navbar-expand-md container py-3"
        aria-label="Main navigation"
      >
        <a className="navbar-brand brand" href="#home" onClick={close}>
          <span className="brand-mark">
            <Icon name="keyboard" size={24} />
          </span>{" "}
          keyforge<span className="brand-period">.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="main-navigation"
          aria-expanded={expanded}
          aria-label={expanded ? "Close navigation" : "Open navigation"}
        >
          <Icon name={expanded ? "close" : "menu"} />
        </button>
        <div
          id="main-navigation"
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
        >
          <div className="navbar-nav mx-auto gap-md-4">
            <a
              className={`nav-link ${view === "home" ? "active" : ""}`}
              aria-current={view === "home" ? "page" : undefined}
              href="#home"
              onClick={close}
            >
              Home
            </a>
            <a
              className={`nav-link ${["shop", "product"].includes(view) ? "active" : ""}`}
              aria-current={view === "shop" ? "page" : undefined}
              href="#shop"
              onClick={close}
            >
              Shop keyboards
            </a>
          </div>
          <div className="navbar-nav gap-md-3">
            <a
              className={`nav-link nav-icon ${["account", "create-account"].includes(view) ? "active" : ""}`}
              href="#account"
              onClick={close}
            >
              <Icon name="user" size={20} /> Account
            </a>
            <a
              className={`nav-link nav-icon ${view === "cart" ? "active" : ""}`}
              href="#cart"
              onClick={close}
            >
              <Icon name="cart" size={20} /> Cart{" "}
              <span
                className="cart-count"
                role="status"
                aria-label={`${count} items`}
              >
                {count}
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
