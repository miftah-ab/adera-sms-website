import { NextResponse } from 'next/server';

// This route is deprecated. SHA-256 is now sourced directly from version.json
// in the app repository (miftah-ab/adera-sms), which is populated at build time
// by the GitHub Actions workflow. ChecksumDisplay.tsx fetches it from there.
export async function GET() {
  return NextResponse.json(
    { error: 'This endpoint is deprecated. Checksum is available in version.json.' },
    { status: 410 }
  );
}
