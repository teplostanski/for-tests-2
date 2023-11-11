import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  //const d = { heello: 'lkiuytrrftghjkl' }
  return NextResponse.json({ hello: 'qwer' })
}
