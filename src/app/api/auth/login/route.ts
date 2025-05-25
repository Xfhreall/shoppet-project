import db from '@/shared/lib/db';
import jwt from 'jsonwebtoken';
import { type NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email dan password wajib diisi' },
        { status: 400 },
      );
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    const userResult = await new Promise<any[]>((resolve, reject) => {
      db.query(sql, [email], (err: any, result: any[]) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    if (userResult.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Email atau password salah' },
        { status: 404 },
      );
    }

    const user = userResult[0];
    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: 'Email atau password salah' },
        { status: 401 },
      );
    }

    const { password: _, ...userData } = user;
    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '1d' });
    return NextResponse.json({
      success: true,
      data: userData,
      token,
      message: 'Login berhasil',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Terjadi kesalahan' },
      { status: 500 },
    );
  }
}
