import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let locales = ['en'];
let defaultLocale = 'en';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip public files and api routes
  if (
    pathname.startsWith(`/_next/`) ||
    pathname.startsWith(`/api/`) ||
    pathname.includes('.')
  ) {
    return;
  }

  // Redirect legacy /hi path to /en
  if (pathname === '/hi' || pathname.startsWith('/hi/')) {
    const newPath = pathname.replace(/^\/hi/, '/en');
    request.nextUrl.pathname = newPath;
    return NextResponse.redirect(request.nextUrl);
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
