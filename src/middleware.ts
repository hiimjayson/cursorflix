import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.has("user");

  // 로그인 페이지에서 이미 로그인된 경우 리다이렉트
  if (pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/series", request.url));
  }

  // 보호된 라우트에 로그인되지 않은 경우 리다이렉트
  if (pathname !== "/login" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
