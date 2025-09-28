#!/usr/bin/env node
// Simple smoke test: initialize server, list tools, optionally call a tool
import { spawn } from 'child_process';

const [, , serverName, toolToCall, ...restArgs] = process.argv;
if (!serverName) {
  console.error('Usage: node scripts/mcp-smoke.js <content-audit|lighthouse-seo|zen|context7|vercel> [toolName] [jsonArgs]');
  process.exit(1);
}

let toolArgs = {};
if (restArgs.length) {
  try {
    toolArgs = JSON.parse(restArgs.join(' '));
  } catch (error) {
    console.error('Failed to parse JSON args:', error.message);
    process.exit(1);
  }
}

const map = {
  'content-audit': ['node', './mcp-servers/content-audit-server.js'],
  'lighthouse-seo': ['node', './mcp-servers/lighthouse-seo-server.js'],
  'zen': ['node', './mcp-servers/zen-server.js'],
};

const context7Args = ['-y', '@upstash/context7-mcp'];
const context7ApiKey = process.env.CONTEXT7_API_KEY?.trim();
if (context7ApiKey) {
  context7Args.push('--api-key', context7ApiKey);
}
const isWindows = process.platform === 'win32';
map['context7'] = isWindows ? ['cmd', '/c', 'npx', ...context7Args] : ['npx', ...context7Args];
map['vercel'] = ['node', './scripts/run-vercel-mcp.js'];

if (!map[serverName]) {
  console.error(`Unknown server: ${serverName}`);
  process.exit(1);
}

const [cmd, ...args] = map[serverName];
const child = spawn(cmd, args, { stdio: ['pipe', 'pipe', 'inherit'] });

let responses = [];
child.stdout.on('data', chunk => {
  const lines = chunk.toString().split('\n').filter(Boolean);
  for (const l of lines) {
    try {
      const obj = JSON.parse(l);
      responses.push(obj);
    } catch {}
  }
  const last = responses[responses.length - 1];
  if (last?.result?.tools) {
    if (!toolToCall) {
      console.log('TOOLS:', last.result.tools.map(t => t.name));
      child.stdin.end();
    } else if (!toolCalled) {
      const callReq = {
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: toolToCall,
          arguments: toolToCall === 'audit' && serverName === 'lighthouse-seo'
            ? { url: 'http://localhost:3000' }
            : toolArgs,
        },
      };
      child.stdin.write(JSON.stringify(callReq) + '\n');
      toolCalled = true;
    }
  }
  const callResponse = responses.find(r => r.id === 3 && (r.result || r.error));
  if (callResponse) {
    console.log('CALL RESULT:', JSON.stringify(callResponse, null, 2));
    child.stdin.end();
  }
});

let toolCalled = false;
// send initialize then tools/list
child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18', client: { name: 'smoke', version: '0.1.0' } } }) + '\n');
child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list' }) + '\n');
