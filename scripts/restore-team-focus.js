#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Files to update
const filesToUpdate = [
  'src/app/about/page.tsx',
  'src/app/article-choosing-therapist-ontario/page.tsx',
  'src/app/article-managing-work-stress/page.tsx',
  'src/app/article-recognizing-depression/page.tsx',
  'src/app/articles/page.tsx',
  'src/app/couples-therapy/page.tsx',
  'src/app/addiction-therapy/page.tsx',
  'src/app/accessibility/page.tsx',
  'src/app/adhd-support/page.tsx',
  'src/components/self-check-results.tsx',
];

// Replacements to restore team focus with founder context
const replacements = [
  // About page - restore team with founder context
  { from: /Umair is a CRPO registered psychotherapist who specializes/g, to: 'Our team of CRPO registered psychotherapists, led by founder Umair, specializes' },
  { from: /Umair is registered/g, to: 'Our therapists are registered' },
  { from: /Psychotherapists of Ontario \(CRPO\) as a qualifying member working/g, to: 'Psychotherapists of Ontario (CRPO) or are qualifying members working' },
  { from: /Meet Umair/g, to: 'Meet Our Team' },
  { from: /href="\/about"/g, to: 'href="/team"' },

  // Article bylines - keep as team with founder note
  { from: /Umair, Psychotherapist/g, to: 'Umair, Founder & Lead Therapist' },

  // Articles page
  { from: /Written by Umair for you/g, to: 'Written by our expert team for you' },
  { from: /Umair is here to help/g, to: 'our team is here to help' },

  // Therapy pages
  { from: /Umair understands/g, to: 'Our therapists understand' },
  { from: /Umair, a CRPO registered psychotherapist, is/g, to: 'Our CRPO registered therapists are' },

  // First person to team voice
  { from: /I often work as part of/g, to: 'we often work as part of' },
  { from: /I am available/g, to: 'our team is available' },
  { from: /As a psychotherapist, I don't/g, to: "As psychotherapists, we don't" },
  { from: /I can coordinate/g, to: 'we can coordinate' },

  // Self-check results - update to team
  { from: /Connect with Umair for support/g, to: 'Connect with our team for support' },

  // Therapist references - keep plurals
  { from: /Look for a therapist who/g, to: 'Look for therapists who' },
  { from: /Most therapists, including myself, offer/g, to: 'Most therapists offer' },
  { from: /Most therapists, including myself, understand/g, to: 'Most therapists understand' },
  { from: /interview a potential therapist/g, to: 'interview potential therapists' },
  { from: /Some therapists, including myself, offer/g, to: 'Some therapists offer' },
];

// Process files
let totalUpdates = 0;

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${file}`);
    totalUpdates++;
  } else {
    console.log(`⏭️  No changes needed: ${file}`);
  }
});

console.log(`\n✨ Completed! Updated ${totalUpdates} files to restore team focus with founder context.`);