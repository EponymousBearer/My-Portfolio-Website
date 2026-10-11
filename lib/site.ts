// Single source of truth for the site's canonical URL and primary contact links.
// Set NEXT_PUBLIC_SITE_URL in the environment to override the production fallback.
const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://muhammadadnan-ai.vercel.app'

// Normalize: no trailing slash, so absoluteUrl() can safely concatenate.
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, '')

export const EMAIL = 'adnasir607@gmail.com'
export const CALENDLY_URL = 'https://calendly.com/adnasir607/30min'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammadadnan-ai'
export const GITHUB_URL = 'https://github.com/EponymousBearer'

/** Build an absolute URL on the canonical origin from a root-relative path. */
export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
