import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const experimentsDir = path.join(process.cwd(), 'experiments');
    
    if (!fs.existsSync(experimentsDir)) {
      return NextResponse.json({ experiments: [] });
    }

    const files = fs.readdirSync(experimentsDir);
    const experiments = files
      .filter(file => !file.startsWith('.'))
      .map((file, index) => ({
        id: index + 1,
        name: file,
        displayName: `Exp ${index + 1}`,
        extension: path.extname(file).slice(1).toUpperCase(),
      }));

    return NextResponse.json({ experiments });
  } catch (error) {
    console.error('Error reading experiments:', error);
    return NextResponse.json(
      { error: 'Failed to read experiments' },
      { status: 500 }
    );
  }
}
