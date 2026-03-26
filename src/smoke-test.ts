import { spawnSync } from "node:child_process";

const result = spawnSync("node", ["--import", "tsx", "src/index.ts"], {
  encoding: "utf8"
});

if (result.status !== 0) {
  console.error("Smoke test failed: CLI exited non-zero");
  console.error(result.stderr);
  process.exit(1);
}

if (!result.stdout.includes("Minute Momentum CLI")) {
  console.error("Smoke test failed: expected help text not found");
  process.exit(1);
}

console.log("Smoke test passed.");
