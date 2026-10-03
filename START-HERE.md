# Matt's steps — finish and submit KeyForge

**Due: Friday, October 2, 2026, at the start of class. Individual submission.**

The project code is prepared. You need to run/review it, put the source on your GitHub, upload the built site to Google Cloud, publish the Wiki, record the validation demonstration, and submit the URLs. Work through this guide in order.

## 1. Run the project on your computer

1. Download and unzip `KeyForge-Source.zip`.
2. Open the extracted `keyforge` folder in VS Code. You should see `package.json`, `src`, `public`, and this guide directly inside that folder.
3. If Node.js is not installed, get the **LTS** installer from [nodejs.org](https://nodejs.org/en/download), install it, and restart VS Code. Node is used only for local development/building; the storefront does not use a backend.
4. In VS Code choose **Terminal → New Terminal**. Check the terminal is inside the folder containing `package.json`.
5. Run each command separately:

```bash
npm ci
```

```bash
npm run dev
```

6. Open the local URL printed in the terminal, normally `http://localhost:5173/`.
7. Leave the terminal running while using the app. Stop it with **Control+C** when finished.

**If `npm` is not found:** install Node.js and reopen VS Code.  
**If `package.json` is not found:** the terminal is in the wrong folder; open the extracted `keyforge` folder, not its parent.  
**If the page is blank after double-clicking HTML:** run through the terminal instead.  
**If a port is occupied:** Vite prints another available port; open the URL it actually prints.

## 2. Review these things yourself

- Home → Shop → click Studio 75.
- Click Add to Cart without options to see errors.
- Select Chalk, Linear switches, and quantity 2. Add to Cart.
- Add the same selection again; it should merge into one line.
- Add Graphite with Tactile switches; it should make a separate line.
- Open Cart; use +, −, and Remove. Check the item count and subtotal.
- Open Account → Create Account; submit empty and partial forms, then valid sample data.
- Narrow the browser or use Chrome DevTools' phone view; open the hamburger menu and check the vertical navigation.

Use sample details, not a real password. Cart contents reset on refresh; this is expected for the assignment.

## 3. Upload the React SOURCE to GitHub

The GitHub repository must contain the complete project source, not only the built site.

**Easy browser method:**

1. Sign in to [GitHub](https://github.com/) and create a repository named `cs351-keyforge-project1`.
2. Make it **public** if your course permits this; GitHub Free supports Wikis in public repositories. If you use private, make sure your professor can access both the source and Wiki.
3. Choose **Add file → Upload files** (or the uploading-files link for a new repository).
4. Drag the source project's files/folders into the upload area: `src`, `public`, `docs`, `package.json`, `package-lock.json`, `vite.config.js`, `index.html`, `README.md`, `START-HERE.md`, and `.gitignore` if visible.
5. Do not upload `node_modules`. Do not upload the deployment ZIP or the source ZIP as a substitute for actual source files.
6. Commit the files and copy the repository URL.

If the web upload limit is reached, upload folders in separate batches or use GitHub Desktop. Verify the repository opens to the project files and not an extra nesting folder.

## 4. Upload the BUILT SITE to Google Cloud Storage

Use `KeyForge-Google-Cloud.zip` if you have not modified the code. It contains the ready-to-upload production files.

If you changed code, run `npm run build`, then use the newly generated `dist` contents instead.

**Use a `project1` folder inside your course bucket to keep this project at its own URL.**

1. Extract `KeyForge-Google-Cloud.zip`. Inside the extracted deployment folder you should see `index.html`, `favicon.svg`, `assets`, and `images`.
2. Open [Google Cloud Console](https://console.cloud.google.com/storage/browser), choose the correct Google Cloud project, and open your course bucket.
3. In the Objects tab create/open a folder named `project1`.
4. Inside `project1`, use **Upload files** for `index.html` and `favicon.svg`.
5. Use **Upload folder** for `assets` and `images`, preserving those folder names.
6. The final object paths must look like this:

```text
project1/index.html
project1/favicon.svg
project1/assets/index-....js
project1/assets/index-....css
project1/images/keyboard-01.svg
...all 25 image files...
```

7. Use the public URL of `project1/index.html`. Its usual shape is:

```text
https://storage.googleapis.com/YOUR-BUCKET-NAME/project1/index.html
```

8. Open that URL in an **incognito/private window**. Check images and navigation, including a direct URL ending in `#product/1`.

### If Google Cloud shows AccessDenied / 403

Public reading must be allowed for the website objects. For a bucket containing only public course-site files, the standard Console flow is **Permissions → Grant access → New principals: `allUsers` → Role: Storage Object Viewer → Save → Allow public access**. This makes all objects in that bucket publicly readable, so use a dedicated website bucket if it contains private files.

If **Public access prevention** blocks that grant, check the bucket's Permissions settings. If an organization policy enforces it, you cannot override that yourself; use the permitted course/personal-project setup or ask your instructor. Do not grant `allUsers` Storage Admin.

### If the old version appears

Use the exact `project1/index.html` URL and try a hard refresh or add a query string **before** the hash, for example:

```text
.../project1/index.html?v=2#shop
```

When updating, upload the new `assets` first, then `index.html`. Keep previous hashed assets until the new page is working. Do not upload the raw `src` folder to Google Cloud as the live site.

## 5. Finish HTML/CSS validation evidence

The package includes actual external HTML/CSS validation responses, clearly labeled report screenshots, local check results, and rendered HTML snapshots in `docs/evidence`. Review the results: HTML has zero errors/warnings; CSS has zero errors and two explained design warnings. If you change the app, repeat validation.

To repeat validation or capture the validator website interface itself:

1. Open [W3C Nu HTML Checker](https://validator.w3.org/nu/).
2. Use file upload for `docs/evidence/rendered-home.html` and the other rendered view snapshots. These contain the actual HTML generated by React. Validating only `index.html` checks the entry shell, not all React-rendered views.
3. Validate the deployed `index.html` URL too to check the production entry page.
4. Open [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Upload `src/App.css` or paste it into direct input. Review any warnings; save a screenshot of the result.
5. Save screenshots in `docs/evidence`, upload them to GitHub, and link them from the Wiki Validation page. If errors appear after an edit, send the results so we can fix them.

## 6. Publish the five GitHub Wiki pages

**Files inside `docs/wiki` are drafts. They do not automatically create a GitHub Wiki.**

1. Open your GitHub repository → **Wiki** → create the first page.
2. Create the pages below and paste the corresponding Markdown file contents.
3. Replace every `REPLACE_...` value with your real repository/deployment/video URL. Search the Wiki drafts for `REPLACE_` before submitting.
4. Use screenshots already included in `docs/evidence`; you can add new ones taken from your deployed site.
5. Save each page. Open the links to ensure they work.

| Wiki page title | File to copy |
|---|---|
| Home | `docs/wiki/Home.md` |
| Validation | `docs/wiki/Validation.md` |
| Mobile ready demo | `docs/wiki/Mobile-ready-demo.md` |
| CreateAccount demo | `docs/wiki/CreateAccount-demo.md` |
| Templates and other code | `docs/wiki/Templates-and-other-code.md` |

If Wiki is missing, check repository Settings → Features → Wikis and the plan/visibility requirements. Your course requires a Wiki, so source Markdown alone is not the final deliverable.

## 7. Record the Create Account demo

A roughly 1–2 minute screen recording is enough to show the required cases.

On a Mac: **Shift+Command+5 → record a selected portion**. On Windows, use the screen-recording feature available on your machine.

Follow `docs/DEMO-SCRIPT.md`. Show **empty → partial → invalid optional fields → fully valid submission**. Use sample details, not personal information. The site explicitly shows this is a demo account.

Upload the recording to YouTube as **Unlisted**, or upload the video to the GitHub repository as the assignment allows. Place the accessible link on the CreateAccount demo Wiki page. Test the link while signed out.

## 8. Submit to Canvas

Open **Canvas → Assignments → Project 1**. Submit both:

- Your complete GitHub repository URL.
- Your working Google Cloud deployed website URL.

Use `docs/CANVAS-SUBMISSION.md` as the text draft. Replace its placeholders, include the Wiki URL, and preserve the resource/AI disclosure. Do not submit localhost URLs.

### Final checklist

- [ ] Website URL loads while signed out.
- [ ] All 25 products are reachable.
- [ ] Product options and quantity validation work.
- [ ] Cart count, quantity controls, removal, and totals work.
- [ ] Account/Create Account validation works.
- [ ] Mobile navigation changes to a vertical menu.
- [ ] GitHub includes React source and excludes `node_modules`.
- [ ] Five Wiki pages are published and placeholders are removed.
- [ ] Included HTML/CSS validation screenshots and raw results are linked in the Wiki.
- [ ] Create Account recording is linked and accessible.
- [ ] Canvas contains both URLs and resource references.

## Official references

- [Node.js downloads](https://nodejs.org/en/download)
- [Vite production build](https://vite.dev/guide/build)
- [Google Cloud website upload](https://docs.cloud.google.com/storage/docs/hosting-static-website-http)
- [Google Cloud public object access](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- [GitHub Wiki editing](https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)
- [HTML validator](https://validator.w3.org/nu/)
- [CSS validator](https://jigsaw.w3.org/css-validator/)
