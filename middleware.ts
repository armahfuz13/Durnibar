import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const blockedPaths = ['/member', '/members'];

  const isBlockedMembersRoute = blockedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (isBlockedMembersRoute) {
    return NextResponse.redirect(new URL('/?membersBlocked=true', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/member/:path*', '/members/:path*'],
};
