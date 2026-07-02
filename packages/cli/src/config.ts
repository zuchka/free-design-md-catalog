export const DEFAULT_HOST = "https://freedesign.md";
export const PUBLIC_CATALOG_BASE =
  "https://raw.githubusercontent.com/zuchka/free-design-md-catalog/main";

export function resolveHost(flag: string | undefined): string {
  if (flag) return stripTrailingSlash(flag);
  const env = process.env.FREE_DESIGN_MD_HOST ?? process.env.FDMD_HOST;
  if (env) return stripTrailingSlash(env);
  return DEFAULT_HOST;
}

export function resolveHostOverride(
  flag: string | undefined,
): string | undefined {
  if (flag) return stripTrailingSlash(flag);
  const env = process.env.FREE_DESIGN_MD_HOST ?? process.env.FDMD_HOST;
  if (env) return stripTrailingSlash(env);
  return undefined;
}

function stripTrailingSlash(s: string): string {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}
