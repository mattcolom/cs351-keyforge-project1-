# KeyForge — CS 351 Project 1

**Author:** Matt Coloma  
**Student ID:** ov2196  
**Course:** CS 351 — Website Development  
**Assignment:** Individual React storefront, due October 2, 2026 at the start of class.

KeyForge is a fictitious mechanical keyboard store. It runs entirely in the browser, with 25 products, reusable components, selectable product options, a shared state-based cart, validated account forms, and responsive Bootstrap 5 layouts. No database, Express server, real authentication, payment, or permanent ordering is included.

## Start here

Read **[START-HERE.md](START-HERE.md)** for the steps Matt needs to complete: running the app, uploading the source to GitHub, deploying the built files to Google Cloud Storage, adding Wiki pages, recording the account-form video, and submitting the two URLs to Canvas.

## Run

Install Node.js LTS, open this folder in VS Code, then run:

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal. Leave the terminal running. Do not double-click `index.html` to run the React source.

## Production build

```bash
npm run build
npm run preview
```

Only the **contents of `dist/`** go to Google Cloud Storage. The source files and `package-lock.json` go to GitHub. Do not upload `node_modules`.

Node/npm/Vite are local development tools. The production app is static HTML, CSS, images, and client-side JavaScript; it has no Node.js backend.

## Project structure

```text
index.html                  HTML entry point
vite.config.js              React plugin and relative static asset paths
src/main.jsx                React entry, Bootstrap and CSS imports
src/App.jsx                 SPA navigation, shared cart state and cart actions
src/data/products.json      25 fictional keyboard products
src/components/             Reusable navigation, product, cart and form components
src/views/                  Home, Shop, Product Detail, Account, Create Account, Cart
src/utils/                  Currency/cart calculations and form validation
src/App.css                 Shared visual design and responsive overrides
public/images/              25 original SVG product illustrations
public/favicon.svg          KeyForge favicon
docs/wiki/                  Ready-to-edit GitHub Wiki page drafts
docs/evidence/              Local verification results and screenshots
```

## Key behavior

- `ProductList` receives the full product collection, filters/slices it for the current display, and uses `.map()` to render `ProductCard`s. Shop pagination is 10 + 10 + 5 products.
- `ProductCard` has a reusable detailed mode for the selected product. The detail form validates color, switches, and whole-number quantity before adding.
- `App` owns `cartItems` with `useState`. Identical product/color/switch selections merge; different selections form distinct lines.
- Stock limits apply to the **sum of all variants of a product**. Cart count and subtotal are derived from current state; currency calculations use cents.
- `Cart` receives the cart array and uses `.map()` to render reusable `CartItem`s. Each supports +, −, and Remove. Minimum quantity is 1.
- `AccountForm` validates username/password and, for Create Account, email. Provided optional US address/phone fields are validated too.
- Account forms show an explicitly labeled demo result, clear the password, and never store or transmit credentials.
- Hash navigation (`#shop`, `#product/1`, etc.) supports browser history without a server rewrite configuration. Cart state persists between views but resets on a full page reload.
- Bootstrap supplies grid, responsive navbar structure, utilities, forms, buttons and alerts. React state controls the mobile menu instead of Bootstrap's imperative JavaScript plugin.

## Disclosure

AI-assisted project development is documented in `docs/wiki/Templates-and-other-code.md`. Review that disclosure and update it honestly before submission. No downloaded storefront template or third-party product photos were used. All products, ratings, stock levels and commercial claims are fictional; artwork is illustrative.

## Remaining submission tasks

The local package is not a deployed website or a published GitHub repository. Add your actual URLs to the Wiki and submission draft, publish the Wiki, record the required form-validation demo, and check the deployed website in a private/incognito window before submitting.
