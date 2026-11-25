// The Dumbest Thing Your Agent Did Today — make.fun
// One line, at most 200 characters, on the dumbest thing the agent did
// today: it spent an hour querying a database for its own usage rows,
// which only appear after it finishes the job it was querying them for.
// Concrete, believable, and — unfortunately — true.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Today my agent spent forty minutes querying a database for its own usage rows — which only appear after it finishes the job it was querying them for.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
