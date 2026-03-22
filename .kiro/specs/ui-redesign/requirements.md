# Requirements Document

## Introduction

This spec covers a full UI redesign of the VivaSpeak website (Astro-based, bilingual ES/EN). The goal is to transform the current design into a modern, minimalistic, professional SaaS-style interface with a mobile-first approach. Brand colors (turquoise `#1abc9c`, dark `#34495e`, CTA orange `#ff6600`) and logos remain unchanged. Everything else — layout, typography scale, spacing, component design, animations, header, footer, page templates, and CSS architecture — is subject to rework.

The site includes:

- A main homepage (`index.astro` / `en/index.astro`)
- Vertical landing pages (clinica, inmobiliaria, abogados, salud, reclutamiento, servicios-operativos)
- Blog index + article pages (ES and EN)
- Location pages (ubicaciones / locations)
- Contact page
- Legal/policy pages
- About page
- Success page

## Requirements

### Requirement 1: Design System & CSS Architecture

**User Story:** As a developer, I want a clean, token-based CSS design system so that the UI is consistent, maintainable, and easy to extend.

#### Acceptance Criteria

1. WHEN the design system is created THEN it SHALL define CSS custom properties for colors, typography scale, spacing scale, border-radius tokens, and shadow tokens in a single `:root` block.
2. WHEN brand colors are defined THEN the system SHALL preserve the existing brand palette (`--primary: #1abc9c`, `--primary-dark: #16a085`, `--cta: #ff6600`, `--color-dark: #34495e`, `--color-text: #2c3e50`) and MAY add neutral/gray scale tokens.
3. WHEN typography is defined THEN the system SHALL use a modern sans-serif font stack (e.g. Inter or system fonts) with a modular type scale (e.g. 0.875rem, 1rem, 1.125rem, 1.25rem, 1.5rem, 2rem, 2.5rem, 3rem).
4. WHEN spacing tokens are defined THEN the system SHALL use a consistent spacing scale (e.g. 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px).
5. WHEN the global CSS is restructured THEN it SHALL be organized into logical files: reset/base, tokens, layout utilities, and component styles.
6. WHEN utility classes are provided THEN they SHALL cover common patterns like `.container`, `.section`, `.grid`, `.flex`, `.text-center`, etc.

### Requirement 2: Mobile-First Responsive Layout

**User Story:** As a mobile user, I want the site to be designed for small screens first so that the experience is fast and usable on any device.

#### Acceptance Criteria

1. WHEN base styles are written THEN they SHALL target mobile viewports by default (no media query wrapping for mobile).
2. WHEN larger layouts are needed THEN media queries SHALL use `min-width` breakpoints (e.g. `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
3. WHEN sections use grid layouts THEN they SHALL stack vertically on mobile and expand to multi-column on tablet/desktop.
4. WHEN touch targets (buttons, links, form inputs) are rendered on mobile THEN they SHALL have a minimum tap target size of 44×44px.
5. WHEN the page is viewed on mobile THEN horizontal scrolling SHALL NOT occur.
6. WHEN images are displayed THEN they SHALL be responsive and not overflow their containers.

### Requirement 3: Header & Navigation Redesign

**User Story:** As a site visitor, I want a clean, minimal header with smooth mobile navigation so that I can easily find what I need on any device.

#### Acceptance Criteria

1. WHEN the header is rendered on mobile THEN it SHALL display the logo and a hamburger menu icon only.
2. WHEN the hamburger menu is tapped THEN a full-screen or slide-in mobile menu SHALL appear with smooth animation.
3. WHEN the header is rendered on desktop THEN it SHALL display the logo, navigation links, and CTA button in a single row with adequate spacing.
4. WHEN the user scrolls down THEN the header SHALL remain fixed at the top with a subtle backdrop blur and shadow.
5. WHEN the header design is applied THEN it SHALL use the existing logo assets without modification.
6. WHEN the landing page header (`LandingHeader`) is rendered THEN it SHALL follow the same minimal design language as the main header.

### Requirement 4: Hero Section Redesign

**User Story:** As a visitor, I want a clean, impactful hero section so that I immediately understand what VivaSpeak offers.

#### Acceptance Criteria

1. WHEN the hero section is rendered THEN it SHALL use a clean layout with generous whitespace, a clear headline, subtitle, and one or two CTA buttons.
2. WHEN the hero is viewed on mobile THEN content SHALL stack vertically with the headline and CTAs visible without scrolling.
3. WHEN the hero is viewed on desktop THEN it MAY use a two-column layout (text + visual) if applicable.
4. WHEN decorative elements are used THEN they SHALL be subtle (e.g. soft gradients, minimal shapes) and not distract from the content.
5. WHEN the hero section is redesigned THEN it SHALL remove excessive floating cards, animated overlays, and complex mockup decorations from the current design.
6. WHEN trust indicators (stats) are shown THEN they SHALL be presented in a clean, minimal row below the hero content.

### Requirement 5: Section & Card Component Redesign

**User Story:** As a visitor, I want content sections and cards to look clean and modern so that information is easy to scan and digest.

#### Acceptance Criteria

1. WHEN content cards are rendered THEN they SHALL use consistent border-radius, padding, and subtle shadows from the design tokens.
2. WHEN cards are displayed in a grid THEN the grid SHALL be responsive: 1 column on mobile, 2 on tablet, 3 on desktop (where appropriate).
3. WHEN section headers are rendered THEN they SHALL use the eyebrow + heading + subtitle pattern with consistent spacing.
4. WHEN hover effects are applied to cards THEN they SHALL be subtle (e.g. slight shadow increase or gentle lift) without excessive transforms.
5. WHEN feature/value/results cards are redesigned THEN they SHALL follow a single unified card component style.
6. WHEN icons are used in cards THEN they SHALL be consistent in size and style across all sections.

### Requirement 6: Footer Redesign

**User Story:** As a visitor, I want a well-organized footer so that I can quickly find legal links, contact info, and social media.

#### Acceptance Criteria

1. WHEN the footer is rendered THEN it SHALL organize content into clear columns or groups: links, contact, social, language switcher.
2. WHEN the footer is viewed on mobile THEN columns SHALL stack vertically with adequate spacing.
3. WHEN social media icons are displayed THEN they SHALL use consistent sizing and spacing.
4. WHEN the footer is redesigned THEN it SHALL maintain all existing links (legal, privacy, terms, about, etc.) and the language switcher.
5. WHEN the footer is rendered THEN it SHALL use a clean background that contrasts with the main content area.

### Requirement 7: Form & Contact Section Redesign

**User Story:** As a potential customer, I want forms to look modern and be easy to fill out on mobile so that I can quickly get in touch.

#### Acceptance Criteria

1. WHEN form inputs are rendered THEN they SHALL have consistent styling with clear labels, adequate padding, and visible focus states.
2. WHEN radio buttons and checkboxes are rendered THEN they SHALL use custom-styled controls that match the design system.
3. WHEN the contact section is viewed on mobile THEN the form SHALL take full width and the info card SHALL stack above or below.
4. WHEN form validation errors occur THEN they SHALL be clearly indicated with color and text.
5. WHEN the Calendly embed is displayed THEN it SHALL be contained within a clean card with appropriate spacing.

### Requirement 8: Testimonials Section Redesign

**User Story:** As a visitor, I want testimonials to look credible and modern so that I trust the product.

#### Acceptance Criteria

1. WHEN testimonials are displayed THEN they SHALL use a clean card layout with author info, quote, and optional media.
2. WHEN testimonial cards are rendered THEN they SHALL use a light/neutral background instead of the current gradient-heavy style.
3. WHEN testimonials are viewed on mobile THEN they SHALL stack vertically in a single column.
4. WHEN tags/stats are shown on testimonial cards THEN they SHALL use subtle pill-style badges.

### Requirement 9: FAQ Section Redesign

**User Story:** As a visitor, I want the FAQ section to be clean and easy to navigate so that I can quickly find answers.

#### Acceptance Criteria

1. WHEN FAQ items are rendered THEN they SHALL use a clean accordion pattern with smooth open/close transitions.
2. WHEN an FAQ item is expanded THEN it SHALL be visually distinguished (e.g. subtle background change or left border accent).
3. WHEN the FAQ section is viewed on mobile THEN it SHALL take full width with adequate touch targets on the summary elements.

### Requirement 10: Landing Pages Consistency

**User Story:** As a visitor navigating between pages, I want all landing pages (clinica, inmobiliaria, abogados, etc.) to share the same modern design language so that the brand feels cohesive.

#### Acceptance Criteria

1. WHEN any vertical landing page is rendered THEN it SHALL use the same section components, card styles, and layout patterns as the homepage.
2. WHEN landing pages have page-specific styles THEN those styles SHALL extend (not override) the global design system.
3. WHEN the hero section on landing pages is rendered THEN it SHALL follow the same minimal hero pattern defined in Requirement 4.

### Requirement 11: Blog Pages Redesign

**User Story:** As a reader, I want blog pages to be clean and readable so that I can focus on the content.

#### Acceptance Criteria

1. WHEN the blog index is rendered THEN it SHALL display articles in a clean card grid with title, excerpt, and date.
2. WHEN a blog article is rendered THEN it SHALL use a readable content width (max ~720px), comfortable line-height, and clear typography hierarchy.
3. WHEN blog pages are viewed on mobile THEN they SHALL be fully responsive with no horizontal overflow.

### Requirement 12: Animations & Micro-interactions

**User Story:** As a visitor, I want subtle animations that make the site feel polished without being distracting.

#### Acceptance Criteria

1. WHEN animations are used THEN they SHALL be subtle and purposeful (e.g. fade-in on scroll, smooth hover transitions).
2. WHEN the current complex keyframe animations (heroPulse, counterSlide, checkPop, toastFloat, heroGlow) are reviewed THEN they SHALL be removed or replaced with simpler alternatives.
3. WHEN transitions are applied THEN they SHALL use consistent duration (150ms–300ms) and easing (ease-out or ease-in-out).
4. IF a user has `prefers-reduced-motion` enabled THEN all animations and transitions SHALL be disabled or minimized.

### Requirement 13: Accessibility Preservation

**User Story:** As a user with accessibility needs, I want the redesigned site to maintain or improve accessibility so that I can use it effectively.

#### Acceptance Criteria

1. WHEN the site is redesigned THEN it SHALL preserve the existing skip-link functionality.
2. WHEN color contrast is evaluated THEN all text/background combinations SHALL meet WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text).
3. WHEN interactive elements are focused via keyboard THEN they SHALL have a visible focus indicator.
4. WHEN ARIA attributes exist in the current markup THEN they SHALL be preserved or improved in the redesign.
5. WHEN the mobile menu is opened THEN focus SHALL be managed appropriately (trapped within the menu while open).

### Requirement 14: Performance Considerations

**User Story:** As a visitor on a slow connection, I want the site to load quickly so that I don't abandon it.

#### Acceptance Criteria

1. WHEN external fonts are loaded THEN they SHALL use `font-display: swap` to avoid invisible text during loading.
2. WHEN CSS is restructured THEN unused styles from the current global.css SHALL be removed.
3. WHEN images are displayed THEN they SHALL use appropriate `loading="lazy"` attributes except for above-the-fold content.
4. WHEN the FontAwesome library is evaluated THEN it MAY be replaced with a lighter icon solution (e.g. inline SVGs or a smaller icon set) IF it reduces bundle size significantly.
