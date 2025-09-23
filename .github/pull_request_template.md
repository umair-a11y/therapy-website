# Pull Request: [Brief Description]

## 🏥 CRPO Compliance Verification (MANDATORY)

**⚠️ All content changes MUST pass CRPO compliance before merge**

### Content Changes Checklist
- [ ] **NO testimonials added** - Verified no client testimonials, reviews, or endorsements
- [ ] **NO superlative claims** - No "best", "top", "fastest", "#1", "most effective" language
- [ ] **NO outcome guarantees** - No promises of specific results or cure rates
- [ ] **NO comparative statements** - No claims of superiority over competitors
- [ ] **NO unprovable claims** - All new statements are factual and verifiable
- [ ] **NO misleading rankings** - No "5-star", "top-rated", or similar claims

### Required Elements (if applicable)
- [ ] **CRPO registration accurately stated** - If mentioned, shows "CRPO Registered Psychotherapist (Qualifying)"
- [ ] **Educational tone maintained** - Content informs rather than promotes
- [ ] **Appropriate disclaimers included** - Therapy limitations and emergency info where needed
- [ ] **Service descriptions within scope** - Only advertise services with verifiable training

### Automated Compliance Check
- [ ] **CRPO compliance script passed** - `npm run crpo-check` completed successfully
- [ ] **Review workflow followed** - Content Review Workflow gates completed if applicable

---

## 📝 Change Summary

### What changed?
<!-- Describe the changes made in this PR -->

### Why was this change needed?
<!-- Explain the business reason or problem this solves -->

### What pages/content are affected?
<!-- List specific files, pages, or content areas modified -->

---

## 🔍 Review Requirements

### Content Review (if content changes)
- [ ] **Self-review completed** - Creator completed Gate 1 of Content Review Workflow
- [ ] **Peer review completed** - Second team member completed Gate 2 review
- [ ] **Final approval ready** - Ready for Gate 3 senior review

### Technical Review
- [ ] **TypeScript compilation** - `npm run type-check` passes
- [ ] **Linting** - `npm run lint` passes with no errors
- [ ] **Build successful** - `npm run build` completes without errors
- [ ] **Manual testing** - Changes tested in browser/development environment

---

## 🧪 Testing

### Manual Testing Completed
- [ ] **Desktop testing** - Changes verified on desktop browsers
- [ ] **Mobile testing** - Changes verified on mobile devices
- [ ] **Accessibility** - Content accessible with screen readers/keyboard navigation
- [ ] **Cross-browser** - Tested in Chrome, Firefox, Safari, Edge

### Content Verification
- [ ] **Content displays correctly** - All new content renders properly
- [ ] **Links functional** - All links work and point to correct destinations
- [ ] **Forms working** - Any form changes function as expected
- [ ] **Images optimized** - Images load properly and are optimized

---

## 📊 Impact Assessment

### Performance Impact
- [ ] **No performance regression** - Page load times not negatively affected
- [ ] **Bundle size impact** - New dependencies justified and minimal
- [ ] **SEO impact considered** - Changes don't negatively affect SEO within CRPO constraints

### Business Impact
- [ ] **Conversion impact considered** - Changes support business goals ethically
- [ ] **User experience** - Changes improve or maintain user experience
- [ ] **Legal compliance** - Changes comply with PIPEDA and Ontario regulations

---

## 🔧 Deployment Notes

### Pre-deployment Requirements
- [ ] **All CI checks passing** - GitHub Actions workflows successful
- [ ] **Final CRPO compliance verified** - Senior team member approved content changes
- [ ] **Backup plan ready** - Rollback plan prepared if issues arise

### Post-deployment Monitoring
- [ ] **Content monitoring planned** - Will monitor for any compliance issues
- [ ] **Performance monitoring** - Will check for performance impacts
- [ ] **User feedback tracking** - Will track user interactions with changes

---

## 🚨 Risk Assessment

### CRPO Compliance Risk
- **Risk Level**: [Low/Medium/High]
- **Mitigation**: [How compliance risks are addressed]

### Technical Risk
- **Risk Level**: [Low/Medium/High]
- **Mitigation**: [How technical risks are addressed]

### Business Risk
- **Risk Level**: [Low/Medium/High]
- **Mitigation**: [How business risks are addressed]

---

## 📚 Documentation Updates

- [ ] **README updated** - If setup or usage changed
- [ ] **SYSTEMS_CHECKLIST updated** - If process changes
- [ ] **CONTENT_REVIEW_WORKFLOW updated** - If content review process changes
- [ ] **API documentation updated** - If API changes made

---

## 👥 Reviewers

**Required Reviewers:**
- [ ] **Content Review** - @[content-reviewer] (for content changes)
- [ ] **Technical Review** - @[technical-lead] (for code changes)
- [ ] **CRPO Compliance** - @[senior-reviewer] (for all content changes)

**Optional Reviewers:**
- [ ] **UX Review** - @[ux-reviewer] (for UI changes)
- [ ] **Security Review** - @[security-reviewer] (for security-related changes)

---

## 🔗 Related Issues

<!-- Link to related issues, tickets, or discussions -->
- Closes #[issue-number]
- Related to #[issue-number]

---

## 📸 Screenshots (if applicable)

<!-- Include before/after screenshots for UI changes -->

### Before
<!-- Screenshot of previous state -->

### After
<!-- Screenshot of new state -->

---

**By submitting this PR, I confirm that:**

1. ✅ I have reviewed all content changes against CRPO advertising guidelines
2. ✅ I have completed the appropriate Content Review Workflow gates
3. ✅ I have run the automated CRPO compliance check (`npm run crpo-check`)
4. ✅ I understand that CRPO violations could result in professional discipline
5. ✅ All code follows the project's TypeScript/React/Next.js standards
6. ✅ I have tested these changes thoroughly before submitting

---

**For reviewers: This PR cannot be merged until all CRPO compliance checks are verified and approved by a senior team member.**