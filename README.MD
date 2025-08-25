# 🔍 Nmap Scanner Automation (TypeScript/Node.js)

This project automates Nmap scans from the command line, checks if `nmap` is installed, runs a detailed service version scan (`-sV -T4`), and saves the results to a `Results/` directory in a timestamped file.

---

## 🚀 Features

- ✅ Automatically checks if Nmap is installed
- 🛠️ Runs `nmap -sV -T4` against a given target
- 💾 Saves the scan output to a timestamped `.txt` file
- 📁 Automatically creates the `Results/` folder if not present
- ⚠️ Handles errors cleanly (missing `nmap`, scan issues, file system issues)

---

## 🧑‍💻 Requirements

- Node.js 18+
- Nmap installed (`apt`, `brew`, `choco`, or from [nmap.org](https://nmap.org/download.html))

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/automate-nmap-scan.git
cd automate-nmap-scan
```

## 📦 Install dependencies

```bash
npm install
```

## 📦 USAGE

```bash
npx tsc namapAuto.ts
node nmapAuto.js <target>
```
