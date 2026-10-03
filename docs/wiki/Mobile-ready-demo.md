# Mobile ready demo

**Before publishing:** Replace `REPLACE_RAW_BASE` with `https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPOSITORY/main` (or your actual branch). The evidence files must be uploaded to the source repository.

## Desktop

![Desktop home](REPLACE_RAW_BASE/docs/evidence/desktop-home.png)

![Desktop shop](REPLACE_RAW_BASE/docs/evidence/desktop-shop.png)

## Phone

![Mobile home](REPLACE_RAW_BASE/docs/evidence/mobile-home.png)

![Mobile menu open](REPLACE_RAW_BASE/docs/evidence/mobile-navigation.png)

![Mobile product detail](REPLACE_RAW_BASE/docs/evidence/mobile-product.png)

## How Bootstrap is used

- `container`, `row`, and `g-*` provide centered content, responsive rows and consistent gutters.
- Shop cards use `col-12 col-sm-6 col-lg-4`: one column on narrow screens, two at the small breakpoint, and three at large widths.
- The home hero uses `col-lg-5`/`col-lg-7`; the detail view uses `col-lg-7`/`col-lg-5`; these stack below the large breakpoint.
- Cart uses `col-lg-8`/`col-lg-4` for item list and summary, stacking on smaller screens.
- `navbar-expand-md` keeps desktop links horizontal at medium widths and above. Below that, React's `expanded` state adds/removes Bootstrap's `show` class on `collapse navbar-collapse`, opening a vertical navigation menu. The button exposes its state through `aria-expanded` and closes the menu after a link is selected.
- `d-flex`, `justify-content-between`, `align-items-center`, spacing, form and button classes supply reusable alignment and controls.

Bootstrap JavaScript is not imported; React owns the menu state, which avoids two systems changing the same DOM. Custom CSS media queries at 991px and 767px adjust hero sizing, cart rows, footer stacking, detail image height, and account-panel spacing. These changes supplement the Bootstrap grid.

The included local verification checks 1440px, 768px, 390px and 320px widths across all required views for horizontal overflow and broken images. Repeat a quick mobile check on the deployed URL before submission.

Reference: Bootstrap, “Grid system” and “Navbar,” https://getbootstrap.com/docs/5.3/layout/grid/ and https://getbootstrap.com/docs/5.3/components/navbar/, accessed Oct. 1, 2026.
