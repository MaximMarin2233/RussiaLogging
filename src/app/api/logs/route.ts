import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const PAGE_SIZE = 20

function replaceTemplate(text: string, row: any) {
  if (!text) return ''

  return text.replace(/\{(.*?)\}/g, (_, key) => row[key] ?? '')
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)

    const server = Number(searchParams.get('server') || 1)
    const charId = Number(searchParams.get('charId'))
    const page = Number(searchParams.get('page') || 1)

    const nickname = searchParams.get('nickname') || ''
    const sumFrom = Number(searchParams.get('sumFrom') || 0)
    const sumTo = Number(searchParams.get('sumTo') || 0)

    if (server < 1 || server > 6) {
      return NextResponse.json({ error: 'Invalid server' }, { status: 400 })
    }

    if (!charId) {
      return NextResponse.json({ error: 'charId required' }, { status: 400 })
    }

    const schema = `server${server}`
    const offset = (page - 1) * PAGE_SIZE

    let where = `WHERE la.char_id = ?`
    const params: any[] = [charId]

    if (nickname) {
      where += ` AND c.char_name LIKE ?`
      params.push(`%${nickname}%`)
    }

    if (sumFrom) {
      where += ` AND la.cash_value >= ?`
      params.push(sumFrom)
    }

    if (sumTo) {
      where += ` AND la.cash_value <= ?`
      params.push(sumTo)
    }

    const [rows] = await db.query<any[]>(`
      SELECT
        la.id,
        la.date,
        lac.text AS category_name,
        lar.text AS reason_name,
        c.char_name AS player_name,
        la.char_id,
        tc.char_name AS to_player_name,
        la.to_char_id,
        la.cash_value,
        la.cash_after
      FROM ${schema}.log_action la
      LEFT JOIN ${schema}.log_action_category lac ON la.category_id = lac.category_id
      LEFT JOIN ${schema}.log_action_reason lar ON la.reason_id = lar.reason_id
      LEFT JOIN ${schema}.characters c ON la.char_id = c.char_id
      LEFT JOIN ${schema}.characters tc ON la.to_char_id = tc.char_id
      ${where}
      ORDER BY la.date DESC
      LIMIT ${PAGE_SIZE} OFFSET ${offset}
    `, params)

    const data = rows.map(row => ({
      id: row.id,
      date: row.date,
      server,
      category: row.category_name,
      player: row.player_name,
      charId: row.char_id,
      action: replaceTemplate(row.reason_name, row),
      amount: row.cash_value || 0,
      balance: row.cash_after || 0
    }))

    return NextResponse.json({
      data,
      page,
      hasMore: rows.length === PAGE_SIZE
    })

  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
