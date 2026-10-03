# Validation

Replace `REPLACE_RAW_BASE` with `https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPOSITORY/main` (or your actual branch) before publishing.

## External HTML validation

The production entry shell and six React-rendered view snapshots were checked with the W3C Nu HTML Checker. Final results: **seven documents, zero errors and zero warnings**.

Author name/student ID were replaced in temporary copies before the external check. The original project files were left unchanged. The replacement affects only text, not structure. Rendered snapshots are important because checking only the Vite entry HTML would not inspect the markup produced by React.

![HTML validation results](REPLACE_RAW_BASE/docs/evidence/html-validation-results.png)

[Actual HTML response summary](REPLACE_RAW_BASE/docs/evidence/html-validation-summary.json)

The evidence screenshot is a clearly labeled local report of the actual validator API responses. The individual `*-w3c.json` files contain the responses. It does not imitate the validator website interface.

The checks identified and resolved invalid ARIA labels on generic elements, a skipped product-heading level, and the inappropriate `street-address` autocomplete value for a single-line input. Named groups/status/image roles and context-aware card headings are now used; the single-line street input uses `address-line1`.

## External CSS validation

`src/App.css` was checked with the W3C CSS Validation Service. It returned **validity true, zero errors and two warnings**.

![CSS validation results](REPLACE_RAW_BASE/docs/evidence/css-validation-results.png)

[Actual W3C CSS response](REPLACE_RAW_BASE/docs/evidence/css-validation.xml)

Both warnings concern equal background/border colors on `.layout-filter.selected` and `.option-button.selected`. These matches are intentional for solid selected buttons; foreground text remains contrasting. No syntax error was reported. Bootstrap's distributed stylesheet is third-party library code; the external CSS check covers the project's custom stylesheet.

## Functional and mobile checks

The final production build succeeded. A headless Chromium verification recorded **73 passing checks and no runtime/console errors**. It covered:

- All 25 products across 10/10/5 pagination and layout filtering.
- Required color/switch selection and rejection of zero, fractional, or out-of-stock quantities.
- Merging identical variants, keeping different variants separate, cart quantity controls, removing items, empty cart, derived count and subtotal, and stock limits across variants.
- Empty, partial, malformed and valid Create Account entries, including provided optional fields, plus sign-in validation.
- Invalid-product recovery and all required views at 1440px, 768px, 390px and 320px without horizontal overflow or broken images.
- Opening and closing the vertical mobile menu.

[Functional check record](REPLACE_RAW_BASE/docs/evidence/functional-checks.json)

A separate static-server check verified that the production files load from `project1/index.html`, that relative JS/CSS/images resolve, and that direct product hash links survive reload. This simulates the deployment path; the actual Google Cloud URL still needs a final check after upload.

[Subfolder check record](REPLACE_RAW_BASE/docs/evidence/subfolder-check.json)

Revalidate and update screenshots if the source changes. Testing one Chromium environment does not establish compatibility with every browser or device.
