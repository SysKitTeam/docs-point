# Docusaurus Sidebar Hiding Options

## Methods to Hide Sidebar in MDX Files

### 1. Using `displayed_sidebar: null`
```yaml
---
displayed_sidebar: null
---
```
This completely removes the sidebar for the page.

### 2. Using `sidebar_class_name: hidden`
```yaml
---
sidebar_class_name: hidden
---
```
Adds a CSS class that can be targeted for styling.

### 3. Custom CSS Targeting
Target pages without sidebars using:
- `[data-displayed-sidebar="null"]`
- `.theme-doc-sidebar-container.hidden`
- `:not(:has(.theme-doc-sidebar-container))`

## Current Implementation
The home.mdx file uses:
```yaml
---
displayed_sidebar: null
sidebar_class_name: hidden
---
```

Combined with CSS that:
1. Hides the sidebar completely
2. Centers content with 800px max width
3. Applies responsive padding
4. Uses full width for content area