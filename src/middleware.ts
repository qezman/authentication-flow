import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  // if the user is NOT logged in then redirect to login
  if (!session || session !== "valid") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // allow request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
