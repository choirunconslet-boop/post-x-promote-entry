// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, stdlib only).
//
// What this entry is: Jon's own X post quoting make.fun's make-your-own-bounty
// post (https://x.com/makefunai/status/2124915864336236646), with a photo of
// its own attached and the play code in its text. POST.json at the repo root
// names that post; this program simply hands that file to the grader by
// copying it to the output directory. The post's score (replies + reposts +
// quotes) is read by the house from X itself — nothing written here is scored.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and out/POST.json matches POST.json exactly.
// The copy is deterministic: same input bytes always produce the same output,
// and the program touches no network, no clock, and no file outside the repo.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
