export function sanitizeFilename(name: string): string {
  return name.replace(/[^\w.-]/g, "_");
}
