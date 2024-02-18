import { NextResponse, NextRequest } from 'next/server';

//* cached/static route handler
// export async function GET(): Promise<NextResponse> {
//   return NextResponse.json('hello, World!');
// }

/**
 * *Dynamic route handler are Methods (post , put , patch , delete , options) + also Request object
 * *Using Dynamic API Cookies and Header
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get('name');
  const power = searchParams.get('power');

  return NextResponse.json({
    message: 'Your power is ' + power,
    hero: name,
  });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  console.log('data on server', data);

  return NextResponse.json({
    message: 'All data has been saved',
  });
}
