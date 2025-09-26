# Resolve Men's Therapy - Site Structure & Content

**Live Site:** https://therapy-website-14slf73oa-umairs-projects-f3471364.vercel.app

## Overview
- **Total Pages:** 43 Next.js routes
- **Technology:** Next.js 15.5.3 with TypeScript and React 19.1.0
- **Architecture:** Unified Layout component for consistency
- **Compliance:** CRPO (College of Registered Psychotherapists of Ontario) standards
- **Target Audience:** Men seeking mental health support across Ontario

---

## 📋 Main Pages (8 pages)
*Core navigation and user journey pages*

### `/` - Homepage
**File:** `src/app/page.tsx`
**Purpose:** Primary landing page to introduce practice and direct users to services
**Key Sections:**
- Hero: "Men's Mental Health Support Across Ontario"
- Feature Cards: Ontario-wide, Online/In-person, Insurance, Expert Team
- Emotional States: Common feelings (Anxious, Stuck, Depressed)
- About Section: Practice mission and founder philosophy
- Why Choose Us: Specialized Focus, Registered Professionals, Evidence-Based
- Services Overview: Individual, Couples, Group therapy cards
- Areas of Support: Grid of specialized service areas
- Team Introduction: Team member slider
- Email Signup: Newsletter subscription
- Locations: Toronto, Ottawa, Virtual therapy cards

### `/about` - About Page
**File:** `src/app/about/page.tsx`
**Purpose:** Detailed practice information, mission, values, and approach
**Key Sections:**
- Our Mission: Men's mental health focus and barrier breakdown
- Core Values: Confidentiality, Compassion, Evidence-Based, Client-Centered
- Therapeutic Approach: CBT, DBT, EMDR methods
- What to Expect: Process from consultation to regular sessions
- Professional Standards: CRPO registration and ethics
- CTA: "Ready to Take the First Step?"

### `/services` - Services Hub
**File:** `src/app/services/page.tsx`
**Purpose:** Central hub for all therapy services
**Key Sections:**
- Core Services: Individual, ADHD, Crisis Support, Continuous Support
- Mental Health Assessments: Links to self-assessment tools
- How It Works: 4-step process (Consultation → Assessment → Planning → Support)
- Insurance & Pricing: Coverage and flexible payment options
- CTA: "Ready to Get Started?"

### `/team` - Team Page
**File:** `src/app/team/page.tsx`
**Purpose:** Introduce therapists and build trust through credentials
**Key Sections:**
- Founder Profile: Detailed background and expertise areas
- Team Expansion: Growing team and hiring information
- Professional Standards: CRPO registration, training, supervision
- Credentials: CRPO, insurance, evidence-based practice
- CTA: "Ready to Work with Our Team?"

### `/pricing` - Pricing Page
**File:** `src/app/pricing/page.tsx`
**Purpose:** Transparent service cost information
**Key Sections:**
- Pricing Tiers: Free Consultation, Individual Therapy, Sliding Scale
- Payment & Billing: Methods, insurance, cancellation policy
- Making Therapy Accessible: Insurance guidance and flexibility
- CTA: "Ready to Take the Next Step?"

### `/contact` - Contact Page
**File:** `src/app/contact/page.tsx`
**Purpose:** Multiple contact methods and practice information
**Key Sections:**
- Primary CTAs: "Book Free Consultation" and "Send Email"
- Contact Options: Online booking, Email, Phone cards
- Practice Information: Office hours and service area
- Crisis Support: Emergency numbers (911, 9-8-8, Talk Suicide Canada)

### `/book-consultation` - Consultation Booking
**File:** `src/app/book-consultation/page.tsx`
**Purpose:** Lead capture for free consultation requests
**Key Sections:**
- Consultation Form: Name, email, phone, concerns, consent
- What to Expect: 15-minute consultation process guide
- Response Time: 24 business hours expectation
- Success Flow: Confirmation → JaneApp booking redirect

### `/faq` - Frequently Asked Questions
**File:** `src/app/faq/page.tsx`
**Purpose:** Answer common therapy, insurance, and practice questions
**Key Sections:**
- Accordion FAQ: Expandable question/answer format
- CTA: "Still Have Questions?" → contact page

---

## 🩺 Service Pages (18 pages)
*Specialized therapy service descriptions*

### Mental Health Conditions
- `/addiction-therapy` - Substance use and behavioral addictions
- `/adhd-support` - Practical ADHD strategies for men
- `/anger-management` - Tools for understanding and managing anger
- `/anxiety-support` - Generalized, social anxiety, and panic support
- `/depression-support` - Depression manifestation in men
- `/stress-burnout` - Chronic stress management and burnout recovery
- `/trauma-therapy` - Trauma-informed approach and therapies

### Therapy Types
- `/individual-therapy` - One-on-one therapy process
- `/couples-therapy` - Partner therapy information
- `/group-therapy` - Group therapy benefits and types
- `/emdr-therapy` - Evidence-based trauma therapy explanation

### Specialized Support
- `/first-responder-support` - Emergency personnel dedicated page
- `/grief-support` - Men navigating grief and loss
- `/mens-issues` - General male-specific challenges
- `/parenting-support` - Support for fathers and new parents
- `/performance-anxiety` - Work, social, personal performance support
- `/relationship-therapy` - Building healthier relationships
- `/work-life-balance` - Achieving healthier balance

---

## 📍 Location Pages (2 pages)
*SEO-focused geographic landing pages*

### `/toronto` - Toronto Area
**File:** `src/app/toronto/page.tsx`
**Purpose:** Attract Toronto and GTA clients
**Key Sections:**
- Why Toronto Men Choose Resolve: City-specific benefits
- Toronto Challenges: Finance/tech pressures, commutes, cost of living
- GTA Coverage: Toronto, Peel, Markham service areas
- FAQ: Toronto-specific questions

### `/ottawa` - Ottawa Area
**File:** `src/app/ottawa/page.tsx`
**Purpose:** Attract Ottawa and NCR clients
**Key Sections:**
- Support for Professionals: Government and tech focus
- Ottawa's Professional Landscape: Public service and tech stressors
- NCR Coverage: Ottawa, suburbs, Gatineau
- FAQ: Government work, security clearance questions

---

## 📊 Assessment Pages (5 pages)
*Interactive mental health screening tools*

### `/assessment/depression` - Depression Screening
**File:** `src/app/assessment/depression/page.tsx`
**Tool:** PHQ-9 (Patient Health Questionnaire-9)
**Purpose:** Depression symptom assessment
**Features:** Interactive form, scoring, email results capture

### `/assessment/anxiety` - Anxiety Screening
**File:** `src/app/assessment/anxiety/page.tsx`
**Tool:** GAD-7 (Generalized Anxiety Disorder-7)
**Purpose:** Anxiety symptom assessment
**Features:** Interactive form, scoring, email results capture

### `/assessment/adhd` - ADHD Screening
**File:** `src/app/assessment/adhd/page.tsx`
**Tool:** ASRS-6 (Adult ADHD Self-Report Scale)
**Purpose:** ADHD symptom assessment
**Features:** Interactive form, scoring, email results capture

### `/assessment/stress` - Stress Assessment
**File:** `src/app/assessment/stress/page.tsx`
**Tool:** PSS-10 (Perceived Stress Scale)
**Purpose:** Stress level measurement
**Features:** Interactive form, scoring, email results capture

### `/assessment/habits` - Self-Control Assessment
**File:** `src/app/assessment/habits/page.tsx`
**Tool:** SCS (Self-Control Scale)
**Purpose:** Self-discipline and habit formation assessment
**Features:** Interactive form, scoring, email results capture

---

## 📰 Articles (4 pages)
*Educational blog content for SEO and authority*

### `/articles` - Article Hub
**File:** `src/app/articles/page.tsx`
**Purpose:** Central listing of all available articles
**Content:** Article cards with titles, descriptions, links

### Individual Articles
- `/article-choosing-therapist-ontario` - Guide to finding Ontario therapists
- `/article-managing-work-stress` - Workplace stress management strategies
- `/article-recognizing-depression` - Hidden depression signs in men

### `/for-partners` - Partner Resource
**File:** `src/app/for-partners/page.tsx`
**Purpose:** Guide for partners supporting men's mental health
**Key Sections:**
- Understanding the Challenge: Men's mental health barriers
- What You Can Do: Listening, encouraging help
- What to Avoid: Pressure, minimizing feelings
- Starting Conversations: Therapy discussion tips
- Crisis Information: Emergency resources

---

## ⚖️ Legal & Informational Pages (4 pages)
*Compliance and user information*

### `/privacy` - Privacy Policy
**File:** `src/app/privacy/page.tsx`
**Purpose:** CRPO compliance and confidentiality information
**Key Sections:**
- CRPO Compliance: Professional standards
- Information Collection: What data is collected and why
- Limitations of Confidentiality: Legal reporting requirements
- Your Rights: Data access, corrections, complaints

### `/terms` - Terms of Service
**File:** `src/app/terms/page.tsx`
**Purpose:** Website and therapy service terms

### `/disclaimer` - Professional Disclaimer
**File:** `src/app/disclaimer/page.tsx`
**Purpose:** Assessment tool and service disclaimers

### `/accessibility` - Accessibility Statement
**File:** `src/app/accessibility/page.tsx`
**Purpose:** Website accessibility features and compliance

---

## 🔧 API Routes (1 route)
*Backend functionality*

### `/api/consultation` - Consultation Form Handler
**File:** `src/app/api/consultation/route.ts`
**Purpose:** Secure consultation form submission processing
**Features:**
- Rate limiting
- Input validation and sanitization
- Lead data capture
- Notification triggering

---

## 🎯 Key Features & Compliance

### CRPO Compliance Elements
- **Professional Standards:** Emphasized throughout service pages
- **Confidentiality:** Detailed in privacy policy
- **Ethical Practice:** Highlighted in about and team pages
- **Emergency Procedures:** Prominent crisis support information
- **Registration Status:** "CRPO Registered Psychotherapist (Qualifying)"

### User Experience Features
- **Unified Layout:** Consistent header/footer across all pages
- **Interactive Assessments:** 5 evidence-based screening tools
- **Contact Integration:** JaneApp booking system integration
- **Geographic Targeting:** Toronto and Ottawa specific content
- **Crisis Support:** Emergency resources prominently displayed

### Technical Architecture
- **Next.js 15.5.3:** Server-side rendering and optimization
- **TypeScript:** Type safety and developer experience
- **Responsive Design:** Mobile-first approach
- **SEO Optimized:** Structured content and meta tags
- **Performance:** Optimized build with 49 static pages

---

*Last Updated: Current deployment reflects layout unification with eliminated code duplication across all 43 pages*