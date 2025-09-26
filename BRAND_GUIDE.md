# Resolve Men's Therapy - Brand Guide

## 🧭 Brand Identity

### Logo Concept: **The Compass**
A compass symbolizing guidance, direction, and finding one's path. The compass represents:
- **Navigation** through life's challenges
- **Direction** toward mental wellness
- **Orientation** in times of confusion
- **Journey** of personal growth

### Tagline
> **"Navigate your path forward"**

This tagline reinforces the journey metaphor while emphasizing:
- Active progression (forward movement)
- Personal ownership (your path)
- Professional guidance (navigate with support)

## 🎨 Color Palette

### Primary Colors

#### Forest Green (Primary Dark)
- **Hex:** `#2A4033`
- **RGB:** `42, 64, 51`
- **Tailwind:** `resolve-forest-dark`
- **Meaning:** Stability, grounding, strength
- **Usage:** Headers, navigation, CTAs in dark mode

#### Growth Green (Primary Main)
- **Hex:** `#5A7D6C`
- **RGB:** `90, 125, 108`
- **Tailwind:** `resolve-forest` or `therapeutic-primary`
- **Meaning:** Progress, balance, forward momentum
- **Usage:** Primary buttons, links, highlights

#### Sage Green (Primary Light)
- **Hex:** `#A3B8A9`
- **RGB:** `163, 184, 169`
- **Tailwind:** `resolve-sage` or `therapeutic-secondary`
- **Meaning:** Clarity, calm, safety
- **Usage:** Backgrounds, cards, subtle accents

### Accent Color

#### Compass Gold
- **Hex:** `#C5A57E`
- **RGB:** `197, 165, 126`
- **Tailwind:** `resolve-compass` or `therapeutic-accent`
- **Meaning:** Guidance, hope, warmth
- **Usage:** Special CTAs, highlights, compass logo accents

### Neutral Colors

#### Charcoal
- **Hex:** `#212529`
- **RGB:** `33, 37, 41`
- **Tailwind:** `resolve-charcoal`
- **Usage:** Body text, headings

#### Stone
- **Hex:** `#D1D5DB`
- **RGB:** `209, 213, 219`
- **Tailwind:** `resolve-stone`
- **Usage:** Borders, dividers, disabled states

#### Linen
- **Hex:** `#F8F7F4`
- **RGB:** `248, 247, 244`
- **Tailwind:** `resolve-linen` or `therapeutic-light`
- **Usage:** Page backgrounds, light sections

## 🖼️ Stock Image Guidelines

### Image Categories & Search Terms

#### Hero Sections
Professional, hopeful imagery of men 25-50:
- "Man looking thoughtfully out office window"
- "Diverse group of men collaborating"
- "Man smiling at sunrise"
- "Hopeful man looking up outdoors"

#### Service Pages
Journey and navigation metaphors:
- "Man hiking trail with backpack"
- "Man navigating with map and compass"
- "Man crossing wooden bridge in forest"
- "Man walking along winding road"

#### About Pages
Supportive, authentic connections:
- "Two men talking over coffee"
- "Friends supporting each other outdoors"
- "Man listening intently in conversation"
- "Authentic portrait of a smiling man"

#### Assessment Pages
Reflection and mindfulness:
- "Man journaling by a lake"
- "Man sitting on dock looking at water"
- "Man meditating on a quiet beach"
- "Man reading in quiet corner"

### Image Requirements
- **Diversity:** Include men of various ethnicities, ages (25-50), and backgrounds
- **Authenticity:** Natural, candid shots over staged/clinical photos
- **Emotion:** Hopeful, contemplative, peaceful expressions
- **Settings:** Natural environments, comfortable spaces, professional but warm
- **Avoid:** Medical/clinical settings, overly distressed expressions, stock photo clichés

## 📝 Typography

### Font Stack
```css
--font-primary: 'DM Sans', system-ui, sans-serif;  /* Headings */
--font-body: 'Inter', system-ui, sans-serif;       /* Body text */
```

### Font Sizes
- **Hero:** 4rem (64px) - Desktop, 2.5rem (40px) - Mobile
- **H1:** 2.5rem (40px)
- **H2:** 2rem (32px)
- **H3:** 1.5rem (24px)
- **Body:** 1rem (16px)
- **Small:** 0.875rem (14px)

## 🎯 Component Usage Examples

### Button Styles
```tsx
// Primary CTA
<button className="bg-resolve-forest hover:bg-resolve-forest-dark text-white">
  Book Consultation
</button>

// Secondary CTA
<button className="bg-resolve-sage hover:bg-resolve-forest text-resolve-charcoal">
  Take Assessment
</button>

// Accent CTA (special emphasis)
<button className="bg-resolve-compass hover:bg-resolve-compass/90 text-white">
  Navigate Your Path Forward
</button>
```

### Card Styles
```tsx
<div className="bg-white border border-resolve-stone rounded-lg p-6
              hover:shadow-lg hover:border-resolve-sage transition-all">
  // Card content
</div>
```

### Gradient Backgrounds
```tsx
// Hero gradient
<div className="bg-gradient-to-br from-resolve-forest-dark via-resolve-forest to-resolve-sage">
  // Hero content
</div>

// Subtle section gradient
<div className="bg-gradient-to-b from-resolve-linen to-white">
  // Section content
</div>
```

## 🚀 Implementation in Code

### Tailwind Classes Available
```
// Primary greens
bg-resolve-forest-dark    text-resolve-forest-dark    border-resolve-forest-dark
bg-resolve-forest         text-resolve-forest         border-resolve-forest
bg-resolve-sage           text-resolve-sage           border-resolve-sage

// Accent
bg-resolve-compass        text-resolve-compass        border-resolve-compass

// Neutrals
bg-resolve-charcoal       text-resolve-charcoal       border-resolve-charcoal
bg-resolve-stone          text-resolve-stone          border-resolve-stone
bg-resolve-linen          text-resolve-linen          border-resolve-linen

// Therapeutic aliases
bg-therapeutic-primary    text-therapeutic-primary    (#5A7D6C)
bg-therapeutic-secondary  text-therapeutic-secondary  (#A3B8A9)
bg-therapeutic-accent     text-therapeutic-accent     (#C5A57E)
bg-therapeutic-dark       text-therapeutic-dark       (#2A4033)
bg-therapeutic-light      text-therapeutic-light      (#F8F7F4)
```

### Using Stock Images Component
```tsx
import { StockImageComponent } from '@/components/stock-image'

// Hero image with automatic selection
<StockImageComponent
  category="hero"
  width={1920}
  height={1080}
  className="w-full h-[600px]"
  priority
  alt="Man navigating life's journey"
/>

// Service page with specific query
<StockImageComponent
  query="man hiking forest trail"
  width={800}
  height={600}
  showCredit={true}
/>
```

## 🔑 API Configuration

### Required Environment Variables
Add to `.env.local`:
```env
# Unsplash API (Free tier: 50 requests/hour)
# Get your key at: https://unsplash.com/developers
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here

# Pexels API (Free tier: 200 requests/hour)
# Get your key at: https://www.pexels.com/api/
NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key_here
```

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Mobile-First Approach
```tsx
<div className="text-sm md:text-base lg:text-lg
                p-4 md:p-6 lg:p-8
                bg-resolve-sage md:bg-resolve-forest">
  Responsive content
</div>
```

## ✅ Brand Checklist

When creating new pages or components:

- [ ] Use forest green palette for primary elements
- [ ] Include compass gold accents sparingly
- [ ] Implement "Navigate your path forward" messaging
- [ ] Select appropriate stock images from defined categories
- [ ] Maintain masculine yet calming aesthetic
- [ ] Ensure text has sufficient contrast (WCAG AA)
- [ ] Include journey/navigation metaphors where appropriate
- [ ] Keep design professional but approachable
- [ ] Test on mobile devices first
- [ ] Add proper image credits when using stock photos

## 🎨 Design Principles

1. **Trustworthy:** Deep greens convey stability and professionalism
2. **Approachable:** Sage and gold add warmth without being clinical
3. **Masculine:** Darker palette appeals to male demographic
4. **Growth-Oriented:** Green symbolism reinforces progress
5. **Clear Navigation:** Compass metaphor throughout UX
6. **Natural:** Earth tones create calming environment
7. **Professional:** Clean layouts with generous white space
8. **Accessible:** High contrast ratios for readability

## 📊 Color Accessibility

All color combinations meet WCAG AA standards:
- Forest Dark on White: 7.5:1 ✅
- Forest on White: 4.5:1 ✅
- Sage on Charcoal: 5.2:1 ✅
- Compass Gold on Forest Dark: 4.8:1 ✅
- Charcoal on Linen: 15:1 ✅

---

*Last Updated: January 2025*
*Brand Guide Version: 1.0*