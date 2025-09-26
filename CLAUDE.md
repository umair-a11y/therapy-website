# CLAUDE.md

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

## 🚨 CRITICAL SECURITY RULES - NEVER VIOLATE
- **NEVER expose API keys, secrets, or credentials in code or comments**
- **NEVER commit sensitive data like `.env` files, private keys, or passwords**  
- **NEVER disable security features without explicit approval**
- **ALWAYS validate and sanitize user inputs to prevent injection attacks**
- **ALWAYS use HTTPS for production endpoints and secure authentication**

## 🏗️ CORE ARCHITECTURE PRINCIPLES

### Development Philosophy
- **Code Quality**: Prioritize readability, maintainability, and performance
- **Testing**: Write tests first (TDD) - unit, integration, and e2e coverage
- **Documentation**: Code should be self-documenting with minimal but meaningful comments
- **Error Handling**: Comprehensive error handling with proper logging and user feedback
- **Performance**: Optimize for both developer experience and runtime efficiency

### Project Structure Standards
```
project-root/
├── src/                 # Source code
├── tests/              # Test files
├── docs/               # Documentation
├── scripts/            # Build/deploy scripts
├── .vscode/            # VSCode workspace settings
├── .env.example        # Environment template
└── README.md           # Project overview
```

## 🔧 TECHNOLOGY STACK OPTIMIZATION

### Frontend (React/Vue/Angular)
- Use TypeScript for type safety and better developer experience
- Implement proper state management (Redux/Zustand/Pinia)
- Follow component composition patterns over inheritance
- Use CSS modules, Tailwind, or styled-components for styling
- Implement proper error boundaries and loading states

### Backend (Node.js/Python/Go)
- Use proper MVC or clean architecture patterns
- Implement comprehensive API documentation (OpenAPI/Swagger)
- Use database migrations and proper ORM patterns
- Implement proper caching strategies (Redis/Memcached)
- Follow RESTful API design or GraphQL best practices

### Database Design
- Use proper indexing strategies for performance
- Implement proper foreign key constraints
- Use migrations for schema changes
- Implement backup and recovery strategies
- Follow normalization principles where appropriate

## 🛠️ DEVELOPMENT WORKFLOW

### Code Standards
- **Formatting**: Use Prettier with 2-space indentation, 80-character line limit
- **Linting**: ESLint for JavaScript/TypeScript, flake8 for Python, golangci-lint for Go
- **Commit Messages**: Follow conventional commits (feat:, fix:, docs:, etc.)
- **Branch Naming**: feature/description, bugfix/description, hotfix/description

### Testing Requirements
- Minimum 80% code coverage for new features
- Write unit tests for all utility functions and business logic
- Integration tests for API endpoints and database interactions
- E2E tests for critical user workflows
- Performance tests for high-traffic endpoints

### Code Review Process
- All code must be reviewed before merging to main
- Check for security vulnerabilities and performance issues
- Verify tests pass and coverage requirements are met
- Ensure documentation is updated for new features

## 📝 TASK EXECUTION PATTERNS

### Planning Phase
1. **Understand Requirements**: Ask clarifying questions about scope and constraints
2. **Architecture Design**: Propose solution architecture with pros/cons
3. **Break Down Tasks**: Create specific, actionable subtasks
4. **Identify Dependencies**: Note any external requirements or blockers

### Implementation Phase
1. **Start with Tests**: Write failing tests for new functionality
2. **Implement Incrementally**: Small, focused commits with clear messages
3. **Validate Continuously**: Run tests after each significant change
4. **Document as You Go**: Update README, comments, and API docs

### Review Phase
1. **Self-Review**: Check code against standards before requesting review
2. **Performance Check**: Verify no performance regressions
3. **Security Audit**: Review for common vulnerabilities
4. **Documentation Update**: Ensure all docs reflect current state

## 🚀 PERFORMANCE OPTIMIZATION

### Frontend Performance
- Implement code splitting and lazy loading
- Optimize bundle size with tree shaking
- Use proper caching strategies (service workers, CDN)
- Minimize re-renders with proper memoization
- Optimize images and assets

### Backend Performance
- Implement proper database query optimization
- Use connection pooling and prepared statements
- Implement proper caching at multiple layers
- Monitor and optimize API response times
- Use background jobs for heavy operations

### Monitoring and Observability
- Implement proper logging with structured formats
- Use application performance monitoring (APM)
- Set up health checks and status endpoints
- Monitor key business metrics and alerts
- Implement proper error tracking and reporting

## 🔍 LARGE CODEBASE ANALYSIS

### When Context Limits Are Exceeded
Use Gemini CLI for comprehensive codebase analysis with its massive context window:

```bash
# Full project analysis
gemini -p "@./ Analyze the overall architecture and suggest improvements"
gemini --all_files -p "Analyze the project structure and dependencies"

# Single file analysis
gemini -p "@src/main.py Explain this file's purpose and structure"

# Multiple files comparison
gemini -p "@package.json @src/index.js Analyze the dependencies used in the code"

# Entire directory analysis
gemini -p "@src/ Summarize the architecture of this codebase"

# Multiple directories
gemini -p "@src/ @tests/ Analyze test coverage for the source code"
```

### Implementation Verification Examples
Use Gemini CLI to verify if specific features, patterns, or security measures are implemented:

```bash
# Feature existence checking
gemini -p "@src/ @lib/ Has dark mode been implemented in this codebase? Show me the relevant files and functions"

# Authentication verification
gemini -p "@src/ @middleware/ Is JWT authentication implemented? List all auth-related endpoints and middleware"

# Security pattern validation
gemini -p "@src/ @api/ Are SQL injection protections implemented? Show how user inputs are sanitized"

# Error handling verification
gemini -p "@src/ @api/ Is proper error handling implemented for all API endpoints? Show examples of try-catch blocks"

# Caching strategy analysis
gemini -p "@src/ @lib/ @services/ Is Redis caching implemented? List all cache-related functions and their usage"

# Rate limiting check
gemini -p "@backend/ @middleware/ Is rate limiting implemented for the API? Show the implementation details"

# Test coverage verification
gemini -p "@src/payment/ @tests/ Is the payment processing module fully tested? List all test cases"

# Pattern detection
gemini -p "@src/ Are there any React hooks that handle WebSocket connections? List them with file paths"
```

### When to Use Gemini CLI
Use `gemini -p` when:
- Analyzing entire codebases or large directories
- Comparing multiple large files (100KB+ total)
- Need to understand project-wide patterns or architecture
- Current context window is insufficient for the task
- Verifying if specific features, patterns, or security measures are implemented
- Checking for the presence of certain coding patterns across the entire codebase
- Working with files that would overflow Claude's context window

### Gemini CLI Usage Patterns
- **Architecture Review**: `@src/ @lib/ @components/` for structural analysis
- **Security Audit**: `@api/ @middleware/ @auth/` for security verification
- **Performance Check**: `@services/ @utils/ @database/` for optimization opportunities
- **Documentation Gap**: `@docs/ @README.md @src/` for documentation completeness
- **Feature Verification**: `@src/ @lib/` for checking implementation status
- **Test Analysis**: `@src/ @tests/` for coverage and quality assessment

### Important Technical Notes
- **Path Relativity**: All `@` paths are relative to your current working directory when invoking gemini
- **Context Capacity**: Gemini's context window can handle entire codebases that would overflow Claude's context
- **Read-Only Analysis**: No need for `--yolo` flag for read-only analysis tasks
- **File Inclusion**: The CLI includes file contents directly in the context for analysis

## 🐛 DEBUGGING AND TROUBLESHOOTING

### Common Debug Strategies
1. **Reproduce the Issue**: Create minimal reproducible examples
2. **Check Logs**: Review application and error logs systematically
3. **Use Debugger**: Step through code execution with breakpoints
4. **Test Isolation**: Isolate components to identify root cause
5. **Documentation**: Update docs with solutions for future reference

### Error Handling Patterns
```javascript
// Frontend error boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
}

// Backend error middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  logger.error('Error:', { error: err, request: req });
  
  res.status(statusCode).json({
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};
```

## 🏥 THERAPY PRACTICE COMPLIANCE (CRPO/HEALTHCARE)

### 🚨 CRITICAL: CRPO Compliance Integration
**⚠️ For therapy practice websites - MANDATORY compliance checks for every content edit**

#### FORBIDDEN Content (Zero Tolerance):
- **NO testimonials** - Client testimonials/reviews are strictly prohibited
- **NO superlative claims** - "best", "fastest", "top-rated", "#1", "most effective"
- **NO outcome guarantees** - Cannot promise specific results or success rates
- **NO comparative statements** - Cannot claim superiority over competitors
- **NO unprovable claims** - All statements must be factual and verifiable
- **NO misleading rankings** - "5-star rating", "top 3 therapists", etc.

#### REQUIRED Elements:
- **Accurate qualifications only** - Only advertise services with verifiable training
- **CRPO registration status** - "CRPO Registered Psychotherapist (Qualifying)"
- **Educational content focus** - Informative, not promotional
- **Proper disclaimers** - Include therapy limitations and emergency procedures
- **Transparent advertising** - All paid content clearly labeled

#### Integration Workflow:
```bash
# Before ANY content edit - run compliance check
1. Review SYSTEMS_CHECKLIST.md CRPO section
2. Verify educational tone and factual accuracy
3. Confirm no prohibited elements present
4. Complete content review gates (self → peer → final)

# Reference: ./therapy-website/SYSTEMS_CHECKLIST.md
```

### Healthcare Privacy & Security
- **PIPEDA compliance** (Canada) - comprehensive privacy policy required
- **SSL/TLS encryption** - all data transmission secured
- **Electronic practice standards** - secure communication protocols
- **Confidential data protection** - proper handling of client information
- **Emergency procedures** - clear protocols for crisis situations

## 📚 DOCUMENTATION STANDARDS

### Code Documentation
- Use JSDoc for JavaScript/TypeScript functions
- Include parameter types, return types, and examples
- Document complex algorithms and business logic
- Keep comments up-to-date with code changes

### API Documentation
- Use OpenAPI/Swagger for REST APIs
- Include request/response examples
- Document authentication requirements
- Provide usage examples and error codes

### README Requirements
- Clear project description and setup instructions
- Prerequisites and installation steps
- Usage examples and common workflows
- Contributing guidelines and development setup
- License and contact information

## 🔧 VSCODE OPTIMIZATION

### Essential Extensions
- ESLint/Pylint for code quality
- Prettier for code formatting
- GitLens for Git integration
- Thunder Client for API testing
- Auto Rename Tag for HTML/JSX
- Bracket Pair Colorizer for readability
- Path Intellisense for file navigation

### Workspace Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.exclude": {
    "node_modules": true,
    ".git": true,
    "dist": true,
    "build": true
  }
}
```

## 🤖 AI ASSISTANCE GUIDELINES

### Effective Prompting
- Be specific about requirements and constraints
- Provide relevant context and existing code patterns
- Ask for explanations of complex solutions
- Request multiple approaches for comparison
- Verify AI suggestions against project standards

### Code Review with AI
- Use AI to identify potential bugs and improvements
- Ask for security vulnerability assessments
- Request performance optimization suggestions
- Get suggestions for test coverage improvements
- Validate architectural decisions

### Learning and Knowledge Transfer
- Ask AI to explain complex concepts and patterns
- Request documentation and comment generation
- Get help with debugging and troubleshooting
- Learn new technologies and best practices
- Understand legacy code and technical debt

## 📊 SUCCESS METRICS

### Development Velocity
- Time from feature request to deployment
- Number of bugs found in production
- Code review turnaround time
- Test coverage percentage
- Documentation completeness score

### Code Quality Metrics
- Cyclomatic complexity scores
- Code duplication percentage
- Technical debt ratio
- Performance benchmark scores
- Security vulnerability count

### Team Collaboration
- Knowledge sharing frequency
- Cross-team contribution rates
- Code review participation
- Documentation contribution
- Mentoring and learning activities

---

**Remember**: This configuration is designed to maximize development efficiency while maintaining high code quality and security standards. Regularly review and update these guidelines based on project needs and team feedback.

**For Large Codebases**: When context limits are reached, seamlessly transition to Gemini CLI using the patterns above to maintain comprehensive analysis capabilities.

## 🧠 SENIOR DEVELOPER WORKFLOW WITH GEMINI CLI

### Strategic Development Partnership
Establish Gemini CLI as your **planning brain**, **peer reviewer**, **memory bank**, and **research assistant** for professional-grade development workflow.

### Core Workflow Pattern: **Plan → Execute → Review → Iterate**

#### **Planning Brain Pattern**
Use Gemini for strategic analysis and implementation planning:

```bash
# Strategic Project Analysis
gemini -p "@./ @CLAUDE.md Act as my senior development planning assistant. Analyze current state, identify priorities, create detailed implementation roadmap"

# Feature Planning
gemini -p "@src/components/ @src/app/ Plan implementation for [specific feature]. Include: architecture decisions, file changes needed, potential issues, testing strategy"

# Architecture Review
gemini -p "@src/ @package.json Review overall architecture. Suggest improvements, identify technical debt, recommend modern patterns"

# Problem Solving
gemini -p "@src/problematic-area/ Analyze this issue: [description]. Provide multiple solution approaches with pros/cons"
```

#### **Peer Reviewer Pattern**
Gemini reviews your work for quality, security, performance:

```bash
# Pre-Implementation Review
gemini -p "@src/target-files/ I'm about to modify these files for [purpose]. Review current state and flag potential issues"

# Post-Implementation Review
gemini -p "@src/modified-files/ Review my recent changes. Check for: code quality, security vulnerabilities, performance issues, best practices adherence"

# CRPO Compliance Review (Therapy Projects)
gemini -p "@src/content-files/ Review all content changes for CRPO compliance. Flag any prohibited claims, missing disclaimers, or regulatory issues"

# Component Design Review
gemini -p "@src/components/new-component.tsx Review this component design. Suggest improvements for reusability, accessibility, type safety"
```

#### **Memory Bank Pattern**
Gemini maintains project context across sessions:

```bash
# Session State Capture
gemini -p "@./ Document current project state: recent changes, pending tasks, architectural decisions, known issues"

# Decision Documentation
gemini -p "@src/ @docs/ Document why we chose [specific approach] over alternatives. Include context for future decisions"

# Progress Tracking
gemini -p "@./ Create status report: completed features, current blockers, next priorities, timeline assessment"

# Knowledge Transfer
gemini -p "@./ Create comprehensive project knowledge base for new team members or future sessions"
```

#### **Research Assistant Pattern**
Gemini investigates best practices and solutions:

```bash
# Technology Research
gemini -p "@package.json Research latest best practices for [technology/pattern] relevant to this codebase"

# Security Research
gemini -p "@src/api/ @src/auth/ Research security best practices for this application type. Identify potential vulnerabilities"

# Performance Research
gemini -p "@src/ Research performance optimization techniques for this tech stack. Prioritize by impact vs effort"

# Compliance Research
gemini -p "@src/ Research regulatory compliance requirements for [healthcare/therapy/finance] applications"
```

### **Chunk-Based Execution Strategy**

#### **Optimal Chunk Size**
- Maximum 3-5 file changes per development chunk
- Single feature/fix per chunk to maintain focus
- Allow Gemini peer review before moving to next chunk

#### **Chunk Workflow**
1. **Gemini Strategic Plan**: Create detailed implementation roadmap
2. **Chunk Definition**: Break plan into small, executable pieces
3. **Chunk Execution**: Implement focused changes (3-5 files max)
4. **Gemini Review**: Validate quality, security, compliance
5. **Iterate**: Move to next chunk or refine current approach

```bash
# Example Chunk Workflow
# Step 1: Planning
gemini -p "@src/components/ Plan refactoring of navigation components. Break into executable chunks"

# Step 2: Pre-Chunk Review
gemini -p "@src/components/Header.tsx I'm about to refactor this component. Review and flag issues"

# Step 3: Execute chunk (modify 2-3 related files)

# Step 4: Post-Chunk Review
gemini -p "@src/components/Header.tsx @src/components/Navigation.tsx Review my changes. Verify improvements and catch issues"

# Step 5: Progress Documentation
gemini -p "@./ Document progress on navigation refactoring. Next steps and remaining chunks"
```

### **Quality Gates with Gemini**

#### **Mandatory Review Gates**
All significant changes must pass Gemini review:

```bash
# Code Quality Gate
gemini -p "@modified-files/ Review for: code quality, maintainability, performance, security"

# CRPO Compliance Gate (Healthcare)
gemini -p "@content-files/ Verify CRPO compliance: no prohibited claims, proper disclaimers, accurate credentials"

# Architecture Gate
gemini -p "@src/ Verify changes align with established architecture patterns and don't introduce technical debt"

# Testing Gate
gemini -p "@src/ @tests/ Analyze test coverage for recent changes. Suggest additional test cases"
```

#### **Context Management Strategy**

```bash
# Session Handoff
gemini -p "@./ Create comprehensive handoff: current state, recent decisions, next priorities, context for continuation"

# Decision Rationale
gemini -p "@relevant-files/ Document why we chose [approach]. Include alternatives considered and trade-offs"

# Project Memory
gemini -p "@./ Maintain living documentation of: architectural decisions, coding patterns, business requirements, technical constraints"
```

### **Advanced Gemini Integration Patterns**

#### **Multi-Phase Project Management**
```bash
# Phase Planning
gemini -p "@./ Plan multi-phase development: Phase 1 (critical fixes), Phase 2 (features), Phase 3 (optimization)"

# Cross-Phase Dependencies
gemini -p "@./ Identify dependencies between phases. Flag potential blockers and sequencing requirements"

# Phase Validation
gemini -p "@./ Validate Phase 1 completion. Verify readiness for Phase 2"
```

#### **Continuous Improvement Loop**
```bash
# Regular Architecture Review
gemini -p "@src/ Monthly architecture review: identify technical debt, suggest modernization, plan improvements"

# Pattern Evolution
gemini -p "@src/ @patterns/ Analyze established patterns. Suggest evolution for better maintainability"

# Team Knowledge Sync
gemini -p "@./ Create knowledge sharing artifacts: decision logs, pattern library, best practices guide"
```

### **Emergency Response Pattern**
```bash
# Rapid Issue Analysis
gemini -p "@logs/ @src/affected-area/ Emergency analysis: identify root cause, assess impact, suggest immediate fixes"

# Hotfix Planning
gemini -p "@src/ Plan minimal-risk hotfix: smallest possible change, rollback strategy, testing approach"

# Post-Incident Review
gemini -p "@./ Post-incident analysis: root cause, prevention strategies, process improvements"
```

### **Success Metrics for Gemini Workflow**
- **Quality**: Reduced bugs through peer review gates
- **Velocity**: Faster development through strategic planning
- **Consistency**: Uniform code quality across team/sessions
- **Knowledge**: Better documentation and decision rationale
- **Compliance**: Zero regulatory violations through automated review

### **When to Use Each Pattern**
- **Planning Brain**: Start of features, major changes, architectural decisions
- **Peer Reviewer**: All significant code changes, before commits
- **Memory Bank**: Session transitions, team handoffs, complex projects
- **Research Assistant**: New technologies, compliance questions, optimization

---

**Remember**: Gemini CLI enables professional-grade development practices that scale from individual productivity to enterprise team collaboration. Use it consistently to maintain high standards and institutional memory.
