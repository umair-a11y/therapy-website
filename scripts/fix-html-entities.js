#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with HTML entity issues
const filesToFix = [
  'src/app/anger-management/page.tsx',
  'src/app/anxiety-support/page.tsx',
  'src/app/article-choosing-therapist-ontario/page.tsx',
  'src/app/article-managing-work-stress/page.tsx',
  'src/app/article-recognizing-depression/page.tsx',
  'src/app/articles/page.tsx',
  'src/app/assessment/adhd/page.tsx',
  'src/app/assessment/habits/page.tsx',
  'src/app/assessment/stress/page.tsx',
  'src/app/book-consultation/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/depression-support/page.tsx',
  'src/app/disclaimer/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/for-partners/page.tsx',
  'src/app/individual-therapy/page.tsx',
  'src/app/ottawa/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/services/page.tsx',
  'src/app/stress-burnout/page.tsx',
  'src/app/team/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/toronto/page.tsx',
  'src/app/trauma-therapy/page.tsx'
];

let totalFixed = 0;

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;

  // Replace HTML entities with proper characters
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&amp;/g, "&");
  content = content.replace(/&lt;/g, "<");
  content = content.replace(/&gt;/g, ">");

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
    totalFixed++;
  } else {
    console.log(`⏭️  No changes needed: ${filePath}`);
  }
});

console.log(`\n🎉 Fixed ${totalFixed} files with HTML entity issues`);