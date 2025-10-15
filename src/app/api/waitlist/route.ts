import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'メールアドレスが無効です' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEmail = await prisma.waitlistEmail.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return NextResponse.json(
        { error: '既に登録されています' },
        { status: 409 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await prisma.waitlistEmail.create({
      data: { email },
    });

    return NextResponse.json(
      { message: '登録ありがとうございます！', id: waitlistEntry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist registration error:', error);
    return NextResponse.json(
      { error: '登録に失敗しました。もう一度お試しください。' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await prisma.waitlistEmail.count();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    return NextResponse.json({ count: 0 });
  }
}
