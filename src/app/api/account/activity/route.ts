import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'
import { getUser } from '@/lib/getUser'

function replacePlaceholders(text: string, row: any) {
  if (!text) return ''

  return text.replace(/\{(.*?)\}/g, (_, key) => {
    const value = row[key]
    return value !== undefined && value !== null ? String(value) : ''
  })
}

export async function GET() {
  try {
    const user = await getUser()

    const db = dbConnections[user.server]
    const charId = user.char_id

    const [weekRows]: any = await db.query(
      `
        SELECT
            DATE(date) AS date,
            SUM(seconds_for_day) AS total_amount
        FROM
            server1.game_per_day
        WHERE
            date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
        AND
            char_id = ?
        GROUP BY
            DATE(date)
        ORDER BY
            date;
      `,
      [charId]
    )

    const [actionRows]: any = await db.query(
      `
        SELECT
            la.id,
            la.date,
            lac.text AS category_name,
            lar.text AS reason_name,
            c.char_name AS player_name,
            la.char_id,
            tc.char_name AS to_player_name,
            la.to_char_id,
            la.vehicle_id,
            vl.vehicle_name,
            la.house_id,
            la.entrance_id,
            la.flat_id,
            la.business_id,
            b.name AS business_name,
            la.family_id,
            fam.family_name,
            la.fraction_id,
            fra.name AS fraction_name,
            la.item_id,
            inv.text AS inventory_name,
            la.weapon_id,
            w.text AS weapon_name,
            la.extra_type,
            la.extra_id,
            la.extra_count,
            la.cash_value,
            la.cash_after,
            la.bank_value,
            la.bank_after,
            la.donate_value,
            la.donate_after,
            la.int_value,
            la.int_after,
            la.float_value,
            la.float_after,
            la.x,
            la.y,
            la.z,
            la.a,
            la.world,
            la.interior,
            la.text
        FROM
            server1.log_action la
        LEFT JOIN server1.log_action_category lac ON la.category_id = lac.category_id
        LEFT JOIN server1.log_action_reason lar ON la.reason_id = lar.reason_id
        LEFT JOIN server1.characters c ON la.char_id = c.char_id
        LEFT JOIN server1.characters tc ON la.to_char_id = tc.char_id
        LEFT JOIN server1.vehicle_list vl ON la.model_id = vl.id
        LEFT JOIN server1.business b ON la.business_id = b.id
        LEFT JOIN server1.family fam ON la.family_id = fam.id
        LEFT JOIN server1.fraction fra ON la.fraction_id = fra.id
        LEFT JOIN server1.log_inventory_items inv ON la.item_id = inv.id
        LEFT JOIN server1.weapon_name w ON la.weapon_id = w.id
        WHERE
            la.char_id = ?
        ORDER BY
            la.date DESC
        LIMIT 4;
      `,
      [charId]
    )

    const lastActions = actionRows.map((row: any) => ({
      ...row,
      reason_text: replacePlaceholders(row.reason_name, row)
    }))

    return NextResponse.json({
      activityWeek: weekRows || [],
      lastActions: lastActions || []
    })

  } catch (err: any) {
    console.error('ACTIVITY API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}