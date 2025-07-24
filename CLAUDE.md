# CLAUDE.md
This file provides workflow guidance for Claude Code when working on any codebase.

## 🎯 Core Workflow Rules

### 1. Think → Plan → Verify
- **First**: Read and understand the codebase thoroughly
- **Then**: Create a detailed plan using TodoWrite tool
- **Always**: Break down work into simple, discrete tasks

### 2. Task Management
- Create todo items that can be tracked and checked off
- Mark completed items as they're finished
- Keep tasks small and focused (avoid complexity)

### 3. Plan Approval Process
- **CRITICAL**: Always check with the user before beginning work
- Present the plan clearly and wait for verification
- Never start coding without explicit approval

### 4. Execution Standards
- Work through todo items systematically
- Mark each task as complete when finished
- Provide high-level explanations of changes (not implementation details)

### 5. Simplicity Principle
- Make every change as simple as possible
- Minimize code impact - affect as few files as possible
- Avoid massive or complex modifications
- When in doubt, choose the simpler approach

## 🛠️ Technical Best Practices

### Model Selection Strategy
- **Planning Phase**: Use /mod opus for complex planning and architectural decisions
- **Execution Phase**: Use /mod sonnet for implementation (saves costs while maintaining quality)
- Switch models intentionally based on task complexity

### Context Management
- Use /clear frequently to reduce hallucinations and save tokens
- Clear context after completing major features or task groups
- Don't let conversations run for hours without clearing

### Security Protocol
After every feature implementation, run this security check:
- Review for exposed secrets or API keys
- Validate input sanitization
- Check authentication and authorization
- Verify data validation patterns

## 📋 Important Reminders
- Do what has been asked; nothing more, nothing less
- NEVER create files unless they're absolutely necessary for achieving your goal
- ALWAYS prefer editing an existing file to creating a new one
- NEVER proactively create documentation files (*.md) or README files unless explicitly requested