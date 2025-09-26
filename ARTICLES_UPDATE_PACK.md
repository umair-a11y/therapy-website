# Pack 4: Articles Index + Article Pages Update
## Based on Website Content and Implementation Plan v1.1a

---

## 📄 ARTICLES INDEX PAGE (`src/app/articles/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Articles & Resources | Resolve Men's Therapy",
  description: "Practical insights on men's mental health. Learn about anger management, anxiety, depression, and building better relationships through evidence-based strategies.",
};
```

### Hero Section
- **H1**: "Practical Tools for Real Challenges"
- **Subtitle**: "Evidence-based strategies and systems thinking for men navigating mental health. No fluff, just what works."

### Articles Array Update
```javascript
const articles = [
  {
    slug: "anger-not-the-problem",
    title: "Anger Isn't the Problem. Uncontrolled Reactions Are.",
    description: "Learn how poor sleep, work stress, and skipping meals create a 'low-resource state' where anger becomes your default response.",
    readTime: "6 min read",
    category: "Anger Management",
    publishDate: "2025-01-15"
  },
  {
    slug: "shut-down-worry-machine",
    title: "How to Shut Down the 2 a.m. Worry Machine",
    description: "Understand the cortisol-driven 'unsolved problem loop' and learn practical techniques to quiet your racing mind at night.",
    readTime: "7 min read",
    category: "Anxiety & Sleep",
    publishDate: "2025-01-10"
  },
  {
    slug: "why-we-measure-progress",
    title: "Why We Measure Your Progress (And Why It Works)",
    description: "Like a pilot needs instruments to fly, therapy needs data to guide treatment. Learn about measurement-based care.",
    readTime: "5 min read",
    category: "Our Approach",
    publishDate: "2025-01-05"
  },
  {
    slug: "managing-work-stress",
    title: "Navigating High-Pressure Careers: 5 Strategies for Managing Stress",
    description: "Practical, evidence-based strategies to manage workplace stress, prevent burnout, and reclaim work-life balance.",
    readTime: "8 min read",
    category: "Stress & Burnout",
    publishDate: "2024-12-20"
  },
  {
    slug: "recognizing-depression",
    title: "It's Not Just Anger: Recognizing Hidden Signs of Depression in Men",
    description: "Depression in men often shows as irritability, not sadness. Learn to recognize the subtle signs and steps to support.",
    readTime: "6 min read",
    category: "Depression",
    publishDate: "2024-12-15"
  },
  {
    slug: "choosing-therapist-ontario",
    title: "How to Choose a Therapist in Ontario: A Guide for Men",
    description: "Cut through the confusion. Understand your options, ask the right questions, and find a therapist who gets it.",
    readTime: "10 min read",
    category: "Getting Started",
    publishDate: "2024-12-10"
  }
];
```

### Coming Soon Section Update
```html
<h2>More Resources Coming Soon</h2>
<p>We're building a library of practical tools for men's mental health. Topics in development:</p>

• The ADHD Executive's Survival Guide
• Breaking the Burnout Cycle
• Relationship Repair After Conflict
• Understanding Your Anger Triggers
• Building Emotional Resilience
• Communication Scripts That Work
```

### CTA Section
- Primary: "Book a 30-minute consult" → Links to `BOOKING_URL`
- Secondary: "Take a Self-Assessment" → Links to `/self-check`

---

## 📄 ARTICLE: "Anger Isn't the Problem" (`src/app/article-anger-not-the-problem/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Anger Isn't the Problem. Uncontrolled Reactions Are. | Resolve",
  description: "Learn how poor sleep, work stress, and skipping meals create a 'low-resource state' where anger becomes your default response. Practical strategies included.",
};
```

### Article Structure

#### Header
- **H1**: "Anger Isn't the Problem. Uncontrolled Reactions Are."
- **Subtitle**: "Understanding the system that drives explosive anger—and how to change it."
- **Author**: "Resolve Men's Therapy Team"
- **Category**: "Anger Management"
- **Read Time**: "6 min read"

#### Story Section
**The Moment It All Goes Wrong**

"It's Tuesday evening. You've had back-to-back meetings, skipped lunch, and traffic was brutal. You walk in the door, and your kid's backpack is in the hallway—again.

Something snaps. You're yelling before you even realize it. The look on their face tells you you've gone too far. Again. The guilt hits immediately, but the damage is done.

Sound familiar? You're not alone, and you're not broken. Your system is overwhelmed."

#### Systems View Section
**H2**: "The Low-Resource State: Why You Explode"

"Think of your emotional regulation like a phone battery. Every stressor drains it:
- Poor sleep? -20%
- Skipped meals? -15%
- Work pressure? -30%
- Traffic? -10%

By evening, you're running on 5%. Any small trigger causes a system crash—explosive anger is your brain's emergency response when resources are depleted.

**The Feedback Loop:**
1. Stress accumulates → Resources deplete
2. Resources low → Hair-trigger responses
3. Explosive anger → Relationship damage
4. Guilt and shame → More stress
5. Repeat

This isn't a character flaw. It's a system problem that needs a system solution."

#### 3-Step Practice Section
**H2**: "Your 3-Step Anger Intervention Plan"

**Step 1: Identify Your Physical Warning Signs**
"Your body signals incoming anger 60-90 seconds before explosion:
- Jaw clenching
- Chest tightening
- Heat rising in face
- Hands forming fists

**Action**: This week, track your physical signs in a notes app. Just awareness changes the game."

**Step 2: Implement the Strategic Pause**
"When you feel the warning signs:
- Say: 'I need a minute'
- Leave the room
- Count 90 seconds (anger's peak duration)
- Ask yourself: 'What do I actually need right now?'

**Action**: Practice this even when not angry. Make it automatic."

**Step 3: Master One Repair Script**
"After cooling down, use this template:
'I was out of line. My reaction was about my stress, not about you. I'm working on handling things better. Can we talk about what happened?'

**Action**: Write your version. Keep it in your phone. Use it."

#### Internal Links Section
**Next Steps:**
- Struggling with anger regularly? → [Learn about our anger management approach](/anger-management)
- Want to track your patterns? → [Take the Anger Assessment](/self-check/anger)
- Ready for support? → [Book a free consultation](`BOOKING_URL`)

#### Related Articles
- [Managing Work Stress](/article-managing-work-stress)
- [Recognizing Depression in Men](/article-recognizing-depression)

---

## 📄 ARTICLE: "Shut Down the 2 a.m. Worry Machine" (`src/app/article-shut-down-worry-machine/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "How to Shut Down the 2 a.m. Worry Machine | Resolve",
  description: "Understand the cortisol-driven 'unsolved problem loop' that keeps you awake. Learn practical techniques to quiet your racing mind and get back to sleep.",
};
```

### Article Structure

#### Header
- **H1**: "How to Shut Down the 2 a.m. Worry Machine"
- **Subtitle**: "Why your brain won't stop at night—and what actually works to quiet it."
- **Category**: "Anxiety & Sleep"
- **Read Time**: "7 min read"

#### Story Section
**When Your Brain Won't Stop**

"It's 2:47 a.m. You've been awake for an hour, mind racing through tomorrow's presentation, last week's argument, next month's bills. You try to force sleep, but that makes it worse.

Your partner sleeps peacefully beside you. You feel alone with your spinning thoughts, angry at your brain for betraying you when you need rest most.

This isn't insomnia. It's your brain's misguided attempt to solve problems when it should be resting."

#### Systems View Section
**H2**: "The Unsolved Problem Loop"

"At night, your prefrontal cortex (logic center) is tired, but your amygdala (alarm system) stays active. This creates the perfect storm:

**The Cortisol Cascade:**
1. Worry triggers cortisol release
2. Cortisol increases alertness
3. Alertness prevents sleep
4. Lack of sleep impairs problem-solving
5. Unsolved problems create more worry

Your tired brain can identify problems but can't solve them effectively. It's like trying to do calculus after three beers—frustrating and futile.

**The 2 a.m. Truth**: Your brain literally cannot solve complex problems effectively when sleep-deprived. Any 'solution' you find at 2 a.m. will seem ridiculous at 8 a.m."

#### 3-Step Practice Section
**H2**: "Your 3-Step Sleep Recovery Protocol"

**Step 1: The Worry Write-Down**
"Keep a notebook by your bed. When worries hit:
- Write each worry as one sentence
- Add: 'I will address this at [specific time tomorrow]'
- Close the notebook

This tells your brain: message received, action scheduled, you can stop now.

**Action**: Put a notebook and pen by your bed tonight."

**Step 2: The 5-Minute Breathing Reset**
"If still awake after write-down:
- Breathe in for 4 counts
- Hold for 4 counts
- Out for 6 counts
- Hold empty for 2 counts
- Repeat for 5 minutes

This activates your parasympathetic nervous system, countering cortisol.

**Action**: Practice this during the day first. Make it familiar."

**Step 3: The Midnight Rule**
"No problem-solving after midnight. Period.
If your brain insists on working:
- Acknowledge: 'This feels urgent but isn't'
- Remind: 'Tired brains make bad decisions'
- Redirect: Return to breathing

**Action**: Write this rule somewhere visible."

#### Internal Links Section
**Need More Support?**
- Chronic anxiety keeping you awake? → [Explore anxiety treatment](/anxiety-support)
- Check your anxiety levels → [Take the Anxiety Assessment](/self-check/anxiety)
- Ready to break the cycle? → [Book a consultation](`BOOKING_URL`)

---

## 📄 ARTICLE: "Why We Measure Progress" (`src/app/article-why-we-measure-progress/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Why We Measure Your Progress (And Why It Works) | Resolve",
  description: "Like pilots need instruments to fly, therapy needs data to guide treatment. Learn how measurement-based care leads to better outcomes.",
};
```

### Article Structure

#### Header
- **H1**: "Why We Measure Your Progress (And Why It Works)"
- **Subtitle**: "Data-driven therapy isn't cold—it's the most caring approach we can offer."
- **Category**: "Our Approach"
- **Read Time**: "5 min read"

#### Story Section
**Flying Blind vs. Flying Smart**

"Imagine two pilots flying through clouds. One relies on feeling: 'I think we're level, feels like we're heading north.' The other checks instruments: 'Altitude 30,000, heading 015, on course.'

Which pilot would you trust with your life?

Yet most therapy operates like the first pilot—relying on feeling over data. 'How was your week?' becomes the only measure of progress. We think there's a better way."

#### Systems View Section
**H2**: "Measurement-Based Care: The Science"

"The American Psychological Association's research is clear: measurement-based care improves outcomes by up to 50%. Why?

**Data Reveals Truth:**
- Memory is unreliable (you forget the good days during bad weeks)
- Progress is often subtle (10% better doesn't feel different, but it matters)
- Patterns emerge over time (Tuesday anxiety spikes you never noticed)

**Our Measurement System:**
1. **Baseline**: Where you start (PHQ-9, GAD-7, custom assessments)
2. **Regular Checks**: Brief weekly or biweekly measures
3. **Pattern Recognition**: Identifying triggers and improvements
4. **Course Correction**: Adjusting treatment based on data

This isn't about reducing you to numbers. It's about ensuring your investment in therapy pays off."

#### Practice Section
**H2**: "Try It Yourself"

"Experience measurement-based care firsthand:

1. **Take a Baseline**: Try our [Mood Snapshot](/self-check/depression) or [Anxiety Check](/self-check/anxiety)
2. **Track for Two Weeks**: Retake the same assessment weekly
3. **Spot Patterns**: Notice what you learn about yourself

Most men are surprised by what data reveals—both the hidden struggles and the overlooked progress.

**The 4-6 Week Review**: In our practice, we formally review your data at weeks 4-6. No guessing if therapy is working—we'll know."

#### Internal Links Section
**Ready to Start Measuring?**
- Explore our [Self-Assessment Tools](/self-check)
- Learn about our [systematic approach](/about)
- Start your journey → [Book a consultation](`BOOKING_URL`)

---

## 🔧 Implementation Guidelines

### Global Content Rules
1. **Plain, direct tone** - Write like you're talking to a friend who needs help
2. **One H1 per page** - Clear hierarchy for SEO and accessibility
3. **Use BOOKING_URL** from config - Never hardcode booking links
4. **No hardcoded domains** - Always use SITE_URL constant
5. **No testimonials** - Stories are hypothetical/composite, not client testimonials

### Article Structure Template
All articles should follow the "Story → Systems View → Practice" structure:

```
1. STORY SECTION
   - Relatable scenario that hooks reader
   - Visceral, specific details
   - "Sound familiar?" moment

2. SYSTEMS VIEW
   - Explain the why behind the what
   - Break down the feedback loops
   - Normalize the struggle (system problem, not character flaw)

3. PRACTICE SECTION
   - 3 specific, actionable steps
   - Micro-practices they can start today
   - Clear "Action" items for each step

4. INTERNAL LINKS
   - Related service page
   - Relevant self-assessment
   - Booking CTA
   - Related articles
```

### JSON-LD Requirements

#### BlogPosting Schema (Each Article)
```javascript
<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "[Article Title]",
    author: { "@type": "Person", name: "Umair Gill" },
    publisher: { "@type": "Organization", name: "Resolve Men's Therapy" },
    mainEntityOfPage: `${SITE_URL}/article-[slug]`,
    datePublished: "[Publication Date]",
    dateModified: "[Last Modified Date]",
    image: `${SITE_URL}/api/og?title=${encodeURIComponent("[Title]")}`,
    url: `${SITE_URL}/article-[slug]`,
  }}
/>
```

#### BreadcrumbList Schema (Each Article)
```javascript
<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
      { "@type": "ListItem", position: 3, name: "[Article Title]", item: `${SITE_URL}/article-[slug]` },
    ],
  }}
/>
```

### Internal Linking Strategy
Each article must include:
1. **Service Link**: Connect to relevant therapy service page
2. **Assessment Link**: Point to appropriate self-check tool
3. **Booking CTA**: Use BOOKING_URL for consultation
4. **Related Articles**: 2-3 related article links
5. **Back to Articles**: Navigation to index page

### Voice & Tone Guidelines
- **Empathetic but not soft** - "This is hard. Here's what works."
- **Practical over theoretical** - Focus on what to DO
- **Systems thinking** - Problems as patterns, not personality
- **Male-friendly language** - Direct, solution-focused
- **No toxic positivity** - Acknowledge the struggle honestly

---

## 📊 Technical Specifications

### File Naming Convention
Articles should follow the pattern:
- `src/app/article-[slug]/page.tsx`
- Slug should be kebab-case
- Match slug to articles array in index

### Image Handling
```javascript
import { THERAPY_IMAGES, getUnsplashImage } from "@/lib/therapy-images";

// Featured image for article
<Image
  src={getUnsplashImage(THERAPY_IMAGES.articles.[imageKey], { w: 800, h: 400 })}
  alt="[Descriptive alt text]"
  fill
  className="object-cover"
  priority
/>
```

### Category Badges
Categories should align with services:
- Anger Management
- Anxiety & Sleep
- Depression
- Stress & Burnout
- Relationships
- ADHD & Focus
- Our Approach
- Getting Started

---

## ✅ Acceptance Criteria

1. **Plan voice implemented** - Story → Systems → Practice structure
2. **Internal links present** - Services and self-checks linked appropriately
3. **BlogPosting JSON-LD** maintained on all articles
4. **BreadcrumbList JSON-LD** present for navigation
5. **Metadata optimized** per article with unique titles/descriptions
6. **BOOKING_URL used** consistently from config
7. **No hardcoded domains** - SITE_URL constant used
8. **No testimonials** - All stories are composite/hypothetical
9. **Plain, direct tone** throughout
10. **One H1 per page** for proper structure

---

## 🚀 Future Articles Pipeline

Based on service offerings and user needs:

1. **The ADHD Executive's Survival Guide** - Systems for focus when your brain resists
2. **Breaking the Burnout Cycle** - Recognizing and escaping chronic overwhelm
3. **Relationship Repair After Conflict** - Scripts and strategies that work
4. **Understanding Your Anger Triggers** - Mapping your personal activation points
5. **Building Emotional Resilience** - Practical tools for handling life's pressures
6. **Communication Scripts That Work** - What to say in difficult moments
7. **The Perfectionism Trap** - Why good enough is better than perfect
8. **Dealing with Work Anxiety** - Managing performance pressure
9. **Men and Depression: The Hidden Signs** - What it really looks like
10. **Setting Boundaries Without Guilt** - A practical guide for people-pleasers