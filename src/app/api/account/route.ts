import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[1]

    const [characters]: any = await db.query(
      `
      SELECT
        char_id,
        char_name,
        char_skin,
        char_level,
        char_game_for_hour,
        char_reg_time,
        char_is_online
      FROM server1.characters
      WHERE char_act_id = ?
      `,
      [380144]
    )

    const charactersWithTime = await Promise.all(
      characters.map(async (char: any) => {

        const [rows]: any = await db.query(
          `
          SELECT seconds_for_day
          FROM server1.game_per_day
          WHERE char_id = ?
          AND date = CURDATE()
          `,
          [char.char_id]
        )

        return {
          ...char,
          seconds_for_day: rows[0]?.seconds_for_day || 0
        }
      })
    )

    return NextResponse.json({
      characters: charactersWithTime
    })

  } catch (err: any) {
    console.error('ACCOUNT API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
