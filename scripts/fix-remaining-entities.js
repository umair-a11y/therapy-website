#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with HTML entity issues
const filesToFix = [
  'src/app/page.tsx',
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'src/components/assessments/GAD7Assessment.tsx',
  'src/components/assessments/PHQ9Assessment.tsx',
  'src/components/StructuredData.tsx',
  'src/lib/security.ts'
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