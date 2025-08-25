import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";
export async function saveToFile(filePath, data) {
    const dir = dirname(filePath);
    await mkdir(dir, { recursive: true });
    await writeFile(filePath, data);
}
//# sourceMappingURL=fileService.js.map