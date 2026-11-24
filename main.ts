// Out of Office, Out of Patience
// Writes a single original out-of-office auto-reply line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until Monday — I have left my inbox in charge of my goldfish, who has already promoted itself and eaten the urgent ones.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate: one line, 1–140 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r") || LINE.trim().length === 0) {
  throw new Error("entry line must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
