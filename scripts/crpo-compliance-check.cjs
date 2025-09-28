#!/usr/bin/env node

/**
 * CRPO Compliance Checker - Simplified Version
 * Automated script to scan content for testimonials (CRPO violation)
 * Usage: node scripts/crpo-compliance-check.cjs [file-pattern]
 *
 * POLICY: Only checks for testimonials - simplified from full compliance suite
 * as per updated requirements. Other checks (emergency info, privacy policy, etc.)
 * removed to focus on core prohibition.
 *
 * TODO: Can be re-expanded if policy changes to include:
 * - Required elements (emergency, crisis, privacy policy)
 * - Superlative claims checking
 * - Outcome guarantee detection
 * - Ranking/comparative statement validation
 */

const fs = require('fs');
const glob = require('glob');

// CRPO Prohibited: Testimonials Only
const TESTIMONIAL_PATTERNS = {
  explicit: [
    'testimonial',
    'review from',
    'client says',
    'patient review',
    'success story',
    'client testimonial',
    'patient testimonial',
    'client feedback',
    'patient feedback'
  ],
  implicit: [
    /.*said.*helped.*/i,
    /.*felt.*better.*after.*/i,
    /.*changed.*life.*/i,
    /.*recommend.*therapist.*/i,
    /.*amazing.*experience.*therapy.*/i,
    /.*wonderful.*therapist.*/i,
    /.*transformed.*life.*/i,
    /.*best.*therapist.*ever.*/i
  ]
};

class CRPOComplianceChecker {
  constructor() {
    this.violations = [];
    this.warnings = [];
  }

  /**
   * Scan file content for testimonial violations
   * @param {string} content - File content to scan
   * @param {string} filePath - Path to the file being scanned
   */
  scanContent(content, filePath) {
    const lines = content.split('\n');

    lines.forEach((line, lineNumber) => {
      const lowerLine = line.toLowerCase();

      // Check for explicit testimonial terms
      TESTIMONIAL_PATTERNS.explicit.forEach(term => {
        if (lowerLine.includes(term.toLowerCase())) {
          this.violations.push({
            type: 'TESTIMONIAL_VIOLATION',
            category: 'explicit_testimonial',
            term: term,
            file: filePath,
            line: lineNumber + 1,
            content: line.trim(),
            severity: 'ERROR',
            message: `Prohibited testimonial content detected: "${term}"`
          });
        }
      });

      // Check for implicit testimonial patterns
      TESTIMONIAL_PATTERNS.implicit.forEach(pattern => {
        if (pattern.test(line)) {
          this.warnings.push({
            type: 'POTENTIAL_TESTIMONIAL',
            file: filePath,
            line: lineNumber + 1,
            content: line.trim(),
            severity: 'WARNING',
            message: 'Potential testimonial pattern detected - please review for CRPO compliance'
          });
        }
      });
    });
  }

  /**
   * Scan multiple files matching a pattern
   * @param {string} pattern - Glob pattern for files to scan
   */
  scanFiles(pattern = 'src/**/*.{tsx,ts,jsx,js,md}') {
    const files = glob.sync(pattern, {
      ignore: ['node_modules/**', 'dist/**', 'build/**', '.next/**']
    });

    console.log(`🔍 Scanning ${files.length} files for testimonial violations...`);

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
        status: this.violations.length === 0 ? 'PASS' : 'FAIL'
      },
      violations: this.violations,
      warnings: this.warnings
    };

    return report;
  }

  /**
   * Print formatted report to console
   */
  printReport() {
    const report = this.generateReport();

    console.log('\n' + '='.repeat(60));
    console.log('🏥 CRPO COMPLIANCE REPORT - TESTIMONIALS CHECK');
    console.log('='.repeat(60));

    // Summary
    console.log(`\\nSTATUS: ${report.summary.status === 'PASS' ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Testimonial Violations: ${report.summary.violations}`);
    console.log(`Potential Testimonials: ${report.summary.warnings}`);

    // Violations (Critical)
    if (report.violations.length > 0) {
      console.log('\\n🚨 CRITICAL VIOLATIONS (Must Fix):');
      console.log('-'.repeat(40));
      report.violations.forEach(violation => {
        console.log(`❌ ${violation.file}:${violation.line}`);
        console.log(`   Term: "${violation.term}"`);
        console.log(`   Content: "${violation.content}"`);
        console.log(`   Message: ${violation.message}\\n`);
      });
    }

    // Warnings
    if (report.warnings.length > 0) {
      console.log('\\n⚠️  POTENTIAL TESTIMONIALS (Review Required):');
      console.log('-'.repeat(40));
      report.warnings.forEach(warning => {
        console.log(`⚠️  ${warning.file}:${warning.line}`);
        console.log(`   Content: "${warning.content}"`);
        console.log(`   Message: ${warning.message}\\n`);
      });
    }

    if (report.summary.status === 'PASS') {
      console.log('\\n✅ No testimonial violations detected!');
      console.log('\\n📝 Note: This simplified checker only validates testimonial content.');
      console.log('   Other CRPO requirements (emergency info, disclaimers, etc.) not checked.');
    } else {
      console.log('\\n❌ Testimonial violations detected. Please remove before proceeding.');
      console.log('\\n📋 CRPO prohibits client testimonials and reviews in advertising.');
      console.log('   For full guidelines: https://crpo.ca/practice-standards/business-practices/advertising/');
    }

    console.log('\\n' + '='.repeat(60));

    return report.summary.status === 'PASS' ? 0 : 1;
  }
}

// CLI Usage
if (require.main === module) {
  const pattern = process.argv[2] || 'src/**/*.{tsx,ts,jsx,js,md}';
  const checker = new CRPOComplianceChecker();

  console.log('🏥 CRPO Compliance Checker - Testimonials Only');
  console.log('Scanning for prohibited testimonial content...\\n');

  checker.scanFiles(pattern);
  const exitCode = checker.printReport();

  process.exit(exitCode);
}

module.exports = CRPOComplianceChecker;