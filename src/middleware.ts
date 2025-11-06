// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If user visits the root ("/"), redirect to "/sign-in"
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Otherwise, allow everything else
  return NextResponse.next();
}