#!/usr/bin/env node

/**
 * CRPO Compliance Checker
 * Automated script to scan content for CRPO violations
 * Usage: node scripts/crpo-compliance-check.js [file-pattern]
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// CRPO Prohibited Terms and Patterns
const PROHIBITED_TERMS = {
  testimonials: [
    'testimonial',
    'review from',
    'client says',
    'patient review',
    'success story',
    'client testimonial'
  ],
  superlatives: [
    'best therapist',
    'top therapist',
    'fastest',
    'most effective',
    '#1',
    'leading therapist',
    'premier',
    'superior',
    'unmatched',
    'world-class',
    'cutting-edge therapy'
  ],
  outcomes: [
    'guaranteed results',
    '\\bcure\\b',
    '100% success',
    'guaranteed improvement',
    'promise to heal',
    'quick fix',
    'permanent solution',
    'guaranteed cure',
    'will cure',
    'can cure'
  ],
  rankings: [
    '5 star',
    'five star',
    'top rated',
    'highest rated',
    'top 3',
    'best in',
    'rated #1'
  ],
  comparative: [
    'better than',
    'superior to',
    'more effective than',
    'faster than',
    'cheaper than'
  ]
};

// Required Elements
const REQUIRED_ELEMENTS = [
  'CRPO',
  'Registered Psychotherapist',
  'Ontario',
  'disclaimer',
  'emergency'
];

class CRPOComplianceChecker {
  constructor() {
    this.violations = [];
    this.warnings = [];
    this.suggestions = [];
  }

  /**
   * Scan file content for CRPO violations
   * @param {string} content - File content to scan
   * @param {string} filePath - Path to the file being scanned
   */
  scanContent(content, filePath) {
    const lines = content.split('\n');

    lines.forEach((line, lineNumber) => {
      const lowerLine = line.toLowerCase();

      // Check for prohibited terms
      Object.entries(PROHIBITED_TERMS).forEach(([category, terms]) => {
        terms.forEach(term => {
          if (lowerLine.includes(term.toLowerCase())) {
            this.violations.push({
              type: 'PROHIBITED_CONTENT',
              category: category,
              term: term,
              file: filePath,
              line: lineNumber + 1,
              content: line.trim(),
              severity: 'ERROR',
              message: `Prohibited ${category} term detected: "${term}"`
            });
          }
        });
      });

      // Check for potential testimonial patterns
      if (this.isPotentialTestimonial(lowerLine)) {
        this.warnings.push({
          type: 'POTENTIAL_TESTIMONIAL',
          file: filePath,
          line: lineNumber + 1,
          content: line.trim(),
          severity: 'WARNING',
          message: 'Potential testimonial pattern detected - please review'
        });
      }

      // Check for outcome claims
      if (this.isPotentialOutcomeClaim(lowerLine)) {
        this.warnings.push({
          type: 'POTENTIAL_OUTCOME_CLAIM',
          file: filePath,
          line: lineNumber + 1,
          content: line.trim(),
          severity: 'WARNING',
          message: 'Potential outcome claim detected - ensure no guarantees are implied'
        });
      }
    });

    // Check for required elements (only for main content pages)
    if (this.isMainContentFile(filePath)) {
      this.checkRequiredElements(content, filePath);
    }
  }

  /**
   * Check if line contains potential testimonial patterns
   * @param {string} line - Line to check
   * @returns {boolean}
   */
  isPotentialTestimonial(line) {
    const testimonialPatterns = [
      /.*said.*helped.*/,
      /.*felt.*better.*/,
      /.*changed.*life.*/,
      /.*recommend.*/,
      /.*amazing.*experience.*/,
      /.*wonderful.*therapist.*/
    ];

    return testimonialPatterns.some(pattern => pattern.test(line));
  }

  /**
   * Check if line contains potential outcome claims
   * @param {string} line - Line to check
   * @returns {boolean}
   */
  isPotentialOutcomeClaim(line) {
    const outcomePatterns = [
      /will.*improve/,
      /will.*feel.*better/,
      /will.*overcome/,
      /will.*solve/,
      /guaranteed.*to/,
      /promise.*to/
    ];

    return outcomePatterns.some(pattern => pattern.test(line));
  }

  /**
   * Check if file is a main content file that needs required elements
   * @param {string} filePath - File path to check
   * @returns {boolean}
   */
  isMainContentFile(filePath) {
    const contentFiles = [
      'page.tsx',
      'about',
      'services',
      'contact',
      'therapy',
      'assessment'
    ];

    return contentFiles.some(file => filePath.includes(file));
  }

  /**
   * Check for required CRPO elements
   * @param {string} content - File content
   * @param {string} filePath - File path
   */
  checkRequiredElements(content, filePath) {
    const lowerContent = content.toLowerCase();

    // Check for CRPO registration mention
    if (!lowerContent.includes('crpo')) {
      this.suggestions.push({
        type: 'MISSING_CRPO_MENTION',
        file: filePath,
        severity: 'INFO',
        message: 'Consider mentioning CRPO registration status for transparency'
      });
    }

    // Check for emergency disclaimer
    if (!lowerContent.includes('emergency') && !lowerContent.includes('crisis')) {
      this.suggestions.push({
        type: 'MISSING_EMERGENCY_INFO',
        file: filePath,
        severity: 'INFO',
        message: 'Consider adding emergency/crisis information and disclaimers'
      });
    }
  }

  /**
   * Scan multiple files matching a pattern
   * @param {string} pattern - Glob pattern for files to scan
   */
  scanFiles(pattern = 'src/**/*.{tsx,ts,jsx,js,md}') {
    const files = glob.sync(pattern, {
      ignore: ['node_modules/**', 'dist/**', 'build/**', '.next/**']
    });

    console.log(`🔍 Scanning ${files.length} files for CRPO compliance...`);

    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        this.scanContent(content, file);
      } catch (error) {
        console.error(`Error reading file ${file}:`, error.message);
      }
    });
  }

  /**
   * Generate compliance report
   * @returns {object} Report summary
   */
  generateReport() {
    const report = {
      summary: {
        violations: this.violations.length,
        warnings: this.warnings.length,
        suggestions: this.suggestions.length,
        status: this.violations.length === 0 ? 'PASS' : 'FAIL'
      },
      violations: this.violations,
      warnings: this.warnings,
      suggestions: this.suggestions
    };

    return report;
  }

  /**
   * Print formatted report to console
   */
  printReport() {
    const report = this.generateReport();

    console.log('\n' + '='.repeat(60));
    console.log('🏥 CRPO COMPLIANCE REPORT');
    console.log('='.repeat(60));

    // Summary
    console.log(`\\nSTATUS: ${report.summary.status === 'PASS' ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Violations: ${report.summary.violations}`);
    console.log(`Warnings: ${report.summary.warnings}`);
    console.log(`Suggestions: ${report.summary.suggestions}`);

    // Violations (Critical)
    if (report.violations.length > 0) {
      console.log('\\n🚨 CRITICAL VIOLATIONS (Must Fix):');
      console.log('-'.repeat(40));
      report.violations.forEach(violation => {
        console.log(`❌ ${violation.file}:${violation.line}`);
        console.log(`   Category: ${violation.category.toUpperCase()}`);
        console.log(`   Term: "${violation.term}"`);
        console.log(`   Content: "${violation.content}"`);
        console.log(`   Message: ${violation.message}\\n`);
      });
    }

    // Warnings
    if (report.warnings.length > 0) {
      console.log('\\n⚠️  WARNINGS (Review Required):');
      console.log('-'.repeat(40));
      report.warnings.forEach(warning => {
        console.log(`⚠️  ${warning.file}:${warning.line}`);
        console.log(`   Content: "${warning.content}"`);
        console.log(`   Message: ${warning.message}\\n`);
      });
    }

    // Suggestions
    if (report.suggestions.length > 0) {
      console.log('\\n💡 SUGGESTIONS (Consider):');
      console.log('-'.repeat(40));
      report.suggestions.forEach(suggestion => {
        console.log(`💡 ${suggestion.file}`);
        console.log(`   Message: ${suggestion.message}\\n`);
      });
    }

    if (report.summary.status === 'PASS') {
      console.log('\\n✅ All CRPO compliance checks passed!');
    } else {
      console.log('\\n❌ CRPO compliance violations detected. Please fix before proceeding.');
      console.log('\\nFor CRPO guidelines, see: https://crpo.ca/practice-standards/business-practices/advertising/');
    }

    console.log('\\n' + '='.repeat(60));

    return report.summary.status === 'PASS' ? 0 : 1;
  }
}

// CLI Usage
if (require.main === module) {
  const pattern = process.argv[2] || 'src/**/*.{tsx,ts,jsx,js,md}';
  const checker = new CRPOComplianceChecker();

  console.log('🏥 CRPO Compliance Checker');
  console.log('Scanning for prohibited content, testimonials, and outcome claims...\\n');

  checker.scanFiles(pattern);
  const exitCode = checker.printReport();

  process.exit(exitCode);
}

module.exports = CRPOComplianceChecker;