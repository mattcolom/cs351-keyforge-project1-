import CartItem from "./CartItem.jsx";
import Icon from "./Icon.jsx";
import { cartCount, money, productCount, subtotal } from "../utils/store.js";

export default function Cart({ cartItems, products, onQuantity, onRemove }) {
  const count = cartCount(cartItems);
  if (!cartItems.length)
    return (
      <div className="empty-cart">
        <span className="empty-icon">
          <Icon name="cart" size={36} />
        </span>
        <h2>Your next favorite keyboard is out there.</h2>
        <p>Your cart is empty. Find something that fits your desk.</p>
        <a href="#shop" className="btn btn-dark btn-lg">
          Explore keyboards
        </a>
      </div>
    );
  return (
    <div className="row g-4 g-lg-5">
      <div className="col-lg-8">
        <div className="cart-column-labels">
          <span>KEYBOARD</span>
          <span>QUANTITY / TOTAL</span>
        </div>
        {cartItems.map((item) => (
          <CartItem
            key={item.key}
            item={item}
            onQuantity={onQuantity}
            onRemove={onRemove}
            canIncrease={
              productCount(cartItems, item.productId) <
              products.find((p) => p.id === item.productId).quantityInStock
            }
          />
        ))}
      </div>
      <aside className="col-lg-4">
        <div className="order-summary">
          <p className="eyebrow">YOUR SELECTION</p>
          <h2>Cart summary</h2>
          <dl>
            <div>
              <dt>Items</dt>
              <dd aria-live="polite">{count}</dd>
            </div>
            <div className="subtotal">
              <dt>Subtotal</dt>
              <dd aria-live="polite">{money(subtotal(cartItems))}</dd>
            </div>
          </dl>
          <p>Taxes and shipping are not included.</p>
          <div className="demo-note">
            This is a storefront demo. Checkout and payment are not available.
          </div>
          <a href="#shop" className="btn btn-dark w-100">
            Continue shopping
          </a>
        </div>
      </aside>
    </div>
  );
}
