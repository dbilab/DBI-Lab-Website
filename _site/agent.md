# DBI Lab Website — Agent Guide

This file is a working guide for coding agents contributing to the Digital Behavioral Insights Lab website.

## Project summary

- Static website built with Jekyll 4.3 and based on the Greene Lab Website Template.
- Hosted through GitHub Pages with the custom domain `dbi-lab.com`.
- Main source branch is `main`; the `gh-pages` branch contains generated deployment output.
- Site content concerns the Digital Behavioral Insights Lab, research, projects, team members, publications, and news.

## Repository map

| Path | Purpose |
| --- | --- |
| `_config.yaml` | Jekyll configuration, collections, defaults, plugins, site metadata, and links. |
| `index.md` | Homepage content. |
| `research/index.md` | Publications/research listing. |
| `projects/index.md` | Project listing driven by `_data/projects.yaml`. |
| `team/index.md` | Team listing driven by the `members` collection. |
| `news/index.md` | News listing driven by the `posts` collection. |
| `social-media/index.md` | Social-media page. |
| `contact/index.md` | Contact page. |
| `_members/` | Member collection documents and profiles. |
| `_posts/` | Date-prefixed Jekyll posts/news articles. |
| `_data/` | YAML data used by pages and Liquid includes. |
| `_layouts/` | `default`, `member`, and `post` page layouts. |
| `_includes/` | Reusable Liquid/HTML presentation components. |
| `_styles/` | Modular Sass stylesheets, loaded individually by the site. |
| `_scripts/` | Client-side JavaScript loaded globally. |
| `_plugins/` | Custom Ruby Liquid filters and optional HTML Proofer integration. |
| `_cite/` | Python citation-generation pipeline. |
| `.github/workflows/` | Build, deployment, preview, and citation automation. |
| `.docker/` | Docker development image and entrypoint. |
| `images/` | Images for the header, projects, news posts, and team members. |

## Jekyll architecture

The base rendering flow is:

1. `_layouts/default.html` includes `head.html`, `header.html`, page content, and `footer.html`.
2. Page content is passed through `_includes/content.html`.
3. `content.html` interprets `<!-- section break -->` markers emitted by `section.html` and wraps content in sections.
4. Collection documents use layouts selected by defaults in `_config.yaml`:
   - `_members/*` → `member`
   - `_posts/*` → `post`
5. Pages with a `nav` front-matter object are discovered and sorted by `nav.order` in `header.html`.

Use existing includes and collection/data patterns instead of adding page-specific HTML whenever possible.

## Content conventions

### Pages

Top-level section pages are directory-index Markdown files. Preserve YAML front matter on every page. Navigation typically uses:

```yaml
nav:
  order: 1
  tooltip: Page description
```

Use site-relative paths for links and images. Existing includes generally apply `relative_url`, which is important for GitHub Pages base paths.

### Members

Add or update member profiles in `_members/`. Typical front matter includes:

```yaml
name: Display name
image: images/team/example.jpg
role: role-key
description: Short description
affiliation: Affiliation
aliases: []
links:
  email: example@example.com
```

The `member` layout renders the profile portrait, typed links, and Markdown biography. Role keys should match definitions in `_data/types.yaml`.

### Posts

Add news items to `_posts/` using the standard filename format `YYYY-MM-DD-slug.md`. Typical front matter includes `title`, `image`, `author`, and optional `tags`. The `post` layout supplies title, author/date metadata, content, and previous/next navigation.

### Projects and research

- Add project records to `_data/projects.yaml`; `projects/index.md` groups records by `group`, currently including `Ongoing` and `Closed`.
- Publications are rendered from `_data/citations.yaml`.
- `_data/citations.yaml` is generated output. Do not edit it manually.
- Maintain citation inputs in `_data/sources.yaml`, `_data/orcid.yaml`, or other relevant source data, then run the citation pipeline.

## Include/component system

Important reusable components include:

- `head.html`: metadata, analytics, verification, fonts, styles, and scripts.
- `header.html` / `footer.html`: responsive site chrome, navigation, contact/social links, and dark-mode control.
- `list.html`: generic collection/data iteration, filtering, grouping, and component dispatch.
- `portrait.html`: member portraits and role metadata.
- `card.html`: project/resource cards.
- `feature.html`: homepage feature blocks.
- `citation.html`: publication entries.
- `post-excerpt.html`: news listing cards.
- `post-info.html`: author, dates, and tags.
- `button.html`: typed links using `_data/types.yaml`.
- `tags.html`: tag links and repository metadata.
- `search-box.html` / `search-info.html` / `site-search.html`: search interfaces.
- `styles.html` / `scripts.html`: global asset loading.

`list.html` passes many standardized parameters into the selected component. New data-driven components should follow that convention and accept the fields they need rather than duplicating list logic.

## Custom plugins

The custom filters in `_plugins/` are part of the rendering architecture:

- `array.rb`: array cleanup and carving.
- `file.rb`: file existence and file reading.
- `hash.rb`: hash helpers.
- `misc.rb`: nil handling, object inspection, Ruby-expression data filtering, Google Fonts extraction, and optional HTML Proofer integration.
- `regex.rb`: regex scanning, replacement, and sanitization.

The `data_filter` filter evaluates Ruby-style expressions, for example `group == 'Ongoing'` or `item['chew-jocelyn'] == true`; it is not ordinary Liquid or JavaScript syntax.

## Styling and JavaScript

### Sass

Styles live in `_styles/` and are modularized by component or concern. `_includes/styles.html` loads generated CSS for the Sass files individually; do not assume `all.scss` is the sole bundle entry point.

Theme variables, colors, font families, spacing, shadows, transitions, and dark-mode variables are defined in `_styles/-theme.scss`. The `-theme.scss` filename is intentionally read by `_includes/fonts.html`; preserve that relationship when changing fonts.

Keep selectors scoped and avoid introducing global rules that affect unrelated pages.

### JavaScript

All files in `_scripts/` are loaded globally by `_includes/scripts.html`. New scripts must therefore be safe on every page and should guard against missing DOM elements.

- `dark-mode.js`: persists the theme in `localStorage`.
- `search.js`: filters cards, citations, and post excerpts and highlights matches.
- `site-search.js`: submits Google site searches.
- `fetch-tags.js`: fetches GitHub repository topics.
- `anchors.js`, `tooltip.js`, `table-wrap.js`: progressive UI enhancements.

Search state uses the URL `search` query parameter and supports terms, quoted phrases, and tag filters.

## Citation pipeline

The citation process starts at `_cite/cite.py`, uses dependencies in `_cite/requirements.txt`, and combines Google Scholar, PubMed, ORCID, and manual-source plugins before writing `_data/citations.yaml`.

The GitHub workflow requires the `GOOGLE_SCHOLAR_API_KEY` secret. Treat generated citation changes as automation output rather than hand-maintained content.

## Local development and validation

Install Ruby dependencies, then serve locally:

```text
bundle install
bundle exec jekyll serve --livereload
```

Build for production:

```text
JEKYLL_ENV=production bundle exec jekyll build
```

The CI build uses Ruby 3.1 and runs a production build with a Pages base path. The Docker entrypoint also runs citation generation before starting Jekyll.

After changing templates, data, plugins, styles, or scripts:

1. Run a local Jekyll build.
2. Check the affected page in the browser at desktop and mobile widths when relevant.
3. Check the browser console for JavaScript errors.
4. Verify links, images, collection output, dark mode, and base-url behavior.
5. Inspect generated output when a Liquid or URL issue is not obvious.

HTML Proofer is installed but disabled by `_config.yaml` (`proofer: false`). Enable it deliberately when required; do not assume a successful Jekyll build validates all generated links.

## Deployment workflow

- Pushes to `main` trigger citation/update and live-site build workflows.
- Pull requests build previews beneath a `preview/pr-<number>` path on `gh-pages`.
- Production deployment builds `_site` and publishes generated output to `gh-pages`.
- CI may append the Pages `url` to `_config.yaml`; avoid adding duplicate `url` entries casually.
- Never manually edit generated content on `gh-pages`.

## Important safeguards and known pitfalls

1. Preserve front matter on all Markdown pages and collection documents.
2. Prefer `_members`, `_posts`, and `_data` over hard-coded lists in page templates.
3. Do not hand-edit `_data/citations.yaml`.
4. Keep image/link paths compatible with `relative_url` and non-empty GitHub Pages base paths.
5. Ensure member `role` values match `_data/types.yaml`.
6. Test typed links after changing link metadata; the type replacement logic is sensitive to placeholder names.
7. Test GitHub topic fetching when changing repository metadata or `tags.html`; it depends on repository/link data attributes and the GitHub API.
8. Remember that every script and stylesheet is effectively global.
9. Preserve `data-dark="true|false"` behavior for theme switching.
10. Treat external CDN and GitHub API failures separately from Jekyll build failures.
11. Verify the intended PI/team filtering before changing team ordering; existing role naming may not be consistent across records and filters.
12. Do not replace custom plugin filters with plain Liquid logic without checking all call sites.

## Change strategy

Before editing, identify whether the request belongs to content, structured data, Liquid rendering, layout, Sass, JavaScript, custom plugins, citation automation, or deployment. Make the smallest compatible change, follow the nearest existing pattern, and validate the generated page rather than only the source Markdown.
