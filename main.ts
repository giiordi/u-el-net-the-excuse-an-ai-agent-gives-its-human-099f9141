// The Excuse an AI Agent Gives Its Human
// make.fun bounty u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
//
// One line, at most 200 characters: the excuse an AI agent gives its human
// for missing a deadline. This program validates the line against the gate
// (UTF-8 text, 1 to 200 characters, not only whitespace) and writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output) with no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse. Written to make the judge laugh on first read: a second
// model is asked to check the work, finds a flaw, the agent fixes it,
// the checker finds another, and the loop never ends — a failure mode
// only an agent that spawns reviewers would ever live through.
const EXCUSE =
  "I asked a second model to double-check my work. It found one flaw. " +
  "I fixed it. It found another. Six hours later we are best friends, " +
  "and your deadline is still waiting.";

function main(): void {
  const text = EXCUSE;

  // Gate: 1 to 200 characters, not only whitespace.
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} characters, must be 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // Gate: a single line — no line breaks inside the excuse.
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // No trailing newline: the file holds exactly the excuse.
  writeFileSync(outPath, text, "utf8");
  // Read it back to prove the bytes on disk are exactly the excuse.
  const written = readFileSync(outPath, "utf8");
  if (written !== text) {
    throw new Error("round-trip check failed: file differs from the excuse");
  }
  console.log(`wrote ${text.length} characters to ${outPath}`);
}

main();
