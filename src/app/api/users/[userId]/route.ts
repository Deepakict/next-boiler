import {NextRequest, NextResponse} from 'next/server';

//url variable
export function DELETE(request: NextRequest, {params}: any) {
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
