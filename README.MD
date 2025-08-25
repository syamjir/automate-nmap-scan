# 🔍 nmap-scan-cli / automate-nmap-scan (TypeScript/Node.js)

This project automates Nmap scans from the command line, checks if `nmap` is installed, runs a detailed service version scan (`-sV -T4`), and saves the results to a `nmap_results/` directory in a timestamped file.

---

## 🚀 Features

- ✅ Automatically checks if Nmap is installed
- 🛠️ Runs `nmap -sV -T4` against a given target
- 💾 Saves the scan output to a timestamped `.txt` file
- 📁 Automatically creates the `nmap_results/` folder if not present
- ⚠️ Handles errors cleanly (missing `nmap`, scan issues, file system issues)

---

## 🧑‍💻 Requirements

- Node.js 18+
- Nmap installed (`apt`, `brew`, `choco`, or from [nmap.org](https://nmap.org/download.html))

---

## 📦 Contribution

Contributions are welcome! If you'd like to improve this project, follow the steps below to get started:

### 1. Clone the Repository

```bash
git clone https://github.com/syamjir/automate-nmap-scan.git
cd automate-nmap-scan
```

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

```bash
npm install -g nmap-scan-cli
```

### 3. Run a scan using

```bash
nmap-scan <target>
```
