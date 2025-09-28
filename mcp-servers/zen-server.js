#!/usr/bin/env node
/**
 * Zen MCP Server
 * Purpose: Provide short mindfulness, grounding, and cognitive reframing snippets the AI can pull
 * to enrich therapeutic content or inject calming copy. (No external network calls.)
 * Tools:
 *  - generate_affirmation { theme?: string }
 *  - grounding_exercise { duration?: number }
 *  - reframe_thought { thought: string }
 */

const SERVER_NAME = 'zen';
const SERVER_VERSION = '0.1.0';
const PROTOCOL_VERSION = '2025-06-18';

const THEMES = {
  resilience: [
    'You have survived 100% of your hardest days—this moment is proof of your capacity.',
    'Progress is often quiet; resilience is the accumulation of small recoveries.',
  ],
  self_compassion: [
    'Speak to yourself as you would to someone you deeply love who is hurting.',
    'Your worth is not reduced by today’s struggle; it’s reaffirmed by your willingness to show up.',
  ],
  calm: [
    'A slow exhale tells your nervous system the storm has passed.',
    'Notice one thing you see, one thing you hear, one thing you feel—anchor to now.',
  ]
};

function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

const tools = [];

// generate_affirmation
tools.push({
  name: 'generate_affirmation',
  description: 'Return a short therapeutic affirmation. Optional theme: resilience|self_compassion|calm',
  inputSchema: { type: 'object', properties: { theme: { type: 'string' } } },
  async run(args) {
    const theme = typeof args.theme === 'string' && THEMES[args.theme] ? args.theme : pick(Object.keys(THEMES));
    return { theme, affirmation: pick(THEMES[theme]) };
  }
});

// grounding_exercise
tools.push({
  name: 'grounding_exercise',
  description: 'Provide a brief sensory grounding sequence. Optional duration minutes (default 2).',
  inputSchema: { type: 'object', properties: { duration: { type: 'number' } } },
  async run(args) {
    const duration = typeof args.duration === 'number' ? Math.max(1, Math.min(10, args.duration)) : 2;
    return {
      durationMinutes: duration,
      steps: [
        'Pause and place both feet firmly on the floor.',
        'Inhale slowly for 4, hold 2, exhale 6 — repeat 3 cycles.',
        'Name 5 things you can see.',
        'Name 4 things you can touch within reach.',
        'Name 3 things you can hear right now.',
        'Name 2 things you can smell or recall a pleasant scent.',
        'Name 1 thing you value about yourself today.'
      ]
    };
  }
});

// reframe_thought
tools.push({
  name: 'reframe_thought',
  description: 'Given a negative automatic thought, provide a gentle cognitive reframe.',
  inputSchema: { type: 'object', properties: { thought: { type: 'string' } }, required: ['thought'] },
  async run(args) {
    const thought = typeof args.thought === 'string' ? args.thought.trim() : '';
    if (!thought) throw new Error('thought required');
    // Simple heuristic-based reframing (expand later with pattern detection)
    const lowers = thought.toLowerCase();
    let reframe;
    if (/always|never/.test(lowers)) {
      reframe = 'Consider exceptions: Are there moments this wasn’t true? Partial success still counts.';
    } else if (/failure|worthless|useless/.test(lowers)) {
      reframe = 'Self-worth isn’t determined by one outcome; value can exist independent of performance.';
    } else if (/no one|nobody/.test(lowers)) {
      reframe = 'Scan evidence: Is there at least one person who shows care (even subtly)?';
    } else if (/cant|cannot|impossible/.test(lowers)) {
      reframe = 'What would a 10% progress step look like? Capability can expand incrementally.';
    } else {
      reframe = 'Acknowledge the feeling, then ask: What is a more balanced alternative interpretation?';
    }
    return { original: thought, reframe };
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
  if (msg.method === 'initialized') return;
  if ('id' in msg) write({ jsonrpc: '2.0', id: msg.id, error: { code: -32601, message: 'Method not found' } });
}
let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { buffer += chunk; let idx; while ((idx = buffer.indexOf('\n')) >= 0) { const line = buffer.slice(0, idx).trim(); buffer = buffer.slice(idx + 1); if (!line) continue; try { const msg = JSON.parse(line); handleRequest(msg); } catch {} } });
process.stdin.on('end', () => process.exit(0));
