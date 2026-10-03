import { useEffect, useRef, useState } from "react";
import products from "./data/products.json";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomeView from "./views/HomeView.jsx";
import ShopView from "./views/ShopView.jsx";
import ProductDetailView from "./views/ProductDetailView.jsx";
import AccountView from "./views/AccountView.jsx";
import CreateAccountView from "./views/CreateAccountView.jsx";
import CartView from "./views/CartView.jsx";
import {
  cartCount,
  productCount,
  unitPrice,
  variantKey,
} from "./utils/store.js";

function readRoute() {
  const hash = window.location.hash.slice(1) || "home";
  const [view, id] = hash.split("/");
  return {
    view: [
      "home",
      "shop",
      "product",
      "account",
      "create-account",
      "cart",
    ].includes(view)
      ? view
      : "not-found",
    id: Number(id),
  };
}
export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [cartItems, setCartItems] = useState([]);
  const mainRef = useRef(null);
  const firstRender = useRef(true);
  useEffect(() => {
    const change = () => setRoute(readRoute());
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    document.title = `${route.view === "product" ? products.find((p) => p.id === route.id)?.name || "Product" : { home: "Mechanical keyboards", shop: "Shop keyboards", account: "Account", "create-account": "Create account", cart: "Your cart" }[route.view] || "Page not found"} | KeyForge`;
    window.scrollTo(0, 0);
    if (!firstRender.current) mainRef.current?.focus({ preventScroll: true });
    firstRender.current = false;
  }, [route.view, route.id]);
  const add = (product, color, switches, quantity) => {
    if (
      !product.colors.includes(color) ||
      !product.switches.includes(switches) ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      productCount(cartItems, product.id) + quantity > product.quantityInStock
    )
      return false;
    const key = variantKey(product.id, color, switches);
    setCartItems((current) => {
      if (
        productCount(current, product.id) + quantity >
        product.quantityInStock
      )
        return current;
      const exists = current.find((item) => item.key === key);
      return exists
        ? current.map((item) =>
            item.key === key
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [
            ...current,
            {
              key,
              productId: product.id,
              name: product.name,
              image: product.image,
              color,
              switches,
              quantity,
              unitPrice: unitPrice(product),
            },
          ];
    });
    return true;
  };
  const changeQuantity = (key, delta) =>
    setCartItems((current) => {
      const item = current.find((line) => line.key === key);
      if (!item) return current;
      const product = products.find((p) => p.id === item.productId);
      if (
        ![1, -1].includes(delta) ||
        item.quantity + delta < 1 ||
        productCount(current, item.productId) + delta > product.quantityInStock
      )
        return current;
      return current.map((line) =>
        line.key === key ? { ...line, quantity: line.quantity + delta } : line,
      );
    });
  const remove = (key) =>
    setCartItems((current) => current.filter((item) => item.key !== key));
  const product = products.find((p) => p.id === route.id);
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar view={route.view} count={cartCount(cartItems)} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {route.view === "home" && <HomeView products={products} />}
        {route.view === "shop" && <ShopView products={products} />}
        {route.view === "product" && (
          <ProductDetailView
            key={route.id}
            product={product}
            onAdd={add}
            available={
              product
                ? product.quantityInStock - productCount(cartItems, product.id)
                : 0
            }
          />
        )}
        {route.view === "account" && <AccountView />}
        {route.view === "create-account" && <CreateAccountView />}
        {route.view === "cart" && (
          <CartView
            cartItems={cartItems}
            products={products}
            onQuantity={changeQuantity}
            onRemove={remove}
          />
        )}
        {route.view === "not-found" && (
          <section className="container section-space">
            <h1>Page not found.</h1>
            <a href="#home" className="btn btn-dark">
              Return home
            </a>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
