# Pack 3: FAQ, Pricing, Contact Pages Update
## Based on Website Content and Implementation Plan v1.1a

---

## 📄 FAQ PAGE (`src/app/faq/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Fees & FAQs | Resolve Men's Therapy",
  description: "Find information on session fees, insurance coverage for psychotherapy in Ontario, and answers to common questions about online therapy for men.",
};
```

### Page Structure

#### Hero Section
- **H1**: "Fees & FAQs"
- **H2**: "Simple, Transparent Pricing"

#### Pricing Information Section
```
30-Minute Initial Consult: Free
50-Minute Individual Session: $160
Payment: We accept e-Transfer and all major credit cards. Payment is processed after each session.
Cancellation Policy: Please provide at least 24 hours' notice to avoid being charged for the session.
```

#### Insurance & Reimbursement Section
**H2**: "Insurance & Reimbursement"

"Therapy with a Registered Psychotherapist is covered by many, but not all, extended health benefits plans in Ontario. We do not offer direct billing. After each session, you will receive a receipt with all the necessary information to submit for reimbursement."

**Your Insurance Checklist:**
"Before booking, we recommend you ask your insurance provider these questions:"
1. Does my plan cover services from a "Registered Psychotherapist" or "RP"?
2. What is my total coverage amount per year for mental health services?
3. Is there a per-session maximum that my plan will reimburse?
4. Do I need a doctor's referral to be covered?

#### FAQ Array Content
```javascript
const faqData = [
  {
    question: "What are your fees?",
    answer: "Our session fee is $160 for a 50-minute virtual session. The initial 30-minute consultation is free. We provide a receipt that you can use for reimbursement from most extended health benefits plans."
  },
  {
    question: "Do you offer direct billing?",
    answer: "We do not offer direct billing. After each session, you will receive a receipt with all the necessary information to submit for reimbursement according to your plan's coverage for Registered Psychotherapists."
  },
  {
    question: "What technology do you use for sessions?",
    answer: "We use a secure, PHIPA-compliant video platform designed for healthcare. You will receive a private link before each session."
  },
  {
    question: "Is online therapy as effective as in-person?",
    answer: "For many issues, research shows that online therapy is just as effective as traditional in-person therapy. It offers the same expert support with added convenience and accessibility from anywhere in Ontario."
  },
  {
    question: "How do I know if we're a good fit?",
    answer: "The free 30-minute consult is for exactly that. It's a chance for you to ask questions, share what's on your mind, and get a feel for my approach. There is no pressure to continue if it doesn't feel right."
  },
  {
    question: "What if I'm in crisis?",
    answer: "This practice is not equipped for crisis support. If you are in immediate distress or having thoughts of harming yourself, please contact 9-8-8 (call or text) or go to your nearest emergency room. For non-urgent mental health support, you can contact ConnexOntario at 1-866-531-2600."
  },
  {
    question: "Does my insurance plan cover services from a Registered Psychotherapist?",
    answer: "Therapy with a Registered Psychotherapist is covered by many, but not all, extended health benefits plans in Ontario. Check with your insurance provider if your plan covers services from a 'Registered Psychotherapist' or 'RP'."
  },
  {
    question: "What is my total coverage amount per year for mental health services?",
    answer: "Coverage amounts vary by plan. Check with your insurance provider about your specific annual limits for mental health services or psychotherapy."
  },
  {
    question: "Is there a per-session maximum that my plan will reimburse?",
    answer: "Many plans have per-session maximums. Contact your insurance provider to confirm if there are limits on what they'll reimburse per session."
  },
  {
    question: "Do I need a doctor's referral to be covered?",
    answer: "Some insurance plans require a doctor's referral for coverage. Check with your provider about whether a referral is needed for your specific plan."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Please provide at least 24 hours' notice to avoid being charged for the session. Life happens, and we understand that sometimes you need to reschedule."
  },
  {
    question: "How long are sessions?",
    answer: "Individual therapy sessions are 50 minutes long. The initial consultation is 30 minutes and free of charge."
  }
];
```

### JSON-LD Implementation
```javascript
<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: `${SITE_URL}/faq`,
  }}
/>
```

### CTAs
- Primary: "Book a 30-minute consult" → Links to `BOOKING_URL`
- Secondary: "Contact Us" → Links to `/contact`

---

## 📄 PRICING PAGE (`src/app/pricing/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Fees & Pricing | Resolve Men's Therapy",
  description: "Transparent pricing for online therapy in Ontario. $160 per session. Receipts provided for insurance reimbursement. No direct billing.",
};
```

### Page Structure

#### Hero Section
- **H1**: "Your Investment in Yourself"
- **Subtitle**: "Quality mental health support is one of the most valuable investments you can make."
- **Virtual Badge**: "Virtual-only therapy across Ontario"

#### Pricing Cards Section

**Card 1 - Free Consultation**
- Badge: "Start Here" (green)
- Title: "Free Consultation"
- Price: "$0"
- Subtitle: "30-Minute Phone Call"
- Features:
  - No-obligation chat to see if we're a good fit
  - Discuss your goals and ask questions
  - Learn about our approach
- CTA: "Book a 30-minute consult" → Links to `BOOKING_URL`

**Card 2 - Individual Therapy**
- Badge: "Most Popular" (primary color)
- Title: "Individual Therapy"
- Price: "$160"
- Subtitle: "Per 50-Minute Session"
- Features:
  - Personalized, one-on-one sessions
  - Evidence-based strategies
  - Secure messaging between sessions
  - Flexible scheduling
- CTA: "Get Started" → Links to `BOOKING_URL`

**Card 3 - Sliding Scale**
- Title: "Sliding Scale"
- Price: "$110-$160"
- Subtitle: "Based on Financial Need"
- Features:
  - Same high-quality service
  - Confidential financial assessment
  - Limited spots available
- CTA: "Inquire About Sliding Scale" → Links to `/contact`

#### Payment & Billing Section
**H2**: "Payment & Billing"

**Payment Methods**
"We accept e-Transfer and all major credit cards. Payment is processed after each session."

**Insurance Coverage**
"Services are provided by Registered Psychotherapists (Qualifying) and often covered by extended health plans. We provide receipts for reimbursement. We do not offer direct billing."

**Cancellation Policy**
"We require at least 24 hours' notice for cancellations or rescheduling to avoid being charged the full session fee."

#### Making Therapy Accessible Section
**H2**: "Making Therapy Accessible"

**Insurance Guidance**
"We'll help you understand your coverage and claims process."

**Flexible Options**
"Sliding scale rates available for those experiencing financial hardship."

**Transparent Pricing**
"No hidden fees or surprises. What you see is what you pay."

### Final CTA Section
**H2**: "Ready to Take the Next Step?"
**Description**: "Book your free, no-pressure consultation today."

- Primary: "Book a 30-minute consult" → Links to `BOOKING_URL`
- Secondary: "Read Our FAQ" → Links to `/faq`

---

## 📄 CONTACT PAGE (`src/app/contact/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Contact | Resolve Men's Therapy",
  description: "Book your free 30-minute consult for online men's therapy in Ontario. PHIPA-compliant virtual sessions available province-wide.",
};
```

### Page Structure

#### Hero Section (Above the Fold)
- **H1**: "Take the first step"
- **H2**: "The easiest way to get started is to book a free, no-obligation 30-minute consult. Find a time that works for you using the link below."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL` (Jane App)

#### Contact Information
```
For general inquiries (not for booking):
Email: umair@resolvetherapy.ca
Phone: [To be provided]

We are a virtual-only practice serving all of Ontario.
```

#### Booking Section
**H3**: "Book Online"
"Schedule your free consultation through our secure Jane App booking platform."
- CTA: "Book a 30-minute consult" → Links to `BOOKING_URL`

#### Email Contact Section
**H3**: "Email Us"
"Send us a message with your questions or to request more information about our services."
- CTA: "Send Message" → Opens email with mailto link

#### Practice Information Section
**H2**: "Practice Information"

**Office Hours**
- Monday - Friday: 9:00 AM - 7:00 PM
- Saturday: 10:00 AM - 4:00 PM
- Sunday: Closed
- Note: "Evening and weekend appointments available"

**Service Area**
- Online sessions across Ontario
- CRPO Registered Psychotherapist (Qualifying)
- Secure, PHIPA-compliant video platform
- Professional liability insurance coverage

#### Crisis Support Section (Below the Fold)
**H2**: "If You Are in Crisis"

"This clinic is not an emergency service. If you are in immediate danger or need urgent support, please use one of these 24/7 resources:"

**Crisis Resources Grid**:
1. **Emergency**: 911 - For immediate danger
2. **Crisis Line**: 9-8-8 - Call or text 24/7
3. **ConnexOntario**: 1-866-531-2600 - Mental health & addiction support
4. **Talk Suicide Canada**: 1-833-456-4566 - 24/7 support

"For other mental health services, call ConnexOntario at 1-866-531-2600 or text CONNEX to 247247."

### PHIPA Compliance Language
- "Secure, PHIPA-compliant video platform"
- "Your privacy is protected under PHIPA (Personal Health Information Protection Act)"
- "All communications are confidential and secure"

---

## 🔧 Implementation Checklist

### FAQ Page
- [ ] Convert to server component for metadata export
- [ ] Maintain FAQPage JSON-LD at component top
- [ ] Update all Q&A content to match plan
- [ ] Add pricing information section before FAQ
- [ ] Add insurance checklist section
- [ ] Update CTAs to "Book a 30-minute consult"
- [ ] Ensure no "direct billing" mentions
- [ ] Add crisis support information

### Pricing Page
- [ ] Update session fee to $160
- [ ] Add sliding scale range $110-$160
- [ ] Update insurance wording: "receipts for reimbursement"
- [ ] Remove ALL "direct billing" language
- [ ] Add 24-hour cancellation policy
- [ ] Update payment methods (e-Transfer, credit cards)
- [ ] Update all CTAs to "Book a 30-minute consult"
- [ ] Add metadata export

### Contact Page
- [ ] Update hero to "Take the first step"
- [ ] Add PHIPA-compliant language throughout
- [ ] Ensure booking is above the fold
- [ ] Update crisis resources with 9-8-8 and ConnexOntario
- [ ] Add "virtual-only practice" statement
- [ ] Update office hours
- [ ] Link primary CTA to Jane App (`BOOKING_URL`)
- [ ] Add metadata export

---

## 📝 Compliance Requirements

### CRPO Compliance
- ✅ No testimonials or reviews
- ✅ No superlative claims
- ✅ No outcome guarantees
- ✅ Professional title: "Registered Psychotherapist (Qualifying)"
- ✅ Clear crisis support information

### PHIPA Compliance
- ✅ "PHIPA-compliant" platform mentions
- ✅ Privacy protection statements
- ✅ Secure communication emphasis
- ✅ Confidentiality assurances

### Insurance & Billing
- ✅ NO "direct billing" language anywhere
- ✅ Clear statement: "We do not offer direct billing"
- ✅ "Receipts provided for reimbursement"
- ✅ Insurance checklist questions provided

---

## 🎯 Key Messaging Points

### FAQ Page
- Simple, transparent pricing
- Clear insurance guidance
- No pressure consultation
- Crisis support readily available

### Pricing Page
- Investment in yourself framing
- Transparent, no hidden fees
- Sliding scale availability
- Receipt for reimbursement (not direct billing)

### Contact Page
- Easy first step
- Multiple contact options
- Virtual-only clarity
- PHIPA compliance emphasized

---

## 📊 Technical Requirements

### JSON-LD Validation
- FAQ page must include FAQPage schema
- All questions and answers properly structured
- URL must use `${SITE_URL}/faq`

### Metadata Implementation
All pages need metadata exports for server-side rendering:
```typescript
export const metadata = {
  title: "Page Title | Resolve Men's Therapy",
  description: "150-160 character description",
};
```

### CTA Consistency
All primary CTAs must:
- Use text: "Book a 30-minute consult"
- Link to `BOOKING_URL` constant
- Open Jane App in new tab with proper security attributes

---

## ✅ Acceptance Criteria

1. **JSON-LD validates** through Google's Structured Data Testing Tool
2. **CTAs functional** and linking to correct destinations
3. **Compliance language** correct throughout
4. **No testimonials** present on any page
5. **No "direct billing"** language anywhere
6. **PHIPA wording** included where appropriate
7. **Crisis information** prominent on Contact page
8. **Metadata exports** implemented on all pages
9. **Insurance checklist** questions included
10. **Fee consistency** ($160/session) across all pages