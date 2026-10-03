import { asset, money } from "../utils/store.js";

export default function CartItem({ item, onQuantity, onRemove, canIncrease }) {
  return (
    <article className="cart-item">
      <a href={`#product/${item.productId}`} className="cart-item-image">
        <img src={asset(item.image)} alt={`${item.name} keyboard`} />
      </a>
      <div className="cart-item-info">
        <a href={`#product/${item.productId}`}>
          <h2>{item.name}</h2>
        </a>
        <p>
          {item.color} / {item.switches} switches
        </p>
        <p className="unit-price">{money(item.unitPrice)} each</p>
        <button
          className="remove-button"
          type="button"
          onClick={() => onRemove(item.key)}
          aria-label={`Remove ${item.name}, ${item.color}, ${item.switches}`}
        >
          Remove
        </button>
      </div>
      <div className="cart-item-controls">
        <div
          className="quantity-controls"
          role="group"
          aria-label={`${item.name} quantity`}
        >
          <button
            type="button"
            disabled={item.quantity <= 1}
            onClick={() => onQuantity(item.key, -1)}
            aria-label={`Decrease ${item.name} quantity`}
          >
            −
          </button>
          <span aria-live="polite">{item.quantity}</span>
          <button
            type="button"
            disabled={!canIncrease}
            onClick={() => onQuantity(item.key, 1)}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>
        <strong>
          {money((Math.round(item.unitPrice * 100) * item.quantity) / 100)}
        </strong>
        {!canIncrease && <small>Stock limit reached</small>}
      </div>
    </article>
  );
}
