// Last Text at One Percent — make.fun entry.
// A dying phone's final text, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The winning line: the phone has been lingering at 1% so long it
// starts to believe it cannot die — then dies mid-sentence.
const LINE =
  "okay listen. i've been at 1% for 20 minutes and i'm starting to think i'm immortal. anyway, bye—";

// The sealed scorer only accepts 1-200 UTF-8 characters, non-blank,
// and the bounty requires a single line — no newlines allowed.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`final text is ${chars} characters; must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("final text must not be blank");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("final text must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
