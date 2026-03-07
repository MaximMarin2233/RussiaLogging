import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'
import { getUser } from '@/lib/getUser'

export async function GET() {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const db = dbConnections[user.server]

    const [leaders]: any = await db.query(
      `
      SELECT
          f.name,
          c.char_name AS player_name,
          c.char_id,
          SUM(fi.invite) AS total_invite,
          SUM(fi.uninvite) AS total_uninvite,
          gpd.seconds_for_day,
          CASE
              WHEN c.char_playerid IS NOT NULL THEN 'Онлайн'
              ELSE 'Оффлайн'
          END AS status
      FROM
          fraction_invited fi
      JOIN
          fraction f ON fi.fraction_id = f.id
      JOIN
          fraction_members fm ON fi.fraction_id = fm.fraction_member_fraction_id AND fm.fraction_member_rank_id = 11
      JOIN
          characters c ON fm.fraction_member_char_id = c.char_id
      LEFT JOIN
          game_per_day gpd ON c.char_id = gpd.char_id AND DATE(gpd.date) = CURDATE()
      WHERE
          fi.date >= NOW() - INTERVAL 1 DAY
      GROUP BY
          f.id, c.char_id
      `
    )

    return NextResponse.json({ leaders })
  } catch (err: any) {
    console.error('LEADERS API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}