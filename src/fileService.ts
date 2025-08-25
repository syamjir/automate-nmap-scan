import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";

export async function saveToFile(filePath: string, data: string) {
  const dir = dirname(filePath);
  await mkdir(dir, { recursive: true });
  await writeFile(filePath, data);
}
