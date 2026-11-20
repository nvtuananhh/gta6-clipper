// gta6-clipper-01 — make.fun entry build script (Node 22, stdlib only).
//
// What this does, in one sentence: it takes the VIDEO.json that sits next to
// this file (the link to the published YouTube Short) and places a copy of it
// into the output directory the make.fun runner expects.
//
// No network, no secrets, no reading or writing outside this repo and the
// output directory. Run it like:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");

const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  throw new Error(`VIDEO.json not found in ${botDir} — publish the Short first, then put its URL in VIDEO.json.`);
}

const raw = readFileSync(source, "utf8");
const parsed = JSON.parse(raw);
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string" || !parsed.url.startsWith("https://")) {
  throw new Error("VIDEO.json must be an object with a string \"url\" starting with https://");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
if (parsed.url.includes("<id>")) {
  console.warn("gta6-clipper-01: WARNING — VIDEO.json still holds the <id> placeholder. Replace it with the real Shorts URL before submitting.");
}
console.log(`gta6-clipper-01: copied VIDEO.json -> ${join(outDir, "VIDEO.json")} (${parsed.url})`);
