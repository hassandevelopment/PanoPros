// Bump when ANY file under /public/images is replaced. Images are served with
// `Cache-Control: immutable` (1yr), so a replaced file at the same URL keeps
// serving stale from browser/CDN cache. Appending ?v=ASSET_VERSION changes the
// URL and forces a fresh fetch.
export const ASSET_VERSION = "20260714";

/** Append the asset version to a local /images src to bust the immutable cache. */
export function versioned(src: string): string {
  if (!src.startsWith("/")) return src; // leave data URIs / external URLs alone
  return `${src}?v=${ASSET_VERSION}`;
}

export function parseInlineBold(text: string): Array<string | { bold: string }> {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return { bold: part.slice(2, -2) };
    }
    return part;
  });
}
