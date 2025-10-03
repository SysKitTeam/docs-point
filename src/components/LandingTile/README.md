# LandingTile Component

A flexible React component for creating landing page tiles with optional images and link displays.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | The tile title |
| `description` | `string` | Yes | The tile description text |
| `linkUrl` | `string` | Yes | The URL to navigate to when clicked |
| `imageUrl` | `string` | No | Optional image URL to display at the top of the tile |
| `imageAlt` | `string` | No | Alt text for the image (defaults to title) |
| `showLink` | `boolean` | No | Whether to show a link text below the description |
| `linkUrlDisplayText` | `string` | No | Text to display for the link (only shown if showLink is true) |

## Usage Examples

### With Image
```jsx
<LandingTile
  title="Syskit Point - Cloud"
  description="Get information about product updates, SaaS installation and activation."
  imageUrl="/img/cloud_icon_color_syskit.png"
  linkUrl="/set-up-point-cloud/overview"
  imageAlt="Syskit Point Cloud"
/>
```

### Without Image (Link Display)
```jsx
<LandingTile
  title="Product Updates"
  description="We regularly launch updates to keep you up-to-date with the latest technology."
  linkUrl="/releases/"
  showLink={true}
  linkUrlDisplayText="Releases"
/>
```

## Features

- **Fixed Width Design**: 360px width tiles that align to the left in their container
- **Image Cropping**: Automatically crops 25px from top and bottom of images for consistent appearance
- **Responsive Design**: Adapts to different screen sizes (mobile uses full width)
- **Optional Images**: Can display with or without header images
- **Link Display**: Shows clickable link text below description when enabled
- **Theme Support**: Works with both light and dark themes
- **Hover Effects**: Subtle animations on hover
- **Accessibility**: Proper semantic HTML and alt text support