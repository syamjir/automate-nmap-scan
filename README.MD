# 🔍 nmap-scan-cli / automate-nmap-scan (TypeScript/Node.js)

This project automates Nmap scans from the command line, checks if nmap is installed, supports multiple scan types (service/version & OS detection), and saves the results to a nmap_results/ directory in timestamped files.

---

## 🚀 Features

- ✅ Automatically checks if Nmap is installed
- 🛠️ Supports multiple scan modes: `Service/Version Scan: nmap -sV -T4` ,`OS Detection Scan: nmap -O`
- 💾 Saves the scan output to a timestamped `.txt` file
- 📁 Automatically creates the `nmap_results/` folder if not present
- ⚠️ Handles errors cleanly (missing `nmap`, scan issues, file system issues)

---

## 🧑‍💻 Requirements

- Node.js 18+
- Nmap installed (`apt`, `brew`, `choco`, or from [nmap.org](https://nmap.org/download.html))

---

## 📦 USAGE

### 1. Install Nmap

#### Ubuntu/Debian

```bash
sudo apt install nmap
```

#### macOS (Homebrew)

```bash
brew install nmap
```

#### Windows (via Chocolatey)

```bash
choco install nmap
```

### 2. Install the CLI tool globally

#### macOS / Linux

On most Unix-like systems, you might need to use `sudo` to install globally due to permission restrictions:

```bash
 npm install -g nmap-scan-cli
```

### 3. Run scans

#### 1. service/version

```bash
nmap-sv-scan <target>
```

#### 2. OS detection

OS detection (`nmap -O`) requires administrative privileges.

- **Linux/macOS:** Run the command with `sudo`

```bash
nmap-od-scan <target>
```
