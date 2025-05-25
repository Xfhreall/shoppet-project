import db from '@/shared/lib/db';
import { type NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  try {
    const query = 'DELETE FROM product WHERE id = ?';
    const _result = await new Promise<any[]>((resolve, reject) => {
      db.query(query, [id], (err, result) => {
        if (!err) {
          resolve(result);
        }
        reject(err);
      });
    });

    return NextResponse.json('Data berhasil di hapus', { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
