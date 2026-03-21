# Requirements Document

## Introduction

VivaSpeak currently has a single `contacto` page listing all 52 office locations across Spain. This feature will create individual landing pages for each location (province/city), with unique content that explains what VivaSpeak does, how it helps local customers, and positions VivaSpeak as the most relevant AI voice automation provider in that area. These pages serve both as local SEO assets and as conversion-oriented landing pages for visitors searching for AI voice solutions in their specific city or province.

## Requirements

### Requirement 1: Dynamic Location Page Generation

**User Story:** As a developer, I want to generate individual pages for each office location from a shared data source, so that all 52 locations have their own unique URL without manually creating 52 separate files.

#### Acceptance Criteria

1. WHEN a user navigates to `/ubicaciones/{city-slug}/` THEN the system SHALL render a unique page for that location.
2. IF the city slug does not match any known office location THEN the system SHALL return a 404 page.
3. WHEN the site is built THEN the system SHALL generate one static page per office location defined in the shared offices data.
4. WHEN a new office is added to the data source THEN the system SHALL automatically generate a page for it on the next build without additional code changes.

### Requirement 2: Unique Localized Content Per Location

**User Story:** As a site visitor from a specific city, I want to see content tailored to my location, so that I understand how VivaSpeak can help businesses in my area.

#### Acceptance Criteria

1. WHEN a location page is rendered THEN the system SHALL display a hero section with the city and province name prominently featured.
2. WHEN a location page is rendered THEN the system SHALL include a localized description explaining VivaSpeak's services in the context of that specific city/province.
3. WHEN a location page is rendered THEN the system SHALL include a section highlighting why VivaSpeak is the most relevant AI voice automation provider in that area.
4. WHEN a location page is rendered THEN the system SHALL display the local office details (coworking name, address, zip code).
5. WHEN a location page is rendered THEN the system SHALL include contact information (phone, WhatsApp, email) consistent with the contacto page.
6. WHEN a location page is rendered THEN the system SHALL include a Google Maps embed showing the office location.

### Requirement 8: Content Uniqueness and Anti-Duplicate Safeguards

**User Story:** As a marketing team member, I want each location page to have genuinely distinct content (not just city-name substitution on a template), so that Google does not flag them as thin or duplicate content.

#### Acceptance Criteria

1. WHEN the `description` field is written for a city THEN it SHALL use a unique sentence structure and opening that differs from every other city's description — not simply "En {City}, VivaSpeak automatiza…" with swapped nouns.
2. WHEN the `whyLocal` field is written for a city THEN it SHALL reference at least one concrete, verifiable local fact (e.g., a landmark, economic statistic, regional industry cluster, or cultural reference) that is exclusive to that city or province.
3. WHEN the `industries` array is defined for a city THEN it SHALL contain at least one industry entry that is specific to the local economy and does not appear in more than 5 other cities' lists.
4. WHEN any two location pages are compared THEN the combined text of `description` + `whyLocal` SHALL have a textual similarity (e.g., Jaccard or cosine on word n-grams) below 60 %, ensuring substantive differentiation beyond keyword swaps.
5. WHEN the `descriptionEn` and `whyLocalEn` fields are written THEN they SHALL meet the same uniqueness criteria as their Spanish counterparts (criteria 1–4 above).
6. WHEN a new office is added to the data source THEN the content author SHALL verify that its `description` and `whyLocal` do not follow the same sentence template used by any existing office entry.
7. WHEN the site is built THEN an automated content-uniqueness check SHOULD flag any pair of offices whose `description` or `whyLocal` fields share more than 40 % of their word 3-grams, so that duplicates can be caught before deployment.

### Requirement 3: SEO Optimization for Local Search

**User Story:** As a marketing team member, I want each location page to be fully optimized for local SEO, so that VivaSpeak ranks well for location-specific searches like "agente de voz IA en [ciudad]".

#### Acceptance Criteria

1. WHEN a location page is rendered THEN the system SHALL set a unique `<title>` tag containing the city name and relevant keywords (e.g., "Agente de Voz IA en {Ciudad} | VivaSpeak").
2. WHEN a location page is rendered THEN the system SHALL set a unique `<meta name="description">` containing the city name and a compelling description.
3. WHEN a location page is rendered THEN the system SHALL set a canonical URL pointing to the page's own URL.
4. WHEN a location page is rendered THEN the system SHALL include LocalBusiness structured data (JSON-LD) with the office address, phone, and geo-coordinates where available.
5. WHEN a location page is rendered THEN the system SHALL include breadcrumb structured data (Inicio > Ubicaciones > {Ciudad}).
6. WHEN a location page is rendered THEN the system SHALL include an `og:image` meta tag suitable for social sharing.

### Requirement 4: Consistent Design and Branding

**User Story:** As a site visitor, I want the location pages to feel visually consistent with the rest of the VivaSpeak website, so that my browsing experience is seamless.

#### Acceptance Criteria

1. WHEN a location page is rendered THEN the system SHALL use the existing `Layout`, `LandingHeader`, and `Footer` components.
2. WHEN a location page is rendered THEN the system SHALL follow the same visual style (colors, typography, spacing) as existing landing pages like `clinica.astro`.
3. WHEN a location page is viewed on a mobile device THEN the system SHALL display a fully responsive layout.

### Requirement 5: Call-to-Action and Conversion Elements

**User Story:** As a business owner visiting a location page, I want clear calls to action, so that I can easily request a demo or contact VivaSpeak.

#### Acceptance Criteria

1. WHEN a location page is rendered THEN the system SHALL include a primary CTA button linking to the demo scheduling page.
2. WHEN a location page is rendered THEN the system SHALL include a WhatsApp contact link.
3. WHEN a location page is rendered THEN the system SHALL include a phone call link.
4. WHEN a location page is rendered THEN the system SHALL include a section with a FAQ relevant to the location or VivaSpeak's services.

### Requirement 6: Navigation and Discoverability

**User Story:** As a site visitor, I want to easily find and navigate between location pages, so that I can explore VivaSpeak's presence across Spain.

#### Acceptance Criteria

1. WHEN the contacto page is rendered THEN each office card SHALL link to its corresponding individual location page.
2. WHEN a location page is rendered THEN the system SHALL include breadcrumb navigation (Inicio > Ubicaciones > {Ciudad}).
3. WHEN a location page is rendered THEN the system SHALL include internal links to related pages (e.g., homepage, industry verticals, contacto).

### Requirement 7: English Version of Location Pages

**User Story:** As an English-speaking visitor, I want to access location pages in English, so that I can understand VivaSpeak's local presence without a language barrier.

#### Acceptance Criteria

1. WHEN a user navigates to `/en/locations/{city-slug}/` THEN the system SHALL render the English version of that location page.
2. WHEN an English location page is rendered THEN the system SHALL use the `HeaderEn` and `FooterEn` components.
3. WHEN a location page is rendered in either language THEN the system SHALL include `hreflang` alternate links pointing to the other language version.
