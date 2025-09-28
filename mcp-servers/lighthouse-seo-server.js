#!/usr/bin/env node
/** Minimal JSON-RPC MCP Lighthouse server */
import { execFile } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const pExecFile = promisify(execFile);
const SERVER_NAME = 'lighthouse-seo';
const SERVER_VERSION = '0.3.0';
const PROTOCOL_VERSION = '2025-06-18';

const tools = [];

tools.push({
  name: 'audit',
  description: 'Run Lighthouse (performance, accessibility, SEO, best-practices) against a URL',
  inputSchema: { type: 'object', properties: { url: { type: 'string' }, categories: { type: 'array', items: { type: 'string' } } } },
  async run(args) {
    const url = typeof args.url === 'string' ? args.url : 'http://localhost:3000';
    const categories = Array.isArray(args.categories) ? args.categories : ['performance','accessibility','seo','best-practices'];
    const tmp = path.join(process.cwd(), `.mcp-lh-${Date.now()}.json`);
    const cmdArgs = [url,'--output=json',`--output-path=${tmp}`,`--only-categories=${categories.join(',')}`,'--quiet','--chrome-flags=--headless=new --no-sandbox'];
    try {
      await pExecFile('npx', ['lighthouse', ...cmdArgs], { maxBuffer: 15_000_000 });
      const raw = await fs.promises.readFile(tmp, 'utf8');
      const report = JSON.parse(raw);
      const cat = report.categories || {};
      const opp = Object.values(report.audits || {})
        .filter(a => a?.details?.type === 'opportunity')
        .sort((a, b) => (b?.details?.overallSavingsMs || 0) - (a?.details?.overallSavingsMs || 0))
        .slice(0, 5)
        .map(a => ({ title: a.title, savingsMs: a.details?.overallSavingsMs, description: a.description }));
      return { finalUrl: report.finalUrl, fetchTime: report.fetchTime, scores: { performance: cat.performance?.score ?? null, accessibility: cat.accessibility?.score ?? null, seo: cat.seo?.score ?? null, bestPractices: cat['best-practices']?.score ?? null }, topOpportunities: opp };
    } catch (e) {
      return { error: e instanceof Error ? e.message : 'Lighthouse failed' };
    } finally { fs.promises.unlink(tmp).catch(()=>{}); }
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
    try { const result = await tool.run(args || {}); return write({ jsonrpc: '2.0', id: msg.id, result: { content: [{ type: 'text', text: JSON.stringify(result) }] } }); }
    catch (e) { return write({ jsonrpc: '2.0', id: msg.id, error: { code: -32002, message: e instanceof Error ? e.message : 'Tool error' } }); }
  }
  if (msg.method === 'ping') return write({ jsonrpc: '2.0', id: msg.id, result: {} });
  if (msg.method === 'initialized') return; // notification
  if ('id' in msg) write({ jsonrpc: '2.0', id: msg.id, error: { code: -32601, message: 'Method not found' } });
}
let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { buffer += chunk; let idx; while ((idx = buffer.indexOf('\n')) >= 0) { const line = buffer.slice(0, idx).trim(); buffer = buffer.slice(idx + 1); if (!line) continue; try { const msg = JSON.parse(line); handleRequest(msg); } catch {} } });
process.stdin.on('end', () => process.exit(0));
