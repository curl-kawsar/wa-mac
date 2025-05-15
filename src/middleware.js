
import { NextResponse } from 'next/server';

export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/login',
//     '/',
//     '/contact',
//     '/about',
//     "/profile",
//     "/forgotPassword",
//     "/validateUserUsingEmail",
//     "/usermanagement"
//   ],
};

export async function middleware() {

//   const token = await getToken(
//     {
//       req: request
//     }
//   );
//   const url = request.nextUrl;

//   // Redirect to dashboard if the user is already authenticated
//   // and trying to access sign-in, sign-up, or home page
//   if (
//     token &&
//     (
//       url.pathname.startsWith('/login') ||
//       url.pathname.startsWith('/forgotPassword') 
//       // url.pathname.startsWith('/validateUserUsingEmail')
//     )
//   ) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   if (
//     !token &&
//     (
//       url.pathname.startsWith('/login') ||
//       url.pathname.startsWith('/forgotPassword') ||
//       url.pathname.startsWith('/validateUserUsingEmail')
//     )
//   ) {
//     return NextResponse.next();
//   }

//   if (
//     !token &&
//     (
//       url.pathname.startsWith('/dashboard') ||
//       url.pathname.startsWith('/') ||
//       url.pathname.startsWith('/contact') ||
//       url.pathname.startsWith('/about') ||
//       url.pathname.startsWith('/profile') ||
//       url.pathname.startsWith('/usermanagement') 
//     )
//   ) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }






  return NextResponse.next();
}