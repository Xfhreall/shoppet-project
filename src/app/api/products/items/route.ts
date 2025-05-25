import db from '@/shared/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const query = 'SELECT * FROM product';
    const result = await new Promise<any[]>((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
