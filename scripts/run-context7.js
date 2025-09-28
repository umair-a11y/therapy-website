#!/usr/bin/env node
import { spawn } from "node:child_process";

const args = ["-y", "@upstash/context7-mcp"];
const apiKey = process.env.CONTEXT7_API_KEY?.trim();
if (apiKey) {
  args.push("--api-key", apiKey);
}

const isWindows = process.platform === "win32";
const command = isWindows ? "cmd" : "npx";
const commandArgs = isWindows ? ["/c", "npx", ...args] : args;
const child = spawn(command, commandArgs, {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

child.on("error", (error) => {
  console.error("Failed to start Context7 MCP server:", error);
  process.exit(1);
});
