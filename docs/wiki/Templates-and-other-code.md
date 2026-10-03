# Templates and other code

## Disclosure

This project was developed with substantial assistance from ChatGPT/Codex. The AI assisted in planning and generating the React components/views, cart behavior, custom stylesheet, form-validation functions, fictional 25-product JSON catalog, original SVG keyboard illustrations/icons, build configuration, local functional checks, and documentation drafts. It also helped identify and correct problems during verification.

The main AI-assisted files are `src/App.jsx`, `src/components/*`, `src/views/*`, `src/utils/*`, `src/App.css`, `src/data/products.json`, `public/images/*`, `public/favicon.svg`, `vite.config.js`, and the documentation. This is not a claim that only spelling/grammar assistance was used.

**Matt's review:** REPLACE_WITH_A_TRUTHFUL_SUMMARY_OF_WHAT_YOU_PERSONALLY_REVIEWED_TESTED_OR_CHANGED.

For example, after actually doing these things: “I reviewed the component and cart flow, ran the site locally, tested empty/partial/valid account forms and cart controls, checked the phone layout, and completed the Google Cloud/GitHub uploads and demonstration.” Add your actual changes if you make any. Do not claim code authorship or manual checks that you did not perform.

## Libraries and how they work

| Resource | Use in the project | Custom work around it |
|---|---|---|
| React 19.1.0 / React DOM | Component rendering, props, controlled forms, events, useState, useEffect, refs | Application views, hash navigation, catalog rendering, shared cart actions, validation feedback |
| Bootstrap 5.3.3 CSS | Responsive grid, navbar structure, buttons, forms, utilities and alerts | Theme overrides in App.css and React-controlled mobile collapse |
| Vite 6.3.5 / React plugin | Local dev server, JSX transformation and production bundling | Relative base config for a Google Cloud subfolder; no server is deployed |
| W3C validators | HTML and CSS checks/evidence | Review of entry shell and rendered views, plus custom stylesheet |
| Google Cloud documentation | Static object upload and public-read setup | Deployment into the course bucket's project1 folder |
| GitHub documentation | Source repository and Wiki publishing workflow | Five assignment-specific Wiki drafts |

No downloaded storefront/CSS template, commercial product image collection, or copied third-party cart implementation was used. The interface uses Bootstrap class conventions with custom JSX/CSS. Product information and artwork are fictional and AI-assisted. The vector artwork was generated locally as SVG and is bundled with the source, so it does not depend on external image hosting.

Development-only verification used a headless Chromium browser with Playwright. These QA tools are not application dependencies and are not part of the browser storefront. Prettier was used to format the code. The course CSS slides were consulted for external stylesheets, class/id selectors, the box model, positioning, consistent layouts, and validation.

## IEEE-style references

[1] React, “React,” [Online]. Available: https://react.dev/. [Accessed: Oct. 1, 2026].

[2] React, “useState,” [Online]. Available: https://react.dev/reference/react/useState. [Accessed: Oct. 1, 2026].

[3] Bootstrap, “Grid system,” [Online]. Available: https://getbootstrap.com/docs/5.3/layout/grid/. [Accessed: Oct. 1, 2026].

[4] Bootstrap, “Navbar,” [Online]. Available: https://getbootstrap.com/docs/5.3/components/navbar/. [Accessed: Oct. 1, 2026].

[5] Vite, “Building for Production,” [Online]. Available: https://vite.dev/guide/build. [Accessed: Oct. 1, 2026].

[6] OpenAI, “ChatGPT,” [Online]. Available: https://chatgpt.com/. [Accessed: Oct. 1, 2026]. Used through Codex for the specific development assistance described above.

[7] W3C, “Nu Html Checker,” [Online]. Available: https://validator.w3.org/nu/. [Accessed: Oct. 1, 2026].

[8] W3C, “CSS Validation Service,” [Online]. Available: https://jigsaw.w3.org/css-validator/. [Accessed: Oct. 1, 2026].

[9] Google Cloud, “Hosting a static website using HTTP” and “Make data public,” [Online]. Available: https://docs.cloud.google.com/storage/docs/hosting-static-website-http and https://docs.cloud.google.com/storage/docs/access-control/making-data-public. [Accessed: Oct. 1, 2026].

[10] GitHub, “Adding or editing wiki pages,” [Online]. Available: https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages. [Accessed: Oct. 1, 2026].

[11] L. Grewe, “CSS” and “CSS more details,” CS 351 course lecture slides, CSU East Bay, provided as CSS(1).ppt and CSS_part2.ppt, consulted Oct. 1, 2026.

[12] Microsoft, “Playwright,” [Online]. Available: https://playwright.dev/. Development-only browser verification.

[13] Prettier, “Prettier,” [Online]. Available: https://prettier.io/. Development-only code formatting.
