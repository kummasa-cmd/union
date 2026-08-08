# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This repository currently contains only `requirements.md` — the full spec for a landing page that has not yet been built. There is no HTML/CSS/JS, no `package.json`, and no build tooling. When implementing, follow the file structure and content laid out in `requirements.md` (it is the single source of truth for copy, data, colors, and layout — read it in full before making structural decisions).

## Project Overview

A one-page, responsive marketing site for **Union (유니온)**, a Korean architecture/interior-construction firm. Static site, no backend, built with:

- HTML5 (semantic tags)
- CSS3 (Flexbox/Grid, CSS custom properties) — no CSS framework
- Vanilla JavaScript (ES6+) — no JS framework
- Google Fonts: Pretendard (body/Korean) + Playfair Display (English logo/section numbers)
- Lucide Icons or Font Awesome
- AOS (Animate On Scroll) or hand-rolled scroll animations

There is no package manager, bundler, linter, or test runner in this project. "Running" the site means opening `index.html` directly or serving the directory with any static file server (e.g. `npx serve`, VS Code Live Server); "testing" means manual verification in-browser across breakpoints (see below) plus a Lighthouse pass (target 90+ on all four categories).

## Planned File Structure

```
union-landing/
├── index.html
├── portfolio/
│   └── royal-thai-embassy.html      # standalone detail page, opens via target="_blank"
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── portfolio-detail.css
│   ├── js/
│   │   ├── main.js                  # nav/scroll-spy/smooth-scroll/AOS init
│   │   └── modal.js                 # portfolio lightbox
│   ├── images/
│   │   ├── hero/
│   │   ├── portfolio/<project-slug>/   # one folder per project (see requirements.md §4.2)
│   │   ├── registration/
│   │   └── icons/
│   └── fonts/
└── requirements.md
```

## Architecture Notes

**Single-page scroll structure.** `index.html` is one long document with anchor-linked sections (`#history`, `#greeting`, `#business`, `#portfolio`, `#registration`), driven by a fixed header nav. `main.js` must implement smooth scroll on nav click, scroll-spy to highlight the active nav item, and a mobile hamburger → slide-open menu.

**Portfolio has two distinct interaction paths** — this is the trickiest part of the spec, don't collapse it into one component:
- 9 of the 10 projects open an image lightbox modal in place (`modal.js`).
- The **Royal Thai Embassy** project is the exception: it links with `target="_blank"` to a fully separate page, `portfolio/royal-thai-embassy.html`, with its own stylesheet (`portfolio-detail.css`) and content (plan comparison table, isometric concept views, stage/bookshelf design, material finish palette). Category filtering (전체/업무시설/상업시설/숙박시설/공장·시설/주택/대사관) applies only to the in-page grid, not this detail page.

**Design tokens live in CSS variables** (see `requirements.md` §3.2 for the exact palette — warm off-white background, deep charcoal text, muted bronze accent). Reuse these variables rather than hardcoding colors; the accent color specifically marks quote decorations, section dividers, and the footer's top border.

**Content is data-driven from the spec, not placeholder.** Company info (founded 2009-01-06, rep. 서영종, business reg. no. 106-05-28053, etc.), the 10 named portfolio projects with their categories, and the Thai Embassy plan comparison data are all fixed values given in `requirements.md` — pull real values from there rather than inventing sample content.

**Responsive breakpoints:** Desktop 1200px+ (3-col), Laptop 992–1199px (3-col, tighter spacing), Tablet 768–991px (2-col), Mobile ≤767px (1-col, hamburger nav). Max content width 1200px, centered.

## Key Non-Functional Requirements

- Images: `.webp` primary with `.jpg` fallback, `loading="lazy"`, responsive `srcset`.
- Accessibility: `alt` text on all images, ARIA labels on interactive controls, full keyboard navigation (nav menu, modal, filters).
- SEO: `<title>Union | 건축·실내건축 전문기업</title>`, meta description, OpenGraph tags, favicon.
