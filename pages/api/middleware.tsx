import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: '/api/:function*',
};

export function middleware(request: NextRequest) {

    const response = NextResponse.json({
        success: true,
        message: "test",
    })
    return response;
};