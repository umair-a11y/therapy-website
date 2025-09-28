# MCP Servers for therapy-website

This folder contains custom Model Context Protocol (MCP) servers and curated integrations to augment AI tooling with project-specific capabilities.

## Servers

### content-audit-server.ts
Scans markdown content in the repository and exposes tools:
- list_pages
- analyze_page (front matter, headings, word counts, link stats, reading time)
- search_content (keyword frequency across pages)

Use cases:
- Identify thin content or missing structure
- Surface internal linking opportunities
- Content gap analysis & prioritization

### lighthouse-seo-server.ts
Runs a focused Lighthouse audit (performance, accessibility, SEO, best-practices) for a given URL (defaults to http://localhost:3000).

Tools:
- audit

Returns compressed summary with category scores and top opportunities.

### zen-server.js
Provides on-demand mindfulness copy to enrich therapeutic content without external API calls.

Tools:
- generate_affirmation (optional theme: resilience | self_compassion | calm)
- grounding_exercise (optional duration minutes)
- reframe_thought (cognitive reframing helper)

### context7 (external)
Wraps Upstash’s `@upstash/context7-mcp` package to fetch up-to-date framework/library documentation for prompts.

Tools:
- resolve-library-id (map package name to Context7 ID)
- get-library-docs (stream docs/content snippets; accepts optional topic/tokens)

Requires Node 18+. Set `CONTEXT7_API_KEY` for higher rate limits (see `.env.example`).

## npm Scripts
- `npm run mcp:content` – start the content audit server (stdio)
- `npm run mcp:seo` – start the Lighthouse SEO server
- `npm run mcp:zen` – start the mindfulness copy server
- `npm run mcp:context7` – run the Context7 docs server via npx
- `npm run mcp:test:<name>` – smoke test each server (`context7` lists tools only by default)

## Usage (Generic MCP Client)
If using an MCP-capable AI client (e.g., Cursor, Windsurf, Claude Code), point it at the executable via a command config like:

```jsonc
{
  "mcpServers": {
    "content-audit": {
      "command": "node",
      "args": ["./mcp-servers/content-audit-server.ts"]
    },
    "lighthouse-seo": {
      "command": "node",
      "args": ["./mcp-servers/lighthouse-seo-server.ts"]
    },
    "zen": {
      "command": "node",
      "args": ["./mcp-servers/zen-server.js"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "CONTEXT7_API_KEY": "${CONTEXT7_API_KEY}"
      }
    }
  }
}
```

Add `--api-key` in `args` if your client does not forward environment variables.

## Build (optional)
Add a build step if you prefer outputting JS:
```
tsx mcp-servers/content-audit-server.ts
```

Currently scripts run directly with `node` relying on ESM/CommonJS interop; if issues arise, compile with `tsc`.

## Future Enhancements
- Cache layer for repeated content analyses
- Broken link checker integration
- Sitemap.xml generator + comparison to existing pages
- OpenGraph / structured data validation server
