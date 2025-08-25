import { exec } from "child_process";
import { writeFile } from "fs";
import { mkdir } from "fs/promises";

const target = process.argv[2] || "scanme.nmap.org";
const command = `nmap -sV -T4 ${target}`;

// 🔧 Sanitize filename
const fileName = `${target.replace(/[^\w.-]/g, "_")}_${Date.now()}.txt`;
const outputPath = `./Results/${fileName}`;

async function checkNmapInstalledAndRun() {
  exec("which nmap", async (error, stdout) => {
    if (error || !stdout) {
      console.error("❌ Nmap is not installed. Please install it first.");
      process.exit(1);
    }

    console.log("✅ Nmap is installed. Running scan...");
    console.log(`Scanning ${target} Progress...\n`);

    // ✅ Run the actual scan
    exec(command, async (scanError, stdout, stderr) => {
      if (scanError) {
        console.error(`❌ Error: ${scanError.message}`);
        return;
      }

      if (stderr) {
        console.error(`⚠️ Stderr: ${stderr}`);
        return;
      }

      try {
        // Create Results folder if it doesn't exist
        await mkdir("./Results", { recursive: true });

        // Save the scan output
        writeFile(outputPath, stdout, (writeErr) => {
          if (writeErr) {
            console.error(`❌ Failed to save file: ${writeErr.message}`);
          } else {
            console.log("✅ Scan completed and saved successfully!");
            console.log(`📁 File: ${outputPath}`);
          }
        });
      } catch (fsErr: any) {
        console.error(`❌ Filesystem error: ${fsErr.message}`);
      }
    });
  });
}

// 🚀 Start the process
checkNmapInstalledAndRun();
