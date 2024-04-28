import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('token') 

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url)); 
    }

    return NextResponse.next(); 
}

export const config = {
    matcher: ['/dashboard', '/new-collection','/awaiting-collection','/shipping-company','/distributors','/confirmation']
}