export { middleware } from 'nextra/locales';

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|logo.png|apple-icon.png|manifest|_pagefind|assets).*)',
  ],
};
