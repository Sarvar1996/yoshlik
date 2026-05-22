# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static single-page marketing website for **Yoshlik-Yu**, a distribution and
construction company based in Tashkent, Uzbekistan. All user-facing content is in
Russian. There is no build system, no package manager, and no tests — the site is
plain HTML + CSS + jQuery served as static files.

## Running

Open `index.html` directly in a browser, or serve the directory statically so
relative asset paths and `presentation.pdf` resolve correctly:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Architecture

The entire page is `index.html`. It is organized as a sequence of `<section>`
blocks, each keyed by `id` (`#hero`, `#feature`, `#skills`, `#cta2`, `#team`,
`#footer9`). The fixed nav links to these ids.

### CSS layering (load order matters)

`index.html` links stylesheets in this order; later files override earlier ones:

1. `external.css`, `cons.css`, `bootstrap.min.css`, Font Awesome, Owl Carousel — vendor/theme
2. `style.css` — the purchased theme stylesheet (~3500 lines, do not edit lightly)
3. `site.css` — **project-specific overrides; make styling changes here.** Defines
   the brand palette via CSS variables in `:root` (`--main`, `--white`, etc.).

### JavaScript

`assets/js/functions.js` is the only custom script (jQuery 2.2.4, wrapped in an
IIFE). It is loaded after `jquery`, `plugins.js`, and before `owl.carousel.min.js`.
Key behaviors, in the order they appear:

- **Background insert** — an `<img>` nested inside a `.bg-section`, `.bg-pattern`,
  or `.col-bg` div is hoisted into the parent's CSS `background-image` and removed.
  To give a section a background image, nest the img in one of those divs.
- **Header affix** — `.navbar-fixed-top` becomes affixed after 50px scroll.
- **Smooth scroll** — anchors with `data-scroll="scrollTo"` animate-scroll to their
  target with a 100px top offset.
- **Nav-split active state** — on scroll, the nav link for the section currently in
  view gets the `active` class.
- **Owl Carousel** — `.partner-slider` is hard-configured (autoplay partner logos).
- **Scroll reveal** — an `IntersectionObserver` adds `is-active` to each
  `.js-reveal` element the first time it scrolls into view (once only, then
  unobserved). Drives the `#skills` timeline, the Fitness Distribution Pro panel,
  and the team cards; the matching transitions live in `site.css`.

### `#skills` — animated structure section

The "Структура" section is hand-built and animated, top to bottom: a year
timeline (`.timeline`, 1991→2025) ending in the "Fitness Distribution Pro" panel;
a company stat grid; an organisational chart (`.orgchart`); and three "Команды"
team cards. All markup is static in `index.html`; `site.css` holds the layout and
the reveal transitions, gated by the `.js-reveal` IntersectionObserver.

### Portfolio / Catalog (removed)

The "Каталог" `#portfolio` section is commented out in `index.html`, and its
images plus the `AllPortfolio` data array / Isotope rendering code have all been
deleted. The feature is fully retired — bringing a catalog back is new work.

## Conventions

- `.DS_Store` files are ignored via `.gitignore`.
- Vendor libraries (`OwlCarousel2-2.3.4/`, `font-awesome-4.7.0/`) are checked in
  verbatim under `assets/css/` — do not modify them.
