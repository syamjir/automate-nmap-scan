export interface ScanStrategy {
  getCommand(target: string): string;
}

export class SvScan implements ScanStrategy {
  getCommand(target: string): string {
    return `nmap -sV -T4 ${target}`;
  }
}

export class OdScan implements ScanStrategy {
  getCommand(target: string): string {
    return `nmap -O ${target}`;
  }
}
