# Service Pages Update Pack (8 Service Pages)
## Based on Website Content and Implementation Plan v1.1a

---

## 🎯 Objective
Standardize all 8 service pages to follow the plan's "Felt Sense → What We'll Do → Your Plan Includes" structure with consistent messaging and CTAs.

---

## 📄 ANGER MANAGEMENT (`src/app/anger-management/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Anger Management for Men in Ontario",
  description: "Move from reaction to response. Practical anger management therapy for men dealing with explosive outbursts, chronic irritability, and relationship strain.",
};
```

### Hero Section
- **H1**: "Move from reaction to response"
- **Subtitle**: "When anger controls you, it damages what matters most. Learn to channel intensity into strength, not destruction."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Take the Anger Assessment" → Links to `/self-check/anger`

### Felt Sense Section
**H2**: "When anger takes the wheel"

**Body**:
"You know the feeling. Heat rising. Jaw clenching. That moment when something small triggers something huge, and before you know it, you've said or done something you can't take back.

Maybe it's the kids leaving their stuff everywhere. A coworker's incompetence. Traffic that makes you pound the steering wheel. The anger feels justified in the moment, but the aftermath—the look on your partner's face, your kids going quiet, the tension at work—tells a different story.

You're not a bad person. You're running on empty, and anger has become your brain's default response to feeling overwhelmed."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **Map Your Triggers**
   - "We'll identify the specific situations, thoughts, and physical sensations that precede your anger. You'll learn to spot the warning signs before the explosion."

2. **Build Your Pause Button**
   - "I'll teach you practical techniques to create space between trigger and response. Simple tools that work in real-time, even when you're seeing red."

3. **Repair and Prevent**
   - "We'll develop scripts for making amends and strategies for addressing the underlying stress that feeds chronic anger."

### Your Plan Includes Section
**H2**: "Your anger management plan includes"

- **Initial Assessment**: Understanding your anger patterns and their impact
- **Weekly Sessions**: Building skills and processing triggers
- **The 90-Second Rule**: Practical technique for in-the-moment cooling
- **Communication Scripts**: What to say instead of exploding
- **4-6 Week Review**: Measuring progress and adjusting approach
- **Repair Strategies**: Rebuilding trust after outbursts

### Internal Links
- Secondary CTA → `/self-check/anger`
- Related: "Also struggling with stress?" → `/stress-burnout`
- Related: "Relationship strain?" → `/relationship-therapy`

---

## 📄 ANXIETY SUPPORT (`src/app/anxiety-support/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Anxiety Therapy for Men in Ontario",
  description: "Quiet the noise and regain control. Evidence-based anxiety treatment for men dealing with constant worry, panic, and overthinking.",
};
```

### Hero Section
- **H1**: "Quiet the noise, regain control"
- **Subtitle**: "When your mind won't stop racing and worry controls your days, it's time for a different approach."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Take the Anxiety Check" → Links to `/self-check/anxiety`

### Felt Sense Section
**H2**: "When your mind won't shut off"

**Body**:
"It's 3 a.m. and you're wide awake, mind racing through tomorrow's meeting, last week's mistake, and problems that might never happen. Your chest feels tight. Your shoulders are rocks.

During the day, you're constantly on edge. Checking and rechecking. Planning for disasters. Unable to relax even when everything's fine. The what-ifs won't stop coming.

You've tried to logic your way out of it, but anxiety doesn't respond to reason. It's exhausting, and it's stealing your peace."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **Understand Your Anxiety System**
   - "We'll map how anxiety works in your body and brain, turning a mysterious enemy into a predictable pattern you can work with."

2. **Practical Calming Tools**
   - "Learn evidence-based techniques that actually work when you're spiraling. No generic 'just breathe' advice—real strategies for real anxiety."

3. **Challenge Anxiety's Lies**
   - "We'll identify and test the catastrophic predictions anxiety makes, building evidence that you can handle more than anxiety says you can."

### Your Plan Includes Section
**H2**: "Your anxiety treatment plan includes"

- **Initial Assessment**: Identifying your specific anxiety patterns
- **Weekly Sessions**: Building coping skills systematically
- **Box Breathing Technique**: 4-4-4-4 pattern for immediate relief
- **Thought Testing Worksheets**: Challenge anxious predictions
- **4-6 Week Review**: Track improvement with GAD-7 scores
- **Sleep Hygiene Protocol**: Breaking the anxiety-insomnia cycle

### Internal Links
- Secondary CTA → `/self-check/anxiety`
- Related: "Anxiety affecting sleep?" → `/self-check/sleep`
- Related: "Stressed and anxious?" → `/stress-burnout`

---

## 📄 DEPRESSION SUPPORT (`src/app/depression-support/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Depression Therapy for Men in Ontario",
  description: "Find the motivation to move forward again. Specialized depression treatment for men feeling stuck, numb, or hopeless.",
};
```

### Hero Section
- **H1**: "Find your way back to yourself"
- **Subtitle**: "Depression tells you nothing will help. We'll prove it wrong, one small step at a time."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Take the Mood Snapshot" → Links to `/self-check/depression`

### Felt Sense Section
**H2**: "When everything feels heavy"

**Body**:
"You're going through the motions but feeling nothing. Or maybe you're feeling too much—irritable, exhausted, hopeless. The things that used to matter don't anymore.

Getting out of bed feels like climbing a mountain. Work feels pointless. You're withdrawing from friends, snapping at family, or just... numb. Maybe you're hiding it well, but inside you're struggling.

This isn't weakness or failure. Depression is a real condition that affects millions of men, and there's a way through it."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **Behavioral Activation**
   - "Start small with activities that can spark momentum. We'll find the tiny wins that begin to shift your energy."

2. **Challenge Depression's Voice**
   - "Depression lies about everything. We'll identify and test these thoughts, building evidence for a more balanced perspective."

3. **Rebuild Connection**
   - "Gradually reconnect with people, activities, and parts of yourself that depression has cut you off from."

### Your Plan Includes Section
**H2**: "Your depression treatment plan includes"

- **Initial Assessment**: PHQ-9 screening and full evaluation
- **Weekly Sessions**: Consistent support and skill-building
- **Activity Scheduling**: Small, achievable daily goals
- **Thought Records**: Track and challenge negative patterns
- **4-6 Week Review**: Measure improvement objectively
- **Safety Planning**: If needed, crisis support strategies

### Internal Links
- Secondary CTA → `/self-check/depression`
- Related: "Depression and anxiety?" → `/anxiety-support`
- Related: "Relationship impact?" → `/relationship-therapy`

---

## 📄 ADHD SUPPORT (`src/app/adhd-support/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "ADHD Support for Men in Ontario",
  description: "Create systems that work with your brain. Practical ADHD therapy for men struggling with focus, organization, and follow-through.",
};
```

### Hero Section
- **H1**: "Work with your brain, not against it"
- **Subtitle**: "ADHD isn't a character flaw. It's a different operating system that needs different strategies."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Take the Focus Check" → Links to `/self-check/adhd`

### Felt Sense Section
**H2**: "When your brain has too many tabs open"

**Body**:
"You start ten things and finish none. Important tasks sit undone while you hyperfocus on something random. You're either totally locked in or completely scattered, with no in-between.

People think you're careless or lazy, but you're actually exhausted from fighting your own brain all day. The shame of repeated failures weighs on you. Relationships suffer because you forget important things or zone out mid-conversation.

You've tried every app, every system, every productivity hack. What you need isn't another tool—it's strategies built for how your brain actually works."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **ADHD-Friendly Systems**
   - "Build organization systems that actually stick. External structure that compensates for internal chaos."

2. **Harness Hyperfocus**
   - "Learn to direct your intense focus toward what matters, while managing the scattered moments."

3. **Shame Resilience**
   - "Address the emotional toll of living with ADHD and build self-compassion for your struggles."

### Your Plan Includes Section
**H2**: "Your ADHD management plan includes"

- **Initial Assessment**: ASRS screening and functional evaluation
- **Weekly Sessions**: Building sustainable systems
- **Pomodoro Technique**: 25/5 minute focus sprints
- **External Brain System**: Tools for memory and organization
- **4-6 Week Review**: Assess what's working
- **Medication Discussion**: If interested, referral guidance

### Internal Links
- Secondary CTA → `/self-check/adhd`
- Related: "ADHD and anxiety?" → `/anxiety-support`
- Related: "Relationship challenges?" → `/relationship-therapy`

---

## 📄 TRAUMA THERAPY (`src/app/trauma-therapy/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Trauma Therapy for Men in Ontario",
  description: "Process the past without reliving it. Specialized trauma therapy for men ready to heal from difficult experiences.",
};
```

### Hero Section
- **H1**: "The past doesn't have to own your future"
- **Subtitle**: "Trauma keeps you stuck in survival mode. Together, we'll help your nervous system learn it's safe now."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Learn About Our Approach" → Links to `/about`

### Felt Sense Section
**H2**: "When the past won't stay in the past"

**Body**:
"Something happened—maybe recently, maybe years ago—and you can't seem to move past it. You might have flashbacks, nightmares, or just this constant feeling of being on guard.

Maybe you've never told anyone. Maybe you've tried to just 'man up' and push through. But trauma doesn't care how tough you are. It lives in your body, affecting your sleep, your relationships, your ability to feel safe.

You don't have to carry this alone anymore."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **Stabilization First**
   - "Before processing trauma, we'll build safety and coping skills. You'll learn to regulate your nervous system when triggered."

2. **Controlled Processing**
   - "Process traumatic memories without retraumatization. We go at your pace, with techniques that keep you grounded."

3. **Integration**
   - "Rebuild your sense of self and safety. Trauma doesn't have to define you."

### Your Plan Includes Section
**H2**: "Your trauma recovery plan includes"

- **Initial Assessment**: Understanding your trauma history safely
- **Paced Sessions**: We go at your comfort level
- **Grounding Techniques**: 5-4-3-2-1 sensory method
- **Window of Tolerance Work**: Expanding your comfort zone
- **4-6 Week Review**: Adjusting approach as needed
- **Safety Planning**: Crisis resources and coping strategies

### Internal Links
- Secondary CTA → `/about`
- Related: "Trauma affecting sleep?" → `/self-check/sleep`
- Related: "Trauma and relationships?" → `/relationship-therapy`

---

## 📄 ADDICTION THERAPY (`src/app/addiction-therapy/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Addiction Therapy for Men in Ontario",
  description: "Break free from the cycle. Compassionate addiction therapy for men ready to reclaim control over substances or behaviors.",
};
```

### Hero Section
- **H1**: "Ready to break the cycle?"
- **Subtitle**: "Addiction isn't about willpower. It's about understanding why you use and building better ways to cope."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Take the AUDIT-C Assessment" → Links to `/self-check/alcohol`

### Felt Sense Section
**H2**: "When the solution becomes the problem"

**Body**:
"It started as a way to unwind. To cope. To feel something—or nothing. Now it's controlling more than you want to admit. Maybe it's alcohol after work that's become every night. Gaming that's eating your life. Porn that's affecting intimacy.

You've tried cutting back. Made rules. Broken them. The shame and frustration build, but the cycle continues. You know something needs to change but don't know where to start.

Recovery isn't about perfection. It's about progress."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **Understand Your Triggers**
   - "Map the emotions, situations, and thoughts that drive use. Knowledge is power in breaking patterns."

2. **Build Coping Skills**
   - "Develop healthier ways to handle stress, boredom, and difficult emotions without substances or behaviors."

3. **Address Root Causes**
   - "Explore what you're really seeking—connection, escape, control—and find healthier ways to meet those needs."

### Your Plan Includes Section
**H2**: "Your recovery plan includes"

- **Initial Assessment**: Understanding your use patterns
- **Weekly Sessions**: Consistent support and accountability
- **Trigger Mapping**: Identify high-risk situations
- **Coping Toolbox**: Alternative strategies for difficult moments
- **4-6 Week Review**: Assess progress and adjust
- **Resource Connections**: Links to support groups if desired

### Internal Links
- Secondary CTA → `/self-check/alcohol`
- Related: "Depression and addiction?" → `/depression-support`
- Related: "Relationship impact?" → `/relationship-therapy`

---

## 📄 RELATIONSHIP THERAPY (`src/app/relationship-therapy/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Relationship Therapy for Men in Ontario",
  description: "Repair distance and communicate better. Individual therapy for men working on relationship challenges and communication.",
};
```

### Hero Section
- **H1**: "Bridge the distance you feel"
- **Subtitle**: "When connection feels impossible and conflict feels inevitable, there's still a path forward."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Assess Your Stress" → Links to `/self-check/stress`

### Felt Sense Section
**H2**: "When you're in the same house but worlds apart"

**Body**:
"You're living parallel lives. Conversations are logistics or arguments. Intimacy feels like ancient history. Maybe you've been told you're emotionally unavailable, or you shut down during conflict.

You want to connect but don't know how. Trying to talk makes things worse. You're walking on eggshells or checked out completely. The loneliness in your own relationship is crushing.

This isn't about blame. It's about learning new ways to connect."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **Understand Your Patterns**
   - "Identify how you learned to connect (or protect yourself) and how it's affecting your relationships now."

2. **Communication Upgrade**
   - "Learn to express needs without attacking, listen without defending, and stay present during conflict."

3. **Rebuild Connection**
   - "Small steps to restore intimacy, trust, and partnership. It's not about grand gestures—it's about consistency."

### Your Plan Includes Section
**H2**: "Your relationship improvement plan includes"

- **Initial Assessment**: Understanding relationship dynamics
- **Individual Sessions**: Focus on your growth and change
- **Communication Scripts**: What to say in difficult moments
- **Attachment Work**: Understanding your connection style
- **4-6 Week Review**: Measure relationship improvements
- **Partner Resources**: If appropriate, couples therapy referrals

### Internal Links
- Secondary CTA → `/self-check/stress`
- Related: "Anger affecting relationships?" → `/anger-management`
- Related: "Depression impacting connection?" → `/depression-support`

---

## 📄 STRESS & BURNOUT (`src/app/stress-burnout/page.tsx`)

### Metadata Export
```typescript
export const metadata = {
  title: "Stress & Burnout Therapy for Men Ontario",
  description: "Rebuild your energy and set boundaries. Specialized burnout recovery for overwhelmed men running on empty.",
};
```

### Hero Section
- **H1**: "Running on empty isn't sustainable"
- **Subtitle**: "When everything feels urgent and nothing feels manageable, burnout isn't far behind."
- **Primary CTA**: "Book a 30-minute consult" → Links to `BOOKING_URL`
- **Secondary CTA**: "Check Your Stress Load" → Links to `/self-check/stress`

### Felt Sense Section
**H2**: "When you have nothing left to give"

**Body**:
"You're exhausted but can't sleep. Overwhelmed but can't stop. Every email feels urgent. Every request feels like too much. You're snapping at people you love and checking out from things you used to enjoy.

Maybe you're the guy everyone depends on—at work, at home—and there's no room to be human. The weight of constant responsibility is crushing you, but slowing down feels impossible.

Your body is keeping score, and the bill is coming due."

### What We'll Do Section
**H2**: "What we'll do together"

**3 Core Approaches**:
1. **Energy Audit**
   - "Map where your energy goes and identify the leaks. Not everything that feels urgent actually is."

2. **Boundary Boot Camp**
   - "Learn to say no without guilt. Set limits that protect your energy while maintaining relationships."

3. **Recovery Routines**
   - "Build sustainable practices that refill your tank instead of just running on fumes."

### Your Plan Includes Section
**H2**: "Your burnout recovery plan includes"

- **Initial Assessment**: Evaluate stress sources and impact
- **Weekly Sessions**: Building sustainable changes
- **Energy Management Matrix**: Prioritize what truly matters
- **Boundary Scripts**: How to set limits professionally
- **4-6 Week Review**: Track energy and mood improvements
- **Micro-Recovery Practices**: 5-minute reset techniques

### Internal Links
- Secondary CTA → `/self-check/stress`
- Related: "Stress triggering anger?" → `/anger-management`
- Related: "Burnout and mood?" → `/depression-support`

---

## 🔧 Implementation Checklist

### All Service Pages
- [ ] Update hero sections with new H1 and subtitle
- [ ] Replace existing content with "Felt Sense" section
- [ ] Add "What we'll do together" with 3 approaches
- [ ] Add "Your Plan Includes" section with 6 items
- [ ] Update primary CTA to "Book a 30-minute consult"
- [ ] Add secondary CTA linking to relevant self-assessment
- [ ] Add related service internal links
- [ ] Ensure metadata exports are added
- [ ] Remove any testimonials or superlative claims
- [ ] Verify CRPO compliance throughout

### Page-Specific Updates
- [ ] Anger: Link to `/self-check/anger`
- [ ] Anxiety: Link to `/self-check/anxiety`
- [ ] Depression: Link to `/self-check/depression`
- [ ] ADHD: Link to `/self-check/adhd`
- [ ] Trauma: Link to `/about` (approach page)
- [ ] Addiction: Link to `/self-check/alcohol`
- [ ] Relationships: Link to `/self-check/stress`
- [ ] Stress: Link to `/self-check/stress`

---

## 📝 Content Guidelines

### Voice & Tone
- **Empathetic but direct** - Meet men where they are
- **Practical over theoretical** - Focus on what we'll actually do
- **Hope without guarantees** - Progress, not promises
- **Grade 7-8 readability** - Clear, accessible language

### Key Messaging Elements
1. **Felt Sense**: Visceral, relatable description of the struggle
2. **Systems Thinking**: Problems as patterns, not character flaws
3. **Practical Tools**: Specific techniques they'll learn
4. **Progress Tracking**: 4-6 week review standard
5. **No Shame**: Normalize seeking help

### CRPO Compliance Requirements
- ✅ No testimonials or client quotes
- ✅ No superlative claims (best, top, most effective)
- ✅ No outcome guarantees
- ✅ Educational focus
- ✅ Clear scope of practice

### Standardized Elements

**Primary CTA Format**:
```html
<Button onClick={handleBooking}>
  <Calendar className="mr-2 h-5 w-5" />
  Book a 30-minute consult
</Button>
```

**Secondary CTA Format**:
```html
<Link href="/self-check/[assessment]">
  <Button variant="outline">
    <CheckCircle className="mr-2 h-5 w-5" />
    Take the [Assessment Name]
  </Button>
</Link>
```

**4-6 Week Review Statement**:
"At weeks 4-6, we'll review your progress using objective measures and adjust our approach to ensure you're getting the support you need."

---

## 🎯 Success Criteria

1. **Structural Consistency**: All 8 pages follow the same format
2. **Messaging Alignment**: Content matches plan specifications
3. **CTA Functionality**: All buttons link correctly
4. **CRPO Compliance**: No violations present
5. **Internal Linking**: Related services connected
6. **Metadata Optimization**: SEO-friendly titles and descriptions
7. **No Direct Billing Language**: Insurance guidance only
8. **Self-Assessment Integration**: Each page links to relevant tool