#!/usr/bin/env node
import { spawn } from "node:child_process";

const apiKey = process.env.VERCEL_MCP_API_KEY?.trim() || process.env.VERCEL_API_KEY?.trim();

if (!apiKey) {
  console.error("[vercel-mcp] Missing VERCEL_MCP_API_KEY or VERCEL_API_KEY environment variable.");
  console.error("Generate a token at https://vercel.com/account/tokens and export it before running.");
  process.exit(1);
}

const args = ["vercel-mcp"];

const teamId = process.env.VERCEL_MCP_TEAM_ID?.trim() || process.env.VERCEL_TEAM_ID?.trim();
const projectId = process.env.VERCEL_MCP_PROJECT_ID?.trim();

const childEnv = { ...process.env, VERCEL_API_KEY: apiKey };
if (teamId) {
  childEnv.VERCEL_TEAM_ID = teamId;
}
if (projectId) {
  childEnv.VERCEL_PROJECT_ID = projectId;
}

const isWindows = process.platform === "win32";
const command = isWindows ? "cmd" : "npx";
const commandArgs = isWindows ? ["/c", "npx", ...args] : args;

const child = spawn(command, commandArgs, {
  stdio: "inherit",
  env: childEnv,
});

child.on("exit", code => {
  process.exit(code ?? 0);
});

child.on("error", error => {
  console.error("Failed to start Vercel MCP server:", error);
  process.exit(1);
});
