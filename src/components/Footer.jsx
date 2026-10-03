import Icon from "./Icon.jsx";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="brand">
            <Icon name="keyboard" /> keyforge.
          </a>
          <p>
            A little more feel.
            <br />A little more you.
          </p>
          <nav aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#account">Account</a>
            <a href="#cart">Cart</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KeyForge · Created by Matt Coloma</span>
          <span>
            Fictitious store · Illustrative products · No real purchases
          </span>
        </div>
      </div>
    </footer>
  );
}
