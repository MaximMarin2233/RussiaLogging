import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const server = Number(searchParams.get('server') || 1)

    if (server < 1 || server > 6) {
      return NextResponse.json({ error: 'Invalid server' }, { status: 400 })
    }

    const [moneyRows] = await db.query<any[]>(`
      SELECT cash, bank, business
      FROM log_all_money
      WHERE server = ?
      ORDER BY date DESC
      LIMIT 1
    `, [server])

    const data = {
      server,
      cash: moneyRows[0]?.cash || 0,
      bank: moneyRows[0]?.bank || 0,
      business: moneyRows[0]?.business || 0,
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error('Money overview DB error:', err)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
