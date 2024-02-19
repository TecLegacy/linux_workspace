import { NextRequest, NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { delete: string } }
) {
  // const { id } = await request.json();
  const { userId, title, body }: Partial<Post> = await request.json();

  if (!title && !userId && !body)
    NextResponse.json({
      message:
        'Kindly provide userId title body!' + `${userId} ${title} ${body}`,
    });

  const id = params.delete;

  await fetch(DATA_SOURCE_URL + `/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      API_KEY: process.env.API_KEY as string,
    },
  });

  console.log(process.env.API_KEY);

  return NextResponse.json({
    message: 'Data has been deleted',
  });
}
