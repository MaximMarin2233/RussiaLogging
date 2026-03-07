import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'
import { getUser } from '@/lib/getUser'

export async function GET() {
    try {
        const user = await getUser()

        if (!user?.char_id || !user?.user_id) {
            return NextResponse.json({ error: 'Пользователь не авторизован' }, { status: 401 })
        }

        const charId = user.char_id
        const charActId = user.user_id

        const db = dbConnections[user.server]

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
            [charActId]
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
                    seconds_for_day: rows?.[0]?.seconds_for_day || 0
                }
            })
        )

        const [characterRows]: any = await db.query(
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

        const dbCharacter = characterRows?.[0] || {}

        const [familyRows]: any = await db.query(
            `
      SELECT IFNULL
      (
          (
              SELECT f.family_name
              FROM server1.family_member fm
              LEFT JOIN server1.family f ON fm.family_id = f.id
              WHERE fm.char_id = ?
              LIMIT 1
          ),
          'Отсутствует'
      ) AS family_name
      `,
            [charId]
        )

        const [fractionRows]: any = await db.query(
            `
      SELECT IFNULL
      (
          (
              SELECT f.name
              FROM server1.fraction_members fm
              LEFT JOIN server1.fraction f ON fm.fraction_member_fraction_id = f.id
              WHERE fm.fraction_member_char_id = ?
              LIMIT 1
          ),
          'Отсутствует'
      ) AS fraction_name
      `,
            [charId]
        )

        const [phoneRows]: any = await db.query(
            `
      SELECT IFNULL
      (
          (
              SELECT number
              FROM server1.phone_number
              WHERE char_id = ?
              LIMIT 1
          ),
          'Нет активного'
      ) AS phone_number
      `,
            [charId]
        )

        const [businessRows]: any = await db.query(
            `
      SELECT
          CASE
              WHEN count = 0 THEN 'Отсутствует'
              WHEN count = 1 THEN (
                  SELECT name
                  FROM server1.business
                  WHERE owner_char_id = ?
                  LIMIT 1
              )
              ELSE CAST(count AS CHAR)
          END AS business_info
      FROM
      (
          SELECT COUNT(*) AS count
          FROM server1.business
          WHERE owner_char_id = ?
      ) b
      `,
            [charId, charId]
        )

        const character = {
            char_id: charId,
            ...dbCharacter,
            char_family_name: familyRows?.[0]?.family_name || 'Отсутствует',
            char_fraction_name: fractionRows?.[0]?.fraction_name || 'Отсутствует',
            char_phone_number: phoneRows?.[0]?.phone_number || 'Нет активного',
            char_business_info: businessRows?.[0]?.business_info || 'Отсутствует'
        }

        const [nicknameHistory]: any = await db.query(
            `
      SELECT
          cnh.char_id,
          cnh.old_name,
          cnh.new_name,
          cnh.time,
          cnh.type,
          IFNULL(c.char_name, 'Администратор') AS admin_name
      FROM
          server1.character_nickname_history cnh
      LEFT JOIN 
          server1.characters c ON cnh.admin_id = c.char_id
      WHERE
          cnh.char_id = ?
      ORDER BY cnh.time DESC
      `,
            [charId]
        )

        const [ipHistory]: any = await db.query(
            `
      SELECT
          text AS ip,
          COUNT(*) AS count,
          MAX(date) AS last_date
      FROM
          server1.log_action
      WHERE
          char_id = ?
      AND
          reason_id = 1
      GROUP BY
          text
      ORDER BY
          last_date DESC
      `,
            [charId]
        )

        const [ipTwinks]: any = await db.query(
            `
      SELECT DISTINCT
          c.char_name,
          la.text AS ip
      FROM
          server1.log_action la
      LEFT JOIN
          server1.characters c ON la.char_id = c.char_id
      WHERE
          la.reason_id = 1
      AND
          la.text IN
          (
              SELECT DISTINCT
                  text
              FROM
                  server1.log_action
              WHERE
                  char_id = ?
              AND 
                  reason_id = 1
          )
      AND
          la.char_id != ?
      ORDER BY
          c.char_name
      `,
            [charId, charId]
        )

        return NextResponse.json({
            characters: charactersWithTime,
            character,
            nicknameHistory,
            ipHistory,
            ipTwinks
        })

    } catch (err: any) {
        console.error('ACCOUNT API ERROR:', err)
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}