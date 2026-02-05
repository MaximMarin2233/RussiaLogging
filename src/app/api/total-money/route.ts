import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.query<any[]>(`
      SELECT
        SUM(cash + bank + business) AS total_amount
      FROM
      (
        SELECT
          cash, 
          bank,
          business,
          ROW_NUMBER() OVER (PARTITION BY server ORDER BY date DESC) AS r
        FROM 
          log_all_money
        WHERE 
          server BETWEEN 1 AND 5
      ) AS last
      WHERE r = 1;
    `);

    return NextResponse.json({
      totalAmount: rows[0]?.total_amount ?? 0,
    });
  } catch (err) {
    console.error('DB error:', err);
    return NextResponse.json(
      { error: 'Database error' },
      { status: 500 }
    );
  }
}
