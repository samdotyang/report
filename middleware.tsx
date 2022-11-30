import { NextRequest, NextResponse } from 'next/server'

// export const config = {
//     matcher: ['/api/:function*'],
// };

// export const config = {
//   matcher: '/run',
// }

export function middleware(request: NextRequest) {

    // const response = NextResponse.json({
    //     success: true,
    //     message: "test",
    // })
    // return response;
    if (request.nextUrl.search === "" && request.nextUrl.pathname === "/run") {
      return NextResponse.rewrite(new URL("/run?page=1", request.url))
    }
};