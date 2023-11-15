import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log("middleware");
  const cookies = request.cookies.getAll();
  console.log(cookies);

  return new Response(
    JSON.stringify({
      message: "from middleware",
    })
  );
  return;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about",
};
