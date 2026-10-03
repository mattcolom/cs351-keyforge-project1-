import Cart from "../components/Cart.jsx";
import { cartCount } from "../utils/store.js";

export default function CartView(props) {
  const count = cartCount(props.cartItems);
  return (
    <section className="container section-space">
      <p className="eyebrow">GOOD CHOICES START HERE</p>
      <div className="section-heading">
        <h1>
          Your cart<span className="heading-count">{count}</span>
        </h1>
        <a href="#shop" className="text-link">
          Keep exploring
        </a>
      </div>
      <Cart {...props} />
    </section>
  );
}
