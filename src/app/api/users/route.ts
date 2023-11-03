import {NextRequest, NextResponse} from 'next/server';

export function GET() {
  const users = [
    {
      name: 'deepak mehra',
      phone: '23233',
      course: 'next.js',
    },
  ];
  return NextResponse.json(users);
}

export function POST(request: NextRequest) {
  console.log('resquest', request.body);
  console.log('headers', request.headers);
  console.log('body', request.body);
  return NextResponse.json({
    message: 'Hello',
  });
}

//url variable
export function DELETE(_request: Request) {
  return NextResponse.json(
    {
      message: 'delete!!',
      status: true,
    },
    {
      status: 201,
    }
  );
}
