import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const { pathname } = request.nextUrl;
    // Define the paths that need protection
    if (pathname.startsWith('/profile')) {
        const token = request.cookies.get('token'); // Check for auth token in cookies
        // If the token is not present, redirect to the login page
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
    // If the user is authenticated, continue with the request
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/profile/:path*',
}