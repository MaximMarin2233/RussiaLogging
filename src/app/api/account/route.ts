import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[1] // db1.russia-game.ru

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

    return NextResponse.json({
      characters
    })

  } catch (err: any) {
    console.error('ACCOUNT API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
