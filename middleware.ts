import { NextRequest, NextResponse } from "next/server";
// This function can be marked `async` if using `await` inside

console.log(1);


export async function middleware(req: NextRequest) {
  const auth = req.headers?.auth || "";
  console.log(auth, "headers");

  const token = req.cookies.get("loggedUser")?.value || "";

  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/explore", req.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/explore",
    "/notifications",
    "/messages",
    "/lists",
    "/bookmarks",
    "/communities",
    "/premium",
    "/profile",
    "/more",
    "/about",
  ],
};
