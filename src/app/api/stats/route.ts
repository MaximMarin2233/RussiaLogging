import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const [moneyRows] = await db.query<any[]>(`
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

    const [playersRows] = await db.query<any[]>(`
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

    const [adminsRows] = await db.query<any[]>(`
      SELECT COUNT(*) AS total FROM log_online_admins;
    `);

    return NextResponse.json({
      totalMoney: moneyRows[0]?.total_amount ?? 0,
      onlinePlayers: playersRows[0]?.total_amount ?? 0,
      onlineAdmins: adminsRows[0]?.total ?? 0,
    });
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json(
      { error: 'Database error' },
      { status: 500 }
    );
  }
}
