#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Files to update
const filesToUpdate = [
  // Files with /assessment links
  'src/app/adhd-support/page.tsx',
  'src/app/anxiety-support/page.tsx',
  'src/app/article-managing-work-stress/page.tsx',
  'src/app/article-recognizing-depression/page.tsx',
  'src/app/depression-support/page.tsx',
  'src/app/individual-therapy/page.tsx',
  'src/app/page.backup.tsx',
  'src/app/page.tsx',
  'src/app/ottawa/page.tsx',
  'src/app/about/page.tsx',
  'src/app/article-choosing-therapist-ontario/page.tsx',
  'src/app/articles/page.tsx',
  'src/app/couples-therapy/page.tsx',

  // Assessment component files
  'src/app/assessment/anxiety/page.tsx',
  'src/app/assessment/depression/page.tsx',

  // Self-check pages
  'src/app/self-check/anxiety/page.tsx',
  'src/app/self-check/depression/page.tsx',
];

// Replacements to make
const replacements = [
  // Assessment to self-check links
  { from: /href="\/assessment\//g, to: 'href="/self-check/' },
  { from: /<Link href="\/assessment\//g, to: '<Link href="/self-check/' },

  // Assessment component imports
  { from: /@\/components\/assessments\/GAD7Assessment/g, to: '@/components/self-checks/GAD7SelfCheck' },
  { from: /@\/components\/assessments\/PHQ9Assessment/g, to: '@/components/self-checks/PHQ9SelfCheck' },
  { from: /GAD7Assessment/g, to: 'GAD7SelfCheck' },
  { from: /PHQ9Assessment/g, to: 'PHQ9SelfCheck' },

  // Multi-therapist to single therapist
  { from: /Our team of CRPO registered psychotherapists specializes/g, to: 'Umair is a CRPO registered psychotherapist who specializes' },
  { from: /All our therapists are registered/g, to: 'Umair is registered' },
  { from: /Psychotherapists of Ontario \(CRPO\) or are qualifying members working/g, to: 'Psychotherapists of Ontario (CRPO) as a qualifying member working' },
  { from: /Meet Our Team/g, to: 'Meet Umair' },
  { from: /href="\/team"/g, to: 'href="/about"' },
  { from: /Resolve Men's Therapy Team/g, to: 'Umair, Psychotherapist' },
  { from: /Written by our team for you/g, to: 'Written by Umair for you' },
  { from: /our team is here to help/g, to: 'Umair is here to help' },
  { from: /Our therapists understand/g, to: 'Umair understands' },
  { from: /Our CRPO registered therapists are/g, to: 'Umair, a CRPO registered psychotherapist, is' },
  { from: /we often work as part of/g, to: 'I often work as part of' },
  { from: /our team is available/g, to: 'I am available' },
  { from: /As psychotherapists, we don't/g, to: 'As a psychotherapist, I don\'t' },
  { from: /we can coordinate/g, to: 'I can coordinate' },

  // Plurals to singulars
  { from: /Look for therapists who/g, to: 'Look for a therapist who' },
  { from: /Most therapists offer/g, to: 'Most therapists, including myself, offer' },
  { from: /Most therapists understand/g, to: 'Most therapists, including myself, understand' },
  { from: /interview potential therapists/g, to: 'interview a potential therapist' },
  { from: /While most therapists are/g, to: 'While most therapists are' },
  { from: /Some therapists offer/g, to: 'Some therapists, including myself, offer' },
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

console.log(`\n✨ Completed! Updated ${totalUpdates} files.`);