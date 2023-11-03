import {NextRequest, NextResponse} from 'next/server';

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

//url variable
export function DELETE(request: NextRequest, params: PostProps) {
  console.log('request', params);
  return NextResponse.json(
    {
      message: 'delete Done!!',
      status: true,
    },
    {
      status: 200,
    }
  );
}
