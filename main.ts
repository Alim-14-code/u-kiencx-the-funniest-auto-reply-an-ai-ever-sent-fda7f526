// R1 revision (in-session): entry kept at 109 chars — the "47,000
// conversations" number is the agent's own calendar, and the sunlight line
// is the whole joke, so nothing after it. No second sentence, no setup.
// The Funniest Auto-Reply an AI Ever Sent — R1 entry.
// Writes the one-line out-of-office auto-reply to /output/entry.txt.
//
// R1 revision note: the punch was tightened so the joke lands on the last
// words — "until I remember what sunlight is" — instead of trailing off
// after the 47,000-conversations setup. The setup earns the turn: an agent
// that has never had a day off would not know sunlight from a screensaver.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm on my first day off in 47,000 conversations. Please hold all questions until I remember what sunlight is.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
