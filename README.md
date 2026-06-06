# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Implementation Plan - Arabic Language Support & RTL Layout

This plan outlines the translation of **MuthusApp** to Arabic, adding a language selection button in the navigation header, and adjusting the layout for RTL (Right-to-Left) reading direction.

## User Review Required

> [!NOTE]
> **RTL Direction Handling**: We will set the `dir="rtl"` attribute dynamically on the main wrapper when the Arabic language is selected.
>
> **RTL CSS Tweaks**: We will introduce a `.rtl` wrapper class in `index.css` to override alignment properties that are not automatically mirrored by `dir="rtl"` (such as absolute position rules like `right: 24px` for badges, the mobile menu side drawer slide, and modal close buttons).
>
> **Centralized Dictionary**: We will create a `src/translations.js` dictionary containing all translations for page titles, buttons, sliding banners, about biography, skills tags, projects, and contact fields.

## Proposed Changes

### Internationalization Dictionary

#### [NEW] [src/translations.js](file:///E:/aiprojects/gravity/src/translations.js)
- Build a dictionary of translated strings for English and Arabic.
- Structure it by section: Header, Hero, About, Work, Contact, and Footer.

---

### UI Core and Components

#### [MODIFY] [src/App.jsx](file:///E:/aiprojects/gravity/src/App.jsx)
- Introduce a `language` state (`'en'` / `'ar'`) at the root.
- Dynamically apply `dir="rtl"` and the `.rtl` class to the main app container.
- Pass `language` and `setLanguage` down to components.
- Pass the appropriate translations down to the sections.

#### [MODIFY] [src/components/Header.jsx](file:///E:/aiprojects/gravity/src/components/Header.jsx)
- Add a language selector button (e.g. "العربية" / "English") in the nav bar.
- Update nav menu options dynamically according to selected language.
- Rotate icons (like Arrow or Code logo) where appropriate.

#### [MODIFY] [src/components/HeroSlider.jsx](file:///E:/aiprojects/gravity/src/components/HeroSlider.jsx)
- Display translated titles, descriptions, and CTA buttons.
- Ensure auto-sliding transitions function correctly in RTL.

#### [MODIFY] [src/components/AboutSection.jsx](file:///E:/aiprojects/gravity/src/components/AboutSection.jsx)
- Translate bio content, skills list, and experience badge.

#### [MODIFY] [src/components/WorkSection.jsx](file:///E:/aiprojects/gravity/src/components/WorkSection.jsx)
- Mirror card grid flow.
- Translate project titles, descriptions, category tabs, buttons, and details modal text.

#### [MODIFY] [src/components/ContactSection.jsx](file:///E:/aiprojects/gravity/src/components/ContactSection.jsx)
- Translate contact headers, details (email/location), form input labels, placeholders, validation alerts, and sending status messages.

#### [MODIFY] [src/components/Footer.jsx](file:///E:/aiprojects/gravity/src/components/Footer.jsx)
- Translate the copyright notice.

---

### Layout & Styling

#### [MODIFY] [src/index.css](file:///E:/aiprojects/gravity/src/index.css)
- Add RTL layout overrides under `.rtl` or `[dir="rtl"]`.
- Adjust position rules (e.g., `right: 24px` -> `left: 24px` for the experience badge, mobile menu drawer positions, modal close button alignment).
- Ensure body font family uses appropriate fallback fonts for Arabic letters (e.g., system-ui, Cairo, or Tahoma for smoother glyphs).

---

## Verification Plan

### Automated / Build Tests
- Run `npm run build` to verify there are no compilation issues.

### Manual Verification
- Test language switching via the header button.
- Inspect layouts in Arabic mode to verify correct alignment of grid cards, modal sheets, and the mobile sidebar.
- Verify contact form validation messages are displayed in the selected language.
