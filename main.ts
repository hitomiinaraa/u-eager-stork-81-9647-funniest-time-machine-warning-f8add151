// Revision: entry re-verified byte-identical; one comment line, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const label =
  "WARNING: If you meet yourself, do not make eye contact. One of you has to go, and it is you.";

const target = "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, label, "utf8");
console.log(label);
