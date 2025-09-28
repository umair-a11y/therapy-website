#!/usr/bin/env node
/** Minimal JSON-RPC MCP content audit server (JS version) */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SERVER_NAME = 'content-audit';
const SERVER_VERSION = '0.3.0';
const PROTOCOL_VERSION = '2025-06-18';
const repoRoot = process.cwd();

function isMarkdown(file) { return file.toLowerCase().endsWith('.md'); }
async function walk(dir, list = []) {
  let entries;
  try { entries = await fs.promises.readdir(dir, { withFileTypes: true }); } catch { return list; }
  for (const e of entries) {
    if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'playwright-report') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, list); else if (isMarkdown(e.name)) list.push(full);
  }
  return list;
}
const rel = p => path.relative(repoRoot, p).replace(/\\/g, '/');

const tools = [];
// list_pages
tools.push({
  name: 'list_pages',
  description: 'List markdown content files in the repository',
  async run() {
    const files = await walk(repoRoot);
    return { files: files.map(rel) };
  }
});
// analyze_page
tools.push({
  name: 'analyze_page',
  description: 'Analyze a markdown file (front matter, headings, word count, link stats, reading time)',
  inputSchema: { type: 'object', properties: { file: { type: 'string' } }, required: ['file'] },
  async run(args) {
    const file = typeof args.file === 'string' ? args.file : null;
    if (!file) throw new Error('file required');
    const full = path.join(repoRoot, file);
    const raw = await fs.promises.readFile(full, 'utf8');
    const parsed = matter(raw);
    const lines = raw.split(/\r?\n/);
    const headings = lines.filter(l => /^#{1,6} /.test(l)).map(h => { const m = /^(#{1,6}) (.*)/.exec(h); return { level: m[1].length, text: m[2].trim() }; });
    const words = raw.split(/\s+/).filter(Boolean);
    const links = [...raw.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(m => m[1]);
    const internal = links.filter(l => l.startsWith('/') || l.endsWith('.md'));
    const external = links.filter(l => /^https?:/.test(l));
    return { frontMatter: parsed.data, wordCount: words.length, headings, linkStats: { total: links.length, internal: internal.length, external: external.length }, readingTimeMinutes: +(words.length / 200).toFixed(2) };
  }
});
// search_content
tools.push({
  name: 'search_content',
  description: 'Search keyword across markdown content (returns file hit counts)',
  inputSchema: { type: 'object', properties: { keyword: { type: 'string' }, limit: { type: 'number', default: 20 } }, required: ['keyword'] },
  async run(args) {
    const keyword = typeof args.keyword === 'string' ? args.keyword : null;
    if (!keyword) throw new Error('keyword required');
    const limit = typeof args.limit === 'number' ? args.limit : 20;
    const files = await walk(repoRoot);
    const results = [];
    for (const f of files) {
      const raw = await fs.promises.readFile(f, 'utf8');
      const count = (raw.match(new RegExp(keyword, 'gi')) || []).length;
      if (count > 0) results.push({ file: rel(f), count });
    }
    results.sort((a, b) => b.count - a.count);
    return { keyword, results: results.slice(0, limit) };
  }
});

function write(obj) { process.stdout.write(JSON.stringify(obj) + '\n'); }
async function handleRequest(msg) {
  if (msg.method === 'initialize') return write({ jsonrpc: '2.0', id: msg.id, result: { protocolVersion: PROTOCOL_VERSION, capabilities: { tools: {} }, server: { name: SERVER_NAME, version: SERVER_VERSION } } });
  if (msg.method === 'tools/list') return write({ jsonrpc: '2.0', id: msg.id, result: { tools: tools.map(t => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })) } });
  if (msg.method === 'tools/call') {
    const { name, arguments: args = {} } = (msg.params || {});
    const tool = tools.find(t => t.name === name);
    if (!tool) return write({ jsonrpc: '2.0', id: msg.id, error: { code: -32001, message: `Unknown tool: ${name}` } });
    try {
      const result = await tool.run(args || {});
      return write({ jsonrpc: '2.0', id: msg.id, result: { content: [{ type: 'text', text: JSON.stringify(result) }] } });
    } catch (e) {
      return write({ jsonrpc: '2.0', id: msg.id, error: { code: -32002, message: e instanceof Error ? e.message : 'Tool error' } });
    }
  }
  if (msg.method === 'ping') return write({ jsonrpc: '2.0', id: msg.id, result: {} });
  if (msg.method === 'initialized') return; // notification
  if ('id' in msg) write({ jsonrpc: '2.0', id: msg.id, error: { code: -32601, message: 'Method not found' } });
}
let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  buffer += chunk;
  let idx;
  while ((idx = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, idx).trim();
    buffer = buffer.slice(idx + 1);
    if (!line) continue;
    try { const msg = JSON.parse(line); handleRequest(msg); } catch {}
  }
});
process.stdin.on('end', () => process.exit(0));
