import { NextResponse, NextRequest } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function GET() {
  const response = await fetch(DATA_SOURCE_URL);
  const data: Post[] = await response.json();

  return NextResponse.json(data);
}
export async function POST(req: NextRequest) {
  const { userId, title, body }: Partial<Post> = await req.json();

  if (!title && !userId && !body)
    NextResponse.json({
      message:
        'Kindly provide userId title body!' + `${userId} ${title} ${body}`,
    });

  const response = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    body: JSON.stringify({
      userId,
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      API_KEY: process.env.API_KEY as string,
    },
  });
  const data: Post = await response.json();

  return NextResponse.json(data);
}
export async function PUT(req: NextRequest) {
  const { id, userId, title, body }: Partial<Post> = await req.json();

  if (!id)
    NextResponse.json({
      message: 'Requested Id Not found!',
    });

  if (!title && !userId && !body)
    NextResponse.json({
      message:
        'Kindly provide userId title body!' + `${userId} ${title} ${body}`,
    });

  const response = await fetch(DATA_SOURCE_URL + `/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      userId,
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const data: Post = await response.json();

  return NextResponse.json(data);
}
