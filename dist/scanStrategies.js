export class SvScan {
    getCommand(target) {
        return `nmap -sV -T4 ${target}`;
    }
}
export class OdScan {
    getCommand(target) {
        return `nmap -O ${target}`;
    }
}
//# sourceMappingURL=scanStrategies.js.map