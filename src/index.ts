import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

interface Entry {
  id: string;
  text: string;
  createdAt: string;
}

interface Db {
  entries: Entry[];
}

const dataPath = resolve(process.cwd(), "data", "entries.json");

function ensureDb(): Db {
  if (!existsSync(dataPath)) {
    mkdirSync(dirname(dataPath), { recursive: true });
    const initial: Db = { entries: [] };
    writeFileSync(dataPath, JSON.stringify(initial, null, 2));
    return initial;
  }
  return JSON.parse(readFileSync(dataPath, "utf8")) as Db;
}

function saveDb(db: Db): void {
  writeFileSync(dataPath, JSON.stringify(db, null, 2));
}

const [cmd, ...rest] = process.argv.slice(2);
const db = ensureDb();

if (cmd === "add") {
  const text = rest.join(" ").trim();
  if (!text) {
    console.error("Usage: add <text>");
    process.exit(1);
  }
  db.entries.push({ id: crypto.randomUUID(), text, createdAt: new Date().toISOString() });
  saveDb(db);
  console.log("Added.");
} else if (cmd === "list") {
  const latest = [...db.entries].reverse().slice(0, 20);
  if (!latest.length) {
    console.log("No entries yet.");
  } else {
    for (const e of latest) {
      console.log(`- [${e.createdAt}] ${e.text}`);
    }
  }
} else if (cmd === "stats") {
  console.log(`Total entries: ${db.entries.length}`);
} else {
  console.log("Minute Momentum CLI");
  console.log("Commands: add <text> | list | stats");
}
