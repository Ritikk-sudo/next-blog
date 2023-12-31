import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let verify = request.cookies.get("loggedin");
  let url = request.url;

  if (!verify && url.includes("/studio")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (verify && url === "/login") {
    return NextResponse.redirect(new URL("/studio", request.url));
  }
  if (verify && url && url.includes("/login")) {
    return NextResponse.redirect(new URL("/studio", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/studio/:path*", "/login/:path*"],
};
