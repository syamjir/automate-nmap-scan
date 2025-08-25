#!/usr/bin/env node
import { runScan } from "./scanner.js";
import { saveToFile } from "./fileService.js";
import { sanitizeFilename } from "./utils.js";

const args = process.argv.slice(2);
const target = args[0] || "scanme.nmap.org";
const outputDir = "./nmap_results";
const filename = `${sanitizeFilename(target)}_${Date.now()}.txt`;

async function main() {
  try {
    const result = await runScan(target);
    const filePath = `${outputDir}/${filename}`;
    await saveToFile(filePath, result);
    console.log("✅ Scan completed and saved.");
    console.log(`📁 Saved to: ${filePath}`);
  } catch (err: any) {
    console.error("❌ Error:", err.message || err);
    process.exit(1);
  }
}

main();
