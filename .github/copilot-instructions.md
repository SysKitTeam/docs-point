# Copilot Instructions — docs-point

## Project Overview

This is the **Syskit Point documentation site** — the public technical documentation for [Syskit Point](https://www.syskit.com/products/point/), a Microsoft 365 management and governance product.

Published at: `https://docs.syskit.com/point/`

## Tech Stack

- **Framework:** [Docusaurus 3](https://docusaurus.io/) (classic preset)
- **Language:** TypeScript config, Markdown/MDX content
- **Search:** Lunr (via `docusaurus-lunr-search`)
- **Hosting:** Cloudflare Workers + static assets
- **Node:** ≥ 18

## Commands

```bash
npm install        # install dependencies
npm start          # local dev server
npm run build      # production build
npm run typecheck  # TypeScript check
```

## Repository Structure

```
docs/                        # all documentation content (Markdown)
  access-management/
  configuration/
  faq/
  get-to-know-syskit-point/
  governance-and-automation/
  integrations/
  licensing-activation/
  microsoft365-inventory/
  point-collaborators/
  power-platform/
  releases/                  # release notes
    cloud/                   # Cloud release notes
    enterprise/              # Enterprise release notes (grouped by major version)
  reporting/
  requirements/
  set-up-point-cloud/
  set-up-point-enterprise/
  storage-management/
  troubleshooting/
  home.mdx                   # site homepage
sidebars.ts                  # sidebar navigation config
docusaurus.config.ts         # site configuration
src/css/                     # custom styles
static/img/                  # images and assets
```

## Branching Model

- `main` — production (published to `docs.syskit.com/point`)
- `staging` — staging/preview (published to `docs-staging.syskit.com/point`)
- PRs go from `staging` → `main`

## Content Conventions

### Frontmatter

Every Markdown file starts with YAML frontmatter containing at least a `description` field:

```md
---
description: This article describes how to...
---
```

### Writing Style

- Use **bold** for UI element names (buttons, settings, toggles, column names).
- Use ***bold italic*** for toggle/setting names that are exact labels.
- Use backticks for code, commands, error messages, and API values.
- Use `:::warning` / `:::tip` / `:::info` Docusaurus admonitions for callouts.
- Refer to the product as "Syskit Point" (never just "Point" on its own in headings or first mentions).

### Images

- Store images in `static/img/` mirroring the docs folder structure.
- Reference images with relative paths or from `/img/`.
- The "Deploy to Azure" button image (`https://aka.ms/deploytoazurebutton`) is preloaded in the site config — do not change this URL.

### Internal Links

- Use relative Markdown links (e.g., `../configuration/settings.md`), not absolute URLs.
- Docusaurus resolves `.md` links to routes automatically.

## Release Notes

### Cloud Release Notes

- **Location:** `docs/releases/cloud/`
- **Filename:** `point-YYYY-MM-DD-release-note.md` (date of release)
- **Title:** `# Month DD, YYYY`
- **Sections:** "About Syskit Point Cloud" → "Improvements & Bug Fixes"
- Cloud customers are upgraded automatically — no deployment instructions needed.

### Enterprise Release Notes

- **Location:** `docs/releases/enterprise/syskit-point-MAJOR-MINOR/`
  - Grouped by major version (e.g., `syskit-point-2026-1/`)
- **Filename:** `point-MAJOR-MINOR-BUILD-release-note.md` (e.g., `point-2026-1-130-release-note.md`)
- **Title:** `# Syskit Point MAJOR.MINOR.BUILD`
- **Sections:**
  1. "Get the Latest Version" — deployment links
  2. Upgrade instructions link
  3. Optional `:::warning` admonitions for reconsent or permission changes
  4. "Improvements & Bug Fixes"

#### Enterprise "Get the Latest Version" Template

```md
## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version MAJOR.MINOR.BUILD](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2FvMAJOR-MINOR-BUILD-BUILDNUMBER%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).
```

### Release Note Bullet Style

- Start each bullet with **bold description** of what changed.
- Use nested bullets for details.
- Group related changes under a single top-level bullet.
- End the list with: `* **Various improvements, including UX and UI fixes, have been implemented.**`

### Sidebar Registration

New release notes must be added to `sidebars.ts` in the appropriate `items` array. Cloud RNs are listed newest-first. Enterprise RNs are grouped under their major version category.

## Docusaurus-Specific Notes

- `onBrokenLinks` is set to `'warn'` — broken links won't fail the build but should still be fixed.
- The site uses `routeBasePath: '/'` — docs are served at the root of `/point/`.
- Blog and pages features are disabled.
- Color mode supports light/dark with system preference detection.
