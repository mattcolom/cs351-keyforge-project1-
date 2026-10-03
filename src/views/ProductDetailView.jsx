import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Icon from "../components/Icon.jsx";

export default function ProductDetailView({ product, onAdd, available }) {
  const [color, setColor] = useState("");
  const [switches, setSwitches] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  if (!product)
    return (
      <section className="container section-space">
        <h1>Keyboard not found.</h1>
        <a href="#shop" className="btn btn-dark">
          Back to shop
        </a>
      </section>
    );
  const add = (event) => {
    event.preventDefault();
    setNotice("");
    const nextErrors = {};
    if (!product.colors.includes(color)) nextErrors.color = "Choose a color.";
    if (!product.switches.includes(switches))
      nextErrors.switches = "Choose a switch type.";
    if (
      !Number.isInteger(Number(quantity)) ||
      Number(quantity) < 1 ||
      Number(quantity) > available
    )
      nextErrors.quantity = available
        ? `Enter a whole number from 1 to ${available}.`
        : "All available units are already in your cart.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const result = onAdd(product, color, switches, Number(quantity));
    if (result) {
      setNotice(
        `${quantity} ${Number(quantity) === 1 ? "keyboard" : "keyboards"} added to your cart.`,
      );
      setQuantity("1");
    } else setErrors({ quantity: "This quantity is no longer available." });
  };
  return (
    <section className="container section-space">
      <nav aria-label="Breadcrumb" className="breadcrumb-line">
        <a href="#home">Home</a>
        <span>/</span>
        <a href="#shop">Keyboards</a>
        <span>/</span>
        <span>{product.name}</span>
      </nav>
      <ProductCard product={product} detailed>
        <form onSubmit={add} noValidate className="product-form">
          <fieldset>
            <legend>
              Color{" "}
              <span className="text-muted">— {color || "select a finish"}</span>
            </legend>
            <div className="option-buttons">
              {product.colors.map((option) => (
                <button
                  className={`option-button ${color === option ? "selected" : ""}`}
                  key={option}
                  type="button"
                  aria-pressed={color === option}
                  onClick={() => {
                    setColor(option);
                    setNotice("");
                    setErrors({ ...errors, color: undefined });
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.color && (
              <p className="field-error" role="alert">
                {errors.color}
              </p>
            )}
          </fieldset>
          <label className="form-label" htmlFor="switch-type">
            Switch type <span aria-hidden="true">*</span>
          </label>
          <select
            className={`form-select ${errors.switches ? "is-invalid" : ""}`}
            id="switch-type"
            value={switches}
            onChange={(e) => {
              setSwitches(e.target.value);
              setNotice("");
              setErrors({ ...errors, switches: undefined });
            }}
            required
            aria-invalid={!!errors.switches}
            aria-describedby={
              errors.switches ? "switch-help switch-error" : "switch-help"
            }
          >
            <option value="">Choose your switches</option>
            {product.switches.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <p id="switch-help" className="form-text">
            Linear: smooth · Tactile: a gentle bump · Clicky: audible feedback
          </p>
          {errors.switches && (
            <p className="field-error" id="switch-error" role="alert">
              {errors.switches}
            </p>
          )}
          <div className="row g-3 align-items-end mt-1">
            <div className="col-4">
              <label className="form-label" htmlFor="quantity">
                Quantity
              </label>
              <input
                className={`form-control ${errors.quantity ? "is-invalid" : ""}`}
                id="quantity"
                type="number"
                min="1"
                max={Math.max(1, available)}
                step="1"
                required
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  setNotice("");
                }}
                aria-invalid={!!errors.quantity}
                aria-describedby={
                  errors.quantity ? "quantity-error" : undefined
                }
              />
            </div>
            <div className="col-8">
              <button
                className="btn btn-dark w-100 add-button"
                type="submit"
                disabled={available === 0}
              >
                <Icon name="cart" size={20} />{" "}
                {available === 0 ? "All units in cart" : "Add to cart"}
              </button>
            </div>
          </div>
          {errors.quantity && (
            <p className="field-error" id="quantity-error" role="alert">
              {errors.quantity}
            </p>
          )}
          <p className="stock-note">
            {available > 0
              ? `${available} available to add`
              : "No additional units available"}{" "}
            ·{" "}
            {product.freeShipping
              ? "Free shipping"
              : "Shipping calculated on future checkout"}
          </p>
          {notice && (
            <div className="alert alert-success mt-3" role="status">
              {notice}{" "}
              <a href="#cart" className="alert-link">
                View cart
              </a>
            </div>
          )}
        </form>
      </ProductCard>
      <div className="row g-4 detail-information">
        <div className="col-lg-5">
          <p className="eyebrow">GET TO KNOW YOUR KEYBOARD</p>
          <h2>Made for your everyday.</h2>
          <p>{product.longDescription}</p>
          <p className="small text-muted">
            The illustration shows {product.imageColor}; changing the finish
            selects your cart option.
          </p>
        </div>
        <div className="col-lg-7">
          <h2 className="spec-heading">The details</h2>
          <dl className="spec-grid">
            {[
              ["Layout", `${product.layout} · ${product.keyCount} keys`],
              ["Connectivity", product.connectivity.join(" / ")],
              ["Case", product.caseMaterial],
              ["Keycaps", product.keycapMaterial],
              ["Hot-swappable", product.hotSwappable ? "Yes" : "No"],
              [
                "Lighting",
                product.rgb ? "RGB backlighting" : "No backlighting",
              ],
              ["Battery", product.batteryLife],
              ["Weight", product.weight],
              ["Compatibility", product.compatibility.join(", ")],
              ["SKU", product.sku],
            ].map(([name, value]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
