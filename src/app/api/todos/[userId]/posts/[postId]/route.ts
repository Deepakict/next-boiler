import {NextResponse} from 'next/server';

export interface PostProps {
  userId: number;
  postId: number;
}
//url variable
export function GET(request: Request, params: PostProps) {
  console.log('request', params);
  return NextResponse.json(
    {
      message: 'Get Done!!',
      status: true,
    },
    {
      status: 200,
    }
  );
}
