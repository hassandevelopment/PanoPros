export function parseInlineBold(text: string): Array<string | { bold: string }> {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return { bold: part.slice(2, -2) };
    }
    return part;
  });
}
