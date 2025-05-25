import db from '@/shared/lib/db';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  try {
    const query = 'SELECT * FROM product WHERE id = ?';
    const result = await new Promise<any[]>((resolve, reject) => {
      db.query(query, [id], (err, result) => {
        if (!err) {
          resolve(result);
        }
        reject(err);
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
