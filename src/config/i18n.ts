const defaultLocale = "en";
const langs = [defaultLocale, "pt"] as const;
const locales = langs as unknown as string[];

export const i18n = { defaultLocale, locales, localeDetection: true };

export type Locale = (typeof langs)[number];

// useTranslation

import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../../messages/${locale}.json`)).default
}));