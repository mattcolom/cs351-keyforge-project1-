# KeyForge — Project 1

**Matt Coloma · ov2196 · CS 351**

**Live site:** REPLACE_DEPLOYED_URL  
**Repository:** REPLACE_REPOSITORY_URL

KeyForge is a fictitious storefront that sells 25 mechanical keyboards. The application uses React, JSX, CSS, Bootstrap 5, and client-side ES6 JavaScript. All product data is in `src/data/products.json`. No database, Express server, payment processing, or real authentication is used.

## Architecture

`index.html` loads `src/main.jsx`, which mounts `App`. `App` keeps the current hash route and the shared shopping cart in React state. It renders the persistent Navbar/Footer and one of six views:

| View | Purpose |
|---|---|
| HomeView | Store introduction, product artwork, and featured keyboards |
| ShopView | Full collection, layout filters, and 10-product pagination |
| ProductDetailView | Selected keyboard, specifications, required options, quantity, Add to Cart |
| AccountView | Validated sign-in demonstration and Create Account link |
| CreateAccountView | Validated required and optional account fields |
| CartView | Cart items, selected options, quantities, and subtotal |

## Reusable components and props

- **ProductList:** Receives the full `products` array, display options, and pagination settings. It uses `.map()` to create a ProductCard for each product in the current display. Every catalog product is reachable across the three Shop pages.
- **ProductCard:** Receives one product object through props. It displays image, layout, connectivity, rating, name, description, price, and color count. In detailed mode it displays the selected product and hosts the product-option form through `children`.
- **Cart:** Receives `cartItems`, products, and action callbacks as props. It uses `.map()` to produce reusable CartItem components and derives count/subtotal from the array.
- **CartItem:** Displays name, image, color, switch type, quantity, unit price, and line total. Callback props update quantity or remove the line.
- **Navbar:** Receives view and derived cart count. Its own state controls the mobile navigation menu.
- **AccountForm:** A shared form component that changes required fields based on the `create` prop.
- **Footer/Icon:** Shared site navigation, attribution, and interface icons.

## State and events

`App` owns `cartItems` using `useState`, so navigation, product details, and cart views share one source of truth. Adding an identical product/color/switch selection increases that line's quantity; another selection creates another line. Inventory limits are checked across all variants of the same product. Cart count is the sum of quantities, not the number of distinct lines. Subtotals and line totals use cent-based arithmetic.

ProductDetailView tracks selected color, switches, quantity, errors, and success feedback. Form submission checks required options and positive integer quantity before calling App's Add function. Cart callbacks use functional state updates and do not mutate existing arrays.

AccountForm uses controlled inputs and `validateAccount` for required username/password/email and provided optional US-format street/city/state/ZIP/phone values. `noValidate` lets the custom JavaScript errors demonstrate the assigned validation behavior. Errors are associated with fields, a summary is announced, and the first invalid input receives focus. Success clears credentials; it does not create a real account.

## Navigation and static deployment

Hash routes such as `#shop` and `#product/1` allow this single-page application to run on Google Cloud Storage without server route rewrites. Browser back/forward works through the hashchange listener. Vite's relative `base: './'` and the `asset` helper support a bucket subfolder. Node.js is only used locally to install/build; `dist` is static browser content.

The cart lasts while the SPA remains loaded. A page reload clears it, as permanent cart storage is outside this assignment.

## Design and CSS

Custom `src/App.css` is separate from JSX, following the course CSS materials. A consistent cream/charcoal/lime palette, shared button/form styles, aligned card structure, grouped options, and repeated navigation apply consistency, alignment, proximity, and repetition. Relative/absolute positioning layers artwork labels; the box model controls padding, borders, and spacing. Rem/clamp text sizes, focus indicators, reduced-motion support, alt text, and the skip link support usability.

Bootstrap's grid and responsive utilities supply layout. Custom CSS refines spacing and stacking on smaller screens. See the Mobile ready demo page for the specific classes and screenshots.

All keyboard products, commercial details and ratings are fictional. The SVG images are original illustrations of the catalog models, not product photographs. Selecting a finish changes the cart selection; the illustration remains the labeled display color.
