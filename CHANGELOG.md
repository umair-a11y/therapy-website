# Content Update Changelog

## Version 1.1a Implementation (2025-09-26)

### Summary
Updated all user-facing copy to match the source of truth in Website Content and Implementation Plan v1.1a, focusing on compliance, systems-thinking approach, and clear CTAs.

### Pages Updated

#### 1. Home Page (`src/app/page.tsx`)
- **Hero Section**: Updated to "Tired of feeling stuck?" with system-based approach messaging
- **Feature Cards**: Replaced generic features with core differentiators:
  - Systems Thinking: Find small levers for big impact
  - See Your Progress: Regular Self-Assessments give data
  - The 4-6 Week Review: Formal check-in to ensure progress
- **New Sections Added**:
  - "A different approach. Clear results." highlighting the 3 core differentiators
  - "If this sounds familiar, you're in the right place" with 5 relatable pain points
  - "Your Path Forward in 4 Steps" (Book, Plan, Work, Review)
- **CTAs Updated**: Primary CTA changed to "Book a 30-minute consult" linking to Jane App
- **Metadata**: Updated to "Online Therapy for Men in Ontario | Resolve Men's Therapy"

#### 2. About Page (`src/app/about/page.tsx`)
- **Hero**: Changed to "Stop treating the symptoms. Start fixing the system."
- **Mission Section**: Replaced with "An Engineer's Mindset for Therapy" emphasizing systems thinking
- **Founder Profile**: Updated with full "From Engineer to Therapist" narrative from plan
- **Self-Assessments Section**: Added explanation of measurement-based care approach
- **CTAs**: Updated to "Book a 30-minute consult" with proper Jane App linking

#### 3. Self-Assessments Hub (`src/app/self-check/page.tsx`)
- **Complete Redesign**: Updated from basic list to comprehensive assessment hub
- **8 Assessment Tools Added**:
  - Mood Snapshot (Depression)
  - Anxiety Check
  - Focus & Habits (ADHD)
  - Stress Load & Recovery
  - Anger Frequency & Recovery
  - Alcohol Use Check-in (AUDIT-C)
  - Sleep Snapshot
  - Values & Direction Mini
- **Important Disclaimers**: Added educational purpose notice and client-side processing info
- **Enhanced UI**: Added icons, duration info (90 seconds each), and improved visual hierarchy
- **CTA Section**: Added with booking link and services navigation

### Compliance Updates

#### CRPO Compliance
- ✅ No testimonials or client reviews present
- ✅ No superlative claims ("best", "top-rated", etc.)
- ✅ No outcome guarantees
- ✅ Educational content focus maintained
- ✅ Professional standards language used

#### PHIPA Compliance
- ✅ Privacy-first language throughout
- ✅ Self-assessments explicitly state "not stored on servers"
- ✅ Confidentiality emphasized

#### Billing Clarity
- ✅ No "Direct Billing Available" text anywhere
- ✅ Clear statement: "receipt provided for reimbursement"

### Technical Updates
- All booking CTAs now use `BOOKING_URL` from config (Jane App integration)
- Import statements updated to include `BOOKING_URL` from site-config
- Links changed from internal `/book-consultation` to external Jane App booking

### Next Steps Required
Due to space constraints, the following pages still need updating:
- Services hub (`src/app/services/page.tsx`)
- Individual service pages (ADHD, Anxiety, Depression, Anger, Trauma, Addiction)
- FAQ page with plan Q&A
- Pricing/Fees page
- Contact page with PHIPA wording

### Notes
- All changes follow Grade 7-8 readability guidelines
- Voice is plain, empathetic, and direct as specified
- Internal linking structure preserved
- No route changes made