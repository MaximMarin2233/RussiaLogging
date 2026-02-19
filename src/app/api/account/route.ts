import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[1]

    // 1️⃣ Все персонажи аккаунта
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

    // 2️⃣ Добавляем seconds_for_day каждому персонажу
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

    const charId = 150644

    // 3️⃣ Информация о выбранном персонаже (временно 150644)
    const [character]: any = await db.query(
      `
      SELECT
        char_name,
        char_sex,
        char_skin,
        char_money,
        char_bank_money,
        char_level,
        char_exp,
        char_last_ip,
        char_reg_time,
        char_is_online
      FROM server1.characters
      WHERE char_id = ?
      `,
      [charId]
    )

    const dbCharacter = character[0] || {}

    const characterInf = {
      char_id: charId, // добавляем вручную
      ...dbCharacter
    }

    return NextResponse.json({
      characters: charactersWithTime,
      character: characterInf
    })

  } catch (err: any) {
    console.error('ACCOUNT API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
