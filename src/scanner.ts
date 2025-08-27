import { exec } from "child_process";
import { promisify } from "util";
import { SvScan, OdScan } from "./scanStrategies.js";
import type { ScanStrategy } from "./scanStrategies.js";
import * as path from "path";

const execAsync = promisify(exec);

export async function runCommand(command: string): Promise<string> {
  const { stdout } = await execAsync(command);
  return stdout;
}

async function checkNmapInstalled() {
  try {
    await execAsync("which nmap");
    console.log("✅ Nmap is installed.");
  } catch {
    throw new Error("Nmap is not installed. Please install it first.");
  }
}

export async function runScan(target: string): Promise<string> {
  await checkNmapInstalled();
  const scriptPath = process.argv[1] || "nmap-sv-scan";
  const invokedScript = path.basename(scriptPath);
  const strategy = getScanStrategy(invokedScript);
  if (!strategy) throw new Error(`Unknown script: ${invokedScript}`);

  const command = strategy.getCommand(target);
  console.log(`🔍 Running command: ${command}\n`);
  return await runCommand(command);
}

export function getScanStrategy(scriptName: string): ScanStrategy | null {
  switch (scriptName) {
    case "nmap-sv-scan":
      return new SvScan();
    case "nmap-od-scan":
      return new OdScan();
    default:
      return null;
  }
}
