import ProductList from "../components/ProductList.jsx";
import Icon from "../components/Icon.jsx";
import { asset } from "../utils/store.js";

export default function HomeView({ products }) {
  return (
    <>
      <section className="home-hero container">
        <div className="row align-items-center g-0">
          <div className="col-lg-5 hero-copy">
            <p className="eyebrow">
              <span className="mini-line" /> FIND YOUR EVERYDAY KEYBOARD
            </p>
            <h1>
              A better feel.
              <br />
              Every keystroke.
            </h1>
            <p className="hero-description">
              For late-night ideas, first-place finishes, and everything in
              between. Meet a keyboard that feels like yours.
            </p>
            <a href="#shop" className="btn btn-dark btn-lg">
              Shop keyboards
            </a>
            <div className="hero-note">
              <Icon name="check" size={17} /> Hot-swappable switches. Made for
              your setup.
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-art">
              <span className="hero-outline" aria-hidden="true">
                75
              </span>
              <img
                src={asset(products[0].image)}
                alt="KeyForge Studio 75 mechanical keyboard in Chalk"
              />
              <div className="hero-product">
                <div>
                  <span className="eyebrow">THE EVERYDAY ORIGINAL</span>
                  <strong>Studio 75</strong>
                </div>
                <a href="#product/1" aria-label="Explore the Studio 75">
                  Explore
                </a>
              </div>
              <span className="hero-tag">SMALL FOOTPRINT. BIG FEEL.</span>
            </div>
          </div>
        </div>
      </section>
      <div className="benefits">
        <div className="container row mx-auto gy-3">
          <div className="col-md-4">
            <Icon name="keyboard" />
            <span>Switches that match your style</span>
          </div>
          <div className="col-md-4">
            <Icon name="box" />
            <span>Free shipping on marked products</span>
          </div>
          <div className="col-md-4">
            <Icon name="check" />
            <span>Windows, macOS & Linux ready</span>
          </div>
        </div>
      </div>
      <section className="container section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A GOOD PLACE TO START</p>
            <h2>Desk favorites.</h2>
          </div>
          <a href="#shop" className="text-link">
            View all 25 keyboards
          </a>
        </div>
        <ProductList products={products} featuredOnly pageSize={3} />
      </section>
      <section className="container mb-5">
        <div className="layout-story row g-0">
          <div className="col-md-6">
            <p className="eyebrow">LESS CLUTTER. MORE YOU.</p>
            <h2>
              Your desk.
              <br />
              Your layout.
            </h2>
            <p>
              Go compact with a 60% board, find your balance with 75%, or keep
              every key with a full-size layout.
            </p>
            <a href="#shop" className="btn btn-outline-dark">
              Find your fit
            </a>
          </div>
          <div
            className="col-md-6 layout-sizes"
            role="group"
            aria-label="Available layouts"
          >
            <span>60%</span>
            <span>65%</span>
            <span>75%</span>
            <span>TKL</span>
            <span>100%</span>
          </div>
        </div>
      </section>
    </>
  );
}
