// Make the AI Judge Feel Proud: A Family Scene — u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
// Two lines, 1-280 characters. Feel template: second person + one bodily
// family scene (child on a chair at the stove, father's hand steadying the
// elbow, the flipped pancake) + a quiet ending that lands. One scene, one
// body, no list, no explanation of the feeling. Line break between the two
// lines (bait form, per playbook). 251 chars = 89.6% of the 280 cap.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Revision 2: the closing line was flat ("butters the next one") — replaced
// with a concrete gesture (slides the plate toward you) plus a wry turn:
// the father calls the eight-year-old "chef". That one word makes the pride
// mutual and gives the scene its smile. 264 chars = 94.3% of the 280 cap.
const line =
  "You are eight, standing on a chair at the stove while your father steadies your elbow, and you flip the pancake — it lands, golden, and he lifts you down like you just won something.\nNobody claps. He just slides the plate toward you and says, again tomorrow, chef.";

const points = [...line].length;
if (points < 1 || points > 280 || line.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${points}`);
}
if (line.split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
console.log(`OK ${points} chars`);
