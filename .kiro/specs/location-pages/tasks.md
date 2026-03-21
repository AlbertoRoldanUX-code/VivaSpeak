# Implementation Plan

- [x] 1. Extract office data into shared module
- [x] 1.1 Create `src/data/offices.ts` with the Office interface and toSlug helper
  - Move the offices array from `contacto.astro` into this new file
  - Add `slug` field to each office, generated via the `toSlug()` helper
  - Add placeholder strings for `description`, `whyLocal`, `industries`, `descriptionEn`, `whyLocalEn`, `industriesEn` for all 52 offices
  - Export the `offices` array and `Office` interface
  - _Requirements: 1.1, 1.3, 1.4_

- [x] 1.2 Update `contacto.astro` to import from shared data module
  - Replace the inline offices array with an import from `src/data/offices.ts`
  - Verify the page renders identically after the refactor
  - _Requirements: 1.3, 6.1_

- [x] 2. Create Spanish location page template
- [x] 2.1 Create `src/pages/ubicaciones/[city].astro` with `getStaticPaths()`
  - Import offices from `src/data/offices.ts`
  - Implement `getStaticPaths()` to generate one page per office using the `slug` field
  - Pass the full office object as props to each page
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 2.2 Implement the hero section with localized content
  - Add eyebrow with province name, H1 with city name, and description paragraph
  - Include primary CTA button linking to demo scheduling
  - Use existing Layout, LandingHeader, and Footer components
  - _Requirements: 2.1, 2.2, 4.1, 4.2_

- [x] 2.3 Implement the services section
  - Add 3-4 feature cards explaining VivaSpeak's core services (calls, WhatsApp, CRM, scheduling)
  - Use existing CSS patterns (feature-card, feature-grid) from global.css
  - _Requirements: 2.2, 2.3_

- [x] 2.4 Implement the "Why VivaSpeak in {City}" section
  - Display the localized `whyLocal` text and `industries` list from office data
  - Style consistently with existing value-card patterns
  - _Requirements: 2.3, 2.4_

- [x] 2.5 Implement the office details and map section
  - Display coworking name, address, zip, phone, WhatsApp, and email
  - Include Google Maps embed using the same URL pattern as `contacto.astro`
  - _Requirements: 2.4, 2.5, 2.6, 5.2, 5.3_

- [x] 2.6 Implement the FAQ section
  - Add a shared set of general VivaSpeak FAQs using the `<details>` pattern from the site
  - Pass FAQ data to the Layout component for FAQPage structured data
  - _Requirements: 5.4_

- [x] 2.7 Implement the bottom CTA section
  - Add a closing CTA with demo button and WhatsApp link, personalized with city name
  - _Requirements: 5.1, 5.2, 5.3_

- [x] 3. Add SEO metadata and structured data to Spanish pages
- [x] 3.1 Set page-level SEO metadata
  - Configure unique `<title>`, `<meta description>`, canonical URL, hreflang alternates, and og:image via Layout props
  - _Requirements: 3.1, 3.2, 3.3, 3.6_

- [x] 3.2 Add LocalBusiness JSON-LD structured data
  - Add an inline `<script type="application/ld+json">` block with LocalBusiness schema per page
  - Include address, telephone, and URL
  - _Requirements: 3.4_

- [x] 3.3 Add breadcrumb structured data
  - Pass breadcrumb array (Inicio > Ubicaciones > {City}) to Layout component
  - _Requirements: 3.5, 6.2_

- [x] 4. Create English location page template
- [x] 4.1 Create `src/pages/en/locations/[city].astro` with `getStaticPaths()`
  - Mirror the Spanish template structure using English content fields
  - Use `LandingHeaderEn` and `FooterEn` components
  - Set `lang="en"` and English SEO metadata
  - Include hreflang alternates pointing to the Spanish version
  - _Requirements: 7.1, 7.2, 7.3_

- [x] 5. Update contacto page with links to location pages
- [x] 5.1 Add links from each office card in `contacto.astro` to `/ubicaciones/{slug}/`
  - Make the city name or a "Ver más" link point to the individual location page
  - _Requirements: 6.1_

- [x] 6. Add internal navigation links on location pages
- [x] 6.1 Add breadcrumb navigation UI to the location page template
  - Render visible breadcrumb links (Inicio > Ubicaciones > {City}) at the top of the page
  - Add internal links to homepage, industry verticals (clínica, inmobiliaria), and contacto page in the footer area or CTA section
  - _Requirements: 6.2, 6.3_

- [x] 7. Populate unique content for all 52 offices
- [x] 7.1 Write unique Spanish content for all offices in `offices.ts`
  - Fill in `description`, `whyLocal`, and `industries` for each of the 52 offices
  - Content should reference local business landscape and how VivaSpeak helps in that area
  - _Requirements: 2.2, 2.3_

- [x] 7.2 Write unique English content for all offices in `offices.ts`
  - Fill in `descriptionEn`, `whyLocalEn`, and `industriesEn` for each of the 52 offices
  - _Requirements: 7.1_

- [x] 8. Add responsive styles for location pages
- [x] 8.1 Create `styles/ubicaciones.css` with location page styles
  - Style the hero, services grid, why-local section, office details, FAQ, and CTA sections
  - Ensure mobile responsiveness with appropriate breakpoints
  - Follow existing design patterns from `contacto.astro` and `clinica.astro`
  - _Requirements: 4.2, 4.3_

- [x] 9. Write automated tests
- [x] 9.1 Write tests for office data integrity
  - Verify 52 offices are exported
  - Verify all slugs are unique and non-empty
  - Verify all content fields are non-empty for both languages
  - _Requirements: 1.2, 1.3, 1.4_

- [x] 9.2 Write build verification test
  - Run `astro build` and verify 52 Spanish + 52 English location pages are generated in the dist output
  - Verify each page contains the expected city name in the HTML title
  - _Requirements: 1.1, 1.3, 3.1_
