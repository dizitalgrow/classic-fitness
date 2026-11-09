# Agent Guidelines: Classic Fitness — EightbornV Design System

These permanent instructions govern all coding, design, and architecture tasks for the Classic Fitness website codebase under the **EightbornV Archival Noir Design System**. Every AI agent and developer working in this repository must strictly adhere to these fundamental rules.

---

## 1. Always Read DESIGN.md Before Modifying UI
Before writing, modifying, or refactoring any component or page, inspect `DESIGN.md`. Ensure that spacing, color tokens, typography scales (`Archivo Black`, `Inter`, `JetBrains Mono`), corner radii (4px buttons/inputs, 8px cards, pill-shaped badges), and elevation strictly match EightbornV standards.

## 2. Never Violate the Design System
Never introduce random hex colors (e.g. ad-hoc blues, purples, neon greens, or uncalibrated greys). All UI elements must consume semantic Tailwind classes mapped to `:root` EightbornV design tokens (`#0e0e11`, `#111014`, `#16161a`, `#1c1b20`, `#050507`, `#f3f4f2`, `#b3b2b2`, `#ffc526`, `#ffd76a`, `#16d5b2`, `#e50a3e`, `#414045`).

## 3. Reuse Components Wherever Appropriate
Use established core UI components (`<Button>`, `<SectionHeading>`, `<Container>`, `<Badge>`, `<Modal>`, `<Input>`) instead of crafting ad-hoc inline variants. Maintain consistent component contracts across the app.

## 4. Use TypeScript Strictly
All code must be typed. Define explicit interfaces and types for props, state, form values, and API responses. No lax typing.

## 5. Avoid Unnecessary `any`
`any` is forbidden unless interfacing with an untyped 3rd-party library where casting is strictly required. Use unknown, generics, or precise unions instead.

## 6. Keep Server Components as the Default
In Next.js App Router, all pages and sections are Server Components by default. Never add `"use client"` to a component unless it genuinely requires state (`useState`), effects (`useEffect`), event handlers, or browser APIs.

## 7. Use Client Components Only When Needed
Isolate interactivity into small, focused client component boundaries (e.g., interactive forms, modal dialogs, mobile navigation toggle, floating WhatsApp trigger). Keep parent sections and layout wrappers as Server Components.

## 8. Extract Repeated Business Data into Configuration
All business metadata (phone numbers, WhatsApp links, Google Maps coordinates, address, opening hours, navigation links, social URLs) must live in `src/config/site.ts` and `src/config/navigation.ts`. Never hardcode raw phone numbers or business addresses inside JSX.

## 9. Use Custom Hooks for Reusable Stateful Logic
Extract stateful logic into dedicated hooks in `src/hooks/` (e.g., `useMediaQuery`, `useScrollPosition`, `useDisclosure`, `useModal`).

## 10. Use a Shared Modal/Disclosure Hook Instead of Repeating Modal State Management
Do not write repetitive `isOpen` / `setIsOpen` boilerplate with custom overlay handling across multiple components. Use the centralized `useDisclosure` or `useModal` hook and `<Modal>` primitive.

## 11. Use Semantic HTML
Always structure layouts using appropriate HTML5 tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Use real `<button>` elements for actions and `<a>` / `<Link>` for navigation.

## 12. Maintain Responsive Layouts
Every screen and component must look exceptional on mobile (320px, 375px, 390px, 430px), tablet (768px, 1024px), desktop (1280px, 1440px), and ultrawide screens (1920px). Zero horizontal scroll or overflow issues permitted.

## 13. Optimise Images
Always use `next/image` with explicit `width`, `height`, and `alt` attributes. Apply `priority` only to above-the-fold hero visuals. Always specify responsive `sizes` attribute.

## 14. Avoid Unnecessary Dependencies
Only use essential, lightweight, and modern packages. Do not install heavy component libraries or redundant animation frameworks when clean Tailwind and CSS suffice.

## 15. Avoid Duplicated Logic
Do not duplicate form validation logic between client and server. Use shared Zod schemas (`src/lib/validations.ts`) for both client validation and API route handling.

## 16. Never Leave Dead Code
Remove unused imports, orphaned CSS classes, commented-out experiments, and unreferenced functions.

## 17. Never Leave Unused Files or Components
Delete obsolete files immediately. Maintain a tight, well-organized repository structure.

## 18. Never Fabricate Business Information
Never make up trainer qualifications, medical claims, fake member names, unsupported transformation stories, or unconfirmed gym equipment. Any unconfirmed business item must be clearly marked as pending configuration.

## 19. Follow Accessibility Requirements
Ensure WCAG AA contrast compliance, minimum 44x44px touch targets on mobile, visible focus indicators, and `aria-label` attributes on icon-only interactive controls.

## 20. Test Changes Before Declaring Completion
Always execute `npm run lint`, `npx tsc --noEmit`, and `npm run build` to verify clean compilation, zero type errors, and functional production builds before marking any milestone complete.
