import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);
export async function runScan(target) {
    await checkNmapInstalled();
    console.log(`🔍 Scanning ${target}...\n`);
    const { stdout } = await execAsync(`nmap -sV -T4 ${target}`);
    return stdout;
}
async function checkNmapInstalled() {
    try {
        await execAsync("which nmap");
        console.log("✅ Nmap is installed.");
    }
    catch {
        throw new Error("Nmap is not installed. Please install it first.");
    }
}
//# sourceMappingURL=scanner.js.map