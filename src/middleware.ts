// import createMiddleware from "next-intl/middleware";
// import { i18n } from "@/config/i18n";

// export default createMiddleware(i18n);

// export const config = {
//     matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
// };

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};