const DEFAULT_LOCALE = 'en';

/**
 * Get the current locale code from cookies
 * @returns The locale code (e.g., 'en', 'ko')
 */
export const getLocaleCode = (): string => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }
  const path = window.location.pathname;
  const locale = path.split('/')[1];
  return locale || DEFAULT_LOCALE;
};

/**
 * Convert a locale code to its full locale format
 * @param locale - The locale code (e.g., 'en', 'ko')
 * @returns The full locale code (e.g., 'en-US', 'ko-KR')
 */

export const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  ko: 'ko-KR',
};
export const getFullLocaleCode = (locale: string): string => {
  return LOCALE_MAP[locale] || locale;
};
