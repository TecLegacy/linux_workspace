import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const dummyProduct = {
    name: 'kanu priya',
    // name: 'kanu',
    age: 30,
  };

  return NextResponse.json(dummyProduct);
}
