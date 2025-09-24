Content Governance
==================

Purpose: Define how new pages, blog posts, and videos are proposed, approved, implemented, and maintained so documentation and site remain in sync.

Lifecycle Stages
----------------

1. Ideation – Create or update an issue with: user problem, hypothesis, target audience, success metric.
2. Scoping – Add acceptance criteria, required assets (copy, media), owner, due date.
3. Drafting – Copy written in docs/copy or directly in code with a PR referencing issue.
4. Review – Peer review (content + accessibility + brand) using checklist; track feedback in PR.
5. Approval – Merge gated on: linter pass, accessibility check, content sign-off.
6. Publication – Deploy; update INDEX.md if new section; announce if needed.
7. Maintenance – Quarterly audit: remove stale, archive superseded drafts.

Roles
-----

- Content Owner: Maintains accuracy.
- Brand Reviewer: Ensures tone / style.
- Technical Reviewer: Verifies implementation & performance.
- Accessibility Reviewer: Confirms WCAG alignment.

Checklists
----------

See processes plus checklists directory for deployment and systems items.

Versioning & Archiving
----------------------

- Material changes to copy: same PR updates docs/copy/*.
- Obsolete docs: move to archive/ with rationale entry (ARCHIVE_LOG.md).

Metadata for Blog/Video Entries
-------------------------------

Each content asset should declare: slug, title, description (160 chars), publish date, author, canonical URL, tags.

Automation Opportunities
------------------------

- Script to validate every slug has a corresponding copy file.
- Lint rule to reject orphaned copy.

Open Tasks
----------

- Define blog frontmatter format.
- Add script to sync code slugs and copy files.
