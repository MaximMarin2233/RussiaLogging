import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[1]

    const [rows]: any = await db.query(
      `
      SELECT
        c.char_id,
        c.char_act_id,
        c.char_name,
        c.char_is_online,
        h.helper_level,
        h.helper_all_answer
      FROM
        server1.helper h
      LEFT JOIN
        server1.characters c ON h.helper_char_id = c.char_id
      ORDER BY
        c.char_name ASC
      `
    )

    const helpers = rows.map((helper: any) => ({
      char_id: helper.char_id,
      char_act_id: helper.char_act_id,
      char_name: helper.char_name,
      is_online: helper.char_is_online,
      helper_level: helper.helper_level,
      helper_all_answer: helper.helper_all_answer
    }))

    return NextResponse.json({
      total: helpers.length,
      helpers
    })
  } catch (err: any) {
    console.error('HELPERS API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}