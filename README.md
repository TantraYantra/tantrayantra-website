# TantraYantra Website

The public home of **TantraYantra** and **DrishtiX** — a free, local-first
photo library for Windows with on-device face recognition.

Live at: <https://tantrayantra.github.io/tantrayantra-website/>

## Files

| File | Purpose |
|---|---|
| `index.html` | Single-page structure, copy, download links, FAQ, JSON-LD |
| `styles.css` | Premium dark theme, responsive layout, motion |
| `script.js` | Mobile navigation, sticky header, FAQ behaviour, scroll reveal |
| `assets/` | Approved TantraYantra and DrishtiX brand artwork |
| `robots.txt` | Search-engine directives |
| `sitemap.xml` | Single-page sitemap |

## Download link

The main call to action uses GitHub's constant "latest release" URL:

```text
https://github.com/TantraYantra/drishtix/releases/latest/download/DrishtiX-Setup.exe
```

The release asset must stay named `DrishtiX-Setup.exe`. Publishing a new
GitHub release updates the download automatically; no website change is needed.

## Edit the page

- **Download buttons:** search for `releases/latest/download` in `index.html`.
- **Version and size:** search for `v1.1.0`, `84 MB`, and `Windows 11 x64`.
- **FAQ:** edit the `<details>` blocks near the bottom of `index.html`.
- **Brand colours:** the design tokens are at the top of `styles.css`.

## Publish with GitHub Pages

1. Commit the updated files to the `main` branch of
   `TantraYantra/tantrayantra-website`.
2. GitHub Pages builds from `main` at the repository root.
3. The site appears at
   <https://tantrayantra.github.io/tantrayantra-website/>.

No build step, package manager, or framework is required.

## Brand and licensing

The DrishtiX and TantraYantra names, logos, and icons are brand assets and
are not covered by the MIT License of the application source. The DrishtiX
source code and licence are at
<https://github.com/TantraYantra/drishtix>.
