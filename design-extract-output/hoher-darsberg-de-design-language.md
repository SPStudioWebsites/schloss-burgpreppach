# Design Language: HOME — HOHER DARSBERG

> Extracted from `https://www.hoher-darsberg.de/home` on May 8, 2026
> 1068 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#5a5a5a` | hsl(0, 0%, 35%) | 1642 |
| `#000000` | hsl(0, 0%, 0%) | 341 |
| `#f7f7f7` | hsl(0, 0%, 97%) | 130 |
| `#e7e7e7` | hsl(0, 0%, 91%) | 36 |
| `#333333` | hsl(0, 0%, 20%) | 16 |
| `#4a5464` | hsl(217, 15%, 34%) | 12 |
| `#bebebe` | hsl(0, 0%, 75%) | 5 |
| `#dcdcdc` | hsl(0, 0%, 86%) | 5 |
| `#262626` | hsl(0, 0%, 15%) | 2 |
| `#1a1a1a` | hsl(0, 0%, 10%) | 2 |
| `#8a8b8f` | hsl(228, 2%, 55%) | 1 |

### Background Colors

Used on large-area elements: `#f7f7f7`, `#fafafa`, `#5a5a5a`, `#e3e3e3`, `#000000`, `#ffffff`, `#8a8b8f`

### Text Colors

Text color palette: `#000000`, `#5a5a5a`, `#ffffff`, `#e7e7e7`, `#4a5464`, `#bbbbbb`, `#d9d9d9`, `#1a1a1a`, `#333333`

### Gradients

```css
background-image: linear-gradient(rgb(90, 90, 90), rgb(90, 90, 90));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#5a5a5a` | text, border, background | 1642 |
| `#000000` | text, border, background | 341 |
| `#f7f7f7` | background, text, border | 130 |
| `#e7e7e7` | text, border | 36 |
| `#333333` | text, border | 16 |
| `#4a5464` | text, border | 12 |
| `#bebebe` | background, border, text | 5 |
| `#dcdcdc` | background, text, border | 5 |
| `#262626` | background | 2 |
| `#1a1a1a` | text, border | 2 |
| `#8a8b8f` | background | 1 |

## Typography

### Font Families

- **dejanire-sans** — used for body (763 elements)
- **Clarkson** — used for body (131 elements)
- **sans-serif** — used for body (129 elements)
- **Cormorant Garamond** — used for all (27 elements)
- **Helvetica Neue** — used for body (8 elements)
- **Roboto** — used for body (4 elements)
- **kepler-std** — used for body (2 elements)
- **monospace** — used for body (2 elements)
- **Helvetica** — used for body (1 elements)
- **Libre Baskerville** — used for headings (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 94.336px | 5.896rem | 300 | 90.1097px | -2.83008px | h2, br |
| 52.864px | 3.304rem | 300 | 57.3469px | -1.58592px | h3, br, span, a |
| 52px | 3.25rem | 400 | 24px | 0.32px | div, svg, path |
| 48px | 3rem | 400 | 48px | 0.192px | a, div, span, svg |
| 36px | 2.25rem | 400 | 36px | normal | h1 |
| 26.752px | 1.672rem | 300 | 32.1024px | -0.80256px | div, a |
| 19.2px | 1.2rem | 400 | 19.2px | 0.32px | div, nav, a, svg |
| 19.072px | 1.192rem | 300 | 22.8864px | -0.57216px | div, a, h4, br |
| 18px | 1.125rem | 400 | 30.6px | 0.32px | div |
| 16.32px | 1.02rem | 400 | 16.32px | 0.1632px | div |
| 16px | 1rem | 400 | normal | normal | html, head, meta, link |
| 15px | 0.9375rem | 400 | 25.5px | 0.32px | div |
| 14.464px | 0.904rem | 400 | 15.9104px | 0.14464px | div, a, button, span |
| 14px | 0.875rem | 400 | 24px | 0.32px | div, svg, path |
| 12.928px | 0.808rem | 400 | 19.392px | 0.25856px | p, span, br, a |

### Heading Scale

```css
h2 { font-size: 94.336px; font-weight: 300; line-height: 90.1097px; }
h3 { font-size: 52.864px; font-weight: 300; line-height: 57.3469px; }
h1 { font-size: 36px; font-weight: 400; line-height: 36px; }
h4 { font-size: 19.072px; font-weight: 300; line-height: 22.8864px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (1014x), `300` (42x), `500` (7x), `700` (5x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-25 | 25px | 1.5625rem |
| spacing-38 | 38px | 2.375rem |
| spacing-51 | 51px | 3.1875rem |
| spacing-59 | 59px | 3.6875rem |
| spacing-64 | 64px | 4rem |
| spacing-68 | 68px | 4.25rem |
| spacing-77 | 77px | 4.8125rem |
| spacing-128 | 128px | 8rem |
| spacing-285 | 285px | 17.8125rem |
| spacing-297 | 297px | 18.5625rem |
| spacing-334 | 334px | 20.875rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 4px | 3 |
| md | 8px | 2 |
| xl | 18px | 1 |
| full | 26px | 1 |
| full | 100px | 4 |
| full | 300px | 1 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
```

**xs** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
```

**md** — blur: 10px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
```

**lg** — blur: 20px
```css
box-shadow: rgba(121, 121, 121, 0.17) 2px 2px 20px 0px;
```

## CSS Custom Properties

### Colors

```css
--tweak-summary-block-background-color: hsla(0,0%,98.04%,1);
--tweak-blog-basic-grid-list-meta-color: hsla(0,0%,35.29%,1);
--tweak-blog-item-title-color: hsla(0,0%,35.29%,1);
--portfolio-hover-static-title-color: hsla(0,0%,35.29%,1);
--secondary-button-font-font-weight: 400;
--tweak-product-basic-item-gallery-controls-color: hsla(0,0%,0%,1);
--list-section-carousel-card-color: hsla(0,0%,98.04%,1);
--siteBackgroundColor: hsla(0,0%,96.86%,1);
--tweak-product-basic-item-sale-price-color: hsla(0,0%,86.27%,1);
--form-field-radio-shape-border-bottom-left-radius: 5px;
--tweak-newsletter-block-button-text-color: hsla(0,0%,100%,1);
--video-grid-basic-title-color: hsla(0,0%,35.29%,1);
--tweak-blog-alternating-side-by-side-list-meta-color: hsla(0,0%,35.29%,1);
--tweak-blog-single-column-list-title-color: hsla(0,0%,35.29%,1);
--solidHeaderBackgroundColor: hsla(0,0%,98.04%,1);
--toggle-on-color: hsla(0,0%,35.29%,1);
--course-item-nav-border-color: hsla(0,0%,35.29%,.25);
--tweak-product-basic-item-breadcumb-nav-color: hsla(0,0%,35.29%,1);
--social-links-block-secondary-icon-color: hsla(0,0%,96.86%,1);
--primary-button-font-font-style: normal;
--tweak-blog-alternating-side-by-side-list-excerpt-color: hsla(0,0%,35.29%,1);
--secondary-button-font-font-size-value: .75;
--tweak-form-block-background-color: hsla(0,0%,98.04%,1);
--primary-button-padding-y: 1rem;
--form-field-survey-shape-border-top-right-radius: 5px;
--tweak-blog-item-pagination-meta-color: hsla(0,0%,35.29%,1);
--video-grid-basic-description-color: hsla(0,0%,35.29%,1);
--backgroundOverlayColor: hsla(0,0%,96.86%,1);
--tweak-events-item-pagination-date-color: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-button-text-color: hsla(0,0%,100%,1);
--list-section-simple-card-description-color: hsla(0,0%,35.29%,1);
--tweak-newsletter-block-footnote-color: hsla(0,0%,35.29%,1);
--course-list-grid-layout-course-item-text-color: hsla(0,0%,35.29%,1);
--safeInverseLightAccent-hsl: 0,0%,0%;
--tweak-video-item-pagination-title-color: hsla(0,0%,35.29%,1);
--safeDarkAccent-hsl: 0,0%,0%;
--list-section-simple-card-button-background-color: hsla(0,0%,0%,1);
--stack-background-color: hsla(0,0%,98.04%,1);
--menuOverlayBackgroundColor: hsla(0,0%,96.86%,1);
--video-preview-badge-font-color: hsla(0,0%,35.29%,1);
--tweak-summary-block-header-text-color: hsla(0,0%,35.29%,1);
--list-section-simple-title-color: hsla(0,0%,35.29%,1);
--primary-button-font-font-size: 1rem;
--course-list-course-progress-bar-color: hsla(0,0%,86.27%,1);
--form-field-survey-shape-border-bottom-left-radius: 5px;
--tweak-form-block-field-input-color-on-background-hsl: 0,0%,35.29%;
--tweak-form-block-field-border-color: hsla(0,0%,35.29%,1);
--list-section-simple-card-title-color: hsla(0,0%,35.29%,1);
--tweak-heading-medium-color-on-background: hsla(0,0%,35.29%,1);
--menuOverlayButtonBackgroundColor: hsla(0,0%,0%,1);
--tweak-summary-block-primary-metadata-color-on-background: hsla(0,0%,35.29%,1);
--primary-button-font-line-height: 1.2em;
--image-block-card-inline-link-color: hsla(0,0%,35.29%,1);
--product-detail-subscriptions-frequency-text-color: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-card-title-color: hsla(0,0%,35.29%,1);
--tweak-marquee-block-heading-color-on-background: hsla(0,0%,35.29%,1);
--tweak-form-block-field-fill-color-a: 1;
--list-section-banner-slideshow-card-button-text-color: hsla(0,0%,100%,1);
--paragraphLinkColor: hsla(0,0%,35.29%,1);
--form-field-shape-border-top-right-radius: 5px;
--image-block-card-image-title-separation: 5%;
--gradientHeaderNavigationColor: hsla(0,0%,35.29%,1);
--tweak-heading-small-color-on-background: hsla(0,0%,35.29%,1);
--tweak-content-link-block-title-color: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-card-button-background-color: hsla(0,0%,0%,1);
--product-detail-subscriptions-button-text-color: hsla(0,0%,100%,1);
--headingMediumColor: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-card-description-color: hsla(0,0%,35.29%,1);
--list-section-title-color: hsla(0,0%,35.29%,1);
--lightAccent-hsl: 0,0%,96.86%;
--tweak-summary-block-read-more-color-on-background: hsla(0,0%,35.29%,1);
--tweak-menu-block-title-color: hsla(0,0%,35.29%,1);
--list-section-simple-description-color: hsla(0,0%,35.29%,1);
--secondary-button-font-font-family: "dejanire-sans";
--form-field-radio-shape-border-top-left-radius: 5px;
--image-block-overlap-image-title-bg-color: hsla(0,0%,96.86%,1);
--form-field-survey-shape-border-bottom-right-radius: 5px;
--form-field-checkbox-shape-border-bottom-left-radius: 5px;
--scheduling-block-button-accent-color: hsla(0,0%,0%,1);
--tweak-blog-side-by-side-list-read-more-color: hsla(0,0%,0%,1);
--image-block-card-image-width: 50%;
--secondary-button-font-text-transform: uppercase;
--tweak-video-item-description-color: hsla(0,0%,35.29%,1);
--image-block-card-image-title-bg-color: hsla(0,0%,96.86%,0);
--primaryButtonPadding: 1.2em;
--tweak-blog-single-column-list-excerpt-color: hsla(0,0%,35.29%,1);
--image-block-collage-image-subtitle-color: hsla(0,0%,35.29%,1);
--tweak-newsletter-block-footnote-color-on-background: hsla(0,0%,35.29%,1);
--tertiaryButtonTextColor: hsla(0,0%,100%,1);
--tweak-summary-block-secondary-metadata-color: hsla(0,0%,35.29%,1);
--darkAccent-hsl: 0,0%,74.51%;
--list-section-carousel-arrow-color: hsla(0,0%,100%,1);
--video-preview-badge-background-color: hsla(0,0%,98.04%,1);
--tweak-video-item-meta-color: hsla(0,0%,35.29%,1);
--tweak-product-grid-text-below-list-status-color: hsla(0,0%,86.27%,1);
--tweak-product-basic-item-title-color: hsla(0,0%,35.29%,1);
--image-block-stack-image-button-bg-color: hsla(0,0%,0%,1);
--tweak-form-block-field-input-color-on-background: hsla(0,0%,35.29%,1);
--tweak-newsletter-block-background-color: hsla(0,0%,98.04%,1);
--tweak-form-block-field-fill-color: hsla(0,0%,98.04%,1);
--tweak-newsletter-block-title-color-on-background: hsla(0,0%,35.29%,1);
--tweak-form-block-field-input-color: hsla(0,0%,35.29%,1);
--portfolio-grid-basic-title-color: hsla(0,0%,35.29%,1);
--course-list-grid-layout-course-item-background-color: hsla(0,0%,98.04%,1);
--tweak-product-grid-text-below-list-price-color: hsla(0,0%,35.29%,1);
--tweak-product-list-stroke-color: hsla(0,0%,0%,1);
--tweak-blog-item-meta-color: hsla(0,0%,35.29%,1);
--tweak-blog-item-author-profile-color: hsla(0,0%,35.29%,1);
--image-block-stack-image-title-color: hsla(0,0%,35.29%,1);
--tweak-menu-block-item-price-color: hsla(0,0%,35.29%,1);
--tweak-text-block-background-color: hsla(0,0%,98.04%,1);
--tweak-newsletter-block-stroke-color: hsla(0,0%,0%,1);
--shape-block-stroke-color: hsla(0,0%,0%,1);
--tweak-gallery-lightbox-background-color: hsla(0,0%,96.86%,1);
--headerDropShadowColor: hsla(0,0%,35.29%,1);
--tweak-form-block-field-accent-color-on-background-a: 1;
--image-block-collage-image-button-bg-color: hsla(0,0%,0%,1);
--headerBorderColor: hsla(0,0%,35.29%,1);
--headingSmallColor: hsla(0,0%,35.29%,1);
--headingExtraLargeColor: hsla(0,0%,43.14%,1);
--primary-button-rounded-border-bottom-left-radius: 6.4px;
--tweak-newsletter-block-button-background-color: hsla(0,0%,0%,1);
--tweak-blog-masonry-list-meta-color: hsla(0,0%,35.29%,1);
--safeInverseDarkAccent-hsl: 0,0%,100%;
--list-section-carousel-arrow-background-color: hsla(0,0%,0%,1);
--tweak-summary-block-excerpt-color-on-background: hsla(0,0%,35.29%,1);
--product-basic-item-discount-chip-text-color: hsla(0,0%,100%,1);
--tweak-form-block-description-color: hsla(0,0%,35.29%,1);
--tweak-newsletter-block-button-background-color-on-background: hsla(0,0%,35.29%,1);
--scheduling-block-button-text-color: hsla(0,0%,100%,1);
--form-field-shape-border-bottom-left-radius: 5px;
--tweak-portfolio-item-pagination-icon-color: hsla(0,0%,35.29%,1);
--product-basic-item-add-ons-title-color: hsla(0,0%,35.29%,1);
--tweak-line-block-line-color: hsla(0,0%,35.29%,1);
--list-section-carousel-description-color: hsla(0,0%,35.29%,1);
--tertiary-button-rounded-border-top-left-radius: 6.4px;
--course-item-nav-active-lesson-text-color: hsla(0,0%,98.04%,1);
--list-section-simple-button-text-color: hsla(0,0%,100%,1);
--siteTitleColor: hsla(0,0%,35.29%,1);
--video-grid-basic-meta-color: hsla(0,0%,35.29%,1);
--text-highlight-color-on-background: hsla(0,0%,0%,1);
--tweak-product-grid-text-below-list-sale-price-color: hsla(0,0%,86.27%,1);
--tweak-form-block-caption-color-on-background: hsla(0,0%,35.29%,1);
--portfolio-hover-follow-title-color: hsla(0,0%,35.29%,1);
--tertiary-button-rounded-border-bottom-left-radius: 6.4px;
--tweak-newsletter-block-description-color-on-background: hsla(0,0%,35.29%,1);
--tweak-quote-block-background-color: hsla(0,0%,98.04%,1);
--tweak-blog-masonry-list-title-color: hsla(0,0%,35.29%,1);
--tweak-form-block-field-accent-color-hsl: 0,0%,86.27%;
--list-section-carousel-card-button-text-color: hsla(0,0%,100%,1);
--tweak-blog-masonry-list-read-more-color: hsla(0,0%,0%,1);
--summary-block-limited-availability-label-color: hsla(0,0%,35.29%,1);
--stack-stroke-color: hsla(0,0%,0%,1);
--tweak-portfolio-item-pagination-meta-color: hsla(0,0%,35.29%,1);
--course-item-nav-background-color: hsla(0,0%,98.04%,1);
--tweak-product-list-background-color: hsla(0,0%,98.04%,1);
--tweak-summary-block-primary-metadata-color: hsla(0,0%,35.29%,1);
--tweak-form-block-stroke-color: hsla(0,0%,0%,1);
--tweak-blog-item-pagination-title-color: hsla(0,0%,35.29%,1);
--solidHeaderNavigationColor: hsla(0,0%,35.29%,1);
--tweak-marquee-block-paragraph-color: hsla(0,0%,35.29%,1);
--secondary-button-rounded-border-bottom-right-radius: 6.4px;
--primary-button-rounded-border-top-right-radius: 6.4px;
--tweak-form-block-field-border-color-a: 1;
--image-block-poster-image-title-bg-color-v2: hsla(0,0%,96.86%,0);
--tweak-form-block-field-accessory-color-on-background: hsla(0,0%,35.29%,1);
--tweak-accordion-block-background-color: hsla(0,0%,98.04%,1);
--tweak-accordion-block-stroke-color: hsla(0,0%,0%,1);
--course-list-course-item-text-color: hsla(0,0%,35.29%,1);
--secondaryButtonBackgroundColor: hsla(0,0%,74.51%,1);
--paragraphLargeColor: hsla(0,0%,35.29%,1);
--tweak-form-block-field-accent-color: hsla(0,0%,86.27%,1);
--tweak-form-block-survey-title-color: hsla(0,0%,35.29%,1);
--image-block-collage-image-button-text-color: hsla(0,0%,100%,1);
--tweak-form-block-title-color-on-background: hsla(0,0%,35.29%,1);
--tweak-blog-basic-grid-list-excerpt-color: hsla(0,0%,35.29%,1);
--tweak-form-block-button-background-color-on-background: hsla(0,0%,0%,1);
--tweak-summary-block-secondary-metadata-color-on-background: hsla(0,0%,35.29%,1);
--product-list-filters-drawer-background-color: hsla(0,0%,98.04%,1);
--tweak-form-block-field-accessory-color: hsla(0,0%,35.29%,1);
--tweak-product-quick-view-button-color: hsla(0,0%,35.29%,1);
--course-item-nav-text-color: hsla(0,0%,35.29%,1);
--image-block-poster-image-button-bg-color: hsla(0,0%,86.27%,1);
--primary-button-font-font-weight: 300;
--tweak-product-basic-item-price-color: hsla(0,0%,35.29%,1);
--tweak-form-block-field-border-color-on-background-a: 1;
--safeLightAccent-hsl: 0,0%,86.27%;
--tweak-form-block-caption-color: hsla(0,0%,35.29%,1);
--image-block-overlap-image-button-text-color: hsla(0,0%,100%,1);
--image-block-poster-image-overlay-color: hsla(0,0%,74.51%,1);
--tweak-events-item-pagination-icon-color: hsla(0,0%,35.29%,1);
--tweak-paragraph-small-color-on-background: hsla(0,0%,35.29%,1);
--secondary-button-font-font-style: normal;
--tweak-product-basic-item-variant-fields-color: hsla(0,0%,35.29%,1);
--list-section-carousel-card-title-color: hsla(0,0%,35.29%,1);
--image-block-stack-inline-link-color: hsla(0,0%,35.29%,1);
--list-section-carousel-card-button-background-color: hsla(0,0%,0%,1);
--primary-button-padding-x: 1.3rem;
--secondary-button-padding-y: 1.5rem;
--image-block-card-image-button-text-color: hsla(0,0%,100%,1);
--tweak-portfolio-item-pagination-title-color: hsla(0,0%,35.29%,1);
--image-block-collage-inline-link-color: hsla(0,0%,35.29%,1);
--product-detail-subscriptions-title-color: hsla(0,0%,35.29%,1);
--tweak-summary-block-read-more-color: hsla(0,0%,35.29%,1);
--safeInverseAccent-hsl: 0,0%,0%;
--primaryButtonTextColor: hsla(0,0%,100%,1);
--secondary-button-rounded-border-bottom-left-radius: 6.4px;
--form-field-survey-shape-border-top-left-radius: 5px;
--menuOverlayButtonTextColor: hsla(0,0%,100%,1);
--tweak-newsletter-block-description-color: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-card-color: hsla(0,0%,98.04%,1);
--solidHeaderDropShadowColor: hsla(0,0%,35.29%,1);
--form-field-checkbox-shape-border-top-right-radius: 5px;
--image-block-overlap-image-title-color: hsla(0,0%,35.29%,1);
--paragraphMediumColor: hsla(0,0%,35.29%,1);
--tweak-form-block-field-input-color-a: 1;
--tweak-blog-single-column-list-meta-color: hsla(0,0%,35.29%,1);
--primaryButtonBackgroundColor: hsla(0,0%,35.29%,1);
--primary-button-font-letter-spacing: 0em;
--secondary-button-padding-x: 2.2rem;
--course-list-grid-layout-course-item-hover-background-color: hsla(0,0%,98.04%,.75);
--tweak-text-block-stroke-color: hsla(0,0%,0%,1);
--tertiary-button-rounded-border-bottom-right-radius: 6.4px;
--tweak-product-basic-item-description-color: hsla(0,0%,35.29%,1);
--image-block-overlay-color: hsla(0,0%,35.29%,.5);
--image-block-overlap-image-overlay-color: hsla(0,0%,74.51%,1);
--form-field-shape-border-bottom-right-radius: 5px;
--tweak-form-block-field-fill-color-on-background-hsl: 0,0%,96.86%;
--tweak-newsletter-block-button-text-color-on-background: hsla(0,0%,100%,1);
--gradientHeaderBorderColor: hsla(0,0%,35.29%,1);
--list-section-carousel-title-color: hsla(0,0%,35.29%,1);
--tweak-blog-single-column-list-read-more-color: hsla(0,0%,0%,1);
--tweak-accordion-block-icon-color: hsla(0,0%,35.29%,1);
--accent-hsl: 0,0%,86.27%;
--image-block-stack-image-button-text-color: hsla(0,0%,100%,1);
--gradientHeaderBackgroundColor: hsla(0,0%,98.04%,1);
--shape-block-dropshadow-color: hsla(0,0%,98.04%,1);
--secondary-button-font-line-height: 1.2em;
--headingLinkColor: hsla(0,0%,35.29%,1);
--list-section-carousel-card-description-color: hsla(0,0%,35.29%,1);
--product-basic-item-restock-notification-color: hsla(0,0%,35.29%,1);
--tweak-product-grid-text-below-list-title-color: hsla(0,0%,35.29%,1);
--list-section-carousel-button-background-color: hsla(0,0%,0%,1);
--tweak-blog-basic-grid-list-title-color: hsla(0,0%,35.29%,1);
--tweak-product-quick-view-lightbox-overlay-color: hsla(0,0%,98.04%,1);
--tweak-menu-block-nav-color: hsla(0,0%,35.29%,1);
--tweak-form-block-field-accent-color-on-background: hsla(0,0%,86.27%,1);
--tweak-accordion-block-icon-color-on-background: hsla(0,0%,35.29%,1);
--tweak-paragraph-medium-color-on-background: hsla(0,0%,35.29%,1);
--image-block-overlap-image-subtitle-color: hsla(0,0%,35.29%,1);
--tweak-menu-block-item-description-color: hsla(0,0%,35.29%,1);
--tweak-summary-block-title-color: hsla(0,0%,35.29%,1);
--image-block-stack-image-subtitle-color: hsla(0,0%,35.29%,1);
--navigationLinkColor: hsla(0,0%,35.29%,1);
--secondaryButtonTextColor: hsla(0,0%,100%,1);
--announcement-bar-background-color: hsla(0,0%,74.51%,1);
--tweak-form-block-field-input-color-on-background-a: 1;
--tertiaryButtonBackgroundColor: hsla(0,0%,86.27%,1);
--list-section-simple-card-color: hsla(0,0%,98.04%,1);
--tweak-marquee-block-paragraph-color-on-background: hsla(0,0%,35.29%,1);
--scheduling-block-scheduler-background-color: hsla(0,0%,96.86%,1);
--tertiary-button-rounded-border-top-right-radius: 6.4px;
--list-section-banner-slideshow-description-color: hsla(0,0%,35.29%,1);
--video-grid-category-nav-color: hsla(0,0%,35.29%,1);
--primary-button-stroke: 1px;
--product-detail-subscriptions-description-text-color: hsla(0,0%,35.29%,1);
--tweak-accordion-block-divider-color-on-background: hsla(0,0%,35.29%,1);
--tweak-product-grid-text-below-list-category-nav-color: hsla(0,0%,35.29%,1);
--list-section-simple-card-description-link-color: hsla(0,0%,0%,1);
--image-block-poster-inline-link-color: hsla(0,0%,98.04%,1);
--product-detail-subscriptions-button-background-color: hsla(0,0%,0%,1);
--shape-block-background-color: hsla(0,0%,98.04%,1);
--course-item-nav-active-lesson-background-color: hsla(0,0%,74.51%,1);
--scheduling-block-header-text-color: hsla(0,0%,35.29%,1);
--tweak-quote-block-text-color: hsla(0,0%,35.29%,1);
--tweak-form-block-field-accent-color-a: 1;
--tweak-form-block-title-color: hsla(0,0%,35.29%,1);
--image-block-poster-image-button-text-color: hsla(0,0%,0%,1);
--list-section-banner-slideshow-arrow-background-color: hsla(0,0%,0%,1);
--product-list-filter-dropdown-label-color: hsla(0,0%,35.29%,1);
--primary-button-font-font-family: "dejanire-sans";
--tweak-quote-block-text-color-on-background: hsla(0,0%,35.29%,1);
--tweak-gallery-icon-background-color: hsla(0,0%,96.86%,1);
--course-list-grid-layout-chapter-divider-color: hsla(0,0%,35.29%,1);
--list-section-carousel-card-description-link-color: hsla(0,0%,0%,1);
--tweak-heading-extra-large-color-on-background: hsla(0,0%,35.29%,1);
--tweak-marquee-block-stroke-color: hsla(0,0%,0%,1);
--social-links-block-main-icon-color: hsla(0,0%,35.29%,1);
--primary-button-rounded-border-top-left-radius: 6.4px;
--gradientHeaderDropShadowColor: hsla(0,0%,35.29%,1);
--tweak-form-block-field-fill-color-on-background: hsla(0,0%,96.86%,1);
--image-block-collage-image-title-bg-color: hsla(0,0%,96.86%,0);
--product-detail-one-time-purchase-price-text-color: hsla(0,0%,35.29%,1);
--image-block-card-image-subtitle-color: hsla(0,0%,35.29%,1);
--section-divider-stroke-color: hsla(0,0%,0%,1);
--scheduling-block-background-color: hsla(0,0%,96.86%,1);
--secondary-button-rounded-border-top-left-radius: 6.4px;
--product-list-filters-drawer-text-color: hsla(0,0%,35.29%,1);
--tweak-menu-block-item-title-color: hsla(0,0%,35.29%,1);
--tweak-heading-large-color-on-background: hsla(0,0%,35.29%,1);
--tweak-marquee-block-background-color: hsla(0,0%,98.04%,1);
--list-section-carousel-button-text-color: hsla(0,0%,100%,1);
--tweak-blog-side-by-side-list-title-color: hsla(0,0%,35.29%,1);
--form-field-checkbox-shape-border-bottom-right-radius: 5px;
--tweak-form-block-button-text-color-on-background: hsla(0,0%,100%,1);
--paragraphSmallColor: hsla(0,0%,35.29%,1);
--tweak-product-grid-text-below-list-scarcity-color: hsla(0,0%,35.29%,1);
--image-block-stack-image-title-bg-color: hsla(0,0%,96.86%,0);
--secondary-button-stroke: 0px;
--solidHeaderBorderColor: hsla(0,0%,35.29%,1);
--tweak-form-block-option-color-on-background: hsla(0,0%,35.29%,1);
--product-basic-item-discount-chip-background-color: hsla(0,0%,0%,1);
--image-block-poster-image-subtitle-color: hsla(0,0%,98.04%,1);
--form-field-radio-border-thickness: 1px;
--portfolio-grid-overlay-overlay-color: hsla(0,0%,96.86%,1);
--tweak-blog-alternating-side-by-side-list-title-color: hsla(0,0%,35.29%,1);
--image-block-card-image-button-bg-color: hsla(0,0%,0%,1);
--section-inset-border-color: hsla(0,0%,96.86%,1);
--tweak-blog-item-comment-meta-color: hsla(0,0%,35.29%,1);
--tweak-gallery-lightbox-icon-color: hsla(0,0%,35.29%,1);
--tweak-form-block-description-color-on-background: hsla(0,0%,35.29%,1);
--form-field-shape-border-top-left-radius: 5px;
--tweak-form-block-field-border-color-on-background: hsla(0,0%,35.29%,1);
--tweak-video-item-title-color: hsla(0,0%,35.29%,1);
--tweak-form-block-field-fill-color-hsl: 0,0%,98.04%;
--text-highlight-color: hsla(0,0%,35.29%,1);
--tweak-accordion-block-divider-color: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-card-description-link-color: hsla(0,0%,0%,1);
--secondary-button-font-font-size: .75rem;
--tweak-quote-block-source-color-on-background: hsla(0,0%,35.29%,1);
--announcement-bar-text-color: hsla(0,0%,98.04%,1);
--image-block-collage-image-overlay-color: hsla(0,0%,74.51%,1);
--primary-button-font-font-size-value: 1;
--tweak-marquee-block-heading-color: hsla(0,0%,35.29%,1);
--list-section-simple-button-background-color: hsla(0,0%,0%,1);
--image-block-overlap-image-button-bg-color: hsla(0,0%,0%,1);
--primary-button-rounded-border-bottom-right-radius: 6.4px;
--tweak-form-block-button-background-color: hsla(0,0%,0%,1);
--secondary-button-font-letter-spacing: .1em;
--tweak-blog-basic-grid-list-read-more-color: hsla(0,0%,0%,1);
--image-block-card-image-card-separation: 5%;
--tweak-video-item-pagination-icon-color: hsla(0,0%,35.29%,1);
--image-block-card-image-overlay-color: hsla(0,0%,74.51%,1);
--donation-block-stroke-color: hsla(0,0%,0%,1);
--tweak-blog-masonry-list-excerpt-color: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-button-background-color: hsla(0,0%,0%,1);
--donation-block-background-color: hsla(0,0%,98.04%,1);
--course-list-grid-layout-course-item-border-color: hsla(0,0%,86.27%,1);
--tweak-events-item-pagination-title-color: hsla(0,0%,35.29%,1);
--tweak-quote-block-source-color: hsla(0,0%,35.29%,1);
--form-field-survey-border-thickness: 1px;
--tweak-product-grid-text-below-list-pagination-color: hsla(0,0%,35.29%,1);
--secondary-button-rounded-border-top-right-radius: 6.4px;
--form-field-checkbox-border-thickness: 1px;
--tweak-quote-block-stroke-color: hsla(0,0%,0%,1);
--tweak-product-basic-item-scarcity-color: hsla(0,0%,86.27%,1);
--tweak-blog-side-by-side-list-meta-color: hsla(0,0%,35.29%,1);
--tweak-blog-side-by-side-list-excerpt-color: hsla(0,0%,35.29%,1);
--product-detail-subscription-price-text-color: hsla(0,0%,35.29%,1);
--primary-button-font-text-transform: none;
--list-section-banner-slideshow-arrow-color: hsla(0,0%,100%,1);
--image-block-stack-image-overlay-color: hsla(0,0%,74.51%,1);
--form-field-border-thickness: 1px;
--tweak-gallery-icon-color: hsla(0,0%,35.29%,1);
--tweak-form-block-field-fill-color-on-background-a: 1;
--tweak-product-quick-view-lightbox-controls-color: hsla(0,0%,35.29%,1);
--form-field-radio-shape-border-top-right-radius: 5px;
--tweak-summary-block-title-color-on-background: hsla(0,0%,35.29%,1);
--menuOverlayNavigationLinkColor: hsla(0,0%,35.29%,1);
--image-block-card-image-button-separation: 6%;
--tweak-form-block-field-border-color-on-background-hsl: 0,0%,35.29%;
--tweak-summary-block-header-text-color-on-background: hsla(0,0%,35.29%,1);
--tweak-blog-alternating-side-by-side-list-read-more-color: hsla(0,0%,0%,1);
--course-list-course-chapter-divider-color: hsla(0,0%,86.27%,1);
--tweak-form-block-survey-title-color-on-background: hsla(0,0%,35.29%,1);
--tweak-blog-item-comment-text-color: hsla(0,0%,35.29%,1);
--tweak-paragraph-link-color-on-background: hsla(0,0%,35.29%,1);
--image-block-card-image-title-color: hsla(0,0%,35.29%,1);
--tweak-summary-block-stroke-color: hsla(0,0%,0%,1);
--tweak-form-block-field-border-color-hsl: 0,0%,35.29%;
--form-field-checkbox-shape-border-top-left-radius: 5px;
--toggle-off-color: hsla(0,0%,74.51%,1);
--tweak-product-list-description-text-color: hsla(0,0%,35.29%,1);
--image-block-poster-image-title-color: hsla(0,0%,98.04%,1);
--image-block-overlap-inline-link-color: hsla(0,0%,35.29%,1);
--image-block-collage-background-color: hsla(0,0%,98.04%,1);
--tweak-paragraph-large-color-on-background: hsla(0,0%,35.29%,1);
--tweak-newsletter-block-title-color: hsla(0,0%,35.29%,1);
--tweak-form-block-option-color: hsla(0,0%,35.29%,1);
--tweak-form-block-field-input-color-hsl: 0,0%,35.29%;
--tweak-form-block-field-accent-color-on-background-hsl: 0,0%,86.27%;
--scheduling-block-scheduler-text-color: hsla(0,0%,35.29%,1);
--form-field-radio-shape-border-bottom-right-radius: 5px;
--list-section-simple-card-button-text-color: hsla(0,0%,100%,1);
--portfolio-grid-overlay-title-color: hsla(0,0%,35.29%,1);
--tweak-blog-item-pagination-icon-color: hsla(0,0%,35.29%,1);
--image-block-collage-image-title-color: hsla(0,0%,35.29%,1);
--list-section-banner-slideshow-title-color: hsla(0,0%,35.29%,1);
--portfolio-index-background-title-color: hsla(0,0%,35.29%,1);
--headingLargeColor: hsla(0,0%,35.29%,1);
--tweak-form-block-button-text-color: hsla(0,0%,100%,1);
--tweak-summary-block-excerpt-color: hsla(0,0%,35.29%,1);
```

### Spacing

```css
--course-item-lesson-name-font-letter-spacing: -.03em;
--portfolio-grid-overlay-title-font-font-size-value: 3.4;
--menu-block-item-description-font-letter-spacing: .02em;
--portfolio-item-pagination-font-font-size-value: 3.4;
--portfolio-item-pagination-font-font-size: 3.4rem;
--portfolio-index-background-title-font-letter-spacing: -.03em;
--menu-block-item-title-font-font-size: 1.2rem;
--product-basic-item-restock-notification-full-layout-font-font-size-value: 1;
--form-label-spacing-bottom: 4px;
--site-title-font-letter-spacing: -.03em;
--video-item-meta-font-font-size-value: .7;
--course-item-name-mobile-font-font-size-value: 1.3;
--mobile-site-title-font-letter-spacing: -.03em;
--form-field-checkbox-column-gap: 10px;
--list-section-title-text-font-font-size-value: 6.1;
--video-basic-grid-list-excerpt-font-font-size-value: .9;
--blog-side-by-side-list-excerpt-font-font-size: 1rem;
--product-basic-item-restock-notification-wrap-layout-font-font-size-value: 1;
--blog-basic-grid-list-excerpt-font-font-size: .9rem;
--product-block-price-font-font-size: 1.1rem;
--commerce-mini-cart-image-size: 60px;
--product-grid-text-below-price-font-font-size-value: .7;
--product-basic-item-scarcity-full-layout-font-letter-spacing: .04em;
--blog-single-column-list-excerpt-font-letter-spacing: .02em;
--video-basic-grid-list-category-nav-font-letter-spacing: .02em;
--blog-side-by-side-list-title-font-font-size-value: 6.1;
--course-list-course-item-lesson-excerpt-font-font-size: .875rem;
--form-block-caption-text-font-letter-spacing: .02em;
--product-list-description-font-letter-spacing: .02em;
--form-field-spacing-bottom: 20px;
--video-item-title-font-letter-spacing: -.03em;
--blog-grid-masonry-list-title-font-font-size: 3.4rem;
--product-basic-item-add-ons-title-full-layout-font-font-size-value: 1;
--blog-alternating-side-by-side-list-title-font-letter-spacing: -.03em;
--product-grid-text-below-scarcity-font-letter-spacing: .04em;
--events-item-pagination-font-font-size: 3.4rem;
--product-block-description-font-font-size-value: 1;
--product-basic-item-add-ons-title-half-layout-font-font-size-value: 1;
--newsletter-block-footnote-text-font-font-size-value: .9;
--events-item-pagination-date-font-font-size-value: .7;
--product-basic-item-description-half-layout-font-font-size: 1rem;
--image-block-collage-image-content-padding: 10%;
--product-basic-item-variant-fields-wrap-layout-font-letter-spacing: .02em;
--blog-grid-masonry-list-excerpt-font-font-size: .9rem;
--blog-side-by-side-list-meta-font-letter-spacing: .04em;
--newsletter-block-title-text-font-font-size: 3.4rem;
--content-link-block-title-font-font-size: 1rem;
--product-grid-text-below-price-font-font-size: .7rem;
--product-basic-item-description-font-letter-spacing: .02em;
--form-field-radio-size: 15px;
--newsletter-block-description-text-font-font-size-value: 1;
--portfolio-grid-basic-title-font-font-size-value: 1.2;
--portfolio-hover-follow-title-font-letter-spacing: -.03em;
--course-item-side-nav-chapter-meta-font-font-size-value: .8;
--course-item-side-nav-lesson-meta-font-letter-spacing: .04em;
--header-button-font-font-size: .7rem;
--announcement-bar-font-letter-spacing: .02em;
--menu-block-title-font-letter-spacing: -.03em;
--product-grid-text-below-scarcity-font-font-size: .7rem;
--product-basic-item-price-full-layout-font-font-size-value: 1;
--blog-single-column-list-meta-font-letter-spacing: .04em;
--product-block-description-font-letter-spacing: .02em;
--portfolio-index-background-title-font-font-size-value: 8.3;
--course-list-course-item-lesson-excerpt-font-font-size-value: .875;
--course-item-side-nav-lesson-meta-font-font-size: .8rem;
--course-list-grid-layout-chapter-name-font-font-size-value: 2;
--newsletter-block-button-text-font-font-size-value: 1;
--newsletter-block-field-text-font-letter-spacing: .02em;
--course-list-chapter-item-chapter-name-font-font-size-value: 2;
--product-basic-item-variant-fields-wrap-layout-font-font-size: .75rem;
--course-list-grid-layout-course-item-meta-font-font-size: .75rem;
--course-item-name-mobile-font-letter-spacing: -.03em;
--product-basic-item-title-font-font-size: 6.1rem;
--normal-text-size-value: 1;
--product-basic-item-title-full-layout-font-letter-spacing: -.03em;
--course-item-side-nav-chapter-meta-font-font-size: .8rem;
--product-basic-item-title-half-layout-font-letter-spacing: -.03em;
--header-button-font-letter-spacing: .02em;
--product-basic-item-price-half-layout-font-font-size: 1rem;
--cookie-banner-disclaimer-font-font-size-value: .8;
--site-navigation-font-font-size: .9rem;
--blog-item-pagination-font-font-size-value: 3.4;
--product-basic-item-add-ons-title-full-layout-font-font-size: 1rem;
--course-list-chapter-item-chapter-meta-font-font-size-value: .75;
--blog-item-pagination-font-font-size: 3.4rem;
--tertiary-button-padding-x: 2.004em;
--course-item-side-nav-lesson-name-font-font-size-value: 1;
--form-block-description-text-font-font-size-value: .9;
--blog-side-by-side-list-title-font-font-size: 6.1rem;
--quote-block-source-font-font-size-value: .7;
--form-field-radio-row-gap: 10px;
--form-field-radio-column-gap: 10px;
--product-basic-item-restock-notification-wrap-layout-font-letter-spacing: .02em;
--blog-item-title-font-font-size: 8.3rem;
--form-block-option-text-font-font-size: .9rem;
--product-block-description-font-font-size: 1rem;
--product-grid-text-below-status-font-font-size: .7rem;
--product-basic-item-title-font-letter-spacing: -.03em;
--course-list-grid-layout-course-item-excerpt-font-font-size-value: .875;
--video-preview-badge-font-letter-spacing: .02em;
--blog-side-by-side-list-meta-font-font-size-value: .7;
--form-block-option-text-font-font-size-value: .9;
--course-list-course-description-font-font-size: 1.2rem;
--form-block-select-dropdown-text-font-font-size-value: .9;
--video-preview-badge-font-font-size-value: 1;
--course-list-grid-layout-course-item-name-font-letter-spacing: -.03em;
--site-navigation-font-font-size-value: .9;
--normal-meta-size-value: .7;
--menu-block-nav-font-letter-spacing: .02em;
--product-basic-item-restock-notification-half-layout-font-font-size-value: 1;
--course-list-course-item-lesson-name-font-font-size-value: 1.125;
--product-basic-item-description-wrap-layout-font-font-size-value: 1;
--course-list-grid-layout-course-item-name-font-font-size: 1.125rem;
--newsletter-block-button-text-font-letter-spacing: .02em;
--portfolio-item-pagination-font-letter-spacing: -.03em;
--blog-basic-grid-list-title-font-font-size: 3.4rem;
--form-block-survey-title-text-font-letter-spacing: .02em;
--course-list-chapter-item-chapter-name-font-letter-spacing: -.03em;
--product-basic-item-price-font-font-size-value: 1.2;
--course-list-course-name-font-letter-spacing: -.03em;
--menu-block-item-title-font-font-size-value: 1.2;
--site-title-font-font-size: 1.2rem;
--heading-1-size-value: 8.3;
--tertiary-button-font-font-size-value: .9;
--product-basic-item-description-full-layout-font-font-size-value: 1;
--form-block-survey-title-text-font-font-size: 1rem;
--blog-single-column-list-title-font-font-size: 8.3rem;
--product-basic-item-variant-fields-full-layout-font-font-size: .75rem;
--product-basic-item-add-ons-title-font-font-size: 1rem;
--events-item-pagination-date-font-letter-spacing: .04em;
--product-basic-item-description-wrap-layout-font-font-size: 1rem;
--form-block-caption-text-font-font-size-value: .9;
--product-basic-item-add-ons-title-half-layout-font-letter-spacing: .02em;
--blog-item-meta-font-font-size: .7rem;
--course-list-chapter-item-chapter-meta-font-font-size: .75rem;
--product-basic-item-title-full-layout-font-font-size-value: 8.3;
--events-item-pagination-font-font-size-value: 3.4;
--heading-4-size: 1.2rem;
--product-basic-item-price-full-layout-font-font-size: 1rem;
--heading-font-letter-spacing: -.03em;
--newsletter-block-description-text-font-font-size: 1rem;
--blog-item-author-profile-font-letter-spacing: .02em;
--product-basic-item-variant-fields-font-letter-spacing: .04em;
--blog-grid-masonry-list-excerpt-font-font-size-value: .9;
--product-grid-text-below-title-font-font-size: 1.2rem;
--blog-grid-masonry-list-title-font-letter-spacing: -.03em;
--list-section-title-text-font-font-size: 6.1rem;
--list-section-title-text-font-letter-spacing: -.03em;
--product-basic-item-scarcity-wrap-layout-font-font-size-value: .85;
--product-block-title-font-font-size: 1.3rem;
--product-basic-item-variant-fields-font-font-size-value: .7;
--blog-item-meta-font-letter-spacing: .04em;
--course-list-course-name-font-font-size: 8.3rem;
--video-item-title-font-font-size: 6.1rem;
--newsletter-block-footnote-text-font-letter-spacing: .02em;
--course-list-grid-layout-chapter-meta-font-font-size-value: .875;
--product-basic-item-variant-fields-half-layout-font-font-size: .75rem;
--form-field-checkbox-row-gap: 10px;
--product-basic-item-title-wrap-layout-font-font-size: 8.3rem;
--video-basic-grid-list-category-nav-font-font-size: 1rem;
--product-basic-item-price-wrap-layout-font-font-size-value: 1;
--blog-side-by-side-list-excerpt-font-letter-spacing: .02em;
--course-list-course-item-lesson-name-font-letter-spacing: .02em;
--product-basic-item-add-ons-title-font-font-size-value: 1;
--body-font-letter-spacing: .02em;
--blog-grid-masonry-list-meta-font-letter-spacing: .04em;
--menu-block-title-font-font-size-value: 3.4;
--form-block-description-text-font-font-size: .9rem;
--course-item-chapter-name-font-letter-spacing: .02em;
--blog-basic-grid-list-excerpt-font-letter-spacing: .02em;
--blog-single-column-list-title-font-letter-spacing: -.03em;
--product-basic-item-description-font-font-size-value: 1;
--form-block-survey-title-text-font-font-size-value: 1;
--form-block-placeholder-text-font-font-size-value: .9;
--product-basic-item-price-wrap-layout-font-font-size: 1rem;
--product-basic-item-add-ons-title-wrap-layout-font-letter-spacing: .02em;
--blog-side-by-side-list-excerpt-font-font-size-value: 1;
--cookie-banner-disclaimer-font-font-size: .8rem;
--small-text-size: .9rem;
--video-item-title-font-font-size-value: 6.1;
--small-text-size-value: .9;
--content-link-block-title-font-letter-spacing: .02em;
--product-basic-item-description-half-layout-font-letter-spacing: .02em;
--course-list-grid-layout-chapter-meta-font-letter-spacing: .04em;
--course-item-chapter-name-font-font-size: 1rem;
--large-text-size-value: 1.2;
--blog-side-by-side-list-title-font-letter-spacing: -.03em;
--form-block-placeholder-text-font-font-size: .9rem;
--course-list-course-description-font-font-size-value: 1.2;
--blog-single-column-list-excerpt-font-font-size: 1rem;
--product-grid-text-below-price-font-letter-spacing: .04em;
--product-list-description-font-font-size: 1rem;
--blog-alternating-side-by-side-list-meta-font-letter-spacing: .04em;
--product-grid-text-below-status-font-letter-spacing: .04em;
--form-field-padding-horizontal: 0px;
--product-basic-item-restock-notification-half-layout-font-letter-spacing: .02em;
--portfolio-grid-overlay-title-font-letter-spacing: -.03em;
--form-field-padding-vertical: 5px;
--heading-4-size-value: 1.2;
--header-button-font-font-size-value: .7;
--blog-single-column-list-title-font-font-size-value: 8.3;
--video-item-meta-font-font-size: .7rem;
--product-basic-item-title-half-layout-font-font-size-value: 8.3;
--newsletter-block-footnote-text-font-font-size: .9rem;
--product-grid-text-below-title-font-font-size-value: 1.2;
--blog-side-by-side-list-meta-font-font-size: .7rem;
--menu-block-title-font-font-size: 3.4rem;
--product-grid-text-below-scarcity-font-font-size-value: .7;
--menu-block-item-price-font-letter-spacing: .02em;
--product-basic-item-description-full-layout-font-letter-spacing: .02em;
--menu-block-item-description-font-font-size: 1rem;
--product-basic-item-scarcity-full-layout-font-font-size-value: .85;
--course-item-name-font-letter-spacing: -.03em;
--video-basic-grid-list-excerpt-font-letter-spacing: .02em;
--newsletter-block-description-text-font-letter-spacing: .02em;
--announcement-bar-font-font-size: 1rem;
--video-item-description-font-letter-spacing: .02em;
--video-basic-grid-list-title-font-font-size-value: 1.2;
--product-block-price-font-font-size-value: 1.1;
--events-item-pagination-font-letter-spacing: -.03em;
--normal-meta-size: .7rem;
--menu-block-nav-font-font-size-value: .9;
--mobile-site-title-font-font-size: 1.7rem;
--course-list-grid-layout-chapter-name-font-letter-spacing: -.03em;
--course-item-side-nav-chapter-meta-font-letter-spacing: .04em;
--product-basic-item-scarcity-half-layout-font-font-size: .85rem;
--heading-3-size: 3.4rem;
--product-list-description-font-font-size-value: 1;
--newsletter-block-title-text-font-font-size-value: 3.4;
--course-list-grid-layout-course-item-name-font-font-size-value: 1.125;
--announcement-bar-font-font-size-value: 1;
--product-block-price-font-letter-spacing: .02em;
--video-item-description-font-font-size-value: 1;
--blog-grid-masonry-list-excerpt-font-letter-spacing: .02em;
--course-item-side-nav-chapter-name-font-font-size: 1.5rem;
--product-basic-item-title-wrap-layout-font-letter-spacing: -.03em;
--video-item-pagination-font-font-size-value: 3.4;
--blog-alternating-side-by-side-list-title-font-font-size: 6.1rem;
--portfolio-index-background-title-font-font-size: 8.3rem;
--video-basic-grid-list-title-font-letter-spacing: -.03em;
--portfolio-hover-static-title-font-font-size-value: 8.3;
--form-block-input-text-font-font-size: 1rem;
--course-list-course-item-lesson-meta-font-font-size: .75rem;
--product-basic-item-scarcity-wrap-layout-font-letter-spacing: .04em;
--product-basic-item-variant-fields-full-layout-font-letter-spacing: .02em;
--course-list-grid-layout-chapter-name-font-font-size: 2rem;
--product-basic-item-price-font-letter-spacing: -.03em;
--large-text-size: 1.2rem;
--product-basic-item-add-ons-title-wrap-layout-font-font-size: 1rem;
--blog-item-title-font-font-size-value: 8.3;
--product-block-title-font-font-size-value: 1.3;
--course-list-course-item-lesson-excerpt-font-letter-spacing: .02em;
--blog-grid-masonry-list-meta-font-font-size-value: .7;
--product-basic-item-restock-notification-font-font-size-value: 1;
--blog-item-author-profile-font-font-size-value: .9;
--course-item-side-nav-lesson-name-font-font-size: 1rem;
--product-basic-item-title-full-layout-font-font-size: 8.3rem;
--form-block-description-text-font-letter-spacing: .02em;
--product-basic-item-title-wrap-layout-font-font-size-value: 8.3;
--product-basic-item-description-half-layout-font-font-size-value: 1;
--product-basic-item-add-ons-title-wrap-layout-font-font-size-value: 1;
--product-basic-item-add-ons-title-half-layout-font-font-size: 1rem;
--blog-alternating-side-by-side-list-meta-font-font-size: .7rem;
--blog-basic-grid-list-title-font-font-size-value: 3.4;
--blog-basic-grid-list-excerpt-font-font-size-value: .9;
--form-field-radio-space-between-icon-and-text: 11px;
--heading-2-size: 6.1rem;
--blog-alternating-side-by-side-list-title-font-font-size-value: 6.1;
--portfolio-hover-static-title-font-font-size: 8.3rem;
--product-basic-item-price-half-layout-font-font-size-value: 1;
--product-basic-item-price-wrap-layout-font-letter-spacing: .02em;
--product-basic-item-restock-notification-full-layout-font-font-size: 1rem;
--product-basic-item-restock-notification-wrap-layout-font-font-size: 1rem;
--blog-basic-grid-list-meta-font-font-size: .7rem;
--course-item-name-mobile-font-font-size: 1.3rem;
--course-list-grid-layout-course-item-meta-font-letter-spacing: .04em;
--blog-basic-grid-list-title-font-letter-spacing: -.03em;
--blog-item-title-font-letter-spacing: -.03em;
--product-basic-item-restock-notification-font-font-size: 1rem;
--video-item-pagination-font-letter-spacing: -.03em;
--form-field-checkbox-padding-horizontal: 10px;
--blog-alternating-side-by-side-list-excerpt-font-letter-spacing: .02em;
--course-item-lesson-name-font-font-size: 4rem;
--form-block-input-text-font-font-size-value: 1;
--quote-block-source-font-letter-spacing: .04em;
--form-block-placeholder-text-font-letter-spacing: .02em;
--product-basic-item-description-full-layout-font-font-size: 1rem;
--course-list-course-name-font-font-size-value: 8.3;
--form-field-column-gap: 10px;
--course-item-chapter-name-font-font-size-value: 1;
--video-basic-grid-list-title-font-font-size: 1.2rem;
--course-item-name-font-font-size: 2rem;
--product-basic-item-scarcity-wrap-layout-font-font-size: .85rem;
--product-basic-item-variant-fields-wrap-layout-font-font-size-value: .75;
--menu-block-item-price-font-font-size-value: 1;
--menu-block-nav-font-font-size: .9rem;
--video-basic-grid-list-meta-font-letter-spacing: .04em;
--meta-font-letter-spacing: .04em;
--normal-text-size: 1rem;
--form-field-checkbox-space-between-icon-and-text: 11px;
--blog-alternating-side-by-side-list-excerpt-font-font-size-value: 1;
--form-field-survey-size: 15px;
--course-list-grid-layout-chapter-meta-font-font-size: .875rem;
--product-basic-item-add-ons-title-font-letter-spacing: .02em;
--video-item-description-font-font-size: 1rem;
--video-basic-grid-list-meta-font-font-size: .7rem;
--product-basic-item-price-full-layout-font-letter-spacing: .02em;
--portfolio-hover-follow-title-font-font-size: 8.3rem;
--portfolio-grid-basic-title-font-font-size: 1.2rem;
--course-item-side-nav-chapter-name-font-font-size-value: 1.5;
--base-font-size: 16px;
--product-basic-item-restock-notification-font-letter-spacing: .02em;
--product-basic-item-variant-fields-full-layout-font-font-size-value: .75;
--blog-alternating-side-by-side-list-excerpt-font-font-size: 1rem;
--tertiary-button-padding-y: 1.2em;
--course-list-grid-layout-course-item-meta-font-font-size-value: .75;
--quote-block-text-font-font-size-value: 1.2;
--video-item-pagination-font-font-size: 3.4rem;
--course-item-lesson-name-font-font-size-value: 4;
--course-list-course-description-font-letter-spacing: .02em;
--newsletter-block-field-text-font-font-size: 1rem;
--site-title-font-font-size-value: 1.2;
--course-item-name-font-font-size-value: 2;
--course-list-grid-layout-course-item-excerpt-font-font-size: .875rem;
--portfolio-grid-overlay-title-font-font-size: 3.4rem;
--newsletter-block-title-text-font-letter-spacing: -.03em;
--newsletter-block-field-text-font-font-size-value: 1;
--product-basic-item-variant-fields-half-layout-font-letter-spacing: .02em;
--course-list-grid-layout-course-item-excerpt-font-letter-spacing: .02em;
--course-list-course-item-lesson-meta-font-letter-spacing: .04em;
--product-basic-item-variant-fields-half-layout-font-font-size-value: .75;
--video-basic-grid-list-excerpt-font-font-size: .9rem;
--product-basic-item-variant-fields-font-font-size: .7rem;
--product-basic-item-restock-notification-half-layout-font-font-size: 1rem;
--form-field-radio-padding-horizontal: 10px;
--blog-basic-grid-list-meta-font-letter-spacing: .04em;
--form-block-select-dropdown-text-font-letter-spacing: .02em;
--form-caption-spacing-bottom: 2px;
--product-basic-item-restock-notification-full-layout-font-letter-spacing: .02em;
--menu-block-item-title-font-letter-spacing: -.03em;
--blog-basic-grid-list-meta-font-font-size-value: .7;
--course-item-side-nav-chapter-name-font-letter-spacing: -.03em;
--blog-single-column-list-excerpt-font-font-size-value: 1;
--mobile-site-title-font-font-size-value: 1.7;
--form-description-spacing-bottom: 4px;
--product-basic-item-title-font-font-size-value: 6.1;
--quote-block-text-font-font-size: 1.2rem;
--form-block-title-text-font-letter-spacing: .02em;
--form-block-title-text-font-font-size-value: 1;
--course-list-chapter-item-chapter-meta-font-letter-spacing: .04em;
--product-grid-text-below-title-font-letter-spacing: -.03em;
--form-block-input-text-font-letter-spacing: .02em;
--heading-3-size-value: 3.4;
--blog-item-author-profile-font-font-size: .9rem;
--portfolio-hover-static-title-font-letter-spacing: -.03em;
--menu-block-item-price-font-font-size: 1rem;
--product-basic-item-price-font-font-size: 1.2rem;
--product-basic-item-title-half-layout-font-font-size: 8.3rem;
--product-basic-item-description-wrap-layout-font-letter-spacing: .02em;
--product-block-title-font-letter-spacing: .02em;
--quote-block-source-font-font-size: .7rem;
--form-field-checkbox-padding-vertical: 1px;
--product-basic-item-price-half-layout-font-letter-spacing: .02em;
--events-item-pagination-date-font-font-size: .7rem;
--quote-block-text-font-letter-spacing: .02em;
--product-basic-item-scarcity-font-font-size-value: 1;
--commerce-mini-cart-image-placeholder-size: 22px;
--product-basic-item-scarcity-font-letter-spacing: .04em;
--blog-item-meta-font-font-size-value: .7;
--video-preview-badge-font-font-size: 1rem;
--tertiary-button-font-letter-spacing: .02em;
--product-basic-item-description-font-font-size: 1rem;
--form-field-checkbox-size: 15px;
--form-field-radio-padding-vertical: 1px;
--blog-grid-masonry-list-meta-font-font-size: .7rem;
--form-block-caption-text-font-font-size: .9rem;
--form-block-option-text-font-letter-spacing: .02em;
--course-list-chapter-item-chapter-name-font-font-size: 2rem;
--blog-alternating-side-by-side-list-meta-font-font-size-value: .7;
--heading-2-size-value: 6.1;
--course-item-side-nav-lesson-name-font-letter-spacing: .02em;
--portfolio-grid-basic-title-font-letter-spacing: -.03em;
--course-list-course-item-lesson-meta-font-font-size-value: .75;
--blog-single-column-list-meta-font-font-size: .7rem;
--content-link-block-title-font-font-size-value: 1;
--blog-grid-masonry-list-title-font-font-size-value: 3.4;
--form-block-title-text-font-font-size: 1rem;
--course-item-side-nav-lesson-meta-font-font-size-value: .8;
--product-basic-item-scarcity-font-font-size: 1rem;
--product-basic-item-scarcity-full-layout-font-font-size: .85rem;
--video-basic-grid-list-category-nav-font-font-size-value: 1;
--heading-1-size: 8.3rem;
--form-block-select-dropdown-text-font-font-size: .9rem;
--portfolio-hover-follow-title-font-font-size-value: 8.3;
--newsletter-block-button-text-font-font-size: 1rem;
--cookie-banner-disclaimer-font-letter-spacing: .02em;
--product-basic-item-scarcity-half-layout-font-letter-spacing: .04em;
--site-navigation-font-letter-spacing: .01em;
--tertiary-button-font-font-size: .9rem;
--blog-single-column-list-meta-font-font-size-value: .7;
--product-basic-item-scarcity-half-layout-font-font-size-value: .85;
--video-item-meta-font-letter-spacing: .04em;
--blog-item-pagination-font-letter-spacing: -.03em;
--product-grid-text-below-status-font-font-size-value: .7;
--course-list-course-item-lesson-name-font-font-size: 1.125rem;
--menu-block-item-description-font-font-size-value: 1;
--form-field-dropdown-icon-size: 18px;
--video-basic-grid-list-meta-font-font-size-value: .7;
--product-basic-item-add-ons-title-full-layout-font-letter-spacing: .02em;
```

### Typography

```css
--tertiary-button-font-font-style: normal;
--product-basic-item-restock-notification-wrap-layout-font-font-style: normal;
--content-link-block-title-font-font-weight: 400;
--product-basic-item-title-half-layout-font-font-family: "Cormorant Garamond";
--quote-block-text-font-font-family: "dejanire-sans";
--quote-block-text-font-font-weight: 400;
--product-basic-item-add-ons-title-half-layout-font-font-weight: 400;
--product-basic-item-description-font-line-height: 1.5em;
--course-list-grid-layout-chapter-meta-font-font-style: normal;
--product-basic-item-restock-notification-wrap-layout-font-text-transform: none;
--course-list-course-description-font-line-height: 1.5em;
--product-basic-item-scarcity-font-line-height: .1em;
--video-basic-grid-list-category-nav-font-font-family: "dejanire-sans";
--form-block-placeholder-text-font-line-height: 1.5em;
--product-list-description-font-text-transform: none;
--blog-grid-masonry-list-title-font-text-transform: none;
--product-basic-item-variant-fields-wrap-layout-font-font-family: "dejanire-sans";
--blog-item-author-profile-font-line-height: 1.5em;
--product-basic-item-add-ons-title-wrap-layout-font-font-weight: 400;
--video-basic-grid-list-title-font-font-weight: 300;
--blog-item-author-profile-font-font-family: "dejanire-sans";
--mobile-site-title-font-text-transform: none;
--course-item-side-nav-lesson-meta-font-line-height: .1em;
--blog-side-by-side-list-excerpt-font-font-family: "dejanire-sans";
--portfolio-item-pagination-font-font-style: normal;
--newsletter-block-button-text-font-line-height: 1.5em;
--blog-basic-grid-list-meta-font-font-style: normal;
--product-basic-item-variant-fields-font-line-height: .1em;
--newsletter-block-description-text-font-font-family: "dejanire-sans";
--menu-block-title-font-font-style: normal;
--course-list-course-item-lesson-meta-font-font-weight: 300;
--heading-font-font-weight: 300;
--blog-alternating-side-by-side-list-title-font-font-family: "Cormorant Garamond";
--product-basic-item-title-full-layout-font-font-weight: 300;
--events-item-pagination-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-font-style: normal;
--form-block-survey-title-text-font-font-style: normal;
--product-basic-item-add-ons-title-half-layout-font-font-family: "dejanire-sans";
--meta-font-text-transform: uppercase;
--course-list-grid-layout-course-item-meta-font-font-weight: 300;
--course-list-course-item-lesson-meta-font-font-style: normal;
--menu-block-item-description-font-font-style: normal;
--blog-single-column-list-excerpt-font-font-style: normal;
--site-title-font-line-height: 1.2em;
--blog-side-by-side-list-meta-font-font-style: normal;
--product-basic-item-variant-fields-font-font-weight: 300;
--video-basic-grid-list-meta-font-text-transform: uppercase;
--product-basic-item-scarcity-font-font-style: normal;
--course-list-course-name-font-font-family: "Cormorant Garamond";
--product-basic-item-restock-notification-full-layout-font-font-weight: 400;
--course-list-grid-layout-chapter-name-font-font-style: normal;
--product-basic-item-variant-fields-font-font-style: normal;
--blog-basic-grid-list-meta-font-line-height: .1em;
--course-item-chapter-name-font-font-weight: 400;
--product-basic-item-description-wrap-layout-font-text-transform: none;
--portfolio-hover-follow-title-font-font-family: "Cormorant Garamond";
--product-basic-item-scarcity-font-text-transform: uppercase;
--tertiary-button-font-line-height: 1.2em;
--product-grid-text-below-price-font-line-height: .1em;
--video-item-description-font-font-style: normal;
--blog-single-column-list-meta-font-font-style: normal;
--portfolio-grid-overlay-title-font-text-transform: none;
--blog-basic-grid-list-meta-font-font-weight: 300;
--content-link-block-title-font-font-family: "dejanire-sans";
--product-grid-text-below-price-font-font-family: "Roboto";
--product-grid-text-below-status-font-font-weight: 300;
--quote-block-source-font-font-style: normal;
--form-block-description-text-font-text-transform: none;
--newsletter-block-field-text-font-text-transform: none;
--course-item-side-nav-lesson-name-font-font-style: normal;
--product-basic-item-restock-notification-half-layout-font-line-height: 1.5em;
--menu-block-item-description-font-text-transform: none;
--video-preview-badge-font-font-style: normal;
--course-list-grid-layout-course-item-name-font-font-family: "Cormorant Garamond";
--portfolio-hover-follow-title-font-text-transform: none;
--course-list-grid-layout-course-item-name-font-line-height: 1.2em;
--blog-single-column-list-excerpt-font-text-transform: none;
--form-block-select-dropdown-text-font-font-family: "dejanire-sans";
--newsletter-block-button-text-font-font-weight: 400;
--product-basic-item-add-ons-title-font-line-height: 1.5em;
--course-list-chapter-item-chapter-meta-font-font-weight: 300;
--video-item-description-font-font-family: "dejanire-sans";
--product-basic-item-scarcity-half-layout-font-font-family: "Roboto";
--blog-alternating-side-by-side-list-excerpt-font-font-family: "dejanire-sans";
--product-basic-item-variant-fields-wrap-layout-font-line-height: 1.5em;
--site-title-font-font-style: normal;
--blog-side-by-side-list-meta-font-font-family: "Roboto";
--form-block-select-dropdown-text-font-font-style: normal;
--course-list-grid-layout-course-item-meta-font-line-height: .1em;
--cookie-banner-disclaimer-font-line-height: 1.5em;
--blog-grid-masonry-list-meta-font-font-family: "Roboto";
--form-block-description-text-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-line-height: .1em;
--product-basic-item-add-ons-title-wrap-layout-font-font-family: "dejanire-sans";
--product-basic-item-restock-notification-full-layout-font-text-transform: none;
--course-list-course-description-font-font-family: "dejanire-sans";
--blog-alternating-side-by-side-list-excerpt-font-line-height: 1.5em;
--course-item-name-mobile-font-font-weight: 300;
--blog-item-meta-font-font-style: normal;
--video-basic-grid-list-title-font-line-height: 1.2em;
--form-block-option-text-font-line-height: 1.5em;
--product-basic-item-restock-notification-wrap-layout-font-font-family: "dejanire-sans";
--announcement-bar-font-font-family: "dejanire-sans";
--menu-block-nav-font-font-weight: 400;
--video-basic-grid-list-meta-font-line-height: .1em;
--product-basic-item-title-half-layout-font-font-weight: 300;
--product-basic-item-title-full-layout-font-line-height: 1.2em;
--product-basic-item-price-full-layout-font-font-family: "dejanire-sans";
--events-item-pagination-font-font-weight: 300;
--video-basic-grid-list-meta-font-font-family: "Roboto";
--course-list-course-item-lesson-excerpt-font-line-height: 1.5em;
--product-basic-item-add-ons-title-font-text-transform: none;
--video-item-meta-font-font-weight: 300;
--events-item-pagination-date-font-font-family: "Roboto";
--form-block-title-text-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-line-height: .1em;
--blog-single-column-list-title-font-text-transform: none;
--newsletter-block-description-text-font-font-style: normal;
--form-block-option-text-font-font-weight: 400;
--menu-block-item-price-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-font-family: "Roboto";
--blog-grid-masonry-list-excerpt-font-line-height: 1.5em;
--product-block-description-font-line-height: 1.5em;
--course-item-side-nav-chapter-meta-font-font-style: normal;
--product-basic-item-title-wrap-layout-font-text-transform: none;
--video-basic-grid-list-excerpt-font-font-weight: 400;
--blog-single-column-list-title-font-font-weight: 300;
--list-section-title-text-font-text-transform: none;
--product-list-description-font-font-family: "dejanire-sans";
--product-grid-text-below-scarcity-font-font-style: normal;
--blog-side-by-side-list-excerpt-font-line-height: 1.5em;
--events-item-pagination-date-font-font-weight: 300;
--blog-basic-grid-list-title-font-font-weight: 300;
--video-basic-grid-list-excerpt-font-font-style: normal;
--meta-font-font-weight: 300;
--course-list-chapter-item-chapter-meta-font-font-style: normal;
--product-basic-item-title-full-layout-font-text-transform: none;
--form-block-placeholder-text-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-text-transform: none;
--portfolio-index-background-title-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-text-transform: uppercase;
--blog-item-title-font-font-style: normal;
--product-basic-item-title-full-layout-font-font-style: normal;
--portfolio-item-pagination-font-font-family: "Cormorant Garamond";
--mobile-site-title-font-font-family: "Cormorant Garamond";
--product-basic-item-title-half-layout-font-font-style: normal;
--header-button-font-text-transform: uppercase;
--product-basic-item-restock-notification-font-font-style: normal;
--course-item-side-nav-chapter-meta-font-text-transform: uppercase;
--video-item-pagination-font-font-style: normal;
--blog-grid-masonry-list-title-font-font-style: normal;
--course-list-grid-layout-chapter-name-font-font-family: "Cormorant Garamond";
--product-grid-text-below-status-font-text-transform: uppercase;
--course-item-side-nav-chapter-name-font-font-family: "Cormorant Garamond";
--portfolio-grid-overlay-title-font-font-weight: 300;
--product-basic-item-price-full-layout-font-text-transform: none;
--product-basic-item-price-half-layout-font-font-weight: 400;
--course-list-course-description-font-font-style: normal;
--blog-grid-masonry-list-meta-font-text-transform: uppercase;
--course-list-grid-layout-chapter-meta-font-font-family: "Roboto";
--product-grid-text-below-title-font-font-family: "Cormorant Garamond";
--form-block-survey-title-text-font-text-transform: none;
--site-navigation-font-font-weight: 400;
--portfolio-index-background-title-font-font-style: normal;
--blog-side-by-side-list-title-font-font-family: "Cormorant Garamond";
--product-basic-item-add-ons-title-full-layout-font-font-family: "dejanire-sans";
--blog-grid-masonry-list-title-font-line-height: 1.2em;
--video-item-title-font-line-height: 1.2em;
--course-list-course-item-lesson-excerpt-font-font-weight: 400;
--product-block-description-font-font-family: "dejanire-sans";
--menu-block-item-description-font-font-family: "dejanire-sans";
--product-basic-item-scarcity-half-layout-font-line-height: .1em;
--form-block-title-text-font-font-family: "dejanire-sans";
--menu-block-item-title-font-font-weight: 300;
--course-list-course-description-font-text-transform: none;
--blog-item-pagination-font-font-style: normal;
--menu-block-item-title-font-line-height: 1.2em;
--course-list-grid-layout-course-item-excerpt-font-text-transform: none;
--product-basic-item-restock-notification-wrap-layout-font-font-weight: 400;
--video-item-pagination-font-font-weight: 300;
--content-link-block-title-font-line-height: 1.5em;
--video-item-pagination-font-font-family: "Cormorant Garamond";
--blog-single-column-list-title-font-line-height: 1.2em;
--form-block-select-dropdown-text-font-font-weight: 400;
--product-basic-item-variant-fields-half-layout-font-line-height: 1.5em;
--product-list-description-font-font-weight: 400;
--course-list-course-name-font-font-weight: 300;
--menu-block-title-font-font-weight: 300;
--form-block-title-text-font-font-weight: 400;
--product-basic-item-restock-notification-font-line-height: 1.5em;
--menu-block-nav-font-text-transform: none;
--blog-alternating-side-by-side-list-meta-font-font-weight: 300;
--form-block-title-text-font-line-height: 1.5em;
--product-basic-item-price-font-font-family: "Cormorant Garamond";
--product-basic-item-restock-notification-full-layout-font-font-style: normal;
--product-basic-item-restock-notification-half-layout-font-font-style: normal;
--product-basic-item-scarcity-half-layout-font-font-style: normal;
--product-basic-item-title-half-layout-font-line-height: 1.2em;
--course-item-side-nav-lesson-meta-font-font-weight: 300;
--product-basic-item-scarcity-font-font-family: "Roboto";
--form-block-survey-title-text-font-font-weight: 400;
--newsletter-block-field-text-font-font-style: normal;
--course-item-side-nav-lesson-name-font-font-weight: 400;
--blog-alternating-side-by-side-list-title-font-font-weight: 300;
--cookie-banner-disclaimer-font-font-weight: 400;
--portfolio-hover-follow-title-font-font-weight: 300;
--course-item-lesson-name-font-text-transform: none;
--site-navigation-font-font-family: "dejanire-sans";
--product-block-description-font-font-style: normal;
--course-item-side-nav-lesson-name-font-line-height: 1.5em;
--header-button-font-font-weight: 400;
--product-block-title-font-font-family: "dejanire-sans";
--menu-block-item-price-font-font-weight: 400;
--blog-side-by-side-list-title-font-line-height: 1.2em;
--blog-item-pagination-font-line-height: 1.2em;
--course-list-chapter-item-chapter-name-font-font-family: "Cormorant Garamond";
--course-item-chapter-name-font-font-family: "dejanire-sans";
--video-preview-badge-font-font-weight: 400;
--product-basic-item-title-wrap-layout-font-line-height: 1.2em;
--form-block-description-text-font-font-family: "dejanire-sans";
--product-basic-item-description-wrap-layout-font-font-family: "dejanire-sans";
--body-font-font-family: "dejanire-sans";
--course-list-grid-layout-course-item-name-font-font-style: normal;
--body-font-line-height: 1.5em;
--course-list-course-name-font-line-height: 1.2em;
--video-basic-grid-list-excerpt-font-font-family: "dejanire-sans";
--product-block-price-font-font-family: "dejanire-sans";
--product-basic-item-restock-notification-full-layout-font-line-height: 1.5em;
--product-basic-item-price-wrap-layout-font-font-style: normal;
--product-basic-item-restock-notification-font-text-transform: none;
--course-list-grid-layout-chapter-name-font-line-height: 1.2em;
--portfolio-hover-follow-title-font-line-height: 1.2em;
--course-list-grid-layout-chapter-name-font-text-transform: none;
--course-item-name-font-text-transform: none;
--site-title-font-font-weight: 300;
--newsletter-block-button-text-font-font-family: "dejanire-sans";
--quote-block-text-font-text-transform: none;
--menu-block-item-title-font-text-transform: none;
--course-list-course-item-lesson-meta-font-text-transform: uppercase;
--meta-font-line-height: .1em;
--site-navigation-font-font-style: normal;
--quote-block-text-font-font-style: normal;
--video-preview-badge-font-text-transform: none;
--product-basic-item-variant-fields-wrap-layout-font-font-style: normal;
--product-basic-item-variant-fields-full-layout-font-line-height: 1.5em;
--heading-font-font-style: normal;
--blog-item-meta-font-font-family: "Roboto";
--course-item-name-font-line-height: 1.2em;
--product-basic-item-description-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-family: "Roboto";
--cookie-banner-disclaimer-font-font-style: normal;
--course-item-side-nav-chapter-name-font-font-style: normal;
--video-item-pagination-font-line-height: 1.2em;
--blog-basic-grid-list-title-font-line-height: 1.2em;
--product-basic-item-description-full-layout-font-font-style: normal;
--list-section-title-text-font-font-weight: 300;
--product-basic-item-price-half-layout-font-font-style: normal;
--product-grid-text-below-status-font-font-style: normal;
--product-basic-item-scarcity-half-layout-font-font-weight: 300;
--course-item-side-nav-lesson-name-font-font-family: "dejanire-sans";
--announcement-bar-font-text-transform: none;
--product-basic-item-add-ons-title-half-layout-font-text-transform: none;
--form-block-input-text-font-font-weight: 400;
--product-list-description-font-line-height: 1.5em;
--blog-grid-masonry-list-excerpt-font-font-style: normal;
--course-item-lesson-name-font-font-family: "Cormorant Garamond";
--portfolio-hover-static-title-font-font-weight: 300;
--blog-basic-grid-list-excerpt-font-font-weight: 400;
--blog-item-title-font-font-family: "Cormorant Garamond";
--product-basic-item-description-wrap-layout-font-font-style: normal;
--heading-font-text-transform: none;
--product-basic-item-description-full-layout-font-line-height: 1.5em;
--tertiary-button-font-font-family: "kepler-std";
--form-block-placeholder-text-font-font-family: "dejanire-sans";
--form-block-caption-text-font-font-family: "dejanire-sans";
--video-item-description-font-line-height: 1.5em;
--video-basic-grid-list-meta-font-font-style: normal;
--course-item-name-font-font-family: "Cormorant Garamond";
--product-block-price-font-font-style: normal;
--product-basic-item-scarcity-wrap-layout-font-text-transform: uppercase;
--blog-grid-masonry-list-title-font-font-family: "Cormorant Garamond";
--form-block-caption-text-font-font-style: normal;
--blog-item-title-font-line-height: 1.2em;
--product-basic-item-title-wrap-layout-font-font-weight: 300;
--product-basic-item-scarcity-full-layout-font-line-height: .1em;
--course-list-course-item-lesson-excerpt-font-text-transform: none;
--blog-grid-masonry-list-title-font-font-weight: 300;
--portfolio-hover-static-title-font-font-style: normal;
--product-basic-item-title-font-font-style: normal;
--product-basic-item-price-half-layout-font-font-family: "dejanire-sans";
--blog-grid-masonry-list-meta-font-font-style: normal;
--product-block-title-font-font-style: normal;
--content-link-block-title-font-text-transform: none;
--portfolio-grid-basic-title-font-line-height: 1.2em;
--portfolio-hover-static-title-font-font-family: "Cormorant Garamond";
--video-preview-badge-font-line-height: 1.5em;
--blog-grid-masonry-list-excerpt-font-text-transform: none;
--menu-block-title-font-line-height: 1.2em;
--course-list-course-item-lesson-excerpt-font-font-family: "dejanire-sans";
--product-list-description-font-font-style: normal;
--course-item-side-nav-chapter-name-font-font-weight: 300;
--product-basic-item-add-ons-title-wrap-layout-font-font-style: normal;
--product-grid-text-below-price-font-font-style: normal;
--product-basic-item-variant-fields-half-layout-font-font-weight: 400;
--blog-alternating-side-by-side-list-title-font-text-transform: none;
--blog-basic-grid-list-meta-font-text-transform: uppercase;
--product-grid-text-below-status-font-line-height: .1em;
--menu-block-nav-font-font-style: normal;
--product-basic-item-add-ons-title-full-layout-font-font-style: normal;
--course-list-grid-layout-course-item-name-font-font-weight: 300;
--site-navigation-font-text-transform: none;
--blog-item-pagination-font-font-family: "Cormorant Garamond";
--form-block-caption-text-font-font-weight: 400;
--course-item-side-nav-chapter-name-font-line-height: 1.2em;
--blog-alternating-side-by-side-list-title-font-line-height: 1.2em;
--site-title-font-font-family: "Cormorant Garamond";
--course-list-grid-layout-course-item-excerpt-font-font-family: "dejanire-sans";
--cookie-banner-disclaimer-font-text-transform: none;
--product-basic-item-title-half-layout-font-text-transform: none;
--newsletter-block-title-text-font-font-style: normal;
--newsletter-block-title-text-font-font-weight: 300;
--blog-item-meta-font-line-height: .1em;
--body-font-text-transform: none;
--form-block-input-text-font-font-family: "dejanire-sans";
--announcement-bar-font-line-height: 1.5em;
--video-item-pagination-font-text-transform: none;
--portfolio-grid-basic-title-font-font-style: normal;
--course-item-lesson-name-font-font-style: normal;
--course-list-grid-layout-course-item-excerpt-font-line-height: 1.5em;
--blog-single-column-list-title-font-font-style: normal;
--video-item-title-font-text-transform: none;
--product-basic-item-variant-fields-half-layout-font-font-style: normal;
--cookie-banner-disclaimer-font-font-family: "dejanire-sans";
--newsletter-block-footnote-text-font-font-weight: 400;
--content-link-block-title-font-font-style: normal;
--product-basic-item-restock-notification-half-layout-font-text-transform: none;
--newsletter-block-footnote-text-font-font-family: "dejanire-sans";
--blog-side-by-side-list-title-font-font-style: normal;
--blog-item-author-profile-font-font-weight: 400;
--course-list-grid-layout-chapter-meta-font-font-weight: 300;
--blog-side-by-side-list-title-font-font-weight: 300;
--form-block-survey-title-text-font-font-family: "dejanire-sans";
--course-item-side-nav-chapter-meta-font-font-weight: 300;
--portfolio-grid-overlay-title-font-line-height: 1.2em;
--product-basic-item-price-font-font-style: normal;
--blog-side-by-side-list-excerpt-font-font-weight: 400;
--blog-single-column-list-title-font-font-family: "Cormorant Garamond";
--meta-font-font-style: normal;
--form-block-survey-title-text-font-line-height: 1.5em;
--video-item-description-font-text-transform: none;
--product-basic-item-price-full-layout-font-font-weight: 400;
--portfolio-item-pagination-font-text-transform: none;
--heading-font-line-height: 1.2em;
--product-basic-item-restock-notification-half-layout-font-font-weight: 400;
--product-basic-item-restock-notification-font-font-weight: 400;
--newsletter-block-field-text-font-font-weight: 400;
--menu-block-nav-font-line-height: 1.5em;
--portfolio-index-background-title-font-font-weight: 300;
--course-item-name-mobile-font-line-height: 1.2em;
--product-basic-item-title-font-text-transform: none;
--product-grid-text-below-price-font-text-transform: uppercase;
--video-basic-grid-list-category-nav-font-font-style: normal;
--product-basic-item-add-ons-title-wrap-layout-font-line-height: 1.5em;
--blog-single-column-list-meta-font-font-weight: 300;
--form-block-option-text-font-font-family: "dejanire-sans";
--product-basic-item-price-wrap-layout-font-text-transform: none;
--product-block-title-font-font-weight: 400;
--blog-single-column-list-excerpt-font-font-family: "dejanire-sans";
--product-grid-text-below-title-font-text-transform: none;
--form-block-input-text-font-text-transform: none;
--product-basic-item-add-ons-title-half-layout-font-font-style: normal;
--newsletter-block-title-text-font-line-height: 1.2em;
--product-basic-item-description-half-layout-font-text-transform: none;
--video-item-title-font-font-style: normal;
--blog-grid-masonry-list-meta-font-line-height: .1em;
--product-grid-text-below-status-font-font-family: "Roboto";
--product-basic-item-description-full-layout-font-font-family: "dejanire-sans";
--video-item-meta-font-font-family: "Roboto";
--product-basic-item-description-full-layout-font-font-weight: 400;
--portfolio-grid-basic-title-font-font-weight: 300;
--form-block-select-dropdown-text-font-text-transform: none;
--product-basic-item-price-font-font-weight: 300;
--portfolio-index-background-title-font-font-family: "Cormorant Garamond";
--portfolio-grid-basic-title-font-font-family: "Cormorant Garamond";
--blog-item-pagination-font-font-weight: 300;
--heading-font-font-family: "Cormorant Garamond";
--events-item-pagination-font-font-style: normal;
--blog-item-author-profile-font-font-style: normal;
--product-basic-item-description-half-layout-font-font-style: normal;
--video-item-meta-font-text-transform: uppercase;
--menu-block-item-description-font-font-weight: 400;
--form-block-description-text-font-line-height: 1.5em;
--course-list-course-item-lesson-name-font-text-transform: none;
--product-basic-item-scarcity-font-font-weight: 300;
--events-item-pagination-font-font-family: "Cormorant Garamond";
--product-basic-item-variant-fields-wrap-layout-font-text-transform: none;
--course-list-grid-layout-course-item-excerpt-font-font-style: normal;
--portfolio-hover-static-title-font-line-height: 1.2em;
--product-basic-item-scarcity-wrap-layout-font-font-style: normal;
--video-basic-grid-list-category-nav-font-line-height: 1.5em;
--product-basic-item-restock-notification-half-layout-font-font-family: "dejanire-sans";
--form-block-select-dropdown-text-font-line-height: 1.5em;
--quote-block-text-font-line-height: 1.5em;
--blog-single-column-list-meta-font-font-family: "Roboto";
--newsletter-block-footnote-text-font-line-height: 1.5em;
--announcement-bar-font-font-weight: 400;
--newsletter-block-button-text-font-font-style: normal;
--newsletter-block-title-text-font-text-transform: none;
--menu-block-item-price-font-line-height: 1.5em;
--product-basic-item-price-full-layout-font-font-style: normal;
--video-basic-grid-list-title-font-font-family: "Cormorant Garamond";
--product-basic-item-price-wrap-layout-font-font-weight: 400;
--mobile-site-title-font-font-weight: 300;
--product-basic-item-add-ons-title-font-font-weight: 400;
--course-item-lesson-name-font-line-height: 1.2em;
--events-item-pagination-date-font-text-transform: uppercase;
--product-basic-item-description-font-font-style: normal;
--blog-item-title-font-font-weight: 300;
--blog-alternating-side-by-side-list-meta-font-font-style: normal;
--newsletter-block-button-text-font-text-transform: none;
--video-basic-grid-list-excerpt-font-line-height: 1.5em;
--blog-single-column-list-excerpt-font-font-weight: 400;
--blog-single-column-list-meta-font-text-transform: uppercase;
--product-basic-item-description-half-layout-font-font-family: "dejanire-sans";
--quote-block-source-font-font-family: "Roboto";
--blog-item-title-font-text-transform: none;
--blog-side-by-side-list-meta-font-text-transform: uppercase;
--blog-alternating-side-by-side-list-excerpt-font-text-transform: none;
--product-grid-text-below-scarcity-font-line-height: .1em;
--blog-grid-masonry-list-meta-font-font-weight: 300;
--product-basic-item-variant-fields-full-layout-font-font-family: "dejanire-sans";
--product-basic-item-scarcity-full-layout-font-font-weight: 300;
--blog-grid-masonry-list-excerpt-font-font-family: "dejanire-sans";
--menu-block-item-title-font-font-family: "Cormorant Garamond";
--product-basic-item-add-ons-title-full-layout-font-text-transform: none;
--blog-item-meta-font-text-transform: uppercase;
--product-basic-item-restock-notification-wrap-layout-font-line-height: 1.5em;
--video-item-meta-font-line-height: .1em;
--menu-block-item-price-font-font-family: "dejanire-sans";
--site-title-font-text-transform: none;
--video-basic-grid-list-title-font-font-style: normal;
--course-list-chapter-item-chapter-name-font-text-transform: none;
--product-basic-item-title-full-layout-font-font-family: "Cormorant Garamond";
--video-basic-grid-list-category-nav-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-style: normal;
--course-item-side-nav-chapter-name-font-text-transform: none;
--portfolio-hover-static-title-font-text-transform: none;
--portfolio-grid-overlay-title-font-font-family: "Cormorant Garamond";
--product-basic-item-restock-notification-font-font-family: "dejanire-sans";
--course-list-chapter-item-chapter-name-font-line-height: 1.2em;
--blog-side-by-side-list-meta-font-font-weight: 300;
--course-list-chapter-item-chapter-name-font-font-weight: 300;
--form-block-description-text-font-font-weight: 400;
--course-list-course-item-lesson-name-font-line-height: 1.5em;
--course-list-course-item-lesson-meta-font-line-height: .1em;
--product-basic-item-price-full-layout-font-line-height: 1.5em;
--video-item-description-font-font-weight: 400;
--video-basic-grid-list-meta-font-font-weight: 300;
--product-basic-item-scarcity-full-layout-font-text-transform: uppercase;
--blog-single-column-list-excerpt-font-line-height: 1.5em;
--product-basic-item-description-wrap-layout-font-line-height: 1.5em;
--blog-item-pagination-font-text-transform: none;
--course-list-course-item-lesson-meta-font-font-family: "Roboto";
--course-item-side-nav-chapter-meta-font-line-height: .1em;
--events-item-pagination-date-font-line-height: .1em;
--course-item-chapter-name-font-line-height: 1.5em;
--course-list-course-name-font-text-transform: none;
--blog-single-column-list-meta-font-line-height: .1em;
--header-button-font-font-family: "dejanire-sans";
--product-grid-text-below-title-font-font-style: normal;
--product-basic-item-variant-fields-half-layout-font-text-transform: none;
--announcement-bar-font-font-style: normal;
--product-basic-item-title-font-font-family: "Cormorant Garamond";
--product-block-title-font-text-transform: none;
--blog-alternating-side-by-side-list-excerpt-font-font-style: normal;
--video-item-title-font-font-weight: 300;
--newsletter-block-field-text-font-line-height: 1.5em;
--portfolio-item-pagination-font-font-weight: 300;
--product-basic-item-description-half-layout-font-line-height: 1.5em;
--product-grid-text-below-title-font-font-weight: 300;
--course-item-name-font-font-weight: 300;
--events-item-pagination-date-font-font-style: normal;
--product-basic-item-price-font-line-height: 1.2em;
--tertiary-button-font-text-transform: none;
--events-item-pagination-font-line-height: 1.2em;
--product-grid-text-below-title-font-line-height: 1.2em;
--product-basic-item-variant-fields-font-font-family: "Roboto";
--blog-basic-grid-list-meta-font-font-family: "Roboto";
--form-block-option-text-font-font-style: normal;
--list-section-title-text-font-font-style: normal;
--product-basic-item-variant-fields-wrap-layout-font-font-weight: 400;
--course-list-course-item-lesson-excerpt-font-font-style: normal;
--menu-block-item-description-font-line-height: 1.5em;
--form-block-input-text-font-line-height: 1.5em;
--newsletter-block-title-text-font-font-family: "Cormorant Garamond";
--newsletter-block-description-text-font-font-weight: 400;
--product-basic-item-restock-notification-full-layout-font-font-family: "dejanire-sans";
--product-basic-item-title-wrap-layout-font-font-family: "Cormorant Garamond";
--quote-block-source-font-line-height: .1em;
--product-grid-text-below-price-font-font-weight: 300;
--list-section-title-text-font-font-family: "Cormorant Garamond";
--product-basic-item-description-font-font-family: "dejanire-sans";
--product-basic-item-description-font-font-weight: 400;
--blog-side-by-side-list-meta-font-line-height: .1em;
--product-basic-item-price-half-layout-font-line-height: 1.5em;
--product-block-price-font-line-height: 1.5em;
--product-basic-item-scarcity-full-layout-font-font-family: "Roboto";
--product-basic-item-scarcity-wrap-layout-font-line-height: .1em;
--blog-basic-grid-list-title-font-font-style: normal;
--course-item-name-font-font-style: normal;
--video-basic-grid-list-excerpt-font-text-transform: none;
--blog-side-by-side-list-excerpt-font-text-transform: none;
--course-list-chapter-item-chapter-meta-font-font-family: "Roboto";
--video-basic-grid-list-category-nav-font-font-weight: 400;
--product-basic-item-price-half-layout-font-text-transform: none;
--form-block-placeholder-text-font-font-style: normal;
--course-list-course-item-lesson-name-font-font-style: normal;
--list-section-title-text-font-line-height: 1.2em;
--product-block-description-font-text-transform: none;
--menu-block-item-price-font-text-transform: none;
--product-basic-item-price-font-text-transform: none;
--form-block-caption-text-font-line-height: 1.5em;
--product-basic-item-variant-fields-full-layout-font-font-style: normal;
--product-basic-item-add-ons-title-wrap-layout-font-text-transform: none;
--product-grid-text-below-scarcity-font-text-transform: uppercase;
--menu-block-title-font-text-transform: none;
--product-basic-item-price-wrap-layout-font-line-height: 1.5em;
--product-basic-item-description-wrap-layout-font-font-weight: 400;
--portfolio-grid-basic-title-font-text-transform: none;
--course-item-side-nav-chapter-meta-font-font-family: "Roboto";
--meta-font-font-family: "Roboto";
--mobile-site-title-font-line-height: 1.2em;
--portfolio-item-pagination-font-line-height: 1.2em;
--product-basic-item-add-ons-title-full-layout-font-line-height: 1.5em;
--newsletter-block-description-text-font-text-transform: none;
--product-basic-item-scarcity-half-layout-font-text-transform: uppercase;
--blog-alternating-side-by-side-list-title-font-font-style: normal;
--form-block-caption-text-font-text-transform: none;
--video-preview-badge-font-font-family: "dejanire-sans";
--course-item-side-nav-lesson-meta-font-font-family: "Roboto";
--product-basic-item-scarcity-wrap-layout-font-font-family: "Roboto";
--course-list-course-description-font-font-weight: 400;
--product-basic-item-description-full-layout-font-text-transform: none;
--form-block-placeholder-text-font-font-weight: 400;
--quote-block-source-font-font-weight: 300;
--product-block-title-font-line-height: 1.5em;
--course-list-grid-layout-chapter-name-font-font-weight: 300;
--video-item-title-font-font-family: "Cormorant Garamond";
--blog-basic-grid-list-title-font-font-family: "Cormorant Garamond";
--course-item-side-nav-lesson-name-font-text-transform: none;
--course-list-grid-layout-course-item-excerpt-font-font-weight: 400;
--product-basic-item-title-wrap-layout-font-font-style: normal;
--course-list-chapter-item-chapter-name-font-font-style: normal;
--product-block-description-font-font-weight: 400;
--blog-side-by-side-list-title-font-text-transform: none;
--newsletter-block-footnote-text-font-text-transform: none;
--product-basic-item-add-ons-title-full-layout-font-font-weight: 400;
--product-basic-item-variant-fields-font-text-transform: uppercase;
--newsletter-block-field-text-font-font-family: "dejanire-sans";
--course-item-name-mobile-font-font-family: "Cormorant Garamond";
--course-list-chapter-item-chapter-meta-font-line-height: .1em;
--video-item-meta-font-font-style: normal;
--menu-block-item-title-font-font-style: normal;
--form-block-title-text-font-font-style: normal;
--product-basic-item-scarcity-wrap-layout-font-font-weight: 300;
--course-list-course-name-font-font-style: normal;
--menu-block-nav-font-font-family: "dejanire-sans";
--blog-basic-grid-list-excerpt-font-font-family: "dejanire-sans";
--product-basic-item-scarcity-full-layout-font-font-style: normal;
--product-basic-item-price-wrap-layout-font-font-family: "dejanire-sans";
--course-list-grid-layout-course-item-name-font-text-transform: none;
--course-list-course-item-lesson-name-font-font-weight: 400;
--header-button-font-line-height: .1em;
--newsletter-block-description-text-font-line-height: 1.5em;
--course-item-side-nav-lesson-meta-font-text-transform: uppercase;
--newsletter-block-footnote-text-font-font-style: normal;
--product-basic-item-add-ons-title-font-font-style: normal;
--course-list-chapter-item-chapter-meta-font-text-transform: uppercase;
--video-basic-grid-list-title-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-line-height: 1.5em;
--course-item-name-mobile-font-text-transform: none;
--product-block-price-font-text-transform: none;
--portfolio-hover-follow-title-font-font-style: normal;
--course-item-name-mobile-font-font-style: normal;
--menu-block-title-font-font-family: "Cormorant Garamond";
--course-item-lesson-name-font-font-weight: 300;
--course-item-chapter-name-font-text-transform: none;
--blog-side-by-side-list-excerpt-font-font-style: normal;
--course-item-side-nav-lesson-meta-font-font-style: normal;
--mobile-site-title-font-font-style: normal;
--site-navigation-font-line-height: 1.1em;
--product-basic-item-variant-fields-full-layout-font-font-weight: 400;
--product-basic-item-add-ons-title-font-font-family: "dejanire-sans";
--body-font-font-weight: 400;
--blog-alternating-side-by-side-list-excerpt-font-font-weight: 400;
--product-basic-item-title-font-line-height: 1.2em;
--form-block-option-text-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-text-transform: uppercase;
--quote-block-source-font-text-transform: uppercase;
--product-basic-item-description-half-layout-font-font-weight: 400;
--portfolio-index-background-title-font-line-height: 1.2em;
--body-font-font-style: normal;
--product-basic-item-title-font-font-weight: 300;
--blog-item-author-profile-font-text-transform: none;
--course-list-course-item-lesson-name-font-font-family: "dejanire-sans";
--product-basic-item-variant-fields-half-layout-font-font-family: "dejanire-sans";
--form-block-input-text-font-font-style: normal;
--product-grid-text-below-scarcity-font-font-weight: 300;
--blog-item-meta-font-font-weight: 300;
--product-grid-text-below-scarcity-font-font-family: "Roboto";
--course-item-chapter-name-font-font-style: normal;
--blog-basic-grid-list-title-font-text-transform: none;
--portfolio-grid-overlay-title-font-font-style: normal;
--product-basic-item-variant-fields-full-layout-font-text-transform: none;
--header-button-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-text-transform: uppercase;
--product-block-price-font-font-weight: 400;
--blog-grid-masonry-list-excerpt-font-font-weight: 400;
--product-basic-item-add-ons-title-half-layout-font-line-height: 1.5em;
--tertiary-button-font-font-weight: 500;
```

### Other

```css
--form-field-dropdown-icon-thickness: 1px;
--image-block-stack-image-button-separation: 4%;
--previous-section-divider-offset: 0px;
--tertiary-button-stroke: 0px;
--image-block-overlap-image-content-offset: 35%;
--image-block-stack-image-title-separation: 1%;
--tweak-global-animations-animation-delay: .6s;
--white-hsl: 0,0%,98.04%;
--image-block-overlap-image-button-separation: 5%;
--tweak-global-animations-animation-duration: .9s;
--image-block-collage-image-width: 70%;
--image-block-collage-image-content-width: 50%;
--image-block-poster-image-content-width: 70%;
--image-block-stack-image-content-separation: 0%;
--image-block-overlap-image-width: 55%;
--course-list-course-item-hover-background: hsla(0,0%,98.04%,.75);
--course-list-course-item-background: hsla(0,0%,98.04%,1);
--black-hsl: 0,0%,35.29%;
--image-block-collage-image-button-separation: 5%;
--image-block-collage-image-content-offset: 5%;
--image-block-poster-image-title-separation: 5%;
--image-block-overlap-image-title-separation: 3%;
--image-block-poster-image-button-separation: 6%;
--image-block-collage-image-title-separation: 4%;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| 1px | 1px | min-width |
| sm | 430px | max-width |
| sm | 432px | max-width |
| sm | 433px | min-width |
| 575px | 575px | max-width |
| sm | 576px | max-width |
| sm | 600px | max-width |
| sm | 640px | max-width |
| sm | 641px | min-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 769px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 1020px | max-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| 1099px | 1099px | max-width |
| 1199px | 1199px | max-width |
| xl | 1280px | max-width |
| xl | 1281px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.2s`, `0.1s`, `0.3s`, `0.14s`, `0.4s`, `0.9s`, `0.009375s`, `0.01875s`, `0.028125s`, `0.0375s`, `0.046875s`, `0.05625s`, `0.065625s`, `0.075s`, `0.084375s`, `0.25s`, `0.09375s`, `0.103125s`, `0.1125s`, `0.121875s`, `0.13125s`, `0.140625s`, `0.15s`, `0.159375s`, `0.16875s`, `0.178125s`, `0.6s`, `0.1875s`, `0.196875s`, `0.20625s`, `0.215625s`, `0.225s`, `0.234375s`, `0.24375s`, `0.253125s`, `0.2625s`, `0.271875s`, `0.28125s`, `0.290625s`, `0.309375s`, `0.31875s`, `0.328125s`, `0.3375s`, `0.346875s`, `0.35625s`, `0.365625s`, `0.375s`, `0.384375s`, `0.39375s`, `0.001s`, `0.35s`, `0.403125s`, `0.4125s`, `0.421875s`, `0.43125s`, `0.440625s`, `0.45s`, `0.459375s`, `0.46875s`, `0.478125s`, `0.4875s`, `0.496875s`, `0.50625s`, `0.515625s`, `0.17s`, `0.525s`, `0.534375s`, `0.54375s`, `0.553125s`, `0.5625s`, `0.571875s`, `0.58125s`, `0.590625s`, `0.5s`, `1s`

### Common Transitions

```css
transition: all;
transition: 0.2s;
transition: background-color 0.1s linear, color 0.1s linear;
transition: opacity 0.1s linear;
transition: background 0.3s ease-in-out, padding 0.14s ease-in-out, transform 0.14s ease-in-out 0.14s;
transition: padding 0.14s ease-in-out;
transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.9s;
transition: opacity 0.9s 0.009375s;
transition: opacity 0.9s 0.01875s;
```

### Keyframe Animations

**fonts-loading**
```css
@keyframes fonts-loading {
  0%, 99% { color: transparent; }
}
```

**loading-indicator-rotate-spinner**
```css
@keyframes loading-indicator-rotate-spinner {
  100% { transform: rotate(360deg); }
}
```

**loading-indicator-dash**
```css
@keyframes loading-indicator-dash {
  0% { stroke-dasharray: 1, 200;
    stroke-dashoffset: 0; }
  50% { stroke-dasharray: 89, 200;
    stroke-dashoffset: -35; }
  100% { stroke-dasharray: 89, 200;
    stroke-dashoffset: -124; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (26 instances)

```css
.button {
  background-color: rgb(190, 190, 190);
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 400;
  padding-top: 5px;
  padding-right: 28px;
  border-radius: 0px;
}
```

### Cards (3 instances)

```css
.card {
  background-color: rgb(247, 247, 247);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (2 instances)

```css
.input {
  background-color: rgba(38, 38, 38, 0.9);
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  border-radius: 8px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 10px;
}
```

### Links (65 instances)

```css
.link {
  color: rgb(90, 90, 90);
  font-size: 14.464px;
  font-weight: 400;
}
```

### Navigation (133 instances)

```css
.navigatio {
  background-color: rgb(247, 247, 247);
  color: rgb(90, 90, 90);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.foote {
  color: rgb(90, 90, 90);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (31 instances)

```css
.modal {
  background-color: rgba(90, 90, 90, 0.5);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (51 instances)

```css
.dropdown {
  background-color: rgb(250, 250, 250);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  border-color: rgb(90, 90, 90);
  padding-top: 0px;
}
```

### Badges (1 instances)

```css
.badge {
  color: rgb(90, 90, 90);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Tooltips (1 instances)

```css
.tooltip {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 12px;
  border-radius: 18px;
  padding-top: 3px;
  padding-right: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
}
```

### ProgressBars (3 instances)

```css
.progressBar {
  color: rgb(255, 255, 255);
  border-radius: 0px;
  font-size: 16px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(247, 247, 247);
  color: rgb(90, 90, 90);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(90, 90, 90);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(90, 90, 90);
  font-size: 12px;
  font-weight: 400;
```

### Button — 4 instances, 3 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
  padding: 11px 15px 11px 15px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(90, 90, 90);
  font-size: 12px;
  font-weight: 300;
```

**Variant 2** (1 instance)

```css
  background: rgb(190, 190, 190);
  color: rgb(255, 255, 255);
  padding: 11px 15px 11px 15px;
  border-radius: 300px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 400;
```

**Variant 3** (1 instance)

```css
  background: rgb(220, 220, 220);
  color: rgb(255, 255, 255);
  padding: 11px 15px 11px 15px;
  border-radius: 0px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 500;
```

### Button — 4 instances, 4 variants

**Variant 1** (1 instance)

```css
  background: rgb(90, 90, 90);
  color: rgb(255, 255, 255);
  padding: 16px 20.8px 16px 20.8px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(90, 90, 90);
  font-size: 11.392px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 20.8px 0px 20.8px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 300;
```

**Variant 3** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
  padding: 0px 20.8px 0px 20.8px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(90, 90, 90);
  font-size: 16px;
  font-weight: 300;
```

**Variant 4** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(217, 217, 217);
  padding: 6.4px 11.2px 6.4px 11.2px;
  border-radius: 0px;
  border: 0px none rgb(217, 217, 217);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  padding: 15px 15px 15px 15px;
  border-radius: 100%;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(231, 231, 231);
  padding: 0px 0px 0px 0px;
  border-radius: 4px;
  border: 0px none rgb(231, 231, 231);
  font-size: 16px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0.3);
  color: rgb(90, 90, 90);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(90, 90, 90);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**9 grid containers** and **201 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| 570px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 26-column | 9x |

### Grid Templates

```css
grid-template-columns: 27.3906px 39.5938px 39.5938px 39.5938px 39.5781px 39.5938px 39.5938px 39.5938px 39.5938px 39.5781px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 27.3906px;
gap: 11px;
grid-template-columns: 38.3906px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 38.3906px;
gap: 12px 0px;
grid-template-columns: 27.3906px 39.5938px 39.5938px 39.5938px 39.5781px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5781px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 27.3906px;
gap: 11px;
grid-template-columns: 27.3906px 39.5781px 39.5781px 39.5781px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5938px 39.5781px 39.5938px 39.5938px 39.5938px 27.3906px;
gap: 11px;
grid-template-columns: 38.3906px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 50.125px 38.3906px;
gap: 4px 0px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 50x |
| row/nowrap | 146x |
| row/wrap | 4x |
| column-reverse/nowrap | 1x |

**Gap values:** `0px 5px`, `11px`, `12px 0px`, `12px normal`, `4px 0px`, `normal 14px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 2 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#5a5a5a` | 6.9:1 | AA |
| `#000000` | `#ffffff` | 21:1 | AAA |

## Design System Score

**Overall: 77/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 85/100 |
| Typography Consistency | 50/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- No clear primary brand color detected
- 10 font families — consider limiting to 2 (heading + body)
- 825 !important rules — prefer specificity over overrides
- 85% of CSS is unused — consider purging
- 16391 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |

```css
background: linear-gradient(rgb(90, 90, 90), rgb(90, 90, 90));
```

## Z-Index Map

**22 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 9999,300000 | div.s.c.r.i.m, div.y.u.i.3.-.w.i.d.g.e.t. .s.q.s.-.w.i.d.g.e.t. .s.q.s.-.p.o.p.u.p.-.o.v.e.r.l.a.y. .v.i.s.i.b.l.e, section.g.d.p.r.-.c.o.o.k.i.e.-.b.a.n.n.e.r. .B.O.T.T.O.M._.L.E.F.T. .p.o.p.u.p. .f.u.l.l.-.s.t.y.l.i.n.g |
| dropdown | 100,999 | div.f.l.o.a.t.i.n.g.-.c.a.r.t. .h.i.d.d.e.n, div.s.q.s.-.s.l.i.c.e.-.g.a.l.l.e.r.y.-.i.t.e.m. .c.o.n.t.e.n.t.-.f.i.l.l. .s.q.s.-.g.a.l.l.e.r.y.-.d.e.s.i.g.n.-.s.t.a.c.k.e.d.-.s.l.i.d.e. .s.q.s.-.a.c.t.i.v.e.-.s.l.i.d.e. .l.o.a.d.e.d, a.s.q.s.-.p.o.p.u.p.-.o.v.e.r.l.a.y.-.c.l.o.s.e |
| sticky | 10,25 | header.w.h.i.t.e. .h.e.a.d.e.r. .t.h.e.m.e.-.c.o.l.-.-.p.r.i.m.a.r.y, div.h.e.a.d.e.r.-.n.a.v.-.f.o.l.d.e.r.-.c.o.n.t.e.n.t, div.h.e.a.d.e.r.-.n.a.v.-.f.o.l.d.e.r.-.c.o.n.t.e.n.t |
| base | -1,9 | div.p.l.y.r._._.v.i.d.e.o.-.w.r.a.p.p.e.r, div.T.e.x.t.S.h.a.p.e.-.n.o.d.e, div.T.e.x.t.S.h.a.p.e.-.n.o.d.e |

**Issues:**
- [object Object]

## SVG Icons

**13 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| md | 5 |
| xl | 8 |

**Icon colors:** `rgb(90, 90, 90)`, `rgb(255, 255, 255)`, `rgb(231, 231, 231)`, `rgb(0, 0, 0)`, `rgba(0, 0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| dejanire-sans | self-hosted | 300, 400, 700 | normal, italic |
| kepler-std | self-hosted | 500 | normal |
| Cormorant Garamond | google-fonts | 300, 700 | italic, normal |
| Libre Baskerville | google-fonts | 400 | normal |
| Roboto | google-fonts | 300, 700 | italic, normal |

**Google Fonts URL:** `https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400&family=Cormorant+Garamond:ital,wght@0,300;0,700;1,300;1,700&family=Roboto:ital,wght@0,300;0,700;1,300;1,700`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 13 | objectFit: contain, borderRadius: 0px, shape: square |
| thumbnail | 8 | objectFit: fill, borderRadius: 0px, shape: square |
| hero | 2 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 3:4 (10x), 1:1 (2x), 2:3 (2x), 4:3 (2x), 1.16:1 (2x), 3:2 (1x), 7.19:1 (1x), 2.65:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `1ms` | 1 |
| `xs` | `100ms` | 100 |
| `sm` | `170ms` | 170 |
| `md` | `262.5ms` | 262.5 |
| `lg` | `412.5ms` | 412.5 |
| `xl` | `900ms` | 900 |
| `xxl` | `1875s` | 1875000 |

### Easing Families

- **linear** (8 uses) — `linear`
- **ease-in-out** (19 uses) — `ease`
- **custom** (23 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.33, 0, 0.2, 1)`, `cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- **ease-out** (6 uses) — `cubic-bezier(0.2, 0.6, 0.3, 1)`

## Component Anatomy

### button — 18 instances

**Slots:** label, icon
**Variants:** primary · secondary · tertiary · link
**Sizes:** large · medium

| variant | count | sample label |
|---|---|---|
| default | 11 | Akzeptieren
ABLEHNEN
Auswahl |
| primary | 4 | Wir verwenden Cookies, um Ihnen das best |
| secondary | 1 | ABLEHNEN |
| tertiary | 1 | Auswahl |
| link | 1 | SKIP TO CONTENT |

## Brand Voice

**Tone:** friendly · **Pronoun:** third-person · **Headings:** Title Case (verbose)

### Top CTA Verbs

- **wir** (4)
- **kontakt** (3)
- **akzeptieren** (2)
- **ablehnen** (1)
- **auswahl** (1)
- **skip** (1)
- **highlights** (1)
- **play** (1)

### Button Copy Patterns

- "wir & unser team" (3×)
- "kontakt aufnehmen" (3×)
- "wir verwenden cookies, um ihnen das bestmögliche erlebnis zu bieten. mit der nutzung dieser website erklären sie sich damit einverstanden.
mehr erfahren

akzept" (1×)
- "akzeptieren
ablehnen
auswahl" (1×)
- "akzeptieren" (1×)
- "ablehnen" (1×)
- "auswahl" (1×)
- "skip to content" (1×)
- "highlights" (1×)
- "play" (1×)

### Sample Headings

> Hier wird aus einem
“JA” ein ”FÜR IMMER”  
> Eure Liebe,
unser Herzblut
> EIN ORT
FÜR JUBELNDE HERZEN
> Lernt schon jetzt den Hohen Darsberg über unseren
Virtuellen Rundgang näher kennen! 
> Der Hohe Darsberg macht Euch neugierig?
Kommt doch einfach mal vorbei! 
> Hier wird aus einem
“JA” ein ”FÜR IMMER”  
> Eure Liebe,
unser Herzblut
> EIN ORT
FÜR JUBELNDE HERZEN
> Lernt schon jetzt den Hohen Darsberg über unseren
Virtuellen Rundgang näher kennen! 
> Der Hohe Darsberg macht Euch neugierig?
Kommt doch einfach mal vorbei! 

## Page Intent

**Type:** `blog-post` (confidence 0.35)

## Section Roles

Reading order (top→bottom): nav → nav → content → content → nav → nav → content → content → content → hero → content → content → content → hero → footer → content → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | content | — | 0.3 |
| 1 | nav | — | 0.4 |
| 2 | nav | — | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | nav | — | 0.9 |
| 5 | content | Hier wird aus einem
“JA” ein ”FÜR IMMER”   | 0.3 |
| 6 | content | — | 0.3 |
| 7 | content | Hier wird aus einem
“JA” ein ”FÜR IMMER”   | 0.3 |
| 8 | content | — | 0.3 |
| 9 | hero | Eure Liebe,
unser Herzblut | 0.4 |
| 10 | content | EIN ORT
FÜR JUBELNDE HERZEN | 0.3 |
| 11 | content | — | 0.3 |
| 12 | content | Lernt schon jetzt den Hohen Darsberg über unseren
Virtuellen Rundgang näher kenn | 0.3 |
| 13 | hero | Der Hohe Darsberg macht Euch neugierig?
Kommt doch einfach mal vorbei!  | 0.4 |
| 14 | footer | — | 0.95 |
| 15 | content | — | 0.3 |
| 16 | nav | — | 0.9 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.027 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 300px |
| backdrop-filter in use | no |
| Gradients | 1 |

## Imagery Style

**Label:** `photography` (confidence 0.21)
**Counts:** total 23, svg 0, icon 0, screenshot-like 0, photo-like 8
**Dominant aspect:** portrait
**Radius profile on images:** square

## Component Screenshots

10 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default | 0 | 320 × 37 | `screenshots/button-default-0.png` |
| button--default | 1 | 83 × 19 | `screenshots/button-default-1.png` |
| button--default | 2 | 201 × 26 | `screenshots/button-default-2.png` |
| button--primary | 0 | 87 × 37 | `screenshots/button-primary-0.png` |
| button--primary | 1 | 138 × 47 | `screenshots/button-primary-1.png` |
| button--secondary | 0 | 99 × 37 | `screenshots/button-secondary-0.png` |
| button--tertiary | 0 | 74 × 37 | `screenshots/button-tertiary-0.png` |
| button--primary--medium | 0 | 201 × 26 | `screenshots/button-primary-medium-0.png` |
| button--primary--medium | 1 | 242 × 63 | `screenshots/button-primary-medium-1.png` |
| card--default | 0 | 1280 × 800 | `screenshots/card-default-0.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `dejanire-sans` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
