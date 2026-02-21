import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[1]

    const [rows]: any = await db.query(`
      SELECT
          c.char_id,
          c.char_act_id,
          c.char_name,
          c.char_is_online,
          a.admin_ans,
          a.admin_kicks,
          an.name AS admin_level -- актуальное имя колонки
      FROM
          server1.admins a
      LEFT JOIN
          server1.characters c ON a.admin_char_id = c.char_id
      LEFT JOIN
          server1.admin_name an ON a.admin_level = an.level
      ORDER BY
          c.char_name ASC
    `)

    const admins = rows.map((admin: any) => ({
      char_id: admin.char_id,
      char_act_id: admin.char_act_id,
      char_name: admin.char_name,
      is_online: admin.char_is_online,
      admin_level: admin.admin_level,
      admin_ans: admin.admin_ans,
      admin_kicks: admin.admin_kicks
    }))

    return NextResponse.json({
      total: admins.length,
      admins
    })
  } catch (err: any) {
    console.error('ADMINS API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}