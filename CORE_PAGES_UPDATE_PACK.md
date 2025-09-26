# Core Pages Update Pack (Home/About/Services Hub)
## Based on Website Content and Implementation Plan v1.1a

---

## 📄 HOME PAGE (`src/app/page.tsx`)

### Metadata Export (Add to top of file after imports)
```typescript
export const metadata = {
  title: "Online Therapy for Men in Ontario | Resolve Men's Therapy",
  description: "Practical, system-based online therapy for men in Ontario dealing with anger, anxiety, burnout, and relationship strain. Navigate your path forward.",
};
```

### Key Content Updates

#### Hero Section
- **H1**: "Tired of feeling stuck?"
- **H2/Subtitle**: "Therapy that gives you a plan, not just a place to talk. We use a clear, system-based approach to help you navigate anger, anxiety, and burnout. Practical online therapy for men across Ontario."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL` (Jane App)
- **Secondary CTA**: "Take a free Self-Assessment" → Links to `/self-check`
- **Sub-text**: "Virtual sessions available province-wide."

#### "What's Different" Section (After Hero)
**H2**: "A different approach. Clear results."

**3 Columns**:
1. **Systems Thinking**
   - "We look at the whole picture—your work, your relationships, your habits—to find the small levers that create the biggest impact. No endless talking without a goal."

2. **See Your Progress**
   - "Regular Self-Assessments give us data, not just feelings. We measure what's working so you know you're making real, tangible progress."

3. **The 4–6 Week Review**
   - "We formally check in early on. We review your progress against your goals and adjust the plan to make sure your investment is paying off."

#### "What Brings Men Here" Section
**H2**: "If this sounds familiar, you're in the right place."

**5 Pain Points** (bullets):
- You're running on empty, and the smallest thing can set you off.
- Anxiety hits you in the middle of the night with a looping list of worries.
- You feel distant from your partner or kids, but don't know how to close the gap.
- You're successful at work but feel like you're failing everywhere else.
- The old way of just "handling it" isn't working anymore.

**CTA**: "See how we can help" → Links to `/services`

#### "How It Works" Section
**H2**: "Your Path Forward in 4 Steps"

1. **Book**: Schedule a free, 30-minute consultation to see if we're the right fit. No pressure, no obligation.
2. **Plan**: In our first session, we'll map out your goals and build a clear, practical plan to get you there.
3. **Work**: Engage in weekly sessions focused on building skills and making targeted changes. Use Self-Assessments to track your progress.
4. **Review**: At weeks 4–6, we'll review what's working and fine-tune our approach so you continue to move forward.

**CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`

### Internal Links Structure
- Hero secondary CTA → `/self-check`
- "See how we can help" → `/services`
- Specializations links → Individual service pages
- About section → `/about`
- Team section → `/about` (Meet the Founder)

---

## 📄 ABOUT PAGE (`src/app/about/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Our Approach | Resolve Men's Therapy",
  description: "We use systems thinking and measurement-based care. Learn how our practical, structured approach to men's therapy delivers clear results.",
};
```

### Key Content Updates

#### Hero Section
- **H1**: "Stop treating the symptoms. Start fixing the system."
- **H2/Description**: "We use systems thinking and measurement-based care. Learn how our practical, structured approach to men's therapy delivers clear results."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Our Services" → Links to `/services`

#### Main Content Section
**H2**: "An Engineer's Mindset for Therapy"

**Body Copy**:
"You've been white-knuckling it for a long time. Pushing through the burnout, managing the anger, containing the anxiety. But that constant effort is exhausting, and it's not solving the underlying problem.

At Resolve, we believe burnout, anger, and anxiety aren't just random feelings. They are symptoms of a system under too much strain. Your work demands, family life, sleep patterns, and internal pressures are all connected. Our job is to help you see the whole map.

We use an engineer's mindset to find the small levers that create the biggest shifts. Instead of just talking about the problem, we identify the feedback loops that keep you stuck and build practical strategies to break them."

#### Self-Assessment Section
**H3**: "How Self-Assessments Steer Your Care"

"We use simple, confidential check-ins to track your progress with real data. These on-device tools help us see what's improving—like sleep quality or focus—and where to adjust our plan. It ensures your therapy is always targeted, efficient, and moving in the right direction.

Therapy here is not a place to drift. It's a workshop to build a more resilient, intentional life."

#### Founder Profile Section
**H2**: "From Engineer to Therapist"

**Full narrative from plan**:
"For over a decade, I designed complex systems as an engineer. My job was to find the single point of failure that could bring everything crashing down. I learned to see the world in feedback loops, inputs, and outputs—a way of thinking that values clarity and tangible results.

But in my own life, and in the lives of the men around me, I saw a different kind of system failure. Good men—smart, capable, and driven—were burning out, shutting down, or blowing up. They were trying to solve problems of the heart with brute force, and it was breaking them.

I realized the tools I used to diagnose system failures in engineering were missing from the world of mental health. The desire for a clear plan, for measurable progress, and for practical, no-bullshit solutions wasn't being met.

So I went back to school and became a therapist.

I founded Resolve Men's Therapy to bridge that gap. This practice combines evidence-based therapeutic models like CBT, ACT, and IFS with the practical, systematic approach I honed as an engineer. We find the root cause, build a plan, and execute it.

My goal is to help you get unstuck. If you're ready for a practical, focused approach to therapy, let's talk."

**CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`

### Internal Links
- Services CTA → `/services`
- Self-assessment mentions → `/self-check`
- Booking CTAs → `BOOKING_URL` (external)

---

## 📄 SERVICES HUB PAGE (`src/app/services/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Our Services | Resolve Men's Therapy",
  description: "Practical, evidence-based therapy for men facing common but difficult challenges. Tailored to your goals with systems thinking and progress tracking.",
};
```

### Key Content Updates

#### Hero Section
- **H1**: "Tools for the path forward."
- **Description**: "We provide practical, evidence-based therapy for men facing common but difficult challenges. Each service is tailored to your specific goals, with our signature focus on systems, self-assessment, and clear progress reviews."

#### Services Grid Section
**H2**: "Services Tailored for Men"

**6 Service Cards** (with existing route links maintained):

1. **Anger Management** (`/anger-management`)
   - Description: "Move from reaction to response."

2. **Anxiety & Stress** (`/anxiety-support`)
   - Description: "Quiet the noise and regain control."

3. **Burnout & Overload** (`/stress-burnout`)
   - Description: "Rebuild your energy and set boundaries."

4. **ADHD & Focus** (`/adhd-support`)
   - Description: "Create systems that work with your brain."

5. **Relationships & Connection** (`/relationship-therapy`)
   - Description: "Repair distance and communicate better."

6. **Depression & Low Mood** (`/depression-support`)
   - Description: "Find the motivation to move forward again."

Each card includes: "Learn More" → Links to individual service page

#### Self-Assessment Callout Section
**H2**: "Find Your Starting Point"
**Description**: "Not sure where to begin? Take a free, confidential self-assessment to get a snapshot of your mental health in just 90 seconds."

**4 Assessment Cards**:
- Mood Snapshot → `/self-check/depression`
- Anxiety Check → `/self-check/anxiety`
- Focus & Habits → `/self-check/adhd`
- Stress Load & Recovery → `/self-check/stress`

#### How It Works Section
**H2**: "Your Path Forward in 4 Steps"

1. **Book**: "Schedule a free, 30-minute consultation to see if we're the right fit. No pressure, no obligation."
2. **Plan**: "In our first session, we'll map out your goals and build a clear, practical plan to get you there."
3. **Work**: "Engage in weekly sessions focused on building skills and making targeted changes. Use Self-Assessments to track progress."
4. **Review**: "At weeks 4–6, we'll review what's working and fine-tune our approach so you continue to move forward."

#### Insurance Section Updates
- Change "Most extended health insurance plans cover our services" to:
  "Therapy with a Registered Psychotherapist is covered by many extended health benefits plans"
- Change "Detailed receipts provided" to:
  "We provide receipts for reimbursement. We do not offer direct billing."

#### Final CTA Section
**H2**: "Ready to Get Started?"
**Description**: "Take the first step toward better mental health. Book your free consultation or start with an assessment."

**Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
**Secondary CTA**: "Take a free Self-Assessment" → Links to `/self-check`

### Internal Links Structure
- Individual service cards → Service detail pages
- Self-assessment cards → `/self-check/[assessment]`
- Main CTAs → `BOOKING_URL` (external)
- Secondary CTAs → `/self-check`

---

## 🔧 Implementation Checklist

### All Pages
- [ ] Update all "Book Free Consultation" to "Book a 30-minute consult"
- [ ] Ensure all booking CTAs use `BOOKING_URL` constant
- [ ] Verify CRPO compliance (no testimonials, superlatives, guarantees)
- [ ] Check readability (Grade 7-8 level)
- [ ] Update metadata exports

### Home Page Specific
- [ ] Implement 3-column "What's Different" section
- [ ] Add 5 pain points in "What Brings Men Here"
- [ ] Update "How It Works" to 4 steps
- [ ] Link secondary hero CTA to `/self-check`

### About Page Specific
- [ ] Replace mission with "Engineer's Mindset"
- [ ] Add full founder narrative
- [ ] Include Self-Assessment explanation
- [ ] Update all professional credentials

### Services Hub Specific
- [ ] Update to 6 service cards with plan descriptions
- [ ] Add self-assessment callout section
- [ ] Update insurance wording (no direct billing)
- [ ] Ensure service links match existing routes

---

## 📝 Key Messaging Guidelines

### Voice & Tone
- Plain, direct language
- Empathetic but practical
- Action-oriented
- Systems-focused

### Core Differentiators (Reinforce Throughout)
1. Systems thinking approach
2. Measurement-based care
3. 4-6 week progress review
4. Engineer's mindset to therapy

### Compliance Requirements
- ✅ No testimonials or reviews
- ✅ No superlative claims ("best", "top")
- ✅ No outcome guarantees
- ✅ Educational focus for assessments
- ✅ PHIPA-compliant language