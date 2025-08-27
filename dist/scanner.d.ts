import type { ScanStrategy } from "./scanStrategies.js";
export declare function runCommand(command: string): Promise<string>;
export declare function runScan(target: string): Promise<string>;
export declare function getScanStrategy(scriptName: string): ScanStrategy | null;
//# sourceMappingURL=scanner.d.ts.map