# V0 Redesign Prompts for Therapy Website

## 🔴 HIGH PRIORITY - Self-Assessment Pages

These interactive pages need the most polish and modern UI improvements.

### 1. **All Assessment Pages** (Use Same Template)
**Pages:** `/assessment/adhd`, `/assessment/anxiety`, `/assessment/depression`, `/assessment/stress`, `/assessment/habits`

**V0 Prompt:**
```
Create a multi-step mental health assessment form with a calming, therapeutic aesthetic. Use a soft, muted color palette (light blues, greens, grays). Each step should display one question on a modern card with large, accessible radio-style buttons for answers. Include a sleek progress bar at the top that animates smoothly as the user advances. Use subtle fade-in and slide-up animations for transitions between questions. The final results page should feature a summary card with a gauge chart for the score and a clear call-to-action button. Ensure mobile-first responsive design.
```

### 2. **Book Consultation Page**
**Page:** `/book-consultation`

**V0 Prompt:**
```
Design a booking page for a therapy consultation using a modern, two-sided layout. On the left, create a clean, multi-step form with fields grouped into sections like "Your Details" and "Scheduling." Use large, accessible input fields and a prominent primary-colored CTA button. On the right, create a "What to Expect" section that uses minimalist icons and short text to illustrate the consultation process in a step-by-step vertical timeline. The design should be calming, professional, and build trust, using a soft color palette and generous white space. Ensure it's fully responsive.
```

### 3. **FAQ Page**
**Page:** `/faq`

**V0 Prompt:**
```
Create a modern FAQ page with a clean, therapeutic aesthetic. At the top, feature a prominent search bar with a placeholder "Search questions...". Below, display FAQ categories like "Getting Started," "Insurance," and "Our Approach" as visually distinct cards in a responsive grid. When a card is clicked, it should smoothly reveal the questions for that category in an accordion list below. The active accordion item should have a subtle background color and a rotating chevron icon for a polished feel. Use a calming color scheme and sans-serif typography.
```

## 🟡 MEDIUM PRIORITY - Service Pages (Batch Redesign)

All service pages share the same layout - use ONE template for all.

### 4. **All Service Pages** (Single Template)
**Pages:** `/adhd-support`, `/anger-management`, `/anxiety-support`, `/depression-support`, `/stress-burnout`, `/couples-therapy`, `/trauma-therapy`

**V0 Prompt:**
```
Create a service page for men's therapy using shadcn/ui components and Tailwind CSS. Structure: 1) Hero with centered icon, h1 title, description, and two CTAs (primary "Book Consultation" and outline "Take Assessment"). 2) "Understanding [Topic]" card with intro and multi-column symptom list. 3) "Our Approach" card with numbered 4-step process. 4) "Practical Strategies" card with categorized techniques in grid layout. 5) "When to Seek Support" card with AlertTriangle icon and two-column checklist. 6) FAQ card with Q&A pairs. 7) Final CTA section with light background and duplicate hero buttons. Use calming therapeutic colors.
```

## 🟢 LOWER PRIORITY - Static Pages

These pages work well with current design but could benefit from v0 polish if time permits.

### 5. **Contact Page**
**Page:** `/contact`

**V0 Prompt:**
```
Design a modern contact page for a therapy practice. Include a hero section with "Get in Touch" title. Create cards for different contact methods: 1) Phone with clickable number and hours, 2) Email with contact form, 3) Online booking with button to external scheduler, 4) Crisis support with emergency numbers. Use icons for each method, soft therapeutic colors, and ensure mobile responsiveness. Add a "Response Time" indicator showing typical reply times.
```

### 6. **Team Page**
**Page:** `/team`

**V0 Prompt:**
```
Create a modern team page for a therapy practice. Display therapist profiles in elegant cards with professional photos, qualifications, specializations, and therapeutic approach. Use a clean grid layout that adapts from 1 column on mobile to 2-3 columns on desktop. Each card should have subtle hover effects and a "Book with [Name]" CTA button. Include credential badges and years of experience. Use calming colors and professional typography.
```

### 7. **Pricing Page**
**Page:** `/pricing`

**V0 Prompt:**
```
Design a transparent pricing page for therapy services. Create pricing cards showing: Individual therapy rate, Sliding scale options, Insurance information. Include a cost calculator widget where users can estimate sessions per month and see total costs. Add an "Insurance Checker" section with common providers. Use clear typography, soft colors, and icons to make financial information less intimidating. Include FAQs about payment at the bottom.
```

## 📝 Implementation Notes

### For v0.dev:
1. Start with HIGH PRIORITY pages first (assessments, booking, FAQ)
2. Use the Sentir mental health template as inspiration
3. Ensure all designs follow CRPO compliance (no testimonials, no superlative claims)
4. Keep therapeutic color palette: soft blues (#C4DAE8), greens (#D4E8D4), warm accent (#F5E6D3)
5. All forms should have proper validation and accessibility features
6. Mobile-first approach is essential - many users access on phones

### Design System Consistency:
- Use shadcn/ui components throughout
- Maintain consistent spacing (8px grid system)
- Sans-serif fonts (Inter for body, DM Sans for headings)
- Rounded corners (radius-md or radius-lg)
- Subtle shadows for depth
- Smooth transitions (300ms default)

### Key Features to Include:
- Progress indicators for multi-step forms
- Loading states for all interactive elements
- Error states with helpful messages
- Success feedback after form submissions
- Keyboard navigation support
- ARIA labels for accessibility