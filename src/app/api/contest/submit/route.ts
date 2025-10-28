import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, url, tools, locale } = body;

    if (!title || !url) {
      return NextResponse.json(
        { error: 'Title and URL are required' },
        { status: 400 }
      );
    }

    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    console.log('Contest submission received:', { title, url, tools, locale });

    return NextResponse.json(
      {
        success: true,
        message: 'Contest entry submitted successfully',
        submissionId: `KUKU-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contest submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
