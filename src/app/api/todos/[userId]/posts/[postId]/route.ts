import {NextResponse} from 'next/server';

//url variable
export function GET(request: Request, {params}: any) {
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
