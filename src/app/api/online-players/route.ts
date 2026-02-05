import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.query<any[]>(`
      SELECT
        SUM(count) AS total_amount
      FROM
      (
        SELECT
          count,
          ROW_NUMBER() OVER (PARTITION BY server ORDER BY date DESC) AS r
        FROM
          log_online_players
        WHERE
          server BETWEEN 1 AND 5
      ) AS last
      WHERE r = 1;
    `);

    return NextResponse.json({
      onlinePlayers: rows[0]?.total_amount ?? 0,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Database error' },
      { status: 500 }
    );
  }
}
