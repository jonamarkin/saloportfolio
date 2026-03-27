import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const url = 'https://media.licdn.com/dms/image/v2/D4D03AQHR6OzP9bOJhQ/profile-displayphoto-crop_800_800/B4DZo64rESH4AM-/0/1761924527467?e=1776297600&v=beta&t=O1EVejPPzhdUJJ24RhQpTa90SuBxXXQO_KEjkjC33Gw';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch image');
    
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    
    return NextResponse.json({ base64, mimeType: 'image/jpeg' });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
