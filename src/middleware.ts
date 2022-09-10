import { NextRequest, NextResponse } from 'next/server';

const countdownDate = process.env.NEXT_PUBLIC_COUNTDOWN_DATE ?? '';
const showCountdown = process.env.NEXT_PUBLIC_SHOW_COUNTDOWN === 'true';

// NOTE: this might not work
const pathHasDot = (path: string) => {
  if (path.includes('.')) return true;

  return false;
};

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/next' || pathHasDot(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (showCountdown && countdownDate != '') {
    // redirect to countdown page if not in date yet
    if (new Date(countdownDate).getTime() >= new Date().getTime()) {
      return NextResponse.rewrite(new URL('/next', request.url));
    }
  }

  return NextResponse.next();
}
