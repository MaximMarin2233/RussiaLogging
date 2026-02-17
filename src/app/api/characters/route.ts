import { NextResponse } from 'next/server';
import { dbConnections } from '@/lib/db';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const server = Number(searchParams.get('server'));
    const actId = 380144;

    if (!server || !actId) {
      return NextResponse.json({ error: 'Missing params' }, { status: 400 });
    }

    const pool = dbConnections[2];

    const [rows] = await pool.query(
      `
      SELECT
        char_id,
        char_name,
        char_skin,
        char_level,
        char_game_for_hour,
        char_reg_time,
        char_is_online
      FROM server${server}.characters
      WHERE char_act_id = ?
      `,
      [actId]
    );

    return NextResponse.json(rows);

  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }
}
