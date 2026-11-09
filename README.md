# Classic Fitness — VoiceBox Editorial Brand & Next.js Website

A high-contrast, magazine-style editorial website engineered for **Classic Fitness**, a premier strength and fitness centre located on 17th A Main Road, opposite HSR Government School in Neelakanteshwara Layout, Bengaluru.

Redesigned in strict accordance with the **VoiceBox Editorial Design System**, **Antigravity guidelines**, and **Next.js App Router** architecture.

---

## ⚡ VoiceBox Design System

- **Aesthetic:** Bold, Opinionated, Magazine-Style.
- **Foundations:** Pure pitch black (`#0A0A0A`) and stark white canvas (`#FAFAFA`).
- **Accents:** High-intensity editorial red (`#EF4444`) used for active navigation underlines, button hover states, and key badges.
- **Typography:**
  - **Headings & Display:** `Archivo Black` (56px+ display, 38px headlines)
  - **Body & Navigation:** `Work Sans` (14px–20px geometric clarity)
  - **Technical & Metrics:** `Space Mono` (Hours, lift metrics, timestamps)
- **Geometry:** Strictly square corners (`0px` border-radius across all default containers, cards, buttons, and inputs). Only trainer avatars use rounded shapes.
- **Elevation:** Zero drop shadows or faux blurs (`shadow-none`). Hierarchy is established strictly through 2px solid structural borders and black-and-white tonal contrast.

---

## 🧭 Page Architecture & Coverage

- **Homepage (`/`):**
  - **Editorial Hero:** Display headline `"BUILT THROUGH DISCIPLINE."`, supporting copy, rectangular CTAs (`BOOK A FREE TRIAL`, `EXPLORE THE GYM`), technical specs bar, and grayscale gym photography.
  - **About Section:** Split-column brand story with pull quotes and 3 value pillars.
  - **Programmes Grid:** Coached disciplines with 2px borders, intensity chips, and enquiry CTAs.
  - **Why Choose Us:** 6 magazine-style feature blocks with monospace numbering.
  - **Trainers:** Coach Ravi leadership card with verified qualifications.
  - **Facility Gallery:** Category filter chips (`All`, `Strength`, `Facility`, `Coaching`, `Free Weights`) and square lightbox modal.
  - **Membership Tiers:** 1-Month, 3-Month (Popular), 6-Month, and 12-Month cards with transparent pricing disclosures.
  - **Member Reviews:** Pull-quote styled testimonials with verified Google Review badges.
  - **FAQs:** Accordion with sharp rectangular toggles.
  - **Location & Hours:** Embedded Google Map with 2px border, directions CTA, and provisional opening schedule.
  - **Final CTA:** Pitch black colophon banner with instant trial booking trigger.
- **About Us (`/about`):** Detailed editorial feature on training philosophy, four workout pillars, and gym equipment standards.
- **Programmes (`/programmes`):** In-depth guides for Strength Training, Personal Training (1-on-1), Body Transformation, Weight Loss & Conditioning, Muscle Building, and Nutrition Guidance.
- **Trainers (`/trainers`):** Transparent coach roster, certifications, specialties, and staff integrity statement.
- **Gallery (`/gallery`):** Complete interactive photo grid with lightbox modal.
- **Membership (`/membership`):** Commitment packages and detailed inclusions checklist.
- **Contact (`/contact`):** Full interactive enquiry form, operating hours, phone, WhatsApp links, and embedded map.
- **Privacy Policy (`/privacy-policy`):** Explicit data protection and communications policy.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components by default)
- **Language:** TypeScript 5 (Strict Mode enabled)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with VoiceBox CSS variables
- **Typography:** `Archivo Black`, `Work Sans`, and `Space Mono` via `next/font/google`
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API Endpoint:** `/api/enquiries` (Rate-limited, honeypot spam protected, webhook enabled)

---

## 🚀 Development & Verification

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Run Strict QA Checks

```bash
# 1. Typecheck TypeScript strictly
npx tsc --noEmit

# 2. Linting
npm run lint

# 3. Production Build
npm run build
```

---

## 📍 Business Information

- **Name:** Classic Fitness
- **Landmark:** Directly opposite HSR Government School
- **Address:** 17th A Main Road, Neelakanteshwara Layout, HSR Layout Sector 1, Bengaluru, Karnataka 560068
- **Coordinates:** `12.9112, 77.6389`
- **Place ID:** `ChIJ83A_puqhDTsR1Qqpj9fd0d0`

---

## 📄 License

Proprietary — Developed for Classic Fitness Bengaluru under the VoiceBox Editorial Design System.
